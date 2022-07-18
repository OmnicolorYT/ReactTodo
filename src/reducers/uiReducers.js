import initialState from './initialState'

export default function uiReducers(state = initialState.ui, action) {
    switch(action.type) {
        case 'SWITCH_SORT':
            return {
                ...state,
                sort: action.payload.value
            }
        case "EDIT":
            const {id, text} = action.payload
            return {
                ...state,
                editId: id,
                editText: text
            }
        default: return state;
    }
}