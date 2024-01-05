export function formatDateMonth(props: { date?: string; today?: string }) {
  const { date, today } = props;

  if (!date) return today;

  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
  });
}
