const initialState = {
    table : {
    },
}


const formReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
            return {
                ...state,
                table: {...state.table, [action.id] : {
                    subject : action.subject, 
                    date: action.date,
                    status: action.status
                    }
                }
            }
        default:
            return state;
    }
}

export default formReducer
