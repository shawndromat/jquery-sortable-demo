JqueryUi.Views.ListShow = Backbone.CompositeView.extend({
  className: "list",
  initialize: function () {
    var view = this;
    this.model.cards().each(function (card) {
      view.addCard(card);
    })
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.cards(), "add", this.addCard)
  },
  events: {
    "sortstart .card-wrapper": "printSender",
    "sortreceive .card-wrapper": "printReceiver"
  },
  template: JST["list_show"],
  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  onRender: function () {
    this.$('.card-wrapper').sortable({
      connectWith: ".card-wrapper"
    });
  },
  addCard: function (card) {
    var newView = new JqueryUi.Views.CardView({model: card});
    this.addSubview(".card-wrapper", newView);
    this.render();
  },
  printSender: function (event, ui) {
    console.log(event.currentTarget)
  },
  printReceiver: function (event, ui) {
    console.log(event.currentTarget)
  }
})
