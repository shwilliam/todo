# @shwilliam/todo

A todo CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@shwilliam/todo.svg)](https://npmjs.org/package/@shwilliam/todo)
[![Downloads/week](https://img.shields.io/npm/dw/@shwilliam/todo.svg)](https://npmjs.org/package/@shwilliam/todo)
[![License](https://img.shields.io/npm/l/@shwilliam/todo.svg)](https://github.com/shwilliam/todo/blob/master/package.json)

<!-- toc -->
* [@shwilliam/todo](#shwilliamtodo)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @shwilliam/todo
$ t COMMAND
running command...
$ t (-v|--version|version)
@shwilliam/todo/0.1.0 darwin-x64 node-v14.1.0
$ t --help [COMMAND]
USAGE
  $ t COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`t add [TODO]`](#t-add-todo)
* [`t done [INDEX]`](#t-done-index)
* [`t help [COMMAND]`](#t-help-command)
* [`t list [FILTER]`](#t-list-filter)
* [`t remove [INDEX]`](#t-remove-index)
* [`t todo [INDEX]`](#t-todo-index)

## `t add [TODO]`

add todo

```
USAGE
  $ t add [TODO]
```

_See code: [src/commands/add.ts](https://github.com/shwilliam/todo/blob/v0.1.0/src/commands/add.ts)_

## `t done [INDEX]`

mark as done

```
USAGE
  $ t done [INDEX]
```

_See code: [src/commands/done.ts](https://github.com/shwilliam/todo/blob/v0.1.0/src/commands/done.ts)_

## `t help [COMMAND]`

display help for t

```
USAGE
  $ t help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `t list [FILTER]`

list todos

```
USAGE
  $ t list [FILTER]
```

_See code: [src/commands/list.ts](https://github.com/shwilliam/todo/blob/v0.1.0/src/commands/list.ts)_

## `t remove [INDEX]`

remove todo

```
USAGE
  $ t remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/shwilliam/todo/blob/v0.1.0/src/commands/remove.ts)_

## `t todo [INDEX]`

mark as incomplete

```
USAGE
  $ t todo [INDEX]
```

_See code: [src/commands/todo.ts](https://github.com/shwilliam/todo/blob/v0.1.0/src/commands/todo.ts)_
<!-- commandsstop -->
