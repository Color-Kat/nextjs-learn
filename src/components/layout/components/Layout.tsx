import {memo, ReactNode} from "react";

import {Header} from "./Header/Header.tsx";
import Main from "./Main";
import {twJoin} from "tailwind-merge";
import {MobileBottomMenu} from "./MobileBottomMenu.tsx";
import {Meta} from "@/components/seo/Meta.tsx";
import {IMeta} from "@/components/seo/meta.interface.ts";

export const Layout: React.FC<IMeta & {
    children: ReactNode
}> = memo(({
               children,
               title,
               description
           }) => {
    return (
        <Meta title={title} description={description}>
            <div
                className={twJoin(
                    "h-screen w-screen flex flex-col",
                    // "scroll-container overflow-y-auto overflow-x-hidden", // Header can be scrolled

                    // "md:h-screen h-[calc(100vh-4.4rem)]", // For MobileBottomMenu
                    // "pt-16",// For header
                    "pb-[4.4rem] md:pb-0",// For MobileBottomMenu
                    "bg-app-dark font-inter"
                )}
            >

                {/*<div className="relative flex h-32 w-full bg-red-500"></div>*/}

                <Header/>

                <div
                    className="scroll-container overflow-y-auto overflow-x-hidden flex flex-col flex-auto"
                > {/* Header at the top of the page */}
                    <Main>
                        {children}
                    </Main>

                    {/*    // <SimpleFooter/>*/}
                    {/*    <Footer />*/}
                </div>

                <MobileBottomMenu/>

            </div>
        </Meta>
    );
});