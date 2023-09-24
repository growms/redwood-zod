import { userExampleSchema } from './zod'

describe('zod', () => {
  it('has userExampleSchema const', () => {
    expect(userExampleSchema).not.toBeUndefined()
  })
})
