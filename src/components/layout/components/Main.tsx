import React, {useState} from 'react';
import {twJoin} from "tailwind-merge";

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        const [theme, setTheme] = useState('light');

        return (
            <main
                className={twJoin(
                    "relative w-full flex flex-auto justify-center",
                    // theme == 'light' && "bg-app bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-app-dark",
                    // theme == 'dark' && "bg-app bg-gradient-to-tr from-black via-gray-800 to-zinc-700 text-violet-50",
                )}
            >
                {children}
            </main>
        );
    };

export default React.memo(Main);