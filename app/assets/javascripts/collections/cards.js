JqueryUi.Collections.Cards = Backbone.Collection.extend({
  model: JqueryUi.Models.Card,
  url: "cards",
  comparator: function(card) {
    return card.get('rank');
  }
});
