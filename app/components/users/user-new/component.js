import Ember from 'ember';

const {
  inject: { service },
  Component
} = Ember;

export default Component.extend({
  store: service(),

  actions: {
    newUser() {
      let userName = this.get('userName');
      this.get('store').createRecord('user', {name: userName}).save();

      this.set('userName', '');
    }
  }
});
