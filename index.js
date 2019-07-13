var through = require('through2');
var rs = require('replacestream');
var PluginError = require('gulp-util').PluginError;
var PLUGIN_NAME = 'gulp-ngword-validator';

module.exports = function(search) {
  /**
   * @this {Transform}
   */
  var transform = function(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      file.contents = file.contents.pipe(rs(search));
      return callback(null, file);
    }

    // プラグインの処理本体
    if (file.isBuffer()) {

      var contents = String(file.contents);

      // search keyword
      var check = new RegExp(search, 'g');
      var result = check.test(contents);
      var match = contents.match(check);

      if (result) {
        // console.log('WARNING KEYWORD : ' + match);
        this.emit('error', new PluginError(PLUGIN_NAME, 'WARNING KEYWORD : ' + match));
      } else {
        // console.log('no problem');
      }

      // 処理の完了を通知
      return callback(null, file);
    }

    this.push(file);
    callback();
  };

  return through.obj(transform);
};

