const CURRENCY_FORMATTER = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
});

export default function FormatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
}
