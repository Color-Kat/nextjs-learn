import React, {memo} from 'react';
import {BsYoutube} from "react-icons/bs";
import {twJoin} from "tailwind-merge";

export const YtIcon: React.FC<{ className?: string }> = memo(({className}) => {
    return (
        <BsYoutube className={twJoin(className, "text-[#ea3223]")}/>
    );
});