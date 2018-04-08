(function(exports) {
  function listTest() {
    var news = new News('UK wife-carrying contest takes place in Dorking');
    var list = new List();

    console.log('has an empty headlines array -', expect(list._list).toMatchEmptyArray([]));

    list.insert(news);

    console.log('has a new headline in the array -', expect(list.showHeadlines()[0]).toEqual(news));
  }
  listTest();
})(this);
