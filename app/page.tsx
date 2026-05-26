"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="bg-black text-white overflow-x-hidden relative">
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/10">

  <h1 className="text-xl md:text-2xl font-black tracking-[0.3em]">
    XSR155
  </h1>

  <div className="flex gap-6 text-sm text-zinc-400 uppercase tracking-[0.2em]">
    <a href="#design" className="hover:text-red-500 transition">
      Design
    </a>

    <a href="#engineering" className="hover:text-red-500 transition">
      Engineering
    </a>

    <a href="#experience" className="hover:text-red-500 transition">
      Experience
    </a>
  </div>

</nav>
      <div className="fixed inset-0 -z-10 overflow-hidden">

  <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full" />

  <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full" />

</div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <motion.div
  style={{
    scale: heroScale,
    opacity: heroOpacity,
    y: useTransform(scrollYProgress, [0, 1], [0, 300]),
  }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.jpeg"
            alt="XSR Hero"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.4em] text-zinc-400 text-sm mb-4">
            Yamaha XSR155
          </p>

          <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="text-6xl md:text-8xl font-black leading-none"
>
  
           <span className="text-white">BORN</span>
<br />
<span className="text-red-500">FROM</span>
<br />
<span className="text-white">SHADOWS</span>
          </motion.h1>

          <p className="mt-8 text-zinc-400 max-w-xl mx-auto">
            A cinematic showcase of neo-retro engineering,
            urban aesthetics, and machine emotion.
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_100%)] pointer-events-none" />

</section>

<div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      {/* TANK SECTION */}
      <section id="design" className="relative min-h-[70vh] flex items-center px-8 py-32">

        <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/tank.jpeg"
              alt="Tank"
              width={700}
              height={900}
              className="rounded-[30px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
              Design Philosophy
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Neo Retro
              <br />
              Reimagined.
            </h2>

            <p className="mt-8 text-zinc-400 leading-relaxed text-lg">
              The XSR155 combines timeless motorcycle silhouette
              with modern urban aggression, creating a machine
              that feels both nostalgic and futuristic.
            </p>
          </motion.div>

        </div>
      </section>

      {/* HEADLIGHT */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        <Image
          src="/images/headlight.jpeg"
          alt="Headlight"
          fill
          className="object-cover brightness-[0.35]"
        />

        <div className="relative z-10 text-center px-8">
          <h2 className="text-6xl md:text-8xl font-black">
            ICONIC
            <br />
            PRESENCE
          </h2>
        </div>
      </section>

     {/* ENGINE SECTION */}
<section id="engineering" className="min-h-[70vh] border-t border-white/10 flex items-center justify-center px-8 py-32">

 <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-6xl mx-auto"
>

    <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
      Raw Mechanics
    </p>

    <h2 className="text-5xl md:text-6xl font-black mb-10">
      Compact.
      <br />
      Aggressive.
    </h2>

    <p className="text-zinc-400 max-w-2xl mb-16 leading-relaxed">
      Engineered for instant response and lightweight agility.
    </p>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/engine.jpeg"
        alt="Engine"
        width={1200}
        height={900}
        className="rounded-[40px] hover:scale-[1.02] transition duration-700"
      />
    </motion.div>

  </motion.div>

</section>

{/* AUDIO EXPERIENCE SECTION */}
<section className="min-h-[50vh] flex items-center justify-center px-8 border-t border-white/10">

  <div className="text-center relative">

    <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
      Hear The Machine
    </p>

    {/* Pulsing Rings */}
    <div className="relative flex items-center justify-center">

      {isPlaying && (
        <>
          <div className="absolute w-40 h-40 rounded-full border border-red-500/30 animate-ping" />
          <div className="absolute w-56 h-56 rounded-full border border-red-500/20 animate-pulse" />
        </>
      )}

      <button
  onClick={() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);

      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  }}
  className="relative z-10 group"
