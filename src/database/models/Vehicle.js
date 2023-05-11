// Model for individual Vehicle
import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class Vehicle extends Model {
  static table = 'vehicles';
  static associations = {
    wrenchtimes: { type: 'has_many', key: 'wrenchtime_id' },
    parts: { type: 'has_many', key: 'part_id' },
    ideas: { type: 'has_many', key: 'idea_id' }
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
  @field('description') description;
  @field('default_photo') default_photo;
  @field('photos') photos;
  @relation('wrenchtimes', 'wrenchtime_id') wrench_times;
  @relation('parts', 'part_id') parts;
  @relation('ideas', 'idea_id') ideas;
  @field('sold') sold;
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
