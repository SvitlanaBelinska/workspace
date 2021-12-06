var pg = require('pg');
var conString = "postgres://postgres:123456@localhost:5432/postgres";

var client = new pg.Client(conString);
client.connect();
client.query("INSERT INTO junk(name, a_number) values('Ted',12)");
// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;