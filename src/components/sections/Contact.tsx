"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  // EmailJS Configuration - Hardcoded for reliability in production
  const EMAILJS_CONFIG = {
    publicKey: "xPB2wRXh8nJMbvOBI",
    serviceId: "service_saadimehar",
    templateId: "template_uprzefv",
  };

  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation(0.2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (typeof window !== "undefined" && EMAILJS_CONFIG.publicKey) {
      emailjs.init(EMAILJS_CONFIG.publicKey);
    }
  }, []);

  // Contact info cards data
  const contactInfo = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zm-5.5-9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
        </svg>
      ),
      label: "Phone",
      value: siteConfig.phone,
      link: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: siteConfig.location,
      link: "#",
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Availability",
      value: siteConfig.availableForWork ? "Open to opportunities" : "Not available",
      link: "#",
      gradient: `${siteConfig.availableForWork ? "from-purple-500 to-indigo-500" : "from-gray-500 to-slate-500"}`,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      const tempForm = document.createElement("form");
      
      const addField = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        tempForm.appendChild(input);
      };

      addField("user_name", formData.name);
      addField("user_email", formData.email);
      addField("subject", formData.subject);
      addField("message", formData.message);
      addField("to_email", siteConfig.email);

      document.body.appendChild(tempForm);

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        tempForm
      );

      document.body.removeChild(tempForm);

      setSubmitStatus("success");
      setSuccessMessage("Message sent successfully! I'll get back to you soon.");
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      setSubmitStatus("error");
      setSuccessMessage("");

      const tempForms = document.querySelectorAll("form");
      tempForms.forEach((form) => {
        if (form.parentElement === document.body && form !== formRef.current) {
          document.body.removeChild(form);
        }
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-[20px] sm:py-20 relative overflow-hidden bg-background transition-colors duration-300"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${contactVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold mb-6">
            <span className="block dark:text-white text-foreground mb-2">
              Let's Work Together
            </span>
            <span className="block bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out to me through any of the channels below.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${contactVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.08s" }}>
          {contactInfo.map((info, index) => (
            <a
              key={info.id}
              href={info.link}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:border-accent/50 cursor-pointer ${contactVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative p-6 h-full flex flex-col justify-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-linear-to-br ${info.gradient} p-2.5 text-background flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  {info.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    {info.label}
                  </h3>
                  <p className="text-foreground font-medium break-all line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {info.value}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form and Social Links */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${contactVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Form Title */}
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send me a Message
                </h3>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 animate-slide-up">
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      ✓ {successMessage}
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 animate-slide-up">
                    <p className="text-red-600 dark:text-red-400 font-medium text-sm">
                      ✗ Unable to send message. Please try again or contact {siteConfig.email}
                    </p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Social Links and CTA */}
          <div className="space-y-8">
            {/* Social Links Card */}
            <div className="rounded-2xl border border-border bg-card p-8 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Connect With Me
                </h3>

                <div className="space-y-3">
                  {/* GitHub */}
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-gray-700 to-gray-900 p-2 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.917.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">GitHub</p>
                      <p className="text-xs text-muted-foreground truncate">@Saadimehar</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-blue-700 p-2 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">LinkedIn</p>
                      <p className="text-xs text-muted-foreground truncate">Muhammad Saad</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-pink-500 to-rose-600 p-2 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">Instagram</p>
                      <p className="text-xs text-muted-foreground truncate">@isaadimehar</p>
                    </div>
                  </a>

                  {/* Figma */}
                  <a
                    href={siteConfig.social.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 to-purple-700 p-2 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm font-bold">F</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">Figma</p>
                      <p className="text-xs text-muted-foreground truncate">@saadimehar</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Download Resume CTA */}
            <a
              href={siteConfig.resume}
              download="Muhammad_Saad_CV.pdf"
              className="block group relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-accent/20 via-card to-secondary/10 p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-lg bg-linear-to-br from-accent to-secondary p-3 flex items-center justify-center text-background mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-4-2m4 2l4-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Download Resume
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a complete overview of my experience and skills
                </p>
                <div className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all duration-300">
                  Download PDF
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
