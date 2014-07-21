JqueryUi.Routers.AppRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },
  routes: {
    "": "index"
  },
  index: function () {
    JqueryUi.lists.fetch();
    var indexView = new JqueryUi.Views.Index({
      collection: JqueryUi.lists
    });
    this.$rootEl.html(indexView.render().$el)
  }
});
