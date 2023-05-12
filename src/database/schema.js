import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'ideas',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'link', type: 'string'},
        {name: 'photos', type: 'string'},
        {name: 'vehicle_id', type: 'string', isIndexed: true, isOptional: true},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'locations',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'parts',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'photos', type: 'string'},
        {name: 'price', type: 'number'},
        {name: 'vehicle_id', type: 'string', isIndexed: true, isOptional: true},
        {name: 'location_id', type: 'string', isIndexed: true, isOptional: true},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'vehicles',
      columns: [
        {name: 'make', type: 'string'},
        {name: 'model', type: 'string'},
        {name: 'year', type: 'number'},
        {name: 'nickname', type: 'string'},
        {name: 'color', type: 'string'},
        {name: 'price', type: 'number'},
        {name: 'description', type: 'string'},
        {name: 'default_photo', type: 'string'},
        {name: 'photos', type: 'string'},
        {name: 'is_sold', type: 'boolean'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'wrenchtimes',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'photos', type: 'string'},
        {name: 'vehicle_id', type: 'string', isIndexed: true, isOptional: true},
        {name: 'parts_used', type: 'string'},
        {name: 'parts_removed', type: 'string'},
        {name: 'price', type: 'number'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
  ],
});