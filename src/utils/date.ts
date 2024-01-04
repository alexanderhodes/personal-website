export function formatDateMonth(date?: string) {
  if (!date) return "heute";

  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
  });
}
