import {z} from "zod";

const TestSchema = z.object({
    toto: z.string().array(),
});


// extract the inferred type
type Test = z.infer<typeof TestSchema>;


test.only('validation', async () => {
    const t = TestSchema.parse({toto: ["Ludwig"]});
    console.log(t)
})
