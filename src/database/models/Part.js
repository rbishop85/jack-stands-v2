// Model for individual Part
import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class Part extends Model {
  static table = 'parts';
  static associations = {
    vehicles: { type: 'belongs_to', key: 'vehicle_id'},
    locations: { type: 'belongs_to', key: 'location_id'}
  }

  @field('name') name;
  @field('description') description;
  @field('type') type;
  @field('photos') photos;
  @field('price') price;
  @relation('vehicles', 'vehicle_id') vehicle;
  @relation('locations', 'location_id') location;
}

// Fields:
// name - name of the part
// description - detailed description of the part (optional)
// type - portion of the car that the part is for
// photos - array of photos of the part (optional)
// price - price paid for or listed value of part (optional)
// car_id - id for car if assigned to car (optional)
// location_id id for location if not assigned to car (optional)
