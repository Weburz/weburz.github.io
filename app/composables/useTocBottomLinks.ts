type PageRef = Ref<{ stem?: string; extension?: string } | null | undefined>;

export const useTocBottomLinks = (page: PageRef) => {
  const { toc } = useAppConfig();
  return computed(() => {
    const out = [];
    if (toc?.bottom?.edit) {
      out.push({
        icon: "i-lucide-external-link",
        label: "Edit this page",
        to: `${toc.bottom.edit}/${page.value?.stem}.${page.value?.extension}`,
        target: "_blank",
      });
    }
    return [...out, ...(toc?.bottom?.links || [])].filter(Boolean);
  });
};
