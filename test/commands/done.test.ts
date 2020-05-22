import {expect, test} from '@oclif/test'

describe('done', () => {
  test
    .command(['add', 'banana'])
    .stdout()
    .command(['done', '0'])
    .it('marks complete', ctx => {
      expect(ctx.stdout).to.contain("finished 'banana'")
    })
})
