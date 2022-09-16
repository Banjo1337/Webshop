export default function getFormattedCurrency(
  value: number,
  language = "sv-SE",
  style = "currency",
  currency = "SEK",
) {
  return new Intl.NumberFormat(language, { style: style, currency: currency }).format(value);
}
