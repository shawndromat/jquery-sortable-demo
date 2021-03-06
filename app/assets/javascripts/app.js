window.JqueryUi = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JqueryUi.lists = new JqueryUi.Collections.Lists();
    new JqueryUi.Routers.AppRouter({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JqueryUi.initialize();
});

Backbone.CompositeView = Backbone.View.extend({
  subviews: function () {
    if (!this._subviews) {
      this._subviews = {};
    }
    return this._subviews;
  },
  addSubview: function (selector, subview) {
    var selectorSubview =
      this.subviews()[selector] || (this.subviews()[selector] = []);
    selectorSubview.push(subview);

    //intital render of each subview
    //subsequent renders are the views own responsibility
    this.attachSubview(selector, subview.render());
  },
  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);
    subview.delegateEvents();
  },

  onRender: function () {
    var view = this;
    _(this.subviews()).each(function(subviews, selector) {
      _(subviews).each(function (subview) {
        if (subview.onRender) {
          subview.onRender();
        }
      })
    })
  },

  attachSubviews: function () {
    var view = this;
    _(this.subviews()).each(function(subviews, selector) {
      _(subviews).each(function (subview) {
        view.attachSubview(selector, subview);
        if (subview.attachSubviews) {
          subview.attachSubviews();
        }
      })
    })
  },
  remove: function () {
    _(this.subviews()).each(function(subviews, selector) {
      _(subviews).each(function (subview) {
        subview.remove();
      })
    })
    this.remove();
  },
  removeSubview: function (selector, subview) {
    var subviews = this.subviews()[selector];
    subviews.splice(subviews.indexOf(subview), 1);
    subview.remove();
  },
})
