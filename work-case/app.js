
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
    const x = event.queryStringParameters.coord;
    const t = event.queryStringParameters.town;

    
    console.log('-------------------------------------lambdaHandler----------------->', x);
    

    const res = await knex('addresses').insert([{town: t ,coordinates: x}]);
    // const res = await knex('addresses').where({id: 6}).insert([{town: t}, {coordinates: x}])
    // const res = await knex('addresses')


return res;
};