>

  {/* Outer Glow */}
  <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl scale-150 group-hover:scale-[1.8] transition duration-700" />

  {/* Rotating Ring */}
  <div className={`absolute inset-[-20px] rounded-full border border-red-500/30 ${isPlaying ? "animate-spin" : ""}`} />

  {/* Second Ring */}
  <div className={`absolute inset-[-40px] rounded-full border border-white/10 ${isPlaying ? "animate-pulse" : ""}`} />

  {/* Main Core */}
  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-zinc-900 to-black border border-red-500/30 shadow-[0_0_60px_rgba(255,0,0,0.35)] flex items-center justify-center overflow-hidden">

    {/* Animated Glow */}
    {isPlaying && (
      <div className="absolute w-full h-full bg-red-500/10 animate-pulse" />
    )}

    {/* Equalizer */}
    <div className="relative z-10 flex gap-1 items-end h-10">

      <div className={`w-1 rounded-full bg-red-500 ${isPlaying ? "animate-bounce h-8" : "h-3"}`} />

      <div className={`w-1 rounded-full bg-white ${isPlaying ? "animate-bounce delay-100 h-10" : "h-5"}`} />

      <div className={`w-1 rounded-full bg-red-500 ${isPlaying ? "animate-bounce delay-200 h-6" : "h-2"}`} />

      <div className={`w-1 rounded-full bg-white ${isPlaying ? "animate-bounce delay-300 h-9" : "h-4"}`} />

    </div>

  </div>

</button>

    </div>

    <p className="text-zinc-500 mt-8 text-sm tracking-[0.2em] uppercase">
      Tap To Experience
    </p>

  </div>

</section>

      {/* EXHAUST SECTION */}
<section className="min-h-[70vh] border-t border-white/10 flex items-center justify-center px-8 py-32">

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >

    <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
      Sound & Character
    </p>

    <h2 className="text-5xl md:text-6xl font-black mb-10">
      Raw.
      <br />
      Mechanical.
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed">
      Every detail of the XSR155 is crafted to deliver a machine that feels alive.
    </p>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/exhaust.jpeg"
        alt="Exhaust"
        width={1200}
        height={900}
        className="rounded-[40px] hover:scale-[1.02] transition duration-700"
      />
    </motion.div>

  </motion.div>

</section>

      {/* WHEEL SECTION */}
      <section className="min-h-[70vh] border-t border-white/10 flex items-center justify-center px-8 py-32">

        <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="max-w-6xl mx-auto text-center"
        >

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Precision Control
          </p>

          <h2 className="text-6xl md:text-7xl font-black mb-16">
            BUILT
            <br />
            FOR CONTROL
          </h2>

          <Image
            src="/images/wheelbreak.jpeg"
            alt="Wheel"
            width={1200}
            height={900}
            className="rounded-[40px] hover:scale-[1.02] transition duration-700"
          />

        </motion.div>
      </section>

      {/* FINAL SECTION */}
<section id="experience" className="relative min-h-screen flex items-center justify-center px-8">

  <Image
    src="/images/final.jpeg"
    alt="Final"
    fill
    className="object-cover brightness-[0.45]"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 text-center"
  >

    <p className="uppercase tracking-[0.3em] text-zinc-400 text-sm mb-4">
      Built To Be Different
    </p>

    <h2 className="text-6xl md:text-8xl font-black mb-6">
      XSR155
    </h2>

    <p className="text-zinc-300 max-w-xl mx-auto">
      More than a motorcycle. A machine with presence.
    </p>

  </motion.div>

</section>
<audio ref={audioRef} src="/audio/engine.mp3" />
{/* CREATOR FOOTER */}
<footer className="border-t border-white/10 py-10 px-8 text-center">

  <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-6">
    Created By
  </p>

  <h3 className="text-2xl font-black mb-6">
    SHARDUL LAD
  </h3>

  <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.2em]">

    <a
      href="https://www.instagram.com/shardul.5.7.5"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-red-500 transition"
    >
      Instagram
    </a>

    <a
      href="https://www.linkedin.com/in/shardul-lad-7b9068347"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-red-500 transition"
    >
      LinkedIn
    </a>

  </div>

</footer>
    </main>
  );
}