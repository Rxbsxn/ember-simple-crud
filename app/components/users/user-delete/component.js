import Ember from 'ember';

const { 
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),

  actions: {
    deleteUser(user) {
      // this.get('store').findRecord('user', user.id).then(record => {
      //   let recordName = record.get('name');
      //   let recordId = record.get('id');
      //   console.log(`${recordName} + ${recordId}`);        
      // })
      this.get('store').findRecord('user', user.id, { reload: true }).then(user => {
        alert(`${user.get('name')} with id: ${user.get('id')} was deleted`);
        user.deleteRecord();
        user.save();
      });
    }
  }
});
