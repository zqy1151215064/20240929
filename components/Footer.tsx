import {Icon} from '@iconify/react';
import React from "react";
import Image from "next/image";
import favicon from '/public/favicon.ico'

const SocialMediaLinks = () => {
    const links = [
        {href: 'https://www.tiktok.com/@pdfai', icon: 'ic:baseline-tiktok', label: 'TikTok'},
        {href: 'https://www.instagram.com/pdfdotai/', icon: 'ant-design:instagram-outlined', label: 'Instagram'},
        {href: 'https://twitter.com/pdfdotai', icon: 'mdi:twitter', label: 'Twitter'},
        {href: 'https://www.youtube.com/@pdfai', icon: 'mdi:youtube', label: 'YouTube'},
    ];

    return (
        <div className="flex space-x-6">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-gray-500"
                    target="_blank"
                    aria-label={link.label}
                >
                    <Icon icon={link.icon} style={{color: '#9ca3af'}} width="1.5em" height="1.5em"/>
                </a>
            ))}
        </div>
    );
};

interface Link {
    href: string;
    label: string;
}

interface NavLinkListProps {
    title: string;
    links: Link[];
}

const NavLinkList: React.FC<NavLinkListProps> = ({title, links}) => (
    <div>
        <h3 className="text-sm font-semibold leading-6 text-gray-900">{title}</h3>
        <ul className="mt-6 space-y-4 list-none p-0">
            {links.map((link) => (
                <li key={link.href}>
                    <a href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const productLinks = [
        {href: '/use-cases', label: 'Use cases'},
        {href: '/chrome-extension', label: 'Chrome extension'},
        {href: 'https://api.pdf.ai/', label: 'API docs'},
        {href: 'https://pdf.ai/pricing', label: 'Pricing'},
        {href: 'https://pdf.ai/tutorials', label: 'Video tutorials'},
        {href: 'https://pdf.ai/resources', label: 'Resources'},
        {href: 'https://pdf.ai/blog', label: 'Blog'},
        {href: '/faq', label: 'FAQ'},
    ];

    const otherLinks = [
        {href: 'https://pdf.ai/tools/resume-ai-scanner', label: 'Resume AI Scanner'},
        {href: 'https://pdf.ai/tools/invoice-ai-scanner', label: 'Invoice AI Scanner'},
        {href: 'https://pdf.ai/tools/quiz-ai-generator', label: 'AI Quiz Generator'},
        {href: 'https://quickyai.com', label: 'QuickyAI'},
        {href: 'https://docsium.com', label: 'Docsium'},
        {href: 'https://pdf.ai/gpts', label: 'PDF GPTs'},
        {href: 'https://pdfgen.com', label: 'PDF AI generator'},
        {href: 'https://pdf.ai/tools', label: 'Other PDF tools'},
    ];

    const companyLinks = [
        {href: '/compare/chatpdf-alternative', label: 'PDF.ai vs ChatPDF'},
        {href: '/compare/adobe-acrobat-reader-alternative', label: 'PDF.ai vs Acrobat Reader'},
        {href: '/privacy-policy', label: 'Legal'},
        {href: '/affiliate-program', label: 'Affiliate program 💵'},
        {href: '/investor', label: 'Investor'},
    ];


    return (
        <footer>
            <div
                className="mx-auto max-w-7xl px-6 pb-8 mt-8 sm:mt-12 lg:px-8 lg:mt-16 border-t border-gray-900/10 pt-16">

                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Image className="h-7 w-7" src={favicon} alt="PDF.ai logo"/>
                        <div className="text-sm leading-6 text-gray-600">
                            Chat with any PDF: ask questions, get summaries, find information, and more.
                        </div>
                        <SocialMediaLinks/>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 md:grid md:grid-cols-3">
                        <NavLinkList title="Products" links={productLinks}/>
                        <NavLinkList title="We also built" links={otherLinks}/>
                        <NavLinkList title="Company" links={companyLinks}/>
                    </div>
                </div>

            </div>
        </footer>
    )


}


export default Footer;
