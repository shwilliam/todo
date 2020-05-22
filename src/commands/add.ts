import {Command} from '@oclif/command'
import * as chalk from 'chalk'
import {todoList} from '../services'
import {formatTodoList} from '../utils'

export default class Add extends Command {
  static description = 'add todo'

  static args = [{name: 'todo', description: 'todo text', required: true}]

  async run() {
    const {args} = this.parse(Add)
    const {todo} = args

    if (todo) {
      const newTodo = todoList.add(todo)
      this.log(chalk.cyan(`added '${newTodo.title}'`))
    } else {
      this.log(chalk.red('what to do?'))
    }

    this.log(...formatTodoList(todoList.list()))
  }
}
