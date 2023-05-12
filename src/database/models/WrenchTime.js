// Model for individual Wrench Times (Posts)
import {Model} from '@nozbe/watermelondb';
import {field, relation, date, readonly, json, text} from '@nozbe/watermelondb/decorators';

export default class WrenchTime extends Model {
  static table = 'wrenchtimes';
  static associations = {
    vehicles: { type: 'belongs_to', key: 'vehicle_id' },   
  }

  @field('title') title;
  @text('description') description;
  @json('photos') photos;
  @field('price') price;
  @json('parts_used') partsUsed;
  @json('parts_removed') partsRemoved;

  @relation('vehicles', 'vehicle_id') vehicle;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}

// Fields:
// title - title for the wrench time
// description - description of what was done (optional)
// photos - array of photos (optional)
// vehicle - id for associated vehicle (optional)
// parts - array of ids of parts used (optional)
// price - costs associated with wrench time (optional)