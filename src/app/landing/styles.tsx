export const styles = {
    main: {
        classes: 'xs:flex-col xs:justify-between sm:justify-end sm:flex sm:h-screen items-center shadow-2xl shadow-black overflow-auto'
    },
    header: {
        classes: 'xs:w-screen xs:items-begin flex flex-col sm:w-full text-center justify-start items-center gap-10 p-5 flex-1 tracking-tighter',
        h1: {
            classes: 'text-3xl sm:text-5xl font-serif font-extrabold text-center sm:mb-3 drop-shadow-lg shadow-black dark:shadow-white',
        },
        img: {
            classes: 'rounded-full animate-glow',
            size: 600
        },

    },
    section: {
        classes: `bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-700 from-neutral-300 to-neutral-100 animate-gradient-y shadow-2xl shadow-black dark:shadow-white rounded-xl text-xl dark:text-white text-black text-center p-5 flex-1 h-full flex flex-col justify-center items-center xs:max-w-[90vw] sm:max-w-[40vw]`,
        content: 'xs:text-sm text-black dark:text-white h-fit',
        h1: 'text-xl dark:text-white text-neutral-800 xs:text-lg sm:text-3xl mb-16 font-semibold',
        h3: 'drop-shadow-xl shadow-white dark:shadow-black dark:text-white text-2xl font-sans font-bold mt-16',
        p: 'dark:text-white text-black font-thin text-2xl p-5 space-y-10 sm:px-20',
        btnDiv: 'flex justify-center rounded rounded-xl mt-10',
        primaryBtn: 'dark:bg-neutral-100 bg-zinc-900 px-4 py-2 w-40 dark:text-black font-semibold border border-black  rounded-lg dark:hover:bg-neutral-300 hover:bg-zinc-800 shadow-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 w-fit text-white text-2xl',
        secondaryBtn: 'dark:bg-neutral-900 bg-zinc-100  px-4 py-2 w-fit dark:text-white font-semibold border dark:border-black rounded-lg border-grey dark:hover:bg-neutral-800 hover:bg-zinc-300 text-black shadow-black dark:shadow-white shadow-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-110',
    },
    shared: {
        italic: 'font-bold italic',
        color: 'text-black dark:text-white font-serif drop-shadow-xl shadow-black dark:shadow-white',
        acronymTitle: 'text-neutral-700 dark:text-neutral-400 font-bold text-4xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black',
        acronym: 'text-neutral-700 dark:text-neutral-400 font-bold text-3xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black italic',
        hr: 'border-black dark:border-white m-5'
    }
}
