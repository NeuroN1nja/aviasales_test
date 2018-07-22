export const CURRENCY = 'CURRENCY';
export const INITIAL = 'INITIAL';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const TOGGLE_ALL_CHECKBOX = 'TOGGLE_ALL_CHECKBOX';
export const TOGGLE_ONLY_CHECKBOX = 'TOGGLE_ONLY_CHECKBOX';
export const TOGGLE_ALL_OBSERVER = 'TOGGLE_ALL_OBSERVER';

export const currencyChange = (id) => ({
    type: CURRENCY,
    id
});

export const initialState = () => ({
    type: INITIAL,
});

export const toggleCheckbox = (name, checked) => ({
    type: TOGGLE_CHECKBOX,
    payload: {name, checked}
});

export const toggleAllCheckbox = (checked) => ({
    type: TOGGLE_ALL_CHECKBOX,
    payload: {checked}
});

export const toggleOnlyCheckbox = (name) => ({
    type: TOGGLE_ONLY_CHECKBOX,
    payload: {name}
});


export const toggleAllObserver = (all) => ({
    type: TOGGLE_ALL_OBSERVER,
    payload: {all}
});