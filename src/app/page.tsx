"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


const LOGOS = {
  DARK: '/logo_dark.png',
  LIGHT: '/logo_light.png'
}

const getCurrentWindow = () => global?.window?.matchMedia('(prefers-color-scheme: dark)')



export default function Home() {
  const isDarkMode = () => getCurrentWindow().matches && LOGOS.DARK || LOGOS.LIGHT;
  const [logo, setLogo] = useState<string>(() => isDarkMode());
  useEffect(() => {
    let darkModeMediaQuery = getCurrentWindow();
    darkModeMediaQuery.addEventListener('change', (e) => {
      setLogo((e.matches) ? LOGOS.DARK : LOGOS.LIGHT);
    });

    return () => darkModeMediaQuery.removeEventListener('change', (e) => { });
  }, [])


  return (
    <main className="xs:flex-col sm:flex sm:h-screen xs:w-screen items-center sm:justify-end xs:justify-center light:invert">

      {/* HEADER */}
      <header className='flex flex-col sm:w-[60vw] xs:w-screen text-center justify-center items-center p-5 sm:z-0,'>
        <h1 className="text-7xl text-center mb-20 font-semibold font-serif drop-shadow-2xl light:invert"> Voices of Earth </h1>
        <Image src={`${logo}`} className="rounded-full animate-glow" width={600} height={600} alt="VOE Logo" />
      </header>

      {/* SECTION */}
      <section className="flex flex-col xs:[h-100vh] sm:h-screen sm:justify-center items-center sm:text-center sm:w-[40vw] xs:w-screen text-white bg-gradient-to-b from-zinc-950 to-zinc-700 animate-gradient-y shadow-2xl xs:z-10 p-2 shadow-white">
        <div className="sm:p-5 prose xs:no-prose xs:text-sm xs:p-1 text-white text-center">
          <h2 className="text-white">Welcome to VOE.</h2>
          <p>Experience the power of collective wisdom with Voices of Earth, a revolutionary social media platform designed to collectively use our minds to foster solutions for the world&apos;s most pressing issues.</p>
          <p> Join <span className="font-bold italic">VOE</span> on a mission to advance humanity, reduce conflicts at all scales, rebuild trust between each other and bring us closer to Utopia. </p>
          <h3 className="text-white">Let us approach the limits of Utopia together.</h3>
        </div>
        <div className="flex justify-center gap-5 m-5">
          <button className="bg-black px-3 py-2 rounded-lg w-28  font-sans border border-white font-bold">
            Register
          </button>
          <button className="bg-slate-100 px-3 py-2 rounded-lg w-28 text-black font-sans font-bold border border-black">
            Login
          </button>
        </div>
      </section>
    </main>
  )
}
