import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'
import {formatTodoList} from '../utils'

export default class Todo extends Command {
  static description = 'mark as incomplete'

  static args = [{name: 'index', description: 'index of target todo'}]

  async run() {
    const {args} = this.parse(Todo)
    const {index} = args

    const updatedTodo = todoList.done(index, false)

    if (updatedTodo) {
      this.log(chalk.cyan(`still need to '${updatedTodo.title}'`))
    } else this.log(chalk.red('huh?'))

    this.log(...formatTodoList(todoList.list()))
  }
}
