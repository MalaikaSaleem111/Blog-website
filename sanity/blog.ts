
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'Title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'paragraph',
            type: 'text',
            title: 'paragraph'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source:'Title'
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
            options: {
                hotspot:true
            }
        },
        {
            name: 'block',
            type: 'array',
            title: 'Block',
            of:[{type : 'block'}]
        },
    ]
}