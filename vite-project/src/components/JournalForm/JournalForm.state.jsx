export const INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        data: true
    },
    values: {
        post: undefined,
        title: undefined,
        data: undefined
    },
    isFormReadyToSubmit: false
};
export function formReducer(state, action) {
    switch (action.type) {
        case 'RESET_VALIDITY':
            return {
                ...state,
                isValid: INITIAL_STATE.isValid
            };
        case 'SUBMIT': {
            const titleValidity = action.payload.title?.trim().lenght;
            const postValidity = action.payload.post?.trim().lenght;
            const dataValidity = action.payload.data;
            return {
                values: action.payload,
                isValid: {
                    title: titleValidity,
                    post: postValidity,
                    data: dataValidity
                },
                isFormReadyToSubmit: titleValidity && postValidity && dataValidity
            };

        }

    }
}