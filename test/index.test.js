var path = require('path');
var should = require('should');
var getGitBranchName = require('../');


describe('test for getGitBranchName method', function() {

  it('should return a string(branch name) when the directory is a git repo', function(done) {

    // this repo directory path
    var dirPath = path.resolve(__dirname, '../');

    getGitBranchName(dirPath, function(err, branchName) {

      should.not.exist(err);
      (branchName).should.be.a.String;
      done();

    });

  });

  it('should return error when the directory is not exist or git repo', function(done) {

    // error directory path
    var dirPath = '/Users/notExist/';

    getGitBranchName(dirPath, function(err, branchName) {

      (err).should.be.a.Error;
      done();

    });

  });

});

