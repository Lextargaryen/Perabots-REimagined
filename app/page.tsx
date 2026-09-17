"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, CalendarDays, MapPin, Trophy, Cpu, Users, Zap } from "lucide-react";

const challenges = [
  { code: "01", title: "Robo Wars", text: "Design, build, and battle an autonomous machine in a high-pressure arena." },
  { code: "02", title: "Line Follower", text: "Engineer precision into every turn and beat the clock on a technical track." },
  { code: "03", title: "Mission Impossible", text: "Solve a surprise field challenge with strategy, sensors, and teamwork." },
];

const schedule = [
  ["01", "Registration opens", "15 JAN 2026"],
  ["02", "Technical briefing", "20 FEB 2026"],
  ["03", "Qualification rounds", "14 MAR 2026"],
  ["04", "Grand finale", "15 MAR 2026"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["About", "Challenges", "Schedule", "Prizes"];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3 font-mono text-sm font-bold tracking-[0.2em]">
            <span className="grid size-8 place-items-center border border-primary text-primary">PB</span>
            PERABOTS <span className="text-primary">/26</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary">{item}</a>)}
          </nav>
          <a href="#register" className="hidden border border-primary bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 md:block">Register team <ArrowUpRight className="ml-2 inline size-4" /></a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-border bg-background px-6 py-6 md:hidden">{nav.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-border py-4 font-mono text-sm uppercase tracking-widest">{item}</a>)}<a href="#register" className="mt-5 block bg-primary px-5 py-4 text-center font-mono text-xs font-bold uppercase text-primary-foreground">Register team</a></div>}
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end border-b border-border pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="animate-orbit absolute right-[-28%] top-36 h-[420px] w-[420px] rounded-full border border-primary/30 [box-shadow:0_0_100px_rgba(0,217,255,.12),inset_0_0_90px_rgba(0,217,255,.07)] sm:right-[-10%] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute right-[12%] top-52 hidden h-72 w-72 rounded-full border border-dashed border-accent/60 lg:block" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="animate-slide-in mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary"><span className="h-px w-12 bg-primary" /> Department of Electrical & Electronic Engineering</div>
          <h1 className="max-w-5xl text-[clamp(3.25rem,17vw,10.5rem)] font-black uppercase leading-[.82] tracking-[-.08em]">Build.<br /><span className="text-primary">Battle.</span><br />Become.</h1>
          <div className="animate-slide-in-delayed mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">PERABOTS 2026 is Sri Lanka&apos;s national robotics competition for school and university innovators ready to put their machines to the ultimate test.</p>
            <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4"><Stat value="2026" label="Edition" /><Stat value="02" label="Days" /><Stat value="03" label="Challenges" /><Stat value="01" label="Champion" /></div>
          </div>
        </div>
        <div className="absolute bottom-7 right-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:right-10">Scroll to enter arena ↓</div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4"><Eyebrow>01 / The brief</Eyebrow><h2 className="mt-6 text-5xl font-black uppercase leading-[.9] tracking-tight lg:text-7xl">More than<br /><span className="text-primary">a contest.</span></h2></div>
        <div className="lg:col-span-7 lg:col-start-6"><p className="text-2xl leading-relaxed">PERABOTS is a platform for innovation, collaboration, and engineering excellence—created by the Department of Electrical and Electronic Engineering, University of Peradeniya.</p><p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">Bring your ideas to life, sharpen your problem-solving skills, and build technologies that create a positive impact on society. Whether you are in school or university, the arena is yours.</p><div className="mt-12 grid gap-4 sm:grid-cols-3"><Info icon={<Cpu />} title="Engineer" text="Turn concepts into machines." /><Info icon={<Users />} title="Collaborate" text="Build with your crew." /><Info icon={<Zap />} title="Compete" text="Perform under pressure." /></div></div>
      </section>

      <section id="challenges" className="border-y border-border bg-surface px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><Eyebrow>02 / Choose your arena</Eyebrow><div className="mt-12 grid gap-4 lg:grid-cols-3">{challenges.map((item) => <article key={item.code} className="animate-rise group min-h-80 border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_18px_50px_rgba(0,217,255,.08)]"><div className="flex items-start justify-between font-mono text-xs text-primary"><span>{item.code}</span><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><h3 className="mt-24 text-4xl font-black uppercase tracking-tight">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div></div></section>

      <section id="schedule" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10"><div className="lg:col-span-4"><Eyebrow>03 / Lock it in</Eyebrow><h2 className="mt-6 text-5xl font-black uppercase leading-[.9] lg:text-7xl">The<br /><span className="text-accent">run-up.</span></h2><p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">Mark the dates. Prepare your bot. The countdown to the national arena starts now.</p></div><div className="lg:col-span-7 lg:col-start-6">{schedule.map(([num, title, date]) => <div key={num} className="grid grid-cols-[48px_1fr_auto] items-center gap-4 border-t border-border py-6 font-mono"><span className="text-xs text-primary">{num}</span><span className="text-sm uppercase tracking-wider">{title}</span><span className="text-xs text-muted-foreground">{date}</span></div>)}<div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="border border-border p-5"><CalendarDays className="mb-5 size-5 text-primary" /><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Event dates</p><p className="mt-2 text-xl font-bold">14—15 March 2026</p></div><div className="border border-border p-5"><MapPin className="mb-5 size-5 text-primary" /><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Venue</p><p className="mt-2 text-xl font-bold">University of Peradeniya</p></div></div></div></section>

      <section id="prizes" className="bg-primary px-6 py-24 text-primary-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><div><Eyebrow dark>04 / What&apos;s at stake</Eyebrow><h2 className="mt-6 max-w-3xl text-6xl font-black uppercase leading-[.85] tracking-[-.06em] lg:text-9xl">Win the<br />future.</h2></div><div className="border-l border-primary-foreground/30 pl-6 lg:max-w-sm"><Trophy className="mb-5 size-8" /><p className="text-lg font-bold">National recognition, serious bragging rights, and a launchpad for your next impossible idea.</p></div></div></section>

      <section id="register" className="mx-auto max-w-7xl px-6 py-28 lg:px-10"><div className="border border-primary bg-surface p-8 lg:p-16"><div className="grid gap-12 lg:grid-cols-2 lg:items-end"><div><Eyebrow>05 / Your move</Eyebrow><h2 className="mt-6 text-6xl font-black uppercase leading-[.85] tracking-tight lg:text-8xl">Ready to<br /><span className="text-primary">deploy?</span></h2></div><div><p className="mb-8 text-lg leading-relaxed text-muted-foreground">Get your team on the grid. Registration details, rulebooks, and technical briefs are coming soon.</p><a href="mailto:perabots@eees-uop.edu.lk" className="inline-flex items-center bg-primary px-7 py-4 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground">Register interest <ArrowUpRight className="ml-3 size-4" /></a></div></div></div></section>

      <footer className="border-t border-border px-6 py-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>PERABOTS / 2026</span><span>Organized by EEES · University of Peradeniya</span><span>© All systems operational</span></div></footer>
    </main>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) { return <div className={`font-mono text-xs uppercase tracking-[0.25em] ${dark ? "text-primary-foreground/70" : "text-primary"}`}>{children}</div>; }
function Stat({ value, label }: { value: string; label: string }) { return <div className="bg-background px-5 py-4"><div className="text-2xl font-black text-primary">{value}</div><div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div></div>; }
function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="border-t border-border pt-4"><div className="mb-4 text-primary">{icon}</div><div className="font-bold uppercase">{title}</div><div className="mt-1 text-sm text-muted-foreground">{text}</div></div>; }
