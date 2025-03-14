export function formatCurrency(value: number, locale: string, currency: string) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency}).format(value)
  }