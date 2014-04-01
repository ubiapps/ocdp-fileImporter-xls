(function() {
  var csv = require("csv");
  var path = require("path");

  function checkHeader(schema, row) {
    var headerParsed = false;
    if (typeof schema.header === "undefined") {
      schema.header = [];
      for (var k in row) {
        if (row.hasOwnProperty(k) && k.length > 0) {
          var field = {
            name: k,
            description: "",
            type: ""
          };
          schema.header.push(field);
        }
      }
      headerParsed = true;
    }
    return headerParsed;
  }

  function importCSV(coll, filePath, cb) {
    var schema = {};
    var parser = csv();
    parser.on("end", function() {
      cb(null,schema.header);
    });
    parser.on("error", function(err) {
      cb(err, null);
    });
    parser.from.options({ columns: true });
    parser.from(filePath).transform(function(row, index) {
      checkHeader(schema, row);
      coll.insert(row, function(err, ok) {
        if (err) {
          console.log("error inserting row: " + err.message);
        }
      });
      return row;
    });
  }

  module.exports = {
    import: importCSV
  }
}())