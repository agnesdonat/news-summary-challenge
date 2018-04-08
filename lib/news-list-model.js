(function(exports) {
  function List() {
    this._list = [];
  }

  List.prototype.insert = function(news) {
    this._list.push(news);
  }

  List.prototype.showHeadlines = function() {
    return this._list;
  }

  exports.List = List;
})(this);
