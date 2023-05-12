// Model for individual Shelf Location
import {Model} from '@nozbe/watermelondb';
import {field, date, readonly, children, text} from '@nozbe/watermelondb/decorators';

export default class Location extends Model {
  static table = 'locations';
  static associations = {
    parts: { type: 'has_many', foreignKey: 'location_id'}
  }

  @field('name') name;
  @text('description') description;

  @children('parts') parts;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}

// Fields:
// name - name for the location
// description - description of the location (optional)
// parts - array of ids of parts assigned to this location (optional)
