
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
    const res = await knex('urls');
    // console.log('-------------------------------------res----------------->', res);

return res;
};

