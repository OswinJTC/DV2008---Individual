import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import {
  OverviewPage,
  ResearchPage,
  DirectionsPage,
  ContributionPage,
  TestingPage,
  ExperiencePage,
  ReflectionPage,
} from "./pages";

const pages = [
  {
    id: "overview",
    label: "Overview",
    title: "The project",
    component: OverviewPage,
  },
  {
    id: "research",
    label: "Research & direction",
    title: "The problem and the path forward",
    component: () => (
      <>
        <ResearchPage />
        <DirectionsPage />
      </>
    ),
  },
  {
    id: "contribution",
    label: "My work & testing",
    title: "The Assistant and what changed",
    component: () => (
      <>
        <ContributionPage />
        <TestingPage />
      </>
    ),
  },
  {
    id: "final",
    label: "Final & reflection",
    title: "The connected experience",
    component: () => (
      <>
        <ExperiencePage />
        <ReflectionPage />
      </>
    ),
  },
];
function currentPage() {
  const id = window.location.hash.replace(/^#\//, "");
  return pages.some((p) => p.id === id) ? id : "overview";
}
export default function App() {
  const [pageId, setPageId] = useState(currentPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const main = useRef<HTMLElement>(null);
  const initial = useRef(true);
  const index = pages.findIndex((p) => p.id === pageId);
  const page = pages[index];
  const Page = page.component;
  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash === "#main") return;
      setPageId(currentPage());
      setMenuOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        document
          .getElementById("menu-toggle")
          ?.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("hashchange", handleNavigation);
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("hashchange", handleNavigation);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);
  useEffect(() => {
    document.title = `${page.label} — Warranty, understood · Oswin Chen`;
    if (!initial.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      main.current?.focus({ preventScroll: true });
    }
    initial.current = false;
  }, [page]);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#/overview" aria-label="Oswin — overview">
          oswin<span>✳</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-controls="page-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <nav
          id="page-navigation"
          className={menuOpen ? "is-open" : ""}
          aria-label="Case study navigation"
        >
          {pages.map((p) => (
            <a
              key={p.id}
              href={`#/${p.id}`}
              aria-current={p.id === pageId ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {p.label}
            </a>
          ))}
        </nav>
      </header>
      <main
        id="main"
        ref={main}
        tabIndex={-1}
        className={`page page-${pageId}`}
      >
        {index > 0 && (
          <div className="page-context wrap">
            <a href="#/overview">Warranty, understood</a>
            <span>/</span>
            <span>{page.label}</span>
            <span className="chapter-count">
              Chapter {String(index).padStart(2, "0")} / 03
            </span>
          </div>
        )}
        <div key={pageId}>
          <Page />
        </div>
        <nav className="page-pagination wrap" aria-label="Chapter navigation">
          {index > 0 ? (
            <a href={`#/${pages[index - 1].id}`}>
              <span>
                <ArrowLeft size={17} /> Previous
              </span>
              <strong>{pages[index - 1].label}</strong>
            </a>
          ) : (
            <div />
          )}
          {index < pages.length - 1 ? (
            <a className="next-page" href={`#/${pages[index + 1].id}`}>
              <span>
                Next chapter <ArrowRight size={17} />
              </span>
              <strong>{pages[index + 1].title}</strong>
            </a>
          ) : (
            <a className="next-page" href="#/overview">
              <span>
                Back to the project <ArrowUpRight size={17} />
              </span>
              <strong>Overview</strong>
            </a>
          )}
        </nav>
      </main>
      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <div>
            <a className="wordmark" href="#/overview">
              oswin<span>✳</span>
            </a>
            <p>Chen Jui Tai · Product / UX Designer</p>
          </div>
          <div className="footer-details">
            <span>Matriculation · U2221528F</span>
            <a href="mailto:ch0005ai@e.ntu.edu.sg">ch0005ai@e.ntu.edu.sg</a>
          </div>
          <a href="#/final">
            Credits & reflection <ArrowUpRight size={18} />
          </a>
        </div>
      </footer>
    </MotionConfig>
  );
}
