// Basic schema setup, edit to match corresponding model

import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const locationSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'locations',
        columns: [
          {name: 'name', type: 'string'},
          {name: 'description', type: 'string', isOptional: true},
          {name: 'parts', type: 'array<relation>', isOptional: true}
        ],
      }),
  ],
});