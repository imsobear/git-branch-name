
var fs = require('fs');
var path = require('path');

/**
 * get the directory's git branch
 *
 * @param  {String} dirPath  directory absolute path
 * @return {String} git branch name
 */
module.exports = function(dirPath, callback) {

  var gitHeadFilePath = path.resolve(dirPath, './.git/HEAD');

  fs.readFile(gitHeadFilePath, 'utf-8', function(err, gitHeadFileContent) {

    if (err) {

      callback(err);

    } else {

      try {

        var branchName = gitHeadFileContent.match(/refs\/heads\/(.*)/)[1];
        callback(null, branchName);

      } catch(err) {

        callback(err);

      }

    }

  });

};
