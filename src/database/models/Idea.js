// Model for individual Idea/Inspiration
import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Idea extends Model {
  static table = 'ideas';

  @field('name') name;
  @field('description') description;
  @field('link') link;
  @field('photos') photos;
  @field('vehicle_id') vehicle_id;
}

// Fields:
// name - name of the idea
// description - written description of the idea (optional)
// link - html link to article/page/video about the idea (optional)
// photos - array of photos relating to the idea (optional)
// vehicle_id - id for the associated vehicle (optional)