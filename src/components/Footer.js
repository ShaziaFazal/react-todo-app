import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t  text-[#155263] text-center p-4 mt-auto">
            <p className="text-sm">
                © {new Date().getFullYear()} Todo App, Inc. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
