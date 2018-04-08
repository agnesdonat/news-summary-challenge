(function(exports) {
  function viewTest() {
    var list = new List();
    var news = new News("This is a test headline");
    list.insert(news);
    var view = new View(list)
    console.log('it displays the headlines in HTML format -', expect(view.displayHeadlines()).toEqual("<ul><li><div>" + news.getHeadline() + "</div></li></ul>"));
  }
  viewTest();
})(this);
