import {Command} from '@oclif/command'
import {todoList} from '../services'

export default class Remove extends Command {
  static description = 'remove todo'

  static args = [{name: 'index'}]

  async run() {
    const {args} = this.parse(Remove)
    const {index} = args

    if (index) {
      const removedTodo = todoList.remove(index)
      this.log(`Removed: ${removedTodo.title}`)
    } else {
      this.log('Pass the index to remove')
    }
  }
}
