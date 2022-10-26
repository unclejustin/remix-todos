import type { UnpackData } from 'domain-functions'

import { makeDomainFunction } from 'domain-functions'
import { z } from 'zod'
import { db } from '~/utils/db.server'

export const getTodos = makeDomainFunction(z.null())(async (_i) =>
	db.todo.findMany(),
)

export type Todos = UnpackData<typeof getTodos>
