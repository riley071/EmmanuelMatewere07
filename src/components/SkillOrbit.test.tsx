import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SkillOrbit from "./SkillOrbit";
import { ORBIT_SKILLS } from "./orbitSkills";

// Exercise the HTML interaction contract without requiring a GPU in Jest.
jest.mock("./SkillOrbitScene", () => ({ __esModule: true, default: () => null }));

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", { writable: true, value: jest.fn().mockImplementation(query => ({
    matches: true, media: query, onchange: null,
    addListener: jest.fn(), removeListener: jest.fn(),
    addEventListener: jest.fn(), removeEventListener: jest.fn(), dispatchEvent: jest.fn(),
  })) });
  window.IntersectionObserver = class {
    root = null; rootMargin = ""; thresholds = [];
    observe = jest.fn(); unobserve = jest.fn(); disconnect = jest.fn(); takeRecords = () => [];
  } as unknown as typeof IntersectionObserver;
});

test("keeps all exact skill labels and toggles an accessible description", () => {
  render(<SkillOrbit />);
  expect(screen.getAllByRole("button")).toHaveLength(14);
  ORBIT_SKILLS.forEach(skill => expect(screen.getByRole("button", { name: skill.label })).toBeInTheDocument());
  const react = screen.getByRole("button", { name: "React" });
  fireEvent.click(react);
  expect(react).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("tooltip")).toHaveTextContent(ORBIT_SKILLS[1].description);
  expect(react).toHaveAttribute("aria-describedby", screen.getByRole("tooltip").id);
  fireEvent.click(react);
  expect(react).toHaveAttribute("aria-pressed", "false");
});

test("selection resets using Escape, empty space, and an outside click", () => {
  render(<SkillOrbit />);
  const skill = screen.getByRole("button", { name: "Figma" });
  fireEvent.click(skill);
  fireEvent.keyDown(document, { key: "Escape" });
  expect(skill).toHaveAttribute("aria-pressed", "false");
  fireEvent.click(skill);
  fireEvent.click(screen.getByRole("group", { name: "Interactive core skills" }));
  expect(skill).toHaveAttribute("aria-pressed", "false");
  fireEvent.click(skill);
  fireEvent.pointerDown(document.body);
  expect(skill).toHaveAttribute("aria-pressed", "false");
});
