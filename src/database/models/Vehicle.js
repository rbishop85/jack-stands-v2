// Model for individual Vehicle
import {Model} from '@nozbe/watermelondb';
import {field, date, readonly, children, json, text} from '@nozbe/watermelondb/decorators';

export default class Vehicle extends Model {
  static table = 'vehicles';
  static associations = {
    wrenchtimes: { type: 'has_many', foreignKey: 'vehicle_id' },
    parts: { type: 'has_many', foreignKey: 'vehicle_id' },
    ideas: { type: 'has_many', foreignKey: 'vehicle_id' }
  };
  static defaultValues = {
    sold: false,
  }

  @field('make') make;
  @field('model') model;
  @field('year') year;
  @field('nickname') nickname;
  @field('color') color;
  @field('price') price;
  @text('description') description;
  @field('default_photo') default_photo;
  @json('photos') photos;
  @field('is_sold') isSold;

  @children('wrenchtimes') wrenchtimes;
  @children('parts') parts;
  @children('ideas') ideas;
  
  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}

// Fields:
// make - brand of car
// model - model of car
// year - year of car
// nickname - nickname for car (optional)
// color - color of car (optional)
// cost - price paid for car (optional)
// description - description of car (optional)
// default_photo - default photo for car (optional)
// photos - array of photos of car (optional)
// wrench_times - array of ids for wrench times associated to car (optional)
// parts - array of ids for parts associated to car (optional)
// ideas - array of ids for ideas associated to car (optional)
// sold - has the car been sold (optional)
