
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

      var branchName = '';

      try {

        branchName = gitHeadFileContent.match(/refs\/heads\/(.*)/)[1];
        callback(null, branchName);

      } catch(err) {

        // travis get commit log
        console.error(err);
        branchName = gitHeadFileContent;
        callback(null, branchName);

      }

    }

  });

};
