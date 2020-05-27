const initialState = {
    fields : {
        "nameFrom":     {value: '', error: ''},
        "emailFrom":    {value: '', error: ''},
        "nameTo":       {value: '', error: ''},
        "emailTo":      {value: '', error: ''},
        "title":        {value: '', error: ''},
        "text":         {value: '', error: ''},
    },
    isValidate: false
}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_FIELD':
            return {
                ...state,
                fields: {...state.fields, [action.name] : {...state.fields[action.name], value: action.text}}
            };
        case 'VALIDATE_FORM':
            return {
                ...state,
                isValidate: action.bool
            };
        case 'SET_ERROR':
            return {
                ...state,
                fields: {...state.fields, [action.name] : {...state.fields[action.name], error: action.error}}
            };
        case 'CLEAR_FORM':
            return {
                ...initialState
            }
        default:
            return state;   
    }
}

export default formReducer