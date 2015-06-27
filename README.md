# git-branch-name

Get the directory's git branchName through`.git/HEAD` file content.

## Install

```
npm install getGitBranchName --save
```

## Use

```javascript
var getGitBranchName = require('git-branch-name');

var dirPath = path.resolve(__dirname, '../');

getGitBranchName(dirPath, function(err, branchName) {
  
  // ...

});
```

## License

MIT &copy; 2015 sobear
