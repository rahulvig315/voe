const DARK_MODE_MQUERY_SELECTOR = '(prefers-color-scheme: dark)'
export enum Themes {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}
export const LOGO_SOURCES: Record<Themes, string> = {
    DARK: '/logo_dark.png',
    LIGHT: '/logo_light.png'
}

export const getDarkModeQuery = () => (
    global?.window?.matchMedia(DARK_MODE_MQUERY_SELECTOR)
)