// Basic schema setup, edit to match corresponding model

import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const vehicleSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'vehicles',
        columns: [
          {name: 'make', type: 'string'},
          {name: 'model', type: 'string'},
          {name: 'year', type: 'number'},
          {name: 'nickname', type: 'string', isOptional: true},
          {name: 'color', type: 'string', isOptional: true},
          {name: 'price', type: 'number', isOptional: true},
          {name: 'description', type: 'string', isOptional: true},
          {name: 'default_photo', type: 'string', isOptional: true},
          {name: 'photos', type: 'array<string>', isOptional: true},
          {name: 'wrench_times', type: 'array<relation>', isOptional: true},
          {name: 'parts', type: 'array<relation>', isOptional: true},
          {name: 'ideas', type: 'array<relation>', isOptional: true},
          {name: 'sold', type: 'boolean', default: false}
        ],
      }),
  ],
});