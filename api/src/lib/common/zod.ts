import { z } from 'zod'

export const userExampleSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  name: z.string().min(1, { message: 'Name is required' }),
})
