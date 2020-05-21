import {Command} from '@oclif/command'
import {todoList} from '../services'

export default class List extends Command {
  static description = 'list todos'

  static args = [{name: 'filter'}]

  async run() {
    const {args} = this.parse(List)
    const {filter} = args

    const todos = todoList.list()

    if (todos.length === 0) return this.log('All done')

    switch (filter) {
      case 'todo':
        this.log(JSON.stringify(todos.filter(({done}) => done === false)))
        break

      case 'done':
        this.log(JSON.stringify(todos.filter(({done}) => done === true)))
        break

      default:
        this.log(JSON.stringify(todos))
    }
  }
}
