# Jaeyoung Home

개인 포트폴리오형 홈페이지입니다. 비즈니스 문제 분석, 사용자 관점의 문제 해결, LLM/RAG/Local LLM 학습, TypeScript 기반 웹 개발 역량을 한국어와 영어로 확인할 수 있도록 구성합니다.

## 구현 목표

- 재영의 Bio, Specialties, Achievements, Education, Work Experience, Certifications, Links를 명확하게 보여줍니다.
- 첫 화면에서 이름, 역할, 핵심 소개, 주요 링크를 바로 확인할 수 있게 합니다.
- 한국어/영어 전환 버튼으로 같은 정보를 언어별로 확인할 수 있게 합니다.
- 포트폴리오 정보는 코드 안에 흩어두지 않고 `src/data/profile.ts`에 모아 관리합니다.
- 브랜드 컬러는 Toss Blue와 Toss Gray를 기준으로 사용합니다.
- 첫 화면은 데스크톱에서 한 화면 안에 자연스럽게 들어오도록 구성합니다.
- 모바일에서도 텍스트, 버튼, 프로필 영역이 겹치지 않도록 반응형 레이아웃을 유지합니다.
- 이후 프로젝트, 블로그 글, 상세 이력, 디자인을 점진적으로 추가할 수 있는 구조를 유지합니다.

## 동작 방식

이 프로젝트는 Next.js App Router 기반의 정적 포트폴리오 페이지입니다.

1. 한국어/영어 포트폴리오 데이터를 기준으로 화면 내용을 구성합니다.
2. 사용자가 언어 버튼을 선택하면 같은 포트폴리오 정보를 해당 언어로 보여줍니다.
3. 첫 화면에는 소개 문구, 주요 링크, 프로필 사진을 배치합니다.
4. 아래 영역에는 기술 영역, 성과, 학력, 경력, 자격, 연락 링크를 순서대로 보여줍니다.
5. 화면 폭에 따라 데스크톱과 모바일 레이아웃이 자연스럽게 바뀝니다.

## 주요 섹션

- Hero: 이름, 역할, Bio, 프로필 비주얼, GitHub/Blog/LinkedIn/Email 링크
- Specialties: TypeScript, LLM, RAG, GitHub, Database, Software Architecture
- Achievements: 2024 유성 데이터기반 실증 리빙랩 최우수상
- Education: 국립한밭대학교 학사/석사 과정
- Work Experience: 대한민국 육군 통신운용담당
- Certifications: 정보처리기사, SQLD
- Links: Blog, LinkedIn, GitHub, Email

## 언어 전환

첫 화면 상단의 `한국어` / `English` 버튼으로 표시 언어를 전환합니다.

- 기본 언어: 한국어
- 지원 언어: 한국어, 영어

## 브랜드 컬러

```text
Toss Blue
#0064FF
R0 G100 B255
C100 M60 Y0 K0
PANTONE 2175 C

Toss Gray
#202632
R32 G38 B50
C87 M80 Y70 K52
PANTONE 433 C
```

## 프로젝트 구조

```text
/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home
├── README.md
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── src
    ├── app
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── contact-section.tsx
    │   ├── hero-section.tsx
    │   ├── portfolio-page.tsx
    │   ├── profile-sections.tsx
    │   └── section-heading.tsx
    └── data
        └── profile.ts
```

## 기술 스택

- Bun
- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- lucide-react
