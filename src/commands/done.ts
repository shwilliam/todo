import {Command} from '@oclif/command'
import {todoList} from '../services'

export default class Done extends Command {
  static description = 'mark as done'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Done)
    const {index} = args

    todoList.done(index)

    this.log(`Completed #${index}`)
  }
}
