import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String920472' } },
    two: { data: { email: 'String5915446' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
