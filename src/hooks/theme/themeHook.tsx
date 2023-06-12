"use client";
import { Themes, getDarkModeQuery } from "@/utilities/theme";
import { useEffect, useState } from "react";

type Props = {}

const useTheme = (): { theme: Themes } => {
    const [theme, setTheme] = useState(() => getDarkModeQuery()?.matches ? Themes.DARK : Themes.LIGHT);

    useEffect(() => {
        let darkModeMediaQuery = getDarkModeQuery();
        darkModeMediaQuery.addEventListener('change', (e) => setTheme(e.matches ? Themes.DARK : Themes.LIGHT));
        return () => (darkModeMediaQuery.removeEventListener('change', (e) => { }));
    }, [])

    return {
        theme
    }

}

export default useTheme;