import {expect, test} from '@oclif/test'

describe('todo', () => {
  test
    .command(['add', 'banana'])
    .command(['done', '0'])
    .stdout()
    .command(['todo', '0'])
    .it('marks todo', ctx => {
      expect(ctx.stdout).to.contain("still need to 'banana'")
    })
})
