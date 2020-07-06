import * as chalk from 'chalk'
import {IndexedTodo} from './format-todo-list.d'

export const formatTodoList = (todos: IndexedTodo[]) => {
  const todoMaxLength = todos.reduce(
    (maxLength, val) =>
      val.title.length > maxLength ? val.title.length : maxLength,
    0,
  )

  return [
    ...todos.map(({done, important, title, idx}) => {
      const todoRow = `\n [${idx}] ${title} `.padEnd(todoMaxLength + 7, ' ')
      const doneIndicator = done ? chalk.dim.strikethrough : chalk.black
      return important ? doneIndicator.bold(todoRow) : doneIndicator(todoRow)
    }),
    '\n',
  ]
}
