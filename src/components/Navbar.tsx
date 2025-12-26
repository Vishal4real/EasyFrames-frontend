"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, X, Sparkles } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Cart } from "@/components/Cart"
import  Profile  from "@/components/Profile"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(true)
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const pathname = usePathname()

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            setIsScrolled(currentScrollY > 20)
            
            // Show navbar when at top of page
            if (currentScrollY < 10) {
                setIsVisible(true)
            } else {
                // Hide navbar when scrolling down, show when scrolling up
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down
                    setIsVisible(false)
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling up
                    setIsVisible(true)
                }
            }
            
            setLastScrollY(currentScrollY)
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Helper function to check if nav item is active
    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(path)
    }

    // Helper function to get nav item classes
    const getNavItemClasses = (path: string, baseClasses: string) => {
        const active = isActive(path)
        return `${baseClasses} ${
            active 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
        }`
    }

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            {/* Main Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/50 dark:bg-slate-900/95 backdrop-blur-xl  dark:border-gray-800 shadow-lg' 
                    : 'bg-transparent'
            } ${
                isVisible 
                    ? 'translate-y-0' 
                    : '-translate-y-full'
            }`}>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo - Left Side */}
                        <div className="flex items-center space-x-2">
                            <Link
                                href="/"
                                className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent hover:from-blue-900 hover:to-slate-900 transition-all duration-200  font-playfair"
                            >
                                EasyFrames
                            </Link>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <NavigationMenu>
                                <NavigationMenuList className="gap-1">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={getNavItemClasses('/', `${navigationMenuTriggerStyle()} rounded-full px-6 py-2 font-medium transition-all duration-200 font-inter`)}>
                                            <Link href="/">Home</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className={getNavItemClasses('/category', 'rounded-full px-6 py-2 font-medium transition-all duration-200 font-inter')}>
                                            Shop
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[600px] p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl">
                                                <div className="grid grid-cols-3 gap-6">
                                                    {/* By Room */}
                                                    <div className="space-y-3">
                                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 font-inter">By Room</h4>
                                                        <ListItem href="/category/rooms/bedroom" title="Bedroom">
                                                            Perfect for 2BHK bedrooms
                                                        </ListItem>
                                                        <ListItem href="/category/rooms/office" title="Office">
                                                            Professional workspace frames
                                                        </ListItem>
                                                        <ListItem href="/category/rooms/gaming" title="Gaming">
                                                            Gaming room essentials
                                                        </ListItem>
                                                        <ListItem href="/category/rooms/living" title="Living Room">
                                                            Statement pieces for living spaces
                                                        </ListItem>
                                                    </div>
                                                    
                                                    {/* By Style */}
                                                    <div className="space-y-3">
                                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 font-inter">By Style</h4>
                                                        <ListItem href="/category/styles/minimal" title="Minimal">
                                                            Clean lines, maximum impact
                                                        </ListItem>
                                                        <ListItem href="/category/styles/bold" title="Bold">
                                                            Statement-making designs
                                                        </ListItem>
                                                        <ListItem href="/category/styles/devotional" title="Devotional">
                                                            Spiritual and meaningful art
                                                        </ListItem>
                                                        <ListItem href="/category/styles/vintage" title="Vintage">
                                                            Nostalgic charm meets quality
                                                        </ListItem>
                                                    </div>
                                                    
                                                    {/* By Fandom */}
                                                    <div className="space-y-3">
                                                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 font-inter">By Fandom</h4>
                                                        <ListItem href="/category/fandoms/anime" title="Anime">
                                                            Your favorite anime characters
                                                        </ListItem>
                                                        <ListItem href="/category/fandoms/marvel" title="Marvel">
                                                            Superhero collection
                                                        </ListItem>
                                                        <ListItem href="/category/fandoms/dc" title="DC Comics">
                                                            DC universe frames
                                                        </ListItem>
                                                        <ListItem href="/category/fandoms/sports" title="Sports">
                                                            Sports memorabilia
                                                        </ListItem>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={getNavItemClasses('/about', `${navigationMenuTriggerStyle()} rounded-full px-6 py-2 font-medium transition-all duration-200 font-inter`)}>
                                            <Link href="/about">About</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={getNavItemClasses('/contact', `${navigationMenuTriggerStyle()} rounded-full px-6 py-2 font-medium transition-all duration-200 font-inter`)}>
                                            <Link href="/contact">Contact</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* Action Buttons - Right Side */}
                        <div className="flex items-center space-x-3">
                            <div className="hidden sm:flex items-center space-x-3">
                                <Cart />
                                <Profile />
                            </div>

                            <div className="flex sm:hidden items-center space-x-2">
                                <Cart />
                                <Profile />
                            </div>

                            {/* Mobile Menu Button */}
                            {isMounted && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="lg:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                                    onClick={() => setIsOpen(!isOpen)}
                                    aria-label="Toggle menu"
                                >
                                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMounted && isOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl">
                        <div className="p-6">
                            <div className="space-y-2">
                                <MobileNavLink href="/" isActive={isActive('/')} onClick={() => setIsOpen(false)}>
                                    Home
                                </MobileNavLink>
                                <MobileNavLink href="/category" isActive={isActive('/category')} onClick={() => setIsOpen(false)}>
                                    Shop
                                </MobileNavLink>
                                <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700 ml-4">
                                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-inter">By Room</div>
                                    <MobileNavLink href="/category/rooms/bedroom" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Bedroom
                                    </MobileNavLink>
                                    <MobileNavLink href="/category/rooms/office" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Office
                                    </MobileNavLink>
                                    <MobileNavLink href="/category/rooms/gaming" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Gaming
                                    </MobileNavLink>
                                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 mt-4 font-inter">By Style</div>
                                    <MobileNavLink href="/category/styles/minimal" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Minimal
                                    </MobileNavLink>
                                    <MobileNavLink href="/category/styles/bold" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Bold
                                    </MobileNavLink>
                                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 mt-4 font-inter">By Fandom</div>
                                    <MobileNavLink href="/category/fandoms/anime" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Anime
                                    </MobileNavLink>
                                    <MobileNavLink href="/category/fandoms/marvel" isActive={false} onClick={() => setIsOpen(false)} isSubItem>
                                        Marvel
                                    </MobileNavLink>
                                </div>
                                <MobileNavLink href="/about" isActive={isActive('/about')} onClick={() => setIsOpen(false)}>
                                    About
                                </MobileNavLink>
                                <MobileNavLink href="/contact" isActive={isActive('/contact')} onClick={() => setIsOpen(false)}>
                                    Contact
                                </MobileNavLink>
                            </div>
                            
                            {/* Mobile CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <Button className="w-full bg-slate-900 hover:bg-blue-900 text-white rounded-full font-inter" onClick={() => setIsOpen(false)}>
                                    Shop Collection
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function ListItem({ title, children, href }: { title: string; children: React.ReactNode; href: string }) {
    return (
        <NavigationMenuLink asChild>
            <Link
                href={href}
                className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
                                                <div className="font-medium text-slate-900 dark:text-white mb-1 group-hover:text-blue-900 transition-colors font-inter">
                                                    {title}
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 font-inter">
                                                    {children}
                                                </p>
            </Link>
        </NavigationMenuLink>
    )
}

function MobileNavLink({ 
    href, 
    children, 
    isActive, 
    onClick, 
    isSubItem = false 
}: { 
    href: string; 
    children: React.ReactNode; 
    isActive: boolean; 
    onClick: () => void; 
    isSubItem?: boolean; 
}) {
    return (
        <Link
            href={href}
            className={`block p-3 rounded-xl transition-all duration-200 ${
                isActive 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
            } ${isSubItem ? 'text-sm' : 'font-medium'}`}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}
