// Model for individual Idea/Inspiration
import {Model} from '@nozbe/watermelondb';
import {field, relation, json, date, readonly, text} from '@nozbe/watermelondb/decorators';

export default class Idea extends Model {
  static table = 'ideas';
  static associations = {
    vehicles: { type: 'belongs_to', key: 'vehicle_id'}
  }

  @field('name') name;
  @text('description') description;
  @field('link') link;

  @json('photos') photos;

  @relation('vehicles', 'vehicle_id') vehicle;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}

// Fields:
// name - name of the idea
// description - written description of the idea
// link - html link to article/page/video about the idea (optional)
// photos - array of photos relating to the idea (optional)
// vehicle - id for the associated vehicle (optional)