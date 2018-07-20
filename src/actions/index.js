export const CURRENCY = 'CURRENCY';
export const INITIAL = 'INITIAL';

export const currencyChange = (id) => ({
    type: CURRENCY,
    id
});

export const initialState = () => ({
    type: INITIAL,
});