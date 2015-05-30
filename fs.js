var fp = {};

fp.filter = function (collection, callback) {
  var filtered = [];
  for (i=0; i < collection.length; i++) {
    if ( callback(collection[i]) ) {
      filtered.push(collection[i]);
    }
  }
  return filtered;
};

fp.map = function(collection, callback) {
  var mapped = [];
  for ( var i = 0; i < collection.length; i++) {
    mapped.push( callback(collection[i]) );
  }
  return mapped;
};

fp.reduce = function( collection, callback, initial ) {
  var last = initial;
  for ( var i = 0; i < collection.length; i++ ) {
    last = callback(last, collection[i]);
  }
};

fp.add = function(a, b) {
  return a + b;
};

fp.groupBy = function (collection, callback) {
  var grouped = {};
  var groupName;

  for (var i = 0; i < collection.length; i++) {
    groupName = callback(collection[i]);
    if ( !grouped[groupName] ) {
      grouped[groupName] = [];
    }
    grouped[groupName].push(collection[i]);
  }

  return grouped;
};



