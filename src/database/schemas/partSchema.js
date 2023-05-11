// Basic schema setup, edit to match corresponding model

import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const partSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'parts',
        columns: [
          {name: 'name', type: 'string'},
          {name: 'description', type: 'string', isOptional: true},
          {name: 'type', type: 'string'},
          {name: 'photos', type: 'array<string>', isOptional: true},
          {name: 'price', type: 'number', isOptional: true},
          {name: 'vehicle', type: 'relation', isOptional: true},
          {name: 'location', type: 'relation', isOptional: true}
        ],
      }),
  ],
});