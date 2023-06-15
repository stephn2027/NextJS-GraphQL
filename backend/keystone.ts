import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/User';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-kicks';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  lists: createSchema({
    //schema items go in here
    User
  }),
  ui: {
    //todo  change for roles
    isAccessAllowed: () => true,
  },
  //todo: Add session values here
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    //todo add data seeding here
  },
});
