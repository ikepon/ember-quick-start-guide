import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Ada Lovelace', 'Edward Snowden', 'Julian Assange'];
  }
});
