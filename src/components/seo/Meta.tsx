import React, {FC, memo, PropsWithChildren} from 'react';
import {IMeta} from "@/components/seo/meta.interface.ts";
import Head from "next/head";

const getTitle = (title: string) => `${title} | Color cars`;

export const Meta: FC<PropsWithChildren<IMeta>> = memo(({title, description, children}) => {


    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>

                {description
                    ? <>
                        <meta name="description" content={description}/>
                        <meta name="og:title" content={getTitle(title)}/>
                        <meta name="og:description" content={description}/>
                    </>
                    : <meta name="robots" content="noindex, nofollow"/>
                }
            </Head>
            {children}
        </>
    );
});