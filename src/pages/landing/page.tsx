"use client"
import useTheme from '@/hooks/theme/themeHook';
import { LOGO_SOURCES } from '@/utilities/theme';
import Image from 'next/image';
import { htmlAccessibilityMeta, styles } from './styles';



// TODO: Extrapolate HTML Content for easier editing of content. 
export default function Landing() {
    const { theme } = useTheme();
    return (
        <main className={styles.main.classes} >
            <header className={styles.header.classes}>
                <h1 className={styles.header.h1.classes}>
                    VOICES OF EARTH
                </h1>
                <Image
                    src={LOGO_SOURCES?.[theme]}
                    className={styles.header.img.classes}
                    height={styles.header.img.size}
                    width={styles.header.img.size}
                    placeholder='empty'
                    alt={htmlAccessibilityMeta.img.alt}
                />
            </header>

            <br />
            <section className={styles.section.classes}>
                <div className={styles.section.content}>
                    <hr className={styles.shared.hr} />
                    <h1 className={styles.section.h1}>
                        Introducing
                        <span className={`${styles.shared.shortNameTitle}`}>
                            &nbsp;VOE&nbsp;
                        </span>
                    </h1>
                    <hr className={styles.shared.hr} />
                    <div className={styles.section.h4}>
                        <p>
                            Experience the power of humanity&apos;s collective wisdom with <span className={styles.shared.shortName}>
                                VOE
                            </span>
                        </p>
                        <p>
                            Influenced by the society structure of Ancient Athens,
                            <br />
                            <span className={styles.shared.shortName}>
                                VOE&nbsp;
                            </span> is a modern-day Agora.
                        </p>
                        <p>
                            Primarily,
                            <span className={styles.shared.shortName}>
                                &nbsp;VOE&nbsp;
                            </span> is a societal and self improvement platform that delves deeply into the entire realm of conflicts plaguing our existence. It&apos;s not just an app, but a movement aiming to transform society by promoting introspection and encouraging active participation in collective problem-solving.
                        </p>
                        <p>
                            <span className={styles.shared.shortName}>
                                &nbsp;&nbsp;VOE&nbsp;&nbsp;
                            </span>has a mission to advance humanity, reduce conflicts across all scopes of reality, improve the quality of our personal lives and ultimately be a harbinger of peace on Earth.
                        </p>

                    </div>

                    <hr className={styles.shared.hr} />
                    <h4 className={styles.section.h3}>
                        Get started by logging in or registering below.
                    </h4>
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