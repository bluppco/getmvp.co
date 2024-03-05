import { z, defineCollection } from "astro:content"

const authorsCollection = defineCollection({

    type: "content",
    schema: z.object({

        image: z.string(),
        name: z.string(),

    })

})

const tasksCollection = defineCollection({

    type: "content",
    schema: z.object({

        author: z.string(),
        create_time: z.string(),
        description: z.string(),
        list: z.string(),
        title: z.string(),
        update_time: z.string(),

    })

})

export const collections = {

    "authors": authorsCollection,
    "tasks": tasksCollection,

}
