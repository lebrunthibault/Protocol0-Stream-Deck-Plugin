// noinspection TypeScriptValidateJSTypes

import { z } from 'zod'
import SongStateSchema from './song_state'

const ServerStateSchema = z.object({
    song_states: z.array(SongStateSchema)
})

// extract the inferred type
type ServerState = z.infer<typeof ServerStateSchema>;

export type { ServerState }
export default ServerStateSchema
