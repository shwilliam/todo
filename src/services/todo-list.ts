import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import {Todo} from './todo-list.d'

const SAVE_FILE_DIR = os.homedir()
const SAVE_FILE_NAME = 'todo.json'
const SAVE_FILE_PATH = path.join(SAVE_FILE_DIR, SAVE_FILE_NAME)

class TodoList {
  private todos: Todo[] = []

  constructor() {
    if (fs.existsSync(SAVE_FILE_PATH)) {
      // TODO: handle parsing error
      this.todos = JSON.parse(
        fs.readFileSync(SAVE_FILE_PATH, {encoding: 'utf-8'}),
      )
    } else {
      this.save()
    }
  }

  private save() {
    // TODO: check if file exists
    fs.writeFileSync(SAVE_FILE_PATH, JSON.stringify(this.todos), {
      encoding: 'utf-8',
    })
  }

  list() {
    return this.todos
  }

  add(title: string, done = false) {
    this.todos.push({done, title})
    this.save()
  }

  remove(idx: number) {
    const [removedTodo] = this.todos.splice(idx, 1)
    this.save()
    return removedTodo
  }

  done(idx: number, done = true) {
    this.todos[idx].done = done
    this.save()
  }
}

export const todoList = new TodoList()
