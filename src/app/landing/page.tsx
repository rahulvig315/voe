"use client"
import useTheme from '@/hooks/theme/themeHook';
import { LOGO_SOURCES } from '@/utilities/theme';
import Image from 'next/image';
import Link from 'next/link';

import { htmlAccessibilityMeta, styles, getAppAcronym } from './styles';



// TODO: Extrapolate HTML Content for easier editing of content.
export default function Page() {
    const { theme } = useTheme();
    return (
        <main className={styles.main.classes} >
            {/* TODO: Add Animations to make initial content paint nicer */}
            <header className={styles.header.classes}>
                <h1 className={styles.header.h1.classes}>
                    VOICES OF EARTH
                </h1>
                {LOGO_SOURCES?.[theme] &&
                    <Image src={LOGO_SOURCES?.[theme]}
                        className={styles.header.img.classes}
                        height={styles.header.img.size}
                        width={styles.header.img.size}
                        alt={htmlAccessibilityMeta.img.alt}
                    />}

            </header>

            <br />
            <section className={styles.section.classes}>
                <div className={styles.section.content}>
                    <hr className={styles.shared.hr} />
                    <h1 className={styles.section.h1}>
                        Introducing {getAppAcronym(styles.shared.acronymTitle)}
                    </h1>
                    <hr className={styles.shared.hr} />
                    <div className={styles.section.p}>
                        <p>
                            Experience the power of humanity&apos;s collective wisdom with {getAppAcronym(styles.shared.acronym)}
                        </p>
                        <p>
                            Influenced by the society structure of Ancient Athens,
                            <br />
                            {getAppAcronym(styles.shared.acronym)} is a modern-day Agora.
                        </p>
                        <p>
                            Primarily, {getAppAcronym(styles.shared.acronym)} is a societal and self improvement platform that delves deeply into the entire realm of conflicts plaguing our existence. It&apos;s not just an app, but a movement aiming to transform society by promoting introspection and encouraging active participation in collective problem-solving.
                        </p>
                        <p>
                        {getAppAcronym(styles.shared.acronym)} has a mission to advance humanity, reduce conflicts across all scopes of reality, improve the quality of our personal lives and ultimately be a harbinger of peace on Earth.
                        </p>
                    </div>
                    <hr className={styles.shared.hr} />
                    <h4 className={styles.section.h3}>
                        Get started by logging in or registering below.
                    </h4>
                </div>
                <div className={styles.section.btnDiv}>
                    <Link
                        className={styles.section.primaryBtn}
                        href="/api/auth/login"
                    >
                        Register or Login
                    </Link>
                </div>

            </section>
        </main >
    )
}