export function formatDateMonth(props: {
  date?: string | Date;
  today?: string;
}) {
  const { date, today } = props;

  if (!date) return today;

  if (date instanceof Date) {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
    });
  }

  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
  });
}
