"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";

type CertificationCategory = "all" | "courses" | "internships" | "sports" | "soft-skills";

const certificateCategories: { id: CertificationCategory; label: string; icon: string }[] = [
  { id: "all", label: "All", icon: "🎯" },
  { id: "courses", label: "Courses", icon: "📚" },
  { id: "internships", label: "Internships", icon: "💼" },
  { id: "sports", label: "Sports", icon: "🏅" },
  { id: "soft-skills", label: "Soft Skills", icon: "✨" },
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<CertificationCategory>("all");

  const filteredCertifications =
    activeCategory === "all"
      ? certifications
      : certifications.filter((item) => item.category === activeCategory);

  return (
    <section className="min-h-screen py-[20px] sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed text-center">
            My learning journey includes professional courses, internships, sports achievements, and soft skill development that continue shaping my growth as a designer and developer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {certificateCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-linear-to-r from-accent to-secondary text-background shadow-lg shadow-accent/50"
                  : "bg-background/40 border border-white/10 text-foreground hover:border-accent/30 hover:bg-background/60"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {filteredCertifications.map((item) => {
            const imageUrl = item.image;
            const isPdf = (imageUrl || "").toLowerCase().endsWith(".pdf");

            return (
              <div
                key={item.id}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-xl transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-t-2xl border-b border-border bg-black">
                    {imageUrl ? (
                      isPdf ? (
                        <div className="relative h-[420px] sm:h-[460px] w-full overflow-hidden bg-black group">
                          <a
                            href={imageUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="block h-full w-full"
                            aria-label={`Open ${item.title} certificate in a new tab`}
                          >
                            <iframe
                              src={`${imageUrl}#page=1&zoom=page-width&toolbar=0&navpanes=0&scrollbar=0`}
                              title={`${item.title} certificate`}
                              className="h-full w-full border-0 pointer-events-none bg-black"
                            />
                          </a>
                          <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2 text-[10px] font-medium text-foreground border border-white/10 backdrop-blur-sm shadow-md">
                              <span>🔗</span>
                              Open certificate
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative h-[420px] sm:h-[460px] w-full overflow-hidden group bg-black">
                          <a
                            href={imageUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="block h-full w-full overflow-hidden"
                            aria-label={`Open ${item.title} certificate in a new tab`}
                          >
                            <img
                              src={imageUrl}
                              alt={`${item.title} certificate`}
                              className="h-full w-full object-contain bg-black transition-transform duration-300 group-hover:scale-[1.04]"
                            />
                          </a>

                          <div className="pointer-events-none absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-2 text-[10px] font-medium text-foreground border border-white/10 backdrop-blur-sm shadow-md">
                              <span>🔗</span>
                              Open certificate
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="flex h-[420px] sm:h-[460px] w-full items-center justify-center border-2 border-dashed border-border bg-black text-foreground">
                        <span className="text-sm font-medium">Certificate unavailable</span>
                      </div>
                    )}
                  </div>

                  <div className="p-2.5 sm:p-3 flex flex-col gap-1 mt-0">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-linear-to-br from-accent/20 to-secondary/20 text-sm border border-accent/20">
                        {item.category === "courses" && "📚"}
                        {item.category === "internships" && "💼"}
                        {item.category === "sports" && "🏅"}
                        {item.category === "soft-skills" && "✨"}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[8px] font-semibold border border-accent/20 bg-accent/10 text-accent uppercase tracking-wide">
                        {item.category.replace("-", " ")}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">{item.title}</h3>
                    <p className="text-[11px] font-medium text-accent leading-none">{item.issuer}</p>
                    <p className="text-[10px] text-muted-foreground leading-none">{item.date}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 m-0">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
