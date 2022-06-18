export default {
    name: 'flowers',
    type: 'document',
    title: 'Flowers',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'flowerImages',
        title: 'flowers',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
    ],
  };