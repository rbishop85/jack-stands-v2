// Model for individual Part
import {Model} from '@nozbe/watermelondb';
import {field, relation, date, readonly, json, text} from '@nozbe/watermelondb/decorators';

export default class Part extends Model {
  static table = 'parts';
  static associations = {
    vehicles: { type: 'belongs_to', key: 'vehicle_id'},
    locations: { type: 'belongs_to', key: 'location_id'}
  }

  @field('name') name;
  @text('description') description;
  @field('type') type;
  @json('photos') photos;
  @field('price') price;

  @relation('vehicles', 'vehicle_id') vehicle;
  @relation('locations', 'location_id') location;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}

// Fields:
// name - name of the part
// description - detailed description of the part (optional)
// type - portion of the car that the part is for
// photos - array of photos of the part (optional)
// price - price paid for or listed value of part (optional)
// car_id - id for car if assigned to car (optional)
// location_id id for location if not assigned to car (optional)
