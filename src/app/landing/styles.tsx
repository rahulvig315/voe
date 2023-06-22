export const styles = {
    main: {
        classes: 'xs:flex-col xs:justify-between sm:justify-end sm:flex sm:h-screen items-center shadow-2xl shadow-black p-5'
    },
    header: {
        classes: 'xs:w-screen xs:items-begin flex flex-col sm:w-full text-center justify-start items-center gap-28 flex-2 tracking-tighter',
        h1: {
            classes: 'text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold text-center sm:mb-5 drop-shadow-lg shadow-black dark:shadow-white',
        },
        img: {
            classes: 'rounded-full animate-glow',
            size: 600
        },

    },
    section: {
        classes: `bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-700 from-neutral-300 to-neutral-100 animate-gradient-y shadow-2xl shadow-black dark:shadow-white rounded-xl text-xl dark:text-white text-black text-center h-fit min-h-screen py-5 px-1 flex-col justify-center items-center`,
        content: 'prose xs:text-sm text-black dark:text-white p-4 w-fit h-fill',
        h1: 'text-2xl dark:text-white text-neutral-800 xs:text-lg sm:text-xl',
        h3: 'drop-shadow-xl shadow-white dark:shadow-black dark:text-white text-xl font-sans',
        p: 'dark:text-white text-black font-thin text-xl',
        btnDiv: 'flex justify-center rounded rounded-xl gap-3 p-2',
        primaryBtn: 'dark:bg-neutral-100 bg-zinc-900 px-4 py-2 w-40 dark:text-black font-semibold border border-black  rounded-lg dark:hover:bg-neutral-300 hover:bg-zinc-800 shadow-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 w-full text-white',
        secondaryBtn: 'dark:bg-neutral-900 bg-zinc-100  px-4 py-2 w-40 dark:text-white font-semibold border dark:border-black rounded-lg border-grey dark:hover:bg-neutral-800 hover:bg-zinc-300 text-black shadow-black dark:shadow-white shadow-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-110',
    },
    shared: {
        italic: 'font-bold italic',
        color: 'text-black dark:text-white font-serif drop-shadow-xl shadow-black dark:shadow-white',
        acronymTitle: 'text-neutral-700 dark:text-neutral-400 font-bold text-4xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black',
        acronym: 'text-neutral-700 dark:text-neutral-400 font-bold text-xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black ',
        hr: 'border-black dark:border-white'
    }
}
