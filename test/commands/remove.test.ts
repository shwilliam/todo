import {expect, test} from '@oclif/test'

describe('remove', () => {
  test
    .command(['add', 'banana'])
    .stdout()
    .command(['remove', '0'])
    .it('removes todo', ctx => {
      expect(ctx.stdout).to.contain("removed 'banana'")
    })
})
