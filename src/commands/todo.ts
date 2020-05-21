import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'

export default class Todo extends Command {
  static description = 'mark as incomplete'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Todo)
    const {index} = args

    const updatedTodo = todoList.done(index, false)

    if (updatedTodo) this.log(chalk.green('get to it'))
    else this.log(chalk.red('huh?'))
  }
}
