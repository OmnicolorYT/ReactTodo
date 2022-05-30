import initialState from './initialState'

export default function uiReducers(state = initialState.ui, action) {
    switch(action.type) {
        case 'SWITCH_SORT':
            if (action.payload === "ALL") {
                return {
                    ...state,
                    sort: action.payload.value
                }
            }
            else if (action.payload === "DONE") {
                return {
                    ...state,
                    sort: action.payload.value
                }
            }
            else {
                return {
                    ...state,
                    sort: action.payload.value
                }
            }
        case "EDIT":
            return {
                ...state,
                editId: action.payload.id,
                editText: action.payload.text
            }
        default: return state;
    }
}