import {expect, test} from '@oclif/test'

describe('remove', () => {
  test
    .command(['add', 'banana'])
    .stdout()
    .command(['remove', '0'])
    .it('removes todo', ctx => {
      expect(ctx.stdout).to.contain("removed 'banana'")
    })

  test
    .command(['add', 'banana'])
    .command(['add', 'apple'])
    .command(['remove', 'all'])
    .stdout()
    .command(['list'])
    .it('removes all todos', ctx => {
      expect(ctx.stdout).to.not.contain('banana').and.not.contain('apple')
    })
})
