import {expect, test} from '@oclif/test'

describe('add', () => {
  test
    .stdout()
    .command(['add', 'banana'])
    .it('adds todo', ctx => {
      expect(ctx.stdout).to.contain("added 'banana'")
    })
})
