import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {withItemData,statelessSessions} from '@keystone-next/keystone/session';
import { User } from './schemas/User';

import 'dotenv/config';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-kicks';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
  secret: process.env.COOKIE_SECRET,
};

const {withAuth} = createAuth({
  listKey:'User',
  identityField:'email',
  secretField:'password',
  initFirstItem:{
    fields:['name', 'email', 'password' ],
    //TODO: Add roles here
  }
}); 

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  lists: createSchema({
    //schema items go in here
    User,
    Product,
    ProductImage,
  }),
  ui: {
    //show the UI who has proper access  
    isAccessAllowed: ({session}) => !!session?.data,
  },
  //todo: Add session values here
  session: withItemData(statelessSessions(sessionConfig),{
    //GraphQl query
    User:'id name email'
  }
  ),
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    //todo add data seeding here
    async onConnect(keystone){
      if(process.argv.includes('--seed-data')){
        await insertSeedData(keystone);
      }
      
    },
    
  },
})
);
