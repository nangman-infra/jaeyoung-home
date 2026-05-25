import { Award, BadgeCheck, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { ProfileContent } from "@/data/profile";

type ProfileSectionProps = {
  profile: ProfileContent;
};

export function SpecialtySection({ profile }: ProfileSectionProps) {
  return (
    <section className="content-band" aria-labelledby="specialties-title">
      <SectionHeading eyebrow="Specialties" title={profile.sections.specialties} />
      <div className="specialty-list" id="specialties-title">
        {profile.specialties.map((specialty) => (
          <span key={specialty}>{specialty}</span>
        ))}
      </div>
    </section>
  );
}

export function AchievementSection({ profile }: ProfileSectionProps) {
  return (
    <section className="content-band" aria-labelledby="achievements-title">
      <SectionHeading eyebrow="Achievements" title={profile.sections.achievements} />
      <div className="feature-list" id="achievements-title">
        {profile.achievements.map((achievement) => (
          <article key={achievement} className="feature-item">
            <Award aria-hidden="true" size={22} />
            <p>{achievement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationSection({ profile }: ProfileSectionProps) {
  return (
    <section className="content-band" aria-labelledby="education-title">
      <SectionHeading eyebrow="Education" title={profile.sections.education} />
      <div className="timeline-list" id="education-title">
        {profile.education.map((education) => (
          <article key={`${education.degree}-${education.period}`} className="timeline-item">
            <GraduationCap aria-hidden="true" size={22} />
            <div>
              <p className="item-meta">{education.period}</p>
              <h3>
                {education.university} · {education.degree}
              </h3>
              <p>{education.major}</p>
              <p>{education.lab}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection({ profile }: ProfileSectionProps) {
  return (
    <section className="content-band" aria-labelledby="experience-title">
      <SectionHeading eyebrow="Work Experience" title={profile.sections.experience} />
      <div className="timeline-list" id="experience-title">
        {profile.workExperience.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="timeline-item">
            <BriefcaseBusiness aria-hidden="true" size={22} />
            <div>
              <p className="item-meta">{experience.period}</p>
              <h3>
                {experience.company} · {experience.position}
              </h3>
              <ul>
                {experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CertificationSection({ profile }: ProfileSectionProps) {
  return (
    <section className="content-band" aria-labelledby="certifications-title">
      <SectionHeading eyebrow="Certifications" title={profile.sections.certifications} />
      <div className="certification-grid" id="certifications-title">
        {profile.certifications.map((certification) => (
          <article key={certification.name} className="certification-item">
            <BadgeCheck aria-hidden="true" size={22} />
            <div>
              <h3>{certification.name}</h3>
              <p>{certification.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
