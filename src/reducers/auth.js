const updateAuth = (state, action) => {
    if (state === undefined) {
        return {
            isSignIn: false,
        };
    }
    switch (action.type) {
        case 'SIGN_IN_REQUESTED':
            return {
                isSignIn: false,
            };

        case 'SIGN_IN_SUCCESS':
            return {
                isSignIn: true,
            };

        case 'SIGN_IN_FAILURE':
            return {
                isSignIn: false,
            };

        case 'SIGN_UP_REQUESTED':
            return {
                isSignIn: false,
            };

        case 'SIGN_UP_SUCCESS':
            return {
                isSignIn: true,
            };

        case 'SIGN_UP_FAILURE':
            return {
                isSignIn: false,
            };

        default:
            return state.auth;
    }
};

export default updateAuth;