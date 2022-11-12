// noinspection TypeScriptValidateJSTypes

import { z } from 'zod'
import AbletonSetSchema from './set_state'

const SampleCategoriesSchema = z.object({
    drums: z.array(z.string()),
    vocals: z.array(z.string())
})

const ServerStateSchema = z.object({
    sets: z.array(AbletonSetSchema),
    set_shortcuts: z.array(z.string()),
    sample_categories: SampleCategoriesSchema,
    favorite_device_names: z.array(z.array(z.string())),
    insert_favorite_device_names: z.array(z.string())
})

// extract the inferred type
type ServerState = z.infer<typeof ServerStateSchema>;

export type { ServerState }
export default ServerStateSchema
