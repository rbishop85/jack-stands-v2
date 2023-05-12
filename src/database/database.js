import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

// Pulling in individual models
import Idea from './models/Idea';
import Location from './models/Location';
import Part from './models/Part';
import Vehicle from './models/Vehicle';
import WrenchTime from './models/WrenchTime';

// Pulling in schema
import { schema } from './schema';

const adapter = new SQLiteAdapter({
  dbName: 'jackStandsDB', // <-- set the database name here
  schema: schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Idea, Location, Part, Vehicle, WrenchTime],
});