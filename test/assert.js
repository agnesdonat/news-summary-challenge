(function(exports) {
  this.expect = function(thing) {
    return {
      toEqual: function(value) {
        return value === thing;
      },
      toBeEmpty: function() {
        return thing == null;
      },
      toMatchEmptyArray: function(array) {
        return array instanceof Array;
      }
    };
  };

  this.describe = function(description, callBack) {
    return true;
  };

  this.it = function(description, callBack) {
    return true;
  }

  exports = {
    expect: expect,
    describe: describe,
    it: it,
  }
})(this);
