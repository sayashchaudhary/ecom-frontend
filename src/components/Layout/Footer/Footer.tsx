import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            Copyright &copy; {new Date().getFullYear()} Dev Connect
        </footer>
    );
};

export default Footer;
