import { integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  //access
  fields: {
    name: text({ isRequired: true }),
    description: text({ ui: { displayMode: 'input' } }),
    status: select({
      options: [
        { label: 'Draft', value: 'Draft' },
        { label: 'available', value: 'Available' },
        { label: 'unavailable', value: 'Unavailable' },
        
      ],defaultValue:'Draft',
      ui:{
        displayMode:'segmented-control',
        createView:{fieldMode:'hidden'},
      }

    }),
    price:integer(),
  },
});
