// schemas/before-massage.js

export default {

    title: 'Rich text example',
    name: 'myRichTextExample',
    type: 'document',
    fields: [

        {
            title: 'Rich text example',
            name: 'myRichTextExample',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
};