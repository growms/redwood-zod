import { ZodError } from 'zod'

import { RedwoodError } from '@redwoodjs/api'

export class ZodValidationError extends RedwoodError {
  constructor(error: ZodError) {
    const { issues } = error
    const errorMessage = 'Validation failed'

    const messages = {}

    const extensions = {
      code: 'BAD_USER_INPUT',
      properties: {
        messages,
      },
    }

    // Process each error and add it to messages object
    for (const { message, path } of issues) {
      path.forEach((pathItem) => {
        messages[pathItem] = messages[pathItem] || []
        messages[pathItem].push(message)
      })
    }

    super(errorMessage, extensions)
    this.name = 'ZodValidationError'

    Object.setPrototypeOf(this, ZodValidationError.prototype)
  }
}

export const validateWithZod = (input: any, schema: any) => {
  const result = schema.safeParse(input)
  if (!result.success) {
    throw new ZodValidationError(result.error)
  }
}
