JqueryUi.Views.Index = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList)
  },
  events: {
    "sortstart #lists-wrapper": "printSubviews"
  },
  template: JST["index"],
  render: function () {
    var content = this.template({lists: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addList: function (list) {
    var listShow = new JqueryUi.Views.ListShow({model: list});
    this.addSubview("#lists-wrapper", listShow)
  },
  printSubviews: function () {
    console.log(this.subviews());
  }
})
