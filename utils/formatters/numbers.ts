type FormatCurrencyOptions = Pick<Intl.NumberFormatOptions,
    "maximumFractionDigits" | "minimumFractionDigits" | "minimumIntegerDigits" |
    "minimumSignificantDigits" | "maximumSignificantDigits">

export const formatCurrency = (
    value: number,
    options?: FormatCurrencyOptions
) => {
    return Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", ...options }).format(value)
}