export function formatTimeframe(props: {
  start?: string | Date;
  end?: string | Date;
}) {
  const { start, end } = props;

  const startFormatted = formatDateMonth({ date: start });
  const endFormatted = formatDateMonth({ date: end, today: "heute" });

  if (!startFormatted && !endFormatted) return "";

  if (startFormatted && !endFormatted) return `${startFormatted} – heute`;
  if (!startFormatted && endFormatted) return `${endFormatted}`;

  return `${startFormatted} – ${endFormatted}`;
}

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
