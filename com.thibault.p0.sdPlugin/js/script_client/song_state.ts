import {z} from "zod";

const SongStateSchema = z.object({
    drum_track_names: z.array(z.string()),
    drum_categories: z.array(z.string()),
    favorite_device_names: z.array(z.string()),
});



// extract the inferred type
type SongState = z.infer<typeof SongStateSchema>;
//
// class SongState implements User {
//     public drum_track_names: string[];
//     public drum_categories: string[];
//     public favorite_device_names: string[];
//
//     constructor(drum_track_names: string[], drum_categories: string[], favorite_device_names: string[]) {
//         this.drum_track_names = drum_track_names
//         this.drum_categories = drum_categories
//         this.favorite_device_names = favorite_device_names
//     }
//
//     static createFromPayload(data: SongState): SongState|null {
//         if (!data) {
//             console.warn("Received null data protocol0")
//             return null
//         }
//
//         const props = ["drum_track_names", "drum_categories", "favorite_device_names"]
//
//         // todo: use a validation library
//         for (const prop of props) {
//             if (!(prop in data)) {
//                 console.error(`Missing field in song_state data: ${prop}`)
//                 console.log(data)
//                 return null
//             }
//         }
//
//         return new SongState(data.drum_track_names, data.drum_categories, data.favorite_device_names)
//     }
// }

export { SongStateSchema, SongState}