
const knex = require("knex")({
    client: 'pg',
    connection: {
        host: 'host.docker.internal',
        user: 'postgres',
        password: '123456',
        database: 'postgres',
        port: '5432'
    }
});


exports.lambdaHandler = async (event, context) => {
    console.log('-------------------------------------lambdaHandler----------------->');
    const firstName = event.queryStringParameters.fname;
    const lastName = event.queryStringParameters.lname;
    console.log('------------------------------------------------------>');
    const res = await knex('test')
    .where('id', '=', 1)
    .update({
      first_name: firstName,
      last_name: lastName
    })
   
    // console.log('-------------------------------------res----------------->', res);

return res;
};

