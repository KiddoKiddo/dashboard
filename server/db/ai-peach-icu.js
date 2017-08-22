var mysql = require('mysql')
  , async = require('async');

var PRODUCTION_DB = 'ai_peach_icu'
  , TEST_DB = 'ai_peach_icu';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
  pool: null,
  mode: null,
};

exports.connect = (mode, done) => {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'your_user',
    password: 'some_secret',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  })

  state.mode = mode;
  done();
}

exports.get = () => {
  return state.pool;
}