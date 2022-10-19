// noinspection TypeScriptValidateJSTypes

import { z } from 'zod'

const SampleCategoriesSchema = z.object({
    drums: z.array(z.string()),
    vocals: z.array(z.string())
})

const SongStateSchema = z.object({
    id: z.string(),
    title: z.string(),
    muted: z.boolean(),
    sample_categories: SampleCategoriesSchema,
    favorite_device_names: z.array(z.array(z.string())),
    insert_favorite_device_names: z.array(z.string()),
    drum_rack_visible: z.boolean(),
    room_eq_enabled: z.boolean()
})

// extract the inferred type
type SongState = z.infer<typeof SongStateSchema>;

export type { SongState }
export default SongStateSchema
