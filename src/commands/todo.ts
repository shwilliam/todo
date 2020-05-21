import {Command} from '@oclif/command'
import {todoList} from '../services'

export default class Todo extends Command {
  static description = 'mark as incomplete'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Todo)
    const {index} = args

    todoList.done(index, false)

    this.log(`Todo #${index} marked as incomplete`)
  }
}
