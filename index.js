'use strict';

/**
 * get the directory's git branch
 */

var execFile = require('child_process').execFile;
var path = require('path');

/**
 * get the directory's git branch
 *
 * @param  {String} dirPath  directory absolute path
 * @return {String} git branch name
 */
module.exports = function(dirPath, callback) {

  // .git
  var gitPath = path.resolve(dirPath, './.git');

  // parse `git branch` output
  execFile('git', ['--work-tree=' + dirPath, '--git-dir=' + gitPath, 'branch'], function(err, stdout, stderr) {

    if (err) {
      return callback(err);
    }

    try {

      var branchName = stdout.match(/\*\s(.*)\n/)[1];
      callback(null, branchName);

    } catch(err) {

      callback(new Error('Parse the git branch stdout error'));
      console.error('output: %s', stdout);

    }

  });

};
