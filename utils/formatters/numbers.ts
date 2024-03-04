type FormatCurrencyOptions = Pick<Intl.NumberFormatOptions,
    "maximumFractionDigits" | "minimumFractionDigits" | "minimumIntegerDigits" |
    "minimumSignificantDigits" | "maximumSignificantDigits">

export const formatCurrency = (
    value: number,
    options?: FormatCurrencyOptions
) => {
    return Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", ...options }).format(value)
}

export const formatSquareMeter = (value: number) => {
    return `${Intl.NumberFormat("pt-BR", { minimumFractionDigits: 0 }).format(value)} m²`
}