// @vitest-environment jsdom
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import App from "../src/App";
beforeAll(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  window.matchMedia = vi.fn().mockImplementation(() => ({
    matches: true,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
});
beforeEach(() => {
  window.history.replaceState(null, "", "/");
  window.scrollTo = vi.fn();
});
afterEach(cleanup);
function openPage(id: string) {
  window.history.replaceState(null, "", "/#/" + id);
  return render(<App />);
}
describe("Portfolio interaction journeys", () => {
  it("changes concepts and keeps only one selected", async () => {
    openPage("research");
    const user = userEvent.setup();
    const app = screen.getByRole("button", { name: /Standalone app/ });
    await user.click(app);
    expect(app.getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByText("Full control. A new commitment.")).toBeTruthy();
    const wallet = screen.getByRole("button", { name: /Apple Wallet/ });
    expect(wallet.getAttribute("aria-pressed")).toBe("false");
    await user.click(wallet);
    expect(
      screen.getByText("A familiar place. Less to maintain."),
    ).toBeTruthy();
  });
  it("shows the original assistant prototype directly", () => {
    openPage("contribution");
    const prototype = screen.getByRole("img", {
      name: /Original AI Warranty Assistant prototype/i,
    });
    expect(prototype.getAttribute("src")).toBe(
      "/images/assistant-original.webp",
    );
    expect(
      screen.queryByRole("button", { name: /View my original Assistant/ }),
    ).toBeNull();
  });
  it("switches all six final journey stages", async () => {
    openPage("contribution");
    const user = userEvent.setup();
    await user.click(
      screen.getByRole("link", { name: "Final & reflection", exact: true }),
    );
    for (const stage of [
      "Purchase",
      "Save pass",
      "Retrieve",
      "Understand",
      "Claim",
      "Track",
    ]) {
      const button = screen.getByRole("button", {
        name: new RegExp("^0[1-6] *" + stage + "$"),
      });
      await user.click(button);
      expect(button.getAttribute("aria-pressed")).toBe("true");
    }
  });
  it("has valid local section links and named images", () => {
    const { container } = render(<App />);
    for (const a of container.querySelectorAll(
      'a[href^="#"]:not([href^="#/"])',
    ))
      expect(container.querySelector(a.getAttribute("href")!)).toBeTruthy();
    for (const image of container.querySelectorAll("img"))
      expect(image.getAttribute("alt")?.length).toBeGreaterThan(5);
    expect(container.querySelectorAll("h1").length).toBeGreaterThan(0);
  });
});

describe("Chapter navigation", () => {
  const chapters = ["overview", "research", "contribution", "final"];
  it.each(chapters)(
    "opens %s directly with one page title and active navigation",
    (id) => {
      const { container } = openPage(id);
      expect(container.querySelectorAll("h1").length).toBeGreaterThan(0);
      expect(
        container.querySelector('a[aria-current="page"]')?.getAttribute("href"),
      ).toBe("#/" + id);
      if (id !== "contribution")
        expect(
          screen.queryByRole("button", { name: "Where is my receipt?" }),
        ).toBeNull();
    },
  );
  it("navigates through the header without retaining other pages", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(
      screen.getByRole("link", { name: "Research & direction", exact: true }),
    );
    expect(
      screen.getAllByRole("heading", { level: 1 })[0].textContent,
    ).toContain("Saved somewhere.");
    expect(screen.queryByText("Rethinking warranty")).toBeNull();
    expect(document.activeElement?.id).toBe("main");
    await user.click(
      screen.getByRole("link", {
        name: "My work & testing",
        exact: true,
      }),
    );
    expect(
      screen.getByText("I design chatbots that", { exact: false }),
    ).toBeTruthy();
    expect(screen.queryByText("27 of 43 survey respondents.")).toBeNull();
  });
  it("closes the mobile menu on navigation and Escape", async () => {
    render(<App />);
    const user = userEvent.setup();
    const menu = screen.getByRole("button", { name: "Menu" });
    await user.click(menu);
    expect(menu.getAttribute("aria-expanded")).toBe("true");
    await user.keyboard("{Escape}");
    expect(menu.getAttribute("aria-expanded")).toBe("false");
    await user.click(menu);
    await user.click(
      screen.getByRole("link", { name: "My work & testing", exact: true }),
    );
    expect(menu.getAttribute("aria-expanded")).toBe("false");
    expect(
      screen.getByText("The core flow worked.", { exact: false }),
    ).toBeTruthy();
  });
  it("restores chapters on browser hash navigation", async () => {
    openPage("research");
    const { act } = await import("@testing-library/react");
    await act(async () => {
      window.history.replaceState(null, "", "/#/final");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    expect(
      screen.getAllByRole("heading", { level: 1 })[0].textContent,
    ).toContain("One connected journey.");
    await act(async () => {
      window.history.replaceState(null, "", "/#/research");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    expect(
      screen.getAllByRole("heading", { level: 1 })[0].textContent,
    ).toContain("Saved somewhere.");
  });
});
