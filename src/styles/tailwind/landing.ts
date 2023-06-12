export const styles = {
    main: {
        classes: 'xs:flex-col xs:w-screen xs:justify-between sm:justify-end sm:flex sm:h-screen items-center'
    },
    header: {
        classes: 'xs:w-screen xs:items-begin flex flex-col sm:w-full text-center justify-center items-center m-5 p-5 flex-2',
        h1: {
            classes: 'text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold pb-10 text-center sm:mb-5 drop-shadow-lg shadow-black dark:shadow-white',
        },
        img: {
            classes: 'rounded-full animate-glow ',
            size: 700
        },

    },
    section: {
        classes: `sm:h-screen sm:justify-center items-center sm:text-center text-white sm:text-xl bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-700 from-neutral-500 to-neutral-900 animate-gradient-y shadow-2xl shadow-black dark:shadow-white flex flex-col xs:w-screen rounded-xl text-xl dark:text-white text-black flex-2 p-5`,
        content: 'prose xs:text-sm text-black dark:text-white text-center drop-shadow-lg',
        p: 'text-black dark:text-white font-light text-md',
        h1: 'text-2xl dark:text-white text-neutral-800',
        h3: 'drop-shadow-xl shadow-white dark:shadow-black dark:text-white text-xl',
        h4: 'dark:text-white text-black font-light text-lg',
        btnDiv: 'flex justify-center rounded rounded-xl gap-3 p-5',
        primaryBtn: 'dark:bg-neutral-100 bg-zinc-900 px-4 py-2 w-40 dark:text-black font-semibold border border-black  rounded-lg dark:hover:bg-neutral-300 hover:bg-zinc-800 shadow-2xl',
        secondaryBtn: 'dark:bg-neutral-900 bg-zinc-100  px-4 py-2 w-40 dark:text-white font-semibold border rounded-lg border-grey dark:hover:bg-neutral-800 hover:bg-zinc-300 text-black shadow-2xl',
    },
    shared: {
        italic: 'font-bold italic',
        color: 'text-black dark:text-white font-serif drop-shadow-xl shadow-black dark:shadow-white',
        shortNameTitle: 'text-neutral-800 dark:text-neutral-400 font-bold text-4xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black',
        shortName: 'text-neutral-800 dark:text-neutral-400 font-bold text-xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black ',
        hr: 'border-black dark:border-white'

    }
}

export const htmlAccessibilityMeta = {
    img: {
        alt: 'Voices of Earth Official Logo',
    }
}