// Basic schema setup, edit to match corresponding model

import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const wrenchtimeSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'wrenchtimes',
        columns: [
          {name: 'title', type: 'string'},
          {name: 'description', type: 'string', isOptional: true},
          {name: 'photos', type: 'array<string>', isOptional: true},
          {name: 'vehicle', type: 'relation', isOptional: true},
          {name: 'parts', type: 'array<relation>', isOptional: true},
          {name: 'price', type: 'number', isOptional: true}
        ],
      }),
  ],
});