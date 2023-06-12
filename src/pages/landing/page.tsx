"use client"
import useTheme from '@/hooks/theme/themeHook';
import { htmlAccessibilityMeta, styles } from '@/styles/tailwind/landing';
import { LOGO_SOURCES } from '@/utilities/theme';
import Image from 'next/image';

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
                    alt={htmlAccessibilityMeta.img.alt}
                />
            </header>

            <br />
            <section className={styles.section.classes}>
                <div className={styles.section.content}>
                    <h3 className={styles.section.h1}>
                        INTRODUCING
                        <span className={`${styles.shared.shortNameTitle}`}>
                            &nbsp;VOE
                        </span>
                    </h3>
                    <hr className={styles.shared.hr} />
                    <div className={styles.section.p}>
                        <p>
                            Experience the power of humanity&apos;s collective wisdom with <span className={styles.shared.shortName}>
                                VOE
                            </span>
                        </p>
                        <p>
                            Built on the principles of ancient Athenian democracy,
                            <br />
                            <span className={styles.shared.shortName}>
                                VOE&nbsp;
                            </span> is a modern-day Agora －
                            <br />
                            A virtual gathering place for discussing and resolving the vast array of issues related to the human experience. It&apos;s not just an app, but a movement aiming to transform society by promoting introspection and encouraging active participation in collective problem-solving.
                        </p>

                        <p>
                            <span className={styles.shared.shortName}>
                                &nbsp;&nbsp;VOE&nbsp;&nbsp;
                            </span>is on a mission to advance humanity, reduce conflicts across all scopes of reality, improve the quality of our personal lives and ultimately be a harbinger of peace on Earth.
                        </p>

                    </div>

                    <hr className={styles.shared.hr} />
                    <h4 className={styles.section.h4}>
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