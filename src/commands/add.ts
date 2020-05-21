import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'

export default class Add extends Command {
  static description = 'add todo'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add)
    const {todo} = args

    if (todo) {
      todoList.add(todo)
      this.log(chalk.green('todo added'))
    } else {
      this.log(chalk.red('what to do?'))
    }
  }
}
