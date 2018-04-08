(function(exports) {
  function View(list) {
    this._list = list
  }
  View.prototype.displayHeadlines = function() {
    var output = ["<ul>"];

    this._list.showHeadlines().forEach(function(element) {
      output.push("<li><div>" + element.getHeadline() + "</div></li>");
    });
    output.push("</ul>");
    return output.join('');
  }
  exports.View = View;
})(this);
