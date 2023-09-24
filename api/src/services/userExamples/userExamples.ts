import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { userExampleSchema } from 'src/lib/common/zod'
import { db } from 'src/lib/db'
import { validateWithZod } from 'src/lib/zodValidation'

export const userExamples: QueryResolvers['userExamples'] = () => {
  return db.userExample.findMany()
}

export const userExample: QueryResolvers['userExample'] = ({ id }) => {
  return db.userExample.findUnique({
    where: { id },
  })
}

export const createUserExample: MutationResolvers['createUserExample'] = ({
  input,
}) => {
  validateWithZod(input, userExampleSchema)

  return db.userExample.create({
    data: input,
  })
}

export const updateUserExample: MutationResolvers['updateUserExample'] = ({
  id,
  input,
}) => {
  return db.userExample.update({
    data: input,
    where: { id },
  })
}

export const deleteUserExample: MutationResolvers['deleteUserExample'] = ({
  id,
}) => {
  return db.userExample.delete({
    where: { id },
  })
}
