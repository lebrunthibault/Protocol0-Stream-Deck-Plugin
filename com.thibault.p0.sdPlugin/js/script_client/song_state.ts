import { z } from 'zod'

const SampleCategories = z.object({
    drums: z.array(z.string()),
    vocals: z.array(z.string())
})

// noinspection TypeScriptValidateJSTypes
const SongStateSchema = z.object({
    drum_track_names: z.array(z.string()),
    sample_categories: SampleCategories,
    favorite_device_names: z.array(z.array(z.string())),
    insert_favorite_device_names: z.array(z.string()),
    drum_rack_visible: z.boolean(),
    room_eq_enabled: z.boolean()
})

// extract the inferred type
type SongState = z.infer<typeof SongStateSchema>;

export type { SongState }
export default SongStateSchema
