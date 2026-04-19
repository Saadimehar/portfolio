"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

// Social media icons with beautiful colors
const socialLinks = [
  {
    name: "GitHub",
    url: siteConfig.social.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.917.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    bgColor: "bg-gradient-to-br from-gray-400 to-gray-800",
    hoverColor: "hover:from-gray-600 hover:to-gray-900",
  },
  {
    name: "LinkedIn",
    url: siteConfig.social.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-700 hover:to-blue-800",
  },
  {
    name: "Instagram",
    url: siteConfig.social.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
    bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
    hoverColor: "hover:from-pink-600 hover:to-rose-700",
  },
  {
    name: "Figma",
    url: siteConfig.social.figma,
    icon: <span className="text-lg font-bold">F</span>,
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    hoverColor: "hover:from-purple-600 hover:to-purple-800",
  },
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8 animate-fade-in">
            {/* Mobile Profile Picture - Show only on mobile */}
            <div className="lg:hidden flex justify-center mb-4">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-linear-to-r from-accent/40 to-secondary/20 rounded-full blur-2xl" />
                <div className="relative w-full h-full bg-card rounded-full overflow-hidden border-2 border-accent/30 shadow-lg">
                  <Image
                    src="/images/about/dp.png"
                    alt={siteConfig.name}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 sm:mb-4">
                <span className="block dark:text-white text-foreground text-xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-1 sm:mb-2 leading-tight">
                  Hey, I'm
                </span>
                <span className="block bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-tight">
                  Muhammad Saad
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-justify">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start w-full flex-wrap">
              <Link href="#contact" className="flex-1 sm:flex-none min-w-fit">
                <Button variant="primary" size="sm" className="w-full text-xs sm:text-sm md:text-base px-2 sm:px-4">
                  <span>💬</span>
                  <span className="hidden sm:inline">Let's Talk</span>
                  <span className="sm:hidden">Talk</span>
                </Button>
              </Link>
              <a href={siteConfig.resume} download="Muhammad_Saad_CV.pdf" className="flex-1 sm:flex-none min-w-fit">
                <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm md:text-base px-2 sm:px-4">
                  <span>📥</span>
                  <span className="hidden sm:inline">Download Resume</span>
                  <span className="sm:hidden">Resume</span>
                </Button>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start flex-wrap">
              <div className="flex gap-2 sm:gap-8 ml-16 flex-wrap justify-center lg:justify-start">
                {socialLinks.map((social) => (
                  social.url && (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.bgColor} ${social.hoverColor} text-background w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center items-center animate-slide-up">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-linear-to-r from-accent/40 to-secondary/20 rounded-3xl blur-3xl" />

              {/* Image container */}
              <div className="relative w-full h-full bg-card rounded-3xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 shadow-2xl hover:shadow-accent/20">
                {/* Personal image */}
                <Image
                  src="/images/about/dp.png"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating card effect */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-accent/20 rounded-2xl p-4 w-44 shadow-lg backdrop-blur-sm hover:shadow-accent/30 transition-shadow duration-300">
                <p className="text-sm font-semibold text-accent mb-1">
                  ✨ Available for work
                </p>
                <p className="text-xs text-muted-foreground">
                  {siteConfig.availableForWork
                    ? "Let's build something great! 🚀"
                    : "Coming soon"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
