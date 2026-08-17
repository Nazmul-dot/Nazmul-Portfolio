import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { focusAreas, highlights, profile } from "@/data/resume";

/* ── Particle Canvas ── */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
    const count = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.o})`;
        ctx.fill();
      });

      // draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

/* ── Typing Animation ── */
const roles = ["Full Stack Engineer", "Backend Developer", "Problem Solver"];

const TypingText: React.FC = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIdx));
          if (charIdx === 0) {
            setIsDeleting(false);
            setRoleIdx((r) => (r + 1) % roles.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx]);

  return (
    <span>
      {text}
      <span className="typing-cursor" />
    </span>
  );
};

/* ── Counter Animation ── */
const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const num = parseFloat(value);
  const isNumeric = !isNaN(num);
  const hasDecimal = value.includes(".");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(hasDecimal ? Number((eased * num).toFixed(1)) : Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasDecimal, isNumeric, num]);

  if (!isNumeric) return <span>{value}</span>;

  const suffix = value.replace(/[0-9.]/g, "");
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ── Hero Section ── */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(6,182,212,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />

      <div className="container mx-auto flex-1 grid items-center gap-10 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20 relative z-10">
        <div className="animate-fade-in">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground"
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(16,185,129,0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </div>

          {/* Name kicker */}
          <p className="section-kicker mb-4">{profile.name}</p>

          {/* Title with typing */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            <TypingText />
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-medium mt-2 block">
              building reliable product systems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {profile.summary}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gradient inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a href="#projects" className="btn-outline-glow inline-flex items-center gap-2">
              View Work
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-400">
              <Github className="h-4 w-4" />
              {profile.githubLabel}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-cyan-400">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-cyan-400">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-cyan-400">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Right: Stats Grid */}
        <div className="relative">
          {/* Terminal Mockup */}
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">nazmul@dev ~ portfolio</span>
            </div>
            <div className="p-5 font-mono text-sm leading-7 text-muted-foreground">
              <p><span className="text-cyan-400">const</span> <span className="text-purple-400">developer</span> = {'{'}</p>
              <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-400">"Nazmul Haque Shakil"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-emerald-400">"Full Stack Engineer"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">stack</span>: [<span className="text-amber-400">"Spring Boot"</span>, <span className="text-amber-400">"React"</span>, <span className="text-amber-400">"PostgreSQL"</span>],</p>
              <p className="pl-4"><span className="text-cyan-300">passion</span>: <span className="text-emerald-400">"Building scalable systems"</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">problemsSolved</span>: <span className="text-orange-400">1100</span>+,</p>
              <p>{'}'}</p>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="glass-card p-3 text-center group hover:border-cyan-500/20 transition-all duration-500">
                <p className="whitespace-nowrap text-xl font-bold gradient-text">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Areas Band */}
      <div id="about" className="gradient-divider" />
      <div className="relative z-10" style={{ background: 'rgba(10,15,26,0.6)', backdropFilter: 'blur(12px)' }}>
        <div className="container mx-auto grid gap-6 px-4 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Engineering Focus</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">Backend depth with practical full-stack delivery.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area} className="glass-card px-4 py-3 text-sm font-medium text-foreground hover:border-cyan-500/20 transition-all duration-300">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
