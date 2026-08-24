import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import { dashboards } from "@/data/site";

function renderAt(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

describe("application routes", () => {
  it.each([
    ["/", "Pandagentic"],
    ["/about", "Michael Perrine"],
    ["/mission", "Why Pandagentic exists"],
    ["/experience", "Career history"],
    ["/projects", "Work in the open, and work we do"],
    ["/dashboard", "Live dashboards"],
    ["/contact", "Let’s talk about the work"],
  ])("renders %s", (path, heading) => {
    renderAt(path);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("renders the not-found page for an unknown route", () => {
    renderAt("/missing");

    expect(screen.getByRole("heading", { name: "Page not found" })).toBeInTheDocument();
  });
});

describe("navigation and contact", () => {
  it("opens the mobile menu and navigates to contact", async () => {
    const user = userEvent.setup();
    renderAt("/");

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(within(mobileNavigation).getByRole("link", { name: "Contact" }));

    expect(screen.getByRole("heading", { name: "Let’s talk about the work" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument();
  });

  it("exposes required contact fields with the correct input types", () => {
    renderAt("/contact");

    expect(screen.getByLabelText("Name")).toBeRequired();
    expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Message")).toBeRequired();
  });

  it("opens the digital assistant from any page", async () => {
    const user = userEvent.setup();
    renderAt("/projects");

    await user.click(screen.getByRole("button", { name: "Open digital assistant" }));

    expect(screen.getByText("Digital assistant")).toBeInTheDocument();
    expect(screen.getByTitle("Pandagentic digital assistant")).toHaveAttribute(
      "src",
      "https://mestico01-my-twin.hf.space",
    );
    expect(screen.getByRole("link", { name: /Open assistant in a new tab/ })).toHaveAttribute(
      "href",
      "https://huggingface.co/spaces/mestico01/my_twin",
    );
  });

  it("shows each Streamlit dashboard with a live link", () => {
    renderAt("/dashboard");

    for (const item of dashboards) {
      expect(screen.getByRole("heading", { level: 2, name: item.title })).toBeInTheDocument();
      const liveLinks = screen
        .getAllByRole("link", { name: /open live dashboard/i })
        .filter((link) => link.getAttribute("href") === item.href);
      expect(liveLinks.length).toBeGreaterThan(0);
      for (const link of liveLinks) {
        expect(link).toHaveAttribute("target", "_blank");
      }
    }
  });
});
