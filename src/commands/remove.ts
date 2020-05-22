import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'
import {formatTodoList} from '../utils'

export default class Remove extends Command {
  static description = 'remove todo'

  static args = [
    {name: 'index', description: 'index of target todo', required: true},
  ]

  async run() {
    const {args} = this.parse(Remove)
    const {index} = args

    if (index) {
      const removedTodo = todoList.remove(index)

      if (removedTodo) {
        this.log(chalk.cyan(`removed '${removedTodo.title}'`))
      } else this.log(chalk.red('huh?'))
    } else {
      this.log(chalk.red('which?'))
    }

    this.log(...formatTodoList(todoList.list()))
  }
}
