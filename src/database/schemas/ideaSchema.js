// Basic schema setup, edit to match corresponding model

import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const ideaSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'ideas',
        columns: [
          {name: 'name', type: 'string'},
          {name: 'description', type: 'string'},
          {name: 'link', type: 'string', isOptional: true},
          {name: 'photos', type: 'array<string>', isOptional: true},
          {name: 'vehicle', type: 'relation', isOptional: true}
        ],
      }),
  ],
});