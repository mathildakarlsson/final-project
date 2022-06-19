export default {
    name: 'homePage',
    type: 'document',
    title: 'HomePage',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'carousel',
        title: 'carousel',
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
      {
        name: 'homeOne',
        type: 'figure',
      },
      {
        name: 'homeTwo',
        type: 'figure',
      },
      {
        name: 'homeThree',
        type: 'figure',
      },
      {
        name: 'homeFour',
        type: 'figure',
      },
    ],
  };