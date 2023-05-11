// Model for individual Shelf Location
import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Location extends Model {
  static table = 'locations';

  @field('name') name;
  @field('description') description;
}

// Fields:
// name - name for the location
// description - description of the location (optional)
