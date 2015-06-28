# git-branch-name [![Build Status](https://travis-ci.org/imsobear/git-branch-name.svg?branch=master)](https://travis-ci.org/imsobear/git-branch-name) [![Coverage Status](https://coveralls.io/repos/imsobear/git-branch-name/badge.svg?branch=master)](https://coveralls.io/r/imsobear/git-branch-name?branch=master)

> Get the directory's git branchName by nodejs, support git submodule

## Install

```
npm install git-branch-name --save
```

## Use

```javascript
var getGitBranchName = require('git-branch-name');

var dirPath = path.resolve(__dirname, '../');

getGitBranchName(dirPath, function(err, branchName) {
  
  console.log(branchName); // master

});
```

[Example](./example/)

## How

Parse the output of `git branch --work-tree=dirPath --git-dit=dirPath/.git`

## License

MIT &copy; 2015 sobear
