// Model for individual Vehicle
import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Vehicle extends Model {
  static table = 'vehicles';

  @field('make') make;
  @field('model') model;
  @field('year') year;
  @field('nickname') nickname;
  @field('color') color;
  @field('cost') cost;
  @field('description') description;
  @field('default_photo') default_photo;
  @field('photos') photos;
  @field('wrench_times') wrench_times;
  @field('parts') parts;
  @field('ideas') ideas;
  @field('sold_date') sold_date;
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
// sold_date - date for the if the car is sold (optional)
