"use client";

import { useState } from "react";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import {
  AchievementSection,
  CertificationSection,
  EducationSection,
  ExperienceSection,
  SpecialtySection,
} from "@/components/profile-sections";
import { languages, localizedProfiles, type LanguageCode } from "@/data/profile";

export function PortfolioPage() {
  const [language, setLanguage] = useState<LanguageCode>("ko");
  const profile = localizedProfiles[language];

  return (
    <main lang={language}>
      <div className="language-toolbar" aria-label={profile.languageLabel}>
        <div className="language-control" role="group" aria-label={profile.languageLabel}>
          {languages.map((option) => (
            <button
              key={option.code}
              type="button"
              aria-pressed={language === option.code}
              onClick={() => setLanguage(option.code)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <HeroSection profile={profile} />
      <div className="page-content">
        <SpecialtySection profile={profile} />
        <AchievementSection profile={profile} />
        <EducationSection profile={profile} />
        <ExperienceSection profile={profile} />
        <CertificationSection profile={profile} />
        <ContactSection profile={profile} />
      </div>
    </main>
  );
}
