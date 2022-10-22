// noinspection TypeScriptValidateJSTypes

import { z } from 'zod'

const SongStateSchema = z.object({
    id: z.string(),
    title: z.string(),
    muted: z.boolean(),
    drum_rack_visible: z.boolean(),
    room_eq_enabled: z.boolean()
})

// extract the inferred type
type SongState = z.infer<typeof SongStateSchema>;

export type { SongState }
export default SongStateSchema
