import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'

export default class Remove extends Command {
  static description = 'remove todo'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Remove)
    const {index} = args

    if (index) {
      const removedTodo = todoList.remove(index)

      if (removedTodo) this.log(chalk.red(`removed ${removedTodo.title}`))
      else this.log(chalk.red('huh?'))
    } else {
      this.log(chalk.red('which?'))
    }
  }
}
