import {Command} from '@oclif/command'
import {todoList} from '../services'

export default class Add extends Command {
  static description = 'add todo'

  static args = [{name: 'todo'}]

  async run() {
    const {args} = this.parse(Add)
    const {todo} = args

    if (todo) {
      todoList.add(todo)
      this.log('Todo added')
    } else {
      this.log('Pass something that needs to get done')
    }
  }
}
