import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'
import {formatTodoList} from '../utils'

export default class Done extends Command {
  static description = 'mark as done'

  static args = [
    {name: 'index', description: 'index of target todo', required: true},
  ]

  async run() {
    const {args} = this.parse(Done)
    const {index} = args

    const updatedTodo = todoList.done(index)
    if (updatedTodo) {
      this.log(chalk.cyan(`finished '${updatedTodo.title}'`))
    } else this.log(chalk.red('huh?'))

    this.log(...formatTodoList(todoList.list()))
  }
}
