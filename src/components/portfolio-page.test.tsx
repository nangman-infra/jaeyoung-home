import { fireEvent, render, screen, within } from "@testing-library/react";
import { PortfolioPage } from "@/components/portfolio-page";

describe("PortfolioPage", () => {
  it("renders the Korean profile by default", () => {
    render(<PortfolioPage />);

    expect(screen.getByRole("main")).toHaveAttribute("lang", "ko");
    expect(screen.getByRole("heading", { level: 1, name: "유재영" })).toBeInTheDocument();
    expect(screen.getByText("AI와 웹 기술로 비즈니스 문제를 해결하는 개발자")).toBeInTheDocument();
    expect(screen.getByAltText("유재영 프로필 사진")).toHaveAttribute("src", "/Jaeyoung.jpg");
    expect(screen.getByRole("button", { name: "한국어" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "English" })).toHaveAttribute("aria-pressed", "false");

    expect(screen.getByRole("heading", { level: 2, name: "관심 있게 다루는 기술 영역" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "대표 성과" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "학력" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "경험" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "자격" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "연락과 기록" })).toBeInTheDocument();

    expect(screen.getByText("2024 유성 데이터기반 실증 리빙랩 (보훈 수당 자동화) - 최우수상 (유성구청장상), 팀 대표(PM)")).toBeInTheDocument();
    expect(screen.getByText("국립한밭대학교 · 학사")).toBeInTheDocument();
    expect(screen.getByText("대한민국 육군 · 통신운용담당(육군 하사)")).toBeInTheDocument();
    expect(screen.getByText("정보처리기사")).toBeInTheDocument();
    expect(screen.getByText("SQLD")).toBeInTheDocument();

    const heroLinks = within(screen.getByLabelText("외부 링크"));

    expect(heroLinks.getByRole("link", { name: /GitHub/i })).toHaveAttribute("href", "https://github.com/Yu-Jaeyoung");
    expect(heroLinks.getByRole("link", { name: /Blog/i })).toHaveAttribute("href", "https://jaeyoung-dev.tistory.com/");
    expect(heroLinks.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute("href", "https://www.linkedin.com/in/jaeyoung-dev/");
    expect(heroLinks.getByRole("link", { name: /Email/i })).toHaveAttribute("href", "mailto:jaeyoung.inbox@kakao.com");
  });

  it("switches to the English profile when requested", () => {
    render(<PortfolioPage />);

    fireEvent.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("main")).toHaveAttribute("lang", "en");
    expect(screen.getByRole("heading", { level: 1, name: "Jaeyoung Yu" })).toBeInTheDocument();
    expect(
      screen.getByLabelText("Developer solving business problems with AI and web technologies"),
    ).toBeInTheDocument();
    expect(screen.getByText(/I am interested in analyzing business problems/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "English" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "한국어" })).toHaveAttribute("aria-pressed", "false");

    expect(screen.getByRole("heading", { level: 2, name: "Technical areas I focus on" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Selected achievement" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Education" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Certifications" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Contact and writing" })).toBeInTheDocument();

    expect(screen.getByText("Hanbat National University · Master's")).toBeInTheDocument();
    expect(screen.getByText("Republic of Korea Army · Communications Operations NCO, Sergeant")).toBeInTheDocument();
    expect(screen.getByText("Engineer Information Processing")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Email/i })[0]).toHaveAttribute(
      "href",
      "mailto:jaeyoung.inbox@kakao.com",
    );
  });
});
