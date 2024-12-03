// place files you want to import through the `$lib` alias in this folder.
export function getDate(value: string) {
    const date = new Date(value);

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}


export function formatCurrency(value: number): string {
    if(value == 0) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'MWK',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MWK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value);
}