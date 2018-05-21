const ADD = 'todos/ADD'
const DEL = 'todos/DEL'
const NEW_TASK_TEXT_CHANGED = 'todos/NEW_TASK_TEXT_CHANGED'
const HEADER = 'todos/HEADER'
const TASKSTATE = 'todos/TASKSTATE'

const WORD = 'todos/WORD'

export const add = () => ({ type: ADD })
export const del = (index) => ({ type: DEL, index })

export const newTaskTextChanged = (newText) => ({
    type: NEW_TASK_TEXT_CHANGED,
    newText
})
export const newHeader = (header) => ({
    type: HEADER,
    header
})
export const newTaskState = (taskState, index) => ({
    type: TASKSTATE,
    taskState,
    index
})

export const newSearchByWord = (searchWord) => ({
    type: WORD,
    searchWord
})

const initialState = {
    tasks: [],
    newTaskText: '',
    header: '',
    taskState: 'nietknięte',

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:


            return (state.newTaskText && state.header) ?
                {
                    ...state,
                    newTaskText: '',
                    searchWord: '',
                    header: '',
                    taskState: '',
                    tasks: state.tasks.concat({
                        text: state.newTaskText,
                        header: state.header,
                        taskState: state.taskState,
                    })
                }
                :
                state
        case DEL:
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => (
                    index !== action.index
                ))
            }
        case NEW_TASK_TEXT_CHANGED:
            return {
                ...state,
                newTaskText: action.newText
            }
        case HEADER:
            return {
                ...state,
                header: action.header
            }
        case TASKSTATE:
            return {
                ...state,
                tasks: state.tasks.concat({

                    taskState: state.taskState,
                })
            }
        case WORD:
            return {
                ...state,
                searchWord: action.searchWord
            }
        default:
            return state
    }
}