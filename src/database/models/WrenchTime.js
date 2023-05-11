// Model for individual Wrench Times (Posts)
import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class WrenchTime extends Model {
  static table = 'wrenchtimes';

  @field('title') title;
  @field('description') description;
  @field('photos') photos;
  @field('vehicle_id') vehicle_id;
  @field('parts_ids') parts_ids;
  @field('cost') cost;
}

// Fields:
// title - title for the wrench time
// description - description of what was done (optional)
// photos - array of photos (optional)
// vehicle_id - id for associated vehicle (optional)
// parts_ids - array of ids of parts used (optional)
// cost - costs associated with wrench time (optional)