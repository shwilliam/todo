import {expect, test} from '@oclif/test'

describe('list', () => {
  it('notifies of empty list', () => {
    test
      .stdout()
      .command(['list'])
      .it('lists todos', ctx => {
        expect(ctx.stdout).to.contain('all done')
      })
  })

  it('lists all todos', () => {
    test
      .command(['add', 'banana'])
      .command(['add', 'apple'])
      .stdout()
      .command(['list'])
      .it('lists todos', ctx => {
        expect(ctx.stdout).to.contain('banana').and.contain('apple')
      })
  })

  it('lists done todos', () => {
    test
      .command(['add', 'banana'])
      .command(['add', 'apple'])
      .command(['done', '1'])
      .stdout()
      .command(['list', 'done'])
      .it('lists done todos', ctx => {
        expect(ctx.stdout).to.contain('apple').and.not.contain('banana')
      })
  })

  it('lists incomplete todos', () => {
    test
      .command(['add', 'banana'])
      .command(['add', 'apple'])
      .command(['done', '1'])
      .stdout()
      .command(['list', 'done'])
      .it('lists done todos', ctx => {
        expect(ctx.stdout).to.contain('banana').and.not.contain('apple')
      })
  })
})
