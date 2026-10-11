"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * MetallicButton — recriação local com a mesma API do componente
 * `hyperiux/metallic-button` (21st.dev): aro metálico em shader WebGL,
 * aceleração no hover/clique e ripple. (O código original ficou bloqueado pelo
 * limite diário gratuito do 21st.dev; troque por ele quando quiser.)
 */
export interface MetallicButtonProps {
  label?: string;
  children?: ReactNode;
  viewMode?: "text" | "icon";
  baseColor?: string;
  sheenColor?: string;
  bandCount?: number;
  edgeBlur?: number;
  flowAngle?: number;
  zoom?: number;
  warp?: number;
  redFringe?: number;
  blueFringe?: number;
  idleSpeed?: number;
  hoverSpeed?: number;
  clickSpeed?: number;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;

const FRAG = `precision highp float;
uniform vec2 u_res; uniform float u_time; uniform float u_press;
uniform vec3 u_base; uniform vec3 u_sheen;
uniform float u_bands, u_blur, u_angle, u_zoom, u_warp, u_red, u_blue;

float sdRoundBox(vec2 p, vec2 b, float r){
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r;
}
float field(vec2 uv, float t){
  float a = radians(u_angle);
  vec2 d = vec2(cos(a), sin(a));
  float x = dot(uv, d) * u_zoom * 0.25;
  x += u_warp * sin(uv.y * 3.0 + t) * 0.5;
  float w = sin(x * 6.2831 * u_bands * 0.25 - t) * 0.5 + 0.5;
  return pow(w, 2.2);
}
void main(){
  vec2 px = gl_FragCoord.xy;
  vec2 c = px - 0.5 * u_res;
  float r = 0.5 * u_res.y;
  float d = sdRoundBox(c, 0.5 * u_res, r);
  float rim = 4.0;
  float edge = max(u_blur * 2.0, 0.8);
  float inside = 1.0 - smoothstep(-edge, edge * 0.5, d);
  float ring = inside * smoothstep(-rim - edge, -rim + edge, d);
  vec2 uv = px / u_res.y;
  float t = u_time;
  float R = field(uv + vec2(0.02 * u_red * 10.0, 0.), t);
  float G = field(uv, t);
  float B = field(uv - vec2(0.02 * u_blue * 10.0, 0.), t);
  vec3 sh = vec3(mix(u_base.r, u_sheen.r, R), mix(u_base.g, u_sheen.g, G), mix(u_base.b, u_sheen.b, B));
  vec3 col = mix(u_base * 0.9, vec3(0.), 0.0);
  float fill = inside * (1.0 - ring);
  vec3 body = u_base + (sh - u_base) * 0.06;
  vec3 outc = body * fill + sh * ring;
  outc += u_press * 0.15 * ring;
  float a = inside;
  gl_FragColor = vec4(outc * a, a);
}`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(v, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export default function MetallicButton({
  label,
  children,
  viewMode = "text",
  baseColor = "#000000",
  sheenColor = "#ffffff",
  bandCount = 4,
  edgeBlur = 0.5,
  flowAngle = 45,
  zoom = 8,
  warp = 0,
  redFringe = 0.3,
  blueFringe = 0.3,
  idleSpeed = 0.6,
  hoverSpeed = 1,
  clickSpeed = 2.4,
  onClick,
  href,
  type = "button",
  disabled,
  className = "",
  ariaLabel,
}: MetallicButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({ hover: false, down: false });
  const cfg = useRef({ idleSpeed, hoverSpeed, clickSpeed });
  cfg.current = { idleSpeed, hoverSpeed, clickSpeed };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true });
    if (!gl) return;

    const sh = (t: number, s: string) => {
      const o = gl.createShader(t)!;
      gl.shaderSource(o, s);
      gl.compileShader(o);
      return o;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = (n: string) => gl.getUniformLocation(prog, n);
    gl.uniform3fv(U("u_base"), hexToRgb(baseColor));
    gl.uniform3fv(U("u_sheen"), hexToRgb(sheenColor));
    gl.uniform1f(U("u_bands"), bandCount);
    gl.uniform1f(U("u_blur"), edgeBlur);
    gl.uniform1f(U("u_angle"), flowAngle);
    gl.uniform1f(U("u_zoom"), zoom);
    gl.uniform1f(U("u_warp"), warp);
    gl.uniform1f(U("u_red"), redFringe);
    gl.uniform1f(U("u_blue"), blueFringe);

    let raf = 0;
    let time = 0;
    let speed = cfg.current.idleSpeed;
    let press = 0;
    let last = performance.now();
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const c = cfg.current;
      const target = state.current.down ? c.clickSpeed : state.current.hover ? c.hoverSpeed : c.idleSpeed;
      speed += (target - speed) * (1 - Math.exp(-6 * dt));
      press += ((state.current.down ? 1 : 0) - press) * (1 - Math.exp(-10 * dt));
      time += dt * speed;
      resize();
      gl.uniform2f(U("u_res"), canvas.width, canvas.height);
      gl.uniform1f(U("u_time"), time);
      gl.uniform1f(U("u_press"), press);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    raf = requestAnimationFrame(frame);

    const io = new IntersectionObserver(([e]) => (visible = e?.isIntersecting ?? true));
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, [baseColor, sheenColor, bandCount, edgeBlur, flowAngle, zoom, warp, redFringe, blueFringe]);

  const handlers = {
    onPointerEnter: () => (state.current.hover = true),
    onPointerLeave: () => {
      state.current.hover = false;
      state.current.down = false;
    },
    onPointerDown: () => (state.current.down = true),
    onPointerUp: () => (state.current.down = false),
  };

  const cls = `relative inline-flex items-center justify-center overflow-hidden rounded-full text-sm font-medium tracking-wide text-white select-none transition-transform duration-150 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${
    viewMode === "icon" ? "h-12 w-12" : "h-12 px-8"
  } ${className}`;

  const inner = (
    <>
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
      <span className="relative z-10 flex items-center gap-2">{children ?? label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={ariaLabel}
        className={cls}
        {...handlers}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} aria-label={ariaLabel} className={cls} {...handlers}>
      {inner}
    </button>
  );
}

