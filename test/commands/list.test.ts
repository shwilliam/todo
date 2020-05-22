import {expect, test} from '@oclif/test'

describe('list', () => {
  test
    .command(['add', 'banana'])
    .command(['add', 'apple'])
    .stdout()
    .command(['list'])
    .it('lists todos', ctx => {
      expect(ctx.stdout).to.contain('banana').and.contain('apple')
    })
})
