(function(exports){
  function NewsController(list) {
    this._list = list;
    list.insert(news);
    var view = new View(list);
  }
  NewsController.prototype.getHTML = function() {
  document.getElementById('app').innerHTML = view.displayHeadlines();
}

exports.NewsController = NewsController;
})(this);
