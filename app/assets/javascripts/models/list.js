JqueryUi.Models.List = Backbone.Model.extend({
  urlRoot: "lists",
  cards: function () {
    return this._cards = this._cards || new JqueryUi.Collections.Cards();
  },
  parse: function (response) {
    if (response.cards) {
      this.cards().set(response.cards, {parse: true})
      delete response.cards
    }

    return response;
  }
});
