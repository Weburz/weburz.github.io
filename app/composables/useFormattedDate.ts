const longFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const shortFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const formatDate = (
  raw: string | Date | undefined,
  variant: "long" | "short",
) => {
  if (!raw) return null;
  const d = raw instanceof Date ? raw : new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  return {
    display: (variant === "short" ? shortFmt : longFmt).format(d),
    iso: d.toISOString().slice(0, 10),
  };
};

export const useFormattedDate = (
  source: MaybeRefOrGetter<string | Date | undefined>,
  variant: "long" | "short" = "long",
) => computed(() => formatDate(toValue(source), variant));
