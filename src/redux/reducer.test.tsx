import reducer, { initialState } from "./reducer";
import { ReactDOM } from "react";
import React from "react";
import { addNameAction } from "./actions";
import { IState, ITodo } from "./types";
import { ADD_NAME, ADD_TASK } from "./actionTypes";

const currentState: IState = {
  name: '',
  todos: [
    {text: 'test task', id: '2', isComplete: true},
    {text: 'test task 2', id: '4', isComplete: false},
    {text: 'text task 3', id: '6', isComplete: false}
  ]
}