# gulp-ngword-validator

[![npm version](https://badge.fury.io/js/gulp-ngword-validator.svg)](https://badge.fury.io/js/gulp-ngword-validator)

simple keyword validator.
check no good keywords.

## install

```
$ npm install gulp-ngword-validator
```

## basic usage

```javascript
'use strict';

var gulp = require('gulp');
var ngword = require('gulp-ngword-validator');

gulp.task('default',function(){
  return gulp.src(['sample/*'])
    .pipe(ngword('test word'));
});
```

## error sample

if you check sample.html.

```bash
Message:
    WARNING KEYWORD : test word
```
