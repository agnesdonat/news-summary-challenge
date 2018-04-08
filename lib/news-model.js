(function(exports) {
  function News(headline) {
    this.headline = headline;
  }

  News.prototype.getHeadline = function() {
    return this.headline;
  }

  exports.News = News;
})(this);
