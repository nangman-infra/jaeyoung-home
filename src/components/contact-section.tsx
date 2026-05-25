import { Code2, Mail, NotebookText, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profileLinks, type ProfileContent } from "@/data/profile";

type ContactSectionProps = {
  profile: ProfileContent;
};

const linkIcons = {
  github: Code2,
  blog: NotebookText,
  linkedin: UserRound,
  email: Mail,
} as const;

export function ContactSection({ profile }: ContactSectionProps) {
  const contactLinks = [
    {
      label: profile.linkLabels.github,
      value: "Yu-Jaeyoung",
      href: profileLinks.github,
      icon: linkIcons.github,
    },
    {
      label: profile.linkLabels.blog,
      value: "jaeyoung-dev.tistory.com",
      href: profileLinks.blog,
      icon: linkIcons.blog,
    },
    {
      label: profile.linkLabels.linkedin,
      value: "jaeyoung-dev",
      href: profileLinks.linkedin,
      icon: linkIcons.linkedin,
    },
    {
      label: profile.linkLabels.email,
      value: profileLinks.contact,
      href: `mailto:${profileLinks.contact}`,
      icon: linkIcons.email,
    },
  ];

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <SectionHeading title={profile.sections.contact} />
      <div className="contact-grid" id="contact-title">
        {contactLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" size={22} />
              <span>
                <strong>{link.label}</strong>
                <small>{link.value}</small>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
