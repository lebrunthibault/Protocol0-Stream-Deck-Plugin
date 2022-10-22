// noinspection TypeScriptValidateJSTypes

import { z } from 'zod'
import SongStateSchema from './song_state'

const SampleCategoriesSchema = z.object({
    drums: z.array(z.string()),
    vocals: z.array(z.string())
})

const ServerStateSchema = z.object({
    song_states: z.array(SongStateSchema),
    sample_categories: SampleCategoriesSchema,
    favorite_device_names: z.array(z.array(z.string())),
    insert_favorite_device_names: z.array(z.string())
})

// extract the inferred type
type ServerState = z.infer<typeof ServerStateSchema>;

export type { ServerState }
export default ServerStateSchema
