import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'
import {formatTodoList} from '../utils'

export default class List extends Command {
  static description = 'list todos'

  static args = [
    {
      name: 'filter',
      description: 'filter output by status',
      required: false,
      options: ['todo', 'done', 'important'],
    },
  ]

  async run() {
    const {args} = this.parse(List)
    const {filter} = args

    const allTodos = todoList.list()

    if (allTodos.length === 0) return this.log(chalk.cyan('all done'))

    let filteredTodos
    switch (filter) {
      case 'todo':
        filteredTodos = allTodos.filter(({done}) => done === false)
        break

      case 'done':
        filteredTodos = allTodos.filter(({done}) => done === true)
        break

      case 'important':
        filteredTodos = allTodos.filter(({important}) => important === true)
        break

      default:
        filteredTodos = allTodos
    }

    if (filteredTodos.length === 0)
      return this.log(
        chalk.cyan(`nothing ${filter === 'todo' ? 'to do' : filter}`),
      )

    this.log(...formatTodoList(filteredTodos))
  }
}
