import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

import { add, del, newTaskTextChanged, newHeader, newTaskState, newSearchByWord } from '../state/todos'
import { RaisedButton } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Delete from 'material-ui/svg-icons/action/delete';

import PaperContainer from './UI'

const ToDo = (props) => (
    <div>
        <PaperContainer>

            <TextField
                name={'new-task'}
                value={props.newTaskText}
                onChange={props.onNewTaskTextChanged}
                placeholder={'type name of task'}
            />
        </PaperContainer>
        <PaperContainer>
            <TextField
                name={'new-task'}
                value={props.header}
                onChange={props.onNewHeader}
                placeholder={'type title of task'}
            />
        </PaperContainer>
        <RaisedButton
            label={'Add task!'}
            onClick={props.onAddTaskClick}
            fullWidth={true}
        />

        {
            props.tasks.map((task, i) => (
                <div key={i} >
                    {<h2 >Title:{task.header}</h2>}
                    {<h3 >{task.text}</h3>}
                    <RadioButtonGroup
                        name={'progres'}
                        defaultSelected="nietknięte"
                        onChange={props.onChangeRadio}
                        style={{ display: 'flex' }}

                    >
                        <RadioButton
                            value="nietknięte"
                            label="Simple"
                            style={{ color: 'red' }}

                        />
                        <RadioButton
                            value="wtrakcie"
                            label="Selected by default"
                            style={{ color: 'yellow' }}

                        />
                        <RadioButton
                            value="zrobione"
                            label="Custom icon"
                            style={{ color: 'green' }}


                        />
                    </RadioButtonGroup>
                    <Delete onClick={() => props.deleteTaskHandler(i)} />
                </div>
            ))
        }


        <TextField
            name={'new'}
            value={props.word}
            onChange={props.onSearch}
            placeholder={'type title'}
        />


        {props.tasks.filter((el, i) => {
            if (el.header.indexOf(props.word) !== -1) return true
            else return false

        }).map((el, i) => (
            <div key={i}>{el.text}</div>
        ))}





    </div>
)

const mapStateToProps = state => ({
    header: state.todos.header,
    tasks: state.todos.tasks,
    newTaskText: state.todos.newTaskText,
    taskState: state.todos.taskState,
    word: state.todos.searchWord,
    index: state.todos.index
})

const mapDispatchToProps = dispatch => ({
    deleteTaskHandler: (index) => dispatch(del(index)),
    onNewTaskTextChanged: (event, value) => dispatch(newTaskTextChanged(value)),
    onAddTaskClick: () => dispatch(add()),
    onNewHeader: (event, value) => dispatch(newHeader(value)),
    onChangeRadio: (event, value) => dispatch(newTaskState(value)),
    onSearch: (event, value) => dispatch(newSearchByWord(value))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)