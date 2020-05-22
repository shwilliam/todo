import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import {Todo} from './todo-list.d'

const SAVE_FILE_DIR =
  process.env['NODE_ENV'] === 'test' ? os.tmpdir() : os.homedir()
const SAVE_FILE_NAME =
  process.env['NODE_ENV'] === 'test' ? 'todo.test.json' : 'todo.json'
const SAVE_FILE_PATH = path.join(SAVE_FILE_DIR, SAVE_FILE_NAME)

class TodoList {
  private todos: Todo[] = []

  constructor() {
    if (this.exists()) {
      try {
        this.todos = JSON.parse(
          fs.readFileSync(SAVE_FILE_PATH, {encoding: 'utf-8'}),
        )
      } catch (_) {
        console.log(`Hmmm.. ${SAVE_FILE_NAME} looks funny`)
      }
    } else {
      this.write()
    }
  }

  private exists() {
    return fs.existsSync(SAVE_FILE_PATH)
  }

  private write() {
    fs.writeFileSync(SAVE_FILE_PATH, JSON.stringify(this.todos), {
      encoding: 'utf-8',
    })
  }

  list() {
    return this.todos.map((todo, idx) => ({...todo, idx}))
  }

  add(title: string, done = false) {
    const todo: Todo = {title, done}
    this.todos.push(todo)
    this.write()
    return todo
  }

  remove(idx: number) {
    const [removedTodo] = this.todos.splice(idx, 1)
    this.write()
    return removedTodo
  }

  done(idx: number, done = true) {
    if (!this.todos[idx]) return

    this.todos[idx].done = done
    this.write()
    return this.todos[idx]
  }

  reset() {
    this.todos = []
    if (this.exists()) fs.unlinkSync(SAVE_FILE_PATH)
  }
}

export const todoList = new TodoList()
