export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    // {
    //   title: 'Weight in grams',
    //   name: 'grams',
    //   type: 'number',
    // },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    // {
    //   title: 'Material',
    //   name: 'material',
    //   type: 'string',
    // },
    {
      title: 'Dimensions',
      name: 'dimensions',
      type: 'string',
    },
    // {
    //   title: 'Quantity',
    //   name: 'quantity',
    //   type: 'number',
    // },
    // {
    //   title: 'Color',
    //   name: 'color',
    //   type: 'string',
    // },

    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    // {
    //   title: 'Taxable',
    //   name: 'taxable',
    //   type: 'boolean',
    // },
    {
      name: 'images',
      title: 'Images',
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
    // {
    //   title: 'Bar code',
    //   name: 'barcode',
    //   type: 'barcode',
    // },
  ],
}
