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

1. `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/data/profile.ts`에 한국어/영어 포트폴리오 데이터를 정의합니다.
2. `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/components/portfolio-page.tsx`가 현재 선택된 언어 상태를 관리합니다.
3. `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/app/page.tsx`가 포트폴리오 페이지 컴포넌트를 렌더링합니다.
4. 각 섹션 컴포넌트는 선택된 언어의 `profile` 데이터를 props로 받아 화면에 렌더링합니다.
5. `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/app/globals.css`에서 전체 레이아웃, 반응형 스타일, 브랜드 컬러를 관리합니다.

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
- 영어 데이터: `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/data/profile.ts`의 `localizedProfiles.en`
- 한국어 데이터: `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/data/profile.ts`의 `localizedProfiles.ko`

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

## 프로필 사진

현재 Hero 오른쪽 영역은 사진을 넣을 수 있는 프로필 비주얼 영역으로 구성되어 있습니다.

사진을 추가할 때는 다음 방식으로 반영합니다.

1. 사진 파일을 `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/public/Jaeyoung.jpg`에 둡니다.
2. `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/data/profile.ts`의 `profileImage.src`를 `/Jaeyoung.jpg`로 설정합니다.
3. `bun run lint`와 `bun run build`로 검증합니다.

사진 파일이 없을 때는 실제 인물 사진을 임의로 생성하지 않고, 이니셜 기반 프로필 비주얼을 보여줍니다.

## 작업 기록 원칙

- 검증 가능한 작업 단위가 끝날 때마다 커밋합니다.
- 커밋 전에는 `git diff`, `bun run lint`, `bun run build`를 확인합니다.
- README는 기능, 동작 방식, 구조가 바뀔 때 함께 업데이트합니다.
- 커밋 메시지는 짧은 conventional commit 형식을 사용합니다.

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

## 실행 방법

```bash
cd /Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home
bun install
bun run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:3000`으로 접속합니다.

## 검증 방법

```bash
cd /Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home
bun run lint
bun run build
```

## 수정 방법

- 포트폴리오 내용/번역 수정: `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/data/profile.ts`
- 화면 섹션 수정: `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/components`
- 전체 스타일/브랜드 컬러 수정: `/Users/jaeyoung/Developments/project/nangman-infra/jaeyoung-home/src/app/globals.css`
