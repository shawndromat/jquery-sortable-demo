JqueryUi.Views.CardView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "all", this.render)
  },
  tagName: "li",
  className: "card",
  template: JST["card_show"],
  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },
  onRender: function() {
    // console.log("helllllooooooo");
  }
})
