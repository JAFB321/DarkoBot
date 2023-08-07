import type { Event } from '../types/discord'

import interactionCreate from './interactionCreate'
import ready from './ready'
import messageCreate from './messageCreate'

export const events: Event[] = [ interactionCreate, ready, messageCreate ]
