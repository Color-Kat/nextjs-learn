import React, {memo, ReactNode} from "react";
import Link from "next/link";
import {BorderRightLineEffect} from "@/components/UI/Effects";
import {useRouter} from "next/router";

type HeaderLinkType = { children: ReactNode, link: string };

export const HeaderNavItem: React.FC<HeaderLinkType> = memo(({
                                                                 children,
                                                                 link
                                                             }) => {
    const {pathname} = useRouter();
    return (
        <Link href={link} className="">
            <BorderRightLineEffect active={pathname == link}>
                {children}
            </BorderRightLineEffect>
        </Link>
    );
});

export const MobileHeaderLink: React.FC<HeaderLinkType> = memo(({
                                                                    children,
                                                                    link
                                                                }) => {

    return (
        <Link href={link}>
            {children}
        </Link>
    );
});