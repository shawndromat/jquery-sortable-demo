JqueryUi.Views.Index = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addList)
  },
  events: {
    "sortstop #lists-wrapper": "printStuff"
  },
  template: JST["index"],
  render: function () {
    var content = this.template({lists: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    this.$("#lists-wrapper").sortable();
    this.onRender();
    return this;
  },
  addList: function (list) {
    var listShow = new JqueryUi.Views.ListShow({model: list});
    this.addSubview("#lists-wrapper", listShow)
  },
  printStuff: function () {
    console.log("STUFF")
  }
})
