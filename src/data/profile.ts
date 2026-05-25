export type LanguageCode = "ko" | "en";

export type ProfileContent = {
  name: string;
  role: string[];
  bio: string;
  portraitAlt: string;
  portraitInitials: string;
  languageLabel: string;
  linkAriaLabel: string;
  specialties: string[];
  achievements: string[];
  education: {
    degree: string;
    major: string;
    university: string;
    period: string;
    lab: string;
  }[];
  workExperience: {
    company: string;
    position: string;
    period: string;
    description: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
  }[];
  sections: {
    specialties: string;
    achievements: string;
    education: string;
    experience: string;
    certifications: string;
    contact: string;
  };
  linkLabels: {
    github: string;
    blog: string;
    linkedin: string;
    email: string;
  };
};

export const profileLinks = {
  blog: "https://jaeyoung-dev.tistory.com/",
  linkedin: "https://www.linkedin.com/in/jaeyoung-dev/",
  github: "https://github.com/Yu-Jaeyoung",
  contact: "jaeyoung.inbox@kakao.com",
} as const;

export const profileImage = {
  src: "/Jaeyoung.jpg",
} as const;

export const languages: { code: LanguageCode; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
];

export const localizedProfiles: Record<LanguageCode, ProfileContent> = {
  ko: {
    name: "유재영",
    role: ["AI와 웹 기술로 비즈니스 문제를 해결하는 개발자"],
    languageLabel: "언어 선택",
    linkAriaLabel: "외부 링크",
    portraitAlt: "유재영 프로필 사진",
    portraitInitials: "재영",
    bio: "비즈니스 문제를 분석하고, 이를 사용자 관점에서 해결하는 데 관심을 가지고 있습니다. 개인화된 AI 경험을 목표로 LLM, RAG, Local LLM 운용과 튜닝을 학습하고 있으며, TypeScript 기반 웹 개발과 Database, Software Architecture에 대한 이해를 함께 넓혀가고 있습니다. GitHub를 활용한 코드 관리와 CS 기본기를 바탕으로, 사용자와 비즈니스에 실질적인 가치를 만드는 개발자로 성장하고자 합니다.",
    specialties: [
      "TypeScript",
      "LLM",
      "RAG",
      "GitHub",
      "Database",
      "Software Architecture",
    ],
    achievements: [
      "2024 유성 데이터기반 실증 리빙랩 (보훈 수당 자동화) - 최우수상 (유성구청장상), 팀 대표(PM)",
    ],
    education: [
      {
        degree: "학사",
        major: "정보기술대학 정보통신공학과(공학사)",
        university: "국립한밭대학교",
        period: "2018년 3월 ~ 2025년 2월",
        lab: "무선통신소프트웨어(WiSoft) 연구실",
      },
      {
        degree: "석사",
        major: "모바일융합공학과",
        university: "국립한밭대학교",
        period: "2025년 2월 ~ 현재",
        lab: "무선통신소프트웨어(WiSoft) 연구실",
      },
    ],
    workExperience: [
      {
        company: "대한민국 육군",
        position: "통신운용담당(육군 하사)",
        period: "2020년 11월 ~ 2022년 2월",
        description: ["부대 통신 설비 구축, 설비, 점검 총괄", "부대 병력 관리"],
      },
    ],
    certifications: [
      {
        name: "정보처리기사",
        issuer: "한국산업인력공단",
      },
      {
        name: "SQLD",
        issuer: "한국데이터산업진흥원",
      },
    ],
    sections: {
      specialties: "관심 있게 다루는 기술 영역",
      achievements: "대표 성과",
      education: "학력",
      experience: "경험",
      certifications: "자격",
      contact: "연락과 기록",
    },
    linkLabels: {
      github: "GitHub",
      blog: "Blog",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  en: {
    name: "Jaeyoung Yu",
    role: ["Developer solving business problems", "with AI and web technologies"],
    languageLabel: "Language",
    linkAriaLabel: "External links",
    portraitAlt: "Profile photo of Jaeyoung Yu",
    portraitInitials: "JY",
    bio: "I am interested in analyzing business problems and solving them from a user-centered perspective. I am learning LLMs, RAG, and Local LLM operation and tuning to build personalized AI experiences, while expanding my understanding of TypeScript-based web development, databases, and software architecture. With GitHub-based code management and computer science fundamentals, I aim to grow into a developer who creates practical value for users and businesses.",
    specialties: [
      "TypeScript",
      "LLM",
      "RAG",
      "GitHub",
      "Database",
      "Software Architecture",
    ],
    achievements: [
      "2024 Yuseong Data-Driven Demonstration Living Lab (Veterans Allowance Automation) - Grand Prize (Yuseong District Mayor Award), Team Representative (PM)",
    ],
    education: [
      {
        degree: "Bachelor's",
        major: "Department of Information and Communication Engineering, College of Information Technology",
        university: "Hanbat National University",
        period: "Mar 2018 - Feb 2025",
        lab: "Wireless Communication Software (WiSoft) Lab",
      },
      {
        degree: "Master's",
        major: "Department of Mobile Convergence Engineering",
        university: "Hanbat National University",
        period: "Feb 2025 - Present",
        lab: "Wireless Communication Software (WiSoft) Lab",
      },
    ],
    workExperience: [
      {
        company: "Republic of Korea Army",
        position: "Communications Operations NCO, Sergeant",
        period: "Nov 2020 - Feb 2022",
        description: [
          "Led installation, operation, and inspection of unit communications facilities",
          "Managed unit personnel",
        ],
      },
    ],
    certifications: [
      {
        name: "Engineer Information Processing",
        issuer: "Human Resources Development Service of Korea",
      },
      {
        name: "SQLD",
        issuer: "Korea Data Agency",
      },
    ],
    sections: {
      specialties: "Technical areas I focus on",
      achievements: "Selected achievement",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact and writing",
    },
    linkLabels: {
      github: "GitHub",
      blog: "Blog",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
};
