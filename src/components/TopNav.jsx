import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { 
    navbar, 
    scrolledNavbar, 
    logo, 
    navLinks, 
    navLinkItem, 
    underline, 
    hamburger, 
    mobileMenuOverlay,
    mobileNavLinks,
    mobileNavLinkItem
} from './TopNav.css.ts';

const navItems = ["About", "Projects", "Skills", "Certifications", "Resume"];

const TopNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (isMobile) setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav className={`${navbar} ${isScrolled ? scrolledNavbar : ''}`}>
                <a href="#" className={logo} onClick={() => handleScroll('hero')}>MS</a>
                
                <ul className={navLinks}>
                    {navItems.map(item => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className={navLinkItem} onClick={(e) => {
                                e.preventDefault();
                                if (item === 'Resume') {
                                    window.open('https://drive.google.com/file/d/10o0OAMmTLDV5Nuj27DjlviyJvRFMJeue/view?usp=sharing', '_blank');
                                } else {
                                    handleScroll(item.toLowerCase());
                                }
                            }}>
                                {item}
                                <motion.div className={underline} />
                            </a>
                        </li>
                    ))}
                </ul>

                <button className={hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <motion.path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <motion.path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className={mobileMenuOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button className={hamburger} style={{ position: 'absolute', top: '28px', right: '1.5rem' }} onClick={() => setIsMobileMenuOpen(false)}>
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <motion.path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <ul className={mobileNavLinks}>
                            {navItems.map(item => (
                                <li key={`mobile-${item}`}>
                                    <a href={`#${item.toLowerCase()}`} className={mobileNavLinkItem} onClick={(e) => {
                                        e.preventDefault();
                                        if (item === 'Resume') {
                                            window.open('https://drive.google.com/file/d/10o0OAMmTLDV5Nuj27DjlviyJvRFMJeue/view?usp=sharing', '_blank');
                                        } else {
                                            handleScroll(item.toLowerCase());
                                        }
                                    }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default TopNav;
