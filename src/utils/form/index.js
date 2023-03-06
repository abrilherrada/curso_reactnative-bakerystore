const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 8;

export const UPDATE_FORM = 'UPDATE_FORM';

export const validateInput = (type, value) => {
    let hasError = false;
    let error = '';

    switch (type) {
        case 'email':
            if(value.trim() === '') {
                hasError = true;
                error = 'El correo es necesario.';
            } else if (!emailFormat.test(value)) {
                hasError = true;
                error = 'El correo no es válido.';
            } else {
                hasError = false;
                error = '';
            }
            break;

        case 'password':
            if(value.trim() === '') {
                hasError = true;
                error = 'La contraseña es necesaria.';
            } else if (value.length < minPasswordLength) {
                hasError = true;
                error = `La contraseña debe tener ${minPasswordLength} caracteres como mínimo.`;
            } else {
                hasError = false;
                error = '';
            }
            break;
            
        default:
            break;
    }
    return {hasError, error};
};

export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if (key !== name && hasError) {
            isFormValid = false;
            break;
        } else if (key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
        },
    });
};