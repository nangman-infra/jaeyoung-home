import Image from "next/image";
import { ArrowUpRight, Code2, Mail, NotebookText, UserRound } from "lucide-react";
import { profileImage, profileLinks, type ProfileContent } from "@/data/profile";

type HeroSectionProps = {
  profile: ProfileContent;
};

const linkIcons = {
  github: Code2,
  blog: NotebookText,
  linkedin: UserRound,
  email: Mail,
} as const;

export function HeroSection({ profile }: HeroSectionProps) {
  const links = [
    {
      label: profile.linkLabels.github,
      href: profileLinks.github,
      icon: linkIcons.github,
    },
    {
      label: profile.linkLabels.blog,
      href: profileLinks.blog,
      icon: linkIcons.blog,
    },
    {
      label: profile.linkLabels.linkedin,
      href: profileLinks.linkedin,
      icon: linkIcons.linkedin,
    },
    {
      label: profile.linkLabels.email,
      href: `mailto:${profileLinks.contact}`,
      icon: linkIcons.email,
    },
  ];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">{profile.heroKicker}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.bio}</p>
        <div className="hero-actions" aria-label={profile.linkAriaLabel}>
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" size={18} />
                <span>{link.label}</span>
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="profile-visual">
        <div className="profile-photo-frame">
          {profileImage.src ? (
            <Image src={profileImage.src} alt={profile.portraitAlt} width={520} height={640} priority />
          ) : (
            <div className="profile-photo-fallback" role="img" aria-label={profile.portraitAlt}>
              <span>{profile.portraitInitials}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
