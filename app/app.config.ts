export default defineAppConfig({
  ui: {
    colors: {
      primary: "burzyellow",
      secondary: "burzblue",
      neutral: "slate",
      success: "green",
      info: "blue",
      warning: "amber",
      error: "red",
    },
    footer: {
      slots: {
        root: "border-t border-default",
        left: "text-sm text-muted",
      },
    },
  },
  seo: {
    siteName: "Tech at Weburz",
  },
  header: {
    title: "tech.weburz",
    to: "/",
    search: true,
    colorMode: true,
    nav: [
      { label: "Blog", to: "/blog" },
      { label: "Open Source", to: "/open-source" },
      { label: "Careers", to: "/careers" },
    ],
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/Weburz/tech.weburz.com",
        target: "_blank",
        "aria-label": "tech.weburz.com on GitHub",
      },
    ],
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Weburz`,
    colorMode: false,
    links: [
      {
        icon: "i-lucide-rss",
        to: "/rss.xml",
        external: true,
        "aria-label": "RSS feed",
      },
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/Weburz",
        target: "_blank",
        "aria-label": "Weburz on GitHub",
      },
      {
        icon: "i-lucide-globe",
        to: "https://weburz.com",
        target: "_blank",
        "aria-label": "weburz.com",
      },
    ],
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Page",
      edit: "https://github.com/Weburz/tech.weburz.com/edit/main/content",
      links: [],
    },
  },
});
