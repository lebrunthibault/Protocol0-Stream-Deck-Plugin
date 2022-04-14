import { z } from 'zod'

// noinspection TypeScriptValidateJSTypes
const SongStateSchema = z.object({
    drum_track_names: z.array(z.string()),
    drum_categories: z.array(z.string()),
    favorite_device_names: z.array(z.string())
})

// extract the inferred type
type SongState = z.infer<typeof SongStateSchema>;

export type { SongState }
export { SongStateSchema }
