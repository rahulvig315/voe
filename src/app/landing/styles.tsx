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
        classes: ``,
        content: '',
        h1: '',
        p: '',
        btnDiv: '',
        primaryBtn: '',
        secondaryBtn: '',
    },
    shared: {
        italic: 'font-bold italic',
        color: 'text-black dark:text-white font-serif drop-shadow-xl shadow-black dark:shadow-white',
        acronymTitle: 'text-neutral-700 dark:text-neutral-400 font-bold text-4xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black',
        acronym: 'text-neutral-700 dark:text-neutral-400 font-bold text-xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black ',
        hr: 'border-black dark:border-white'
    }
}
