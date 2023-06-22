'use client';
import useTheme from "@/hooks/theme/themeHook";
import { getLogo } from "@/utilities/assets";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ArrowRightOnRectangleIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

export default function DashboardLayout({
    children, // will be a page or nested layout
    params
}: {
    children: React.ReactNode,
    params?: any
}) {

    const {theme} = useTheme();
    const { push } = useRouter();
    const  pathname = usePathname();
    console.log('pathname', pathname)
    const { user } = useUser();


    console.log(user)

    useEffect(() => {
        if (!user) {
            push('/landing');
        } else {
            push(pathname || '/app/dashboard');
        }
    }, [user, push, pathname])



    return (
        <main className="bg-white h-screen dark:bg-zinc-800 ">
            {user && (<>
                <nav className="flex w-screen bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-700 from-neutral-300 to-neutral-100 animate-gradient-y shadow-2xl shadow-black h-fit justify-start p-5 sticky top-0 z-50 align-middle items-center gap-10 rounded-b-x">
                    <Link href="/app" className="flex gap-3 flex-shrink items-center"><i>   {getLogo({width: 50, height: 50, theme, styles: 'rounded-full'})}</i><span className='text-neutral-700 dark:text-neutral-400 font-bold text-xl tracking-tighter drop-shadow-lg shadow-white dark:shadow-black'>VOE</span></Link>
                    <input type="text" className="p-2 mx-3 rounded-lg flex-grow self-center dark:text-black text-white bg-zinc-800 dark:bg-neutral-200" placeholder="Search Voices of Earth"/>
                    <Link href="/api/settings" className="flex-shrink"><i className="">
                    <WrenchScrewdriverIcon className="h-6 w-6 text-black dark:text-white" /> </i> </Link>
                    <Link href="/api/auth/logout" className="flex-shrink"> <ArrowRightOnRectangleIcon className="h-6 w-6 text-black dark:text-white"/> </Link>
                </nav>


                <aside className="h-screen  rounded-tr-xl rounded-br-xl bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-700 from-neutral-300 to-neutral-100 animate-gradient-y shadow-2xl shadow-black dark:shadow-white px-10 mt-3 fixed flex flex-col justify-start pt-10 z-50">

                    <h1 className="text-3xl my-5 font-bold">Explore</h1>
                    <ul className="flex flex-col text-xl font-light gap-3">
                        <li><Link href={"/app/dashboard"}>{user?.name} </Link></li>
                        <li><Link href={"/app/agoras"}>Agoras</Link></li>
                        <li><Link href={"/app/propositions"}>Propositions</Link></li>
                        <li><Link href={"/app/metrics"}>Metrics</Link></li>
                        <li><Link href={"/app/news"}>News</Link></li>
                    </ul>
                </aside>
                <section className="mx-64 my-20 px-32 bg-zinc-70 ">
                <Suspense fallback={<Loading />}>
                    {user && children}
                </Suspense>
                </section>

            </>
            )}
        </main>
    )
}
