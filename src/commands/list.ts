import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'

export default class List extends Command {
  static description = 'list todos'

  static args = [{name: 'filter'}]

  async run() {
    const {args} = this.parse(List)
    const {filter} = args

    const allTodos = todoList.list()

    if (allTodos.length === 0) return this.log(chalk.green('all done'))

    let filteredTodos
    switch (filter) {
      case 'todo':
        filteredTodos = allTodos.filter(({done}) => done === false)
        break

      case 'done':
        filteredTodos = allTodos.filter(({done}) => done === true)
        break

      default:
        filteredTodos = allTodos
    }

    if (filteredTodos.length === 0)
      return this.log(
        chalk.green(`nothing ${filter === 'todo' ? 'to do' : 'done'}`),
      )

    this.log(
      ...filteredTodos.map(({done, title, idx}) => {
        const todoRow = `\n[${idx}] ${title}`
        return done ? chalk.green(todoRow) : chalk.red(todoRow)
      }),
      '\n',
    )
  }
}
