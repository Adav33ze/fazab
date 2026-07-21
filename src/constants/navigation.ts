/**
 * Primary site navigation.
 *
 * Routes follow CLAUDE.md's declared feature-folder architecture
 * (features/about, features/services, features/projects,
 * features/contact) — only "/" exists so far, so the other three will
 * 404 until those pages are built. Centralized here so Navbar.tsx and
 * MobileMenu.tsx render identical links from one source, per CLAUDE.md's
 * "avoid duplicated code."
 */
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
