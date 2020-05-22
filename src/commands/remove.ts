import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'
import {formatTodoList} from '../utils'

export default class Remove extends Command {
  static description = 'remove todo'

  static args = [
    {
      name: 'target',
      description: "index of target todo or 'all'",
      required: true,
    },
  ]

  async run() {
    const {args} = this.parse(Remove)
    const {target} = args

    if (target) {
      if (target === 'all') {
        todoList.removeAll()
        this.log(chalk.cyan('todos cleared'))
        return
      }

      const removedTodo = todoList.remove(target)

      if (removedTodo) {
        this.log(chalk.cyan(`removed '${removedTodo.title}'`))
      } else this.log(chalk.red('huh?'))
    } else {
      this.log(chalk.red('which?'))
    }

    this.log(...formatTodoList(todoList.list()))
  }
}
