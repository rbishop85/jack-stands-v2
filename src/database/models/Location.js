// Model for individual Shelf Location
import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class Location extends Model {
  static table = 'locations';
  static associations = {
    parts: { type: 'has_many', key: 'part_id'}
  }

  @field('name') name;
  @field('description') description;
  @relation('parts', 'part_id') parts;
}

// Fields:
// name - name for the location
// description - description of the location (optional)
// parts - array of ids of parts assigned to this location (optional)
