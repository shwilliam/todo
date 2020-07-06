import {expect, test} from '@oclif/test'

describe('add', () => {
  test
    .stdout()
    .command(['add', 'banana'])
    .it('adds todo', ctx => {
      expect(ctx.stdout).to.contain('added').and.to.contain('banana')
    })

  test
    .stdout()
    .command(['add', 'apple!'])
    .it('adds important todo', ctx => {
      expect(ctx.stdout)
        .to.contain('added')
        .to.contain('apple')
        .and.to.contain('important')
    })
})
