"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Quick Links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Social Links with Icons
  const socialLinks = [
    {
      name: "GitHub",
      url: siteConfig.social.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.917.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      bgColor: "hover:bg-gray-500/20 dark:hover:bg-gray-500/30",
    },
    {
      name: "LinkedIn",
      url: siteConfig.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      bgColor: "hover:bg-blue-500/20 dark:hover:bg-blue-500/30",
    },
    {
      name: "Instagram",
      url: siteConfig.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
      bgColor: "hover:bg-pink-500/20 dark:hover:bg-pink-500/30",
    },
    {
      name: "Figma",
      url: siteConfig.social.figma,
      icon: <span className="text-lg font-bold">F</span>,
      bgColor: "hover:bg-purple-500/20 dark:hover:bg-purple-500/30",
    },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus("loading");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    } catch (error) {
      setSubscribeStatus("error");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card text-foreground border-t border-border transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
                  Muhammad Saad
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Full Stack Developer & UI/UX Designer
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crafting beautiful and functional digital experiences. Let's build something amazing together.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-muted/50 text-accent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white ${social.bgColor}`}
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Short */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Full Stack
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground">
                Stay Updated
              </h3>
              <p className="text-muted-foreground text-sm">
                Subscribe to get updates on new projects and articles.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={subscribeStatus === "loading"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-accent hover:text-accent/80 disabled:opacity-50 transition-colors duration-300"
                  >
                    {subscribeStatus === "loading" ? (
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
                {subscribeStatus === "success" && (
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                    ✓ Successfully subscribed!
                  </p>
                )}
                {subscribeStatus === "error" && (
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                    ✗ Subscription failed.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              <span className="font-medium text-foreground">
                &copy; {currentYear} Muhammad Saad.
              </span>
              {" "}All rights reserved. Built with passion and modern technologies.
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a
                href="#terms"
                className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                Terms of Service
              </a>
              <span className="text-border">•</span>
              <a
                href={siteConfig.resume}
                download="Muhammad_Saad_CV.pdf"
                className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-4-2m4 2l4-2" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10 opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -z-10 opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;
