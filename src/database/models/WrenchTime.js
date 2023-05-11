// Model for individual Wrench Times (Posts)
import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class WrenchTime extends Model {
  static table = 'wrenchtimes';
  static associations = {
    vehicles: { type: 'belongs_to', key: 'vehicle_id' },
    parts: { type: 'has_many', key: 'part_id' }    
  }

  @field('title') title;
  @field('description') description;
  @field('photos') photos;
  @relation('vehicles', 'vehicle_id') vehicle;
  @relation('parts', 'part_id') parts;
  @field('price') price;
}

// Fields:
// title - title for the wrench time
// description - description of what was done (optional)
// photos - array of photos (optional)
// vehicle - id for associated vehicle (optional)
// parts - array of ids of parts used (optional)
// price - costs associated with wrench time (optional)