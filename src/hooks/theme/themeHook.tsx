"use client";
import { Themes, getDarkModeQuery } from "@/utilities/theme";
import { useEffect, useState } from "react";

const useTheme = (): { theme: Themes } => {
    const [theme, setTheme] = useState<Themes | null>(null);
    useEffect(() => {
        if (global.window && !theme) {
            setTheme((() => !!getDarkModeQuery()?.matches ? Themes.DARK : Themes.LIGHT))
        }
        let darkModeMediaQuery = getDarkModeQuery();
        darkModeMediaQuery.addEventListener('change', (e) => setTheme(e.matches ? Themes.DARK : Themes.LIGHT));
        return () => (darkModeMediaQuery.removeEventListener('change', (e) => { }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        theme: (theme as Themes)
    }
}

export default useTheme;