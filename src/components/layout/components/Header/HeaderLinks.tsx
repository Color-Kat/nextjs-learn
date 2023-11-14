import React, {memo, ReactNode} from "react";
import Link from "next/link";
import {BorderRightLineEffect} from "@/components/UI/Effects";

type HeaderLinkType = { children: ReactNode, link: string };

export const HeaderNavItem: React.FC<HeaderLinkType> = memo(({
                                                                 children,
                                                                 link
                                                             }) => {
    return (
        <Link href={link} className="relative">
            <BorderRightLineEffect>
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