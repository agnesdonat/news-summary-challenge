(function(exports) {
  function newsTest() {
    var news = new News('UK wife-carrying contest takes place in Dorking');
    console.log('newsTest() -', expect(news.getHeadline()).toEqual('UK wife-carrying contest takes place in Dorking'));
  };
  newsTest();
})(this);
