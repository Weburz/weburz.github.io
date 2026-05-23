export type CategoryName = "Infrastructure" | "Data" | "People" | "Open Source";

export interface CategoryStyle {
  from: string;
  to: string;
  icon: string;
}

const CATEGORY_STYLES: Record<CategoryName, CategoryStyle> = {
  Infrastructure: { from: "#d0dbe7", to: "#557ca2", icon: "i-lucide-server" },
  Data: { from: "#dbeafe", to: "#1e40af", icon: "i-lucide-database" },
  People: { from: "#fff8cf", to: "#fcc800", icon: "i-lucide-users" },
  "Open Source": { from: "#fde047", to: "#557ca2", icon: "i-lucide-package" },
};

const DEFAULT_STYLE: CategoryStyle = {
  from: "#cbd5e1",
  to: "#64748b",
  icon: "i-lucide-file-text",
};

export const ALL_CATEGORIES = Object.keys(CATEGORY_STYLES) as [
  CategoryName,
  ...CategoryName[],
];

export const getCategoryStyle = (
  category?: CategoryName | (string & {}),
): CategoryStyle => {
  if (!category) return DEFAULT_STYLE;
  return (
    CATEGORY_STYLES[category as CategoryName] ?? {
      ...DEFAULT_STYLE,
      icon: "i-lucide-tag",
    }
  );
};
