import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ThumbnailComponent extends Component {
  get item() {
    return this.args.item;
  }

  @action
  onClick() {
    alert(this.item.is_premium ? 'premium content' : 'free content');
  }
}
