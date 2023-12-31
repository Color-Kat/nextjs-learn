import React, {memo, useCallback, useEffect, useState} from 'react';
import {twJoin} from "tailwind-merge";
import {HeaderNavItem, MobileHeaderLink} from "./HeaderLinks.tsx";
import {useRouter} from "next/router";

export const Header = memo(() => {
    const {pathname} = useRouter();

    const navigation = [
        {title: "Тест", link: "/test"},
        {title: "Главная", link: "/"},
        {title: "Snap-scroll", link: "/snap-scroll"},
    ];

    useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="inset-x-0 flex shrink-0 w-screen bg-app z-20">
            <nav className="flex justify-between items-center gap-6 py-1 h-16 page-container w-full z-30">

                {/* Logo (Left) */}
                <h1 className="font-bold text-indigo-500 text-2xl">Next-js</h1>

                {/* Links (center) */}
                <ul
                    className="md:flex hidden items-center gap-5"
                >
                    {
                        navigation.map((item) => (
                            <HeaderNavItem link={item.link} key={item.link}>
                                {item.title}
                            </HeaderNavItem>
                        ))
                    }
                </ul>

                {/* Auth button + burger menu (Right) */}
                <div className="flex-center">

                    {/* Burger menu with animation */}
                    <button
                        onClick={useCallback(() => setShowMobileMenu(prev => !prev), [])}
                        id="mobile-menu-toggle"
                        className="md:hidden flex relative py-1 w-8 h-8 rounded-md flex-col items-center justify-evenly ml-2 focus-visible:ring-2 ring-black/20 outline-none"
                    >
                        <div
                            className={`w-2/3 h-0.5 rounded-full bg-app-accent transition-all ${showMobileMenu ? 'absolute rotate-45 top-1/2' : ''}`}
                        />
                        <div
                            className={`h-0.5 rounded-full bg-app-accent transition-all ${showMobileMenu ? 'absolute w-0' : 'w-2/3'}`}
                        />
                        <div
                            className={`w-2/3 h-0.5 rounded-full bg-app-accent transition-all ${showMobileMenu ? 'absolute -rotate-45 top-1/2' : ''}`}
                        />
                    </button>
                </div>
            </nav>

            {/*  Mobile menu  */}
            <nav
                className={twJoin(
                    "fixed transition-all top-0",
                    showMobileMenu ? 'right-0' : '-right-full',
                    "flex flex-col items-center text-right md:hidden ",
                    "h-screen w-full sm:w-1/2 bg-app-dark pt-20 shadow-2xl z-20"
                )}
            >
                <ul className="flex flex-col justify-evenly w-full pr-20 pt-32 gap-16 text-2xl font-semibold text-slate-700">
                    {navigation.map((item, i) => (
                        <MobileHeaderLink link={item.link} key={i}>
                            {item.title}
                        </MobileHeaderLink>
                    ))}
                </ul>

                {/*<div className="mt-24">*/}
                {/*    <div id="yandex_rtb_R-A-1834268-6"></div>*/}
                {/*</div>*/}

                <span className="text-center text-slate-700 w-full absolute bottom-5 text-app-dark">
                    Made by @ColorKat.
                    {/*@copyright ColorTemplate <br/> by ColorKat. <br/> All rights reserved.*/}
                </span>
            </nav>

            <div
                onClick={() => setShowMobileMenu(false)}
                className={`w-screen h-screen absolute ${showMobileMenu ? "pointer-events-auto" : "pointer-events-none"} z-10`}
            />
        </header>
    );

    // return (
    //     <header className="flex justify-center items-center h-16 px-5 py-1 shrink-0 w-full bg-gray-100 text-gray-800">
    //         <div className="container flex justify-evenly items-center">
    //             <Link to="/test" className="hover:underline">Test</Link>
    //
    //             <Logo/>
    //         </div>
    //     </header>
    // );
});