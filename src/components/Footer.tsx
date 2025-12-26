import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

function Footer() {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ]

  const sections = [
    {
      title: "Shop",
      links: [
        { name: "All Frames", href: "/products" },
        { name: "Categories", href: "/category" },
        { name: "Best Sellers", href: "/products" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/contact" },
        { name: "Shipping Info", href: "/contact" },
        { name: "Size Guide", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/contact" },
        { name: "Terms", href: "/contact" },
      ],
    },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/contact" },
    { name: "Terms", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mt-16 border-t border-gray-200 dark:border-gray-700">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent font-playfair">
                    EasyFrames
                  </h2>
                </Link>
              </div>
              <p className="max-w-[70%] text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
                Premium quality frames for your favorite artwork and memories.
              </p>
              <ul className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <Link href={social.href} aria-label={social.label}>
                      {social.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-base font-inter">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="font-medium hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-inter">
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-200 dark:border-gray-700 py-8 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1 font-inter">
              &copy; 2025 easybro.store All rights reserved.
            </p>
            <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row font-inter">
              {legalLinks.map((link, idx) => (
                <li key={idx} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer