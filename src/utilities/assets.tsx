import Image from "next/image";
import { LOGO_SOURCES, Themes } from "./theme";

export const htmlAccessibilityMeta = {
    img: {
        alt: 'Voices of Earth Official Logo',
    }
}

export const getAppAcronym = (style: string) => (
    <span className={style}>
        &nbsp;VOE&nbsp;
    </span>
);


export function getLogo({ styles, theme, width, height }:
    { styles: any, theme: Themes, width: number, height: number }) {
    return (
        <>
            {
                LOGO_SOURCES?.[theme] &&
                (<Image src={LOGO_SOURCES?.[theme]}
                    className={styles}
                    height={height}
                    width={width}
                    alt="Voices of Earth Official Logo"
                />)
            }
        </>
    )
}
