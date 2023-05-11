import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

// Pulling in individual models
import Idea from './models/Idea';
import Location from './models/Location';
import Part from './models/Part';
import Vehicle from './models/Vehicle';
import WrenchTime from './models/WrenchTime';

// Pulling in individual model schemas
import { ideaSchema } from './schemas/ideaSchema';
import { locationSchema } from './schemas/locationSchema';
import { partSchema } from './schemas/partSchema';
import { vehicleSchema } from './schemas/vehicleSchema';
import { wrenchtimeSchema } from './schemas/wrenchtimeSchema';

const adapter = new SQLiteAdapter({
  dbName: 'jackStandsDB', // <-- set the database name here
  schema: mergeSchemas([ideaSchema, locationSchema, partSchema, vehicleSchema, wrenchtimeSchema]),
});

export const database = new Database({
  adapter,
  modelClasses: [Idea, Location, Part, Vehicle, WrenchTime],
  actionsEnabled: true,
});