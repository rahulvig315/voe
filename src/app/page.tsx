'use client';
import { LOGO_SOURCES } from '@/utilities/theme';
import Image from 'next/image';
import useTheme from '../hooks/theme/themeHook';



const styles = {
  main: {
    xs: 'xs:flex-col xs:w-screen xs:justify-between',
    sm: 'sm:justify-end sm:flex sm:h-screen items-center'
  },
  header: {
    xs: 'xs:w-screen xs:items-begin',
    sm: 'flex flex-col sm:w-[60vw] text-center justify-center items-center m-auto',
    h1: {
      xs: 'font-serif text-center',
      sm: 'text-4xl sm:text-7xl font-serif font-semibold p-10 text-center sm:mb-5 drop-shadow-lg shadow-white dark:shadow-black',
    },
    img: {
      xs: '',
      sm: 'rounded-full animate-glow ',
      size: 600
    },

  },
  section: {
    xs: 'xs:h-screen xs:w-screen',
    sm: `sm:h-screen sm:justify-center items-center sm:text-center sm:w-[30vw] text-white bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-700 from-gray-100 to-gray-500 animate-gradient-y shadow-2xl p-2 shadow-black dark:shadow-white flex flex-col`,
    content: 'sm:p-5 prose xs:no-prose xs:text-sm xs:p-1 text-black dark:text-white text-center drop-shadow-lg',
    h2: 'drop-shadow-xl shadow-white dark:shadow-black dark:text-white',
    btnDiv: 'flex justify-center gap-5 m-5',
    primaryBtn: 'dark:bg-black bg-zinc-700 px-3 py-2 rounded-lg w-32 font-bold',
    secondaryBtn: 'bg-slate-100 dark:bg-zinc-400 px-3 py-2 rounded-lg w-32 text-black font-sans font-bold',
  },
  shared: {
    italic: 'font-bold italic',
    color: 'text-black dark:text-white'
  }
}

const htmlMeta = {
  img: {
    alt: 'Voices of Earth Official Logo',
  }
}





export default function Home() {
  const { theme } = useTheme();

  return (
    <main className={`${styles.main.sm} ${styles.main.xs}`}>
      <header className={`${styles.header.sm} ${styles.header.xs}`}>
        <h1 className={`${styles.header.h1.sm} ${styles.header.h1.xs}`}>
          Voices of Earth
        </h1>
        <Image
          src={`${LOGO_SOURCES?.[theme]}`}
          className={`${styles.header.img.sm}
          ${styles.header.img.xs}`}
          height={styles.header.img.size}
          width={styles.header.img.size}
          alt={htmlMeta.img.alt}
        />
      </header>


      {/* SECTION */}
      <section className={`${styles.section.sm} ${styles.section.xs}`}>
        <div className={styles.section.content}>
          <h2 className={styles.section.h2}>
            Welcome to VOE.
          </h2>
          <p>
            Experience the power of collective wisdom with Voices of Earth, a revolutionary social media platform designed to collectively use our minds to foster solutions for the world&apos;s most pressing issues.
          </p>
          <p>
            Join <span className={styles.shared.italic}>VOE</span> on a mission to advance humanity, reduce conflicts at all scales, rebuild trust between each other and bring us closer to Utopia.
          </p>
          <h3 className={styles.shared.color}>
            Let us approach the limits of Utopia together.
          </h3>
        </div>
        <div className={styles.section.btnDiv}>
          <button className={styles.section.primaryBtn}>
            Register
          </button>
          <button className={styles.section.secondaryBtn}>
            Login
          </button>
        </div>
      </section>
    </main >
  )
}
