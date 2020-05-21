# @shwilliam/todo

A todo CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@shwilliam/todo.svg)](https://npmjs.org/package/@shwilliam/todo)
[![Downloads/week](https://img.shields.io/npm/dw/@shwilliam/todo.svg)](https://npmjs.org/package/@shwilliam/todo)
[![License](https://img.shields.io/npm/l/@shwilliam/todo.svg)](https://github.com/shwilliam/todo/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
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

- [`t hello [FILE]`](#t-hello-file)
- [`t help [COMMAND]`](#t-help-command)

## `t hello [FILE]`

describe the command here

```
USAGE
  $ t hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ t hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/shwilliam/todo/blob/v0.1.0/src/commands/hello.ts)_

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

<!-- commandsstop -->
