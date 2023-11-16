import React, {FC, memo} from 'react';

interface FooterProps {

}

const Footer: FC<FooterProps> = memo(({}) => {


    return (
        <footer className="page-container">
            copyright @ColorKat 2023
        </footer>
    );
});

export default Footer;