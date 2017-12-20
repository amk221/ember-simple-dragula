import Component from '@ember/component';
import layout from '../templates/components/x-dragula-container';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.get('on-init')(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('on-destroy')(this);
  }
});