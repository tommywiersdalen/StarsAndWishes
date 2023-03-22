function isValidUsername(value) {
    return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValidEmail(value) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return value && value.match(validRegex);
}

function isValidPassword(value) {
    return value && value.trim().length >= 8;
}

function isConfirmedPassowrd(password1, password2) {
    return password2 === password1
}

export function validateLoginCredentials(input) {
    let validationErrors = {};



    if (!isValidEmail(input.email)) {
        validationErrors.email = 'Invalid email address.'
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = 'Invalid password. Must be at least 8 characters long.'
    }


    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}
export function validateSignupCredentials(input) {
    let validationErrors = {};
    if (!isValidUsername(input.userName)) {
        validationErrors.userName = "User name must not be empty and not longer than 30 characters"
    }

    if (!isValidEmail(input.email)) {
        validationErrors.email = 'Invalid email address.'
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = 'Invalid password. Must be at least 8 characters long.'
    }
    if (!isConfirmedPassowrd(input.password2, input.password)) {
        validationErrors.password = "Passwords do not match";
    }
}