# GitBranch

Get the directory's git branchName through`.git/HEAD` file content.

## Install

```
npm install getGitBranchName --save
```

## Use

```javascript
var getGitBranchName = require('getGitBranchName');

var dirPath = path.resolve(__dirname, '../');

getGitBranchName(dirPath, function(err, branchName) {
  
  // ...

});
```

## License

MIT &copy; 2015 sobear
