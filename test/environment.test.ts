import {todoList} from '../src/services/todo-list'

afterEach(() => {
  todoList.reset()
})

beforeEach(() => {
  todoList.reset()
})
