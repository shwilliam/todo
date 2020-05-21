import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'

export default class Done extends Command {
  static description = 'mark as done'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Done)
    const {index} = args

    const updatedTodo = todoList.done(index)
    if (updatedTodo) this.log(chalk.green(`finished ${updatedTodo.title}`))
    else this.log(chalk.red('huh?'))
  }
}
