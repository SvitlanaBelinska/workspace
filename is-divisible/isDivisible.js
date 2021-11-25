// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (eventIsDivisible, context) => {
    try {
        // const ret = await axios(url);
        const n =  JSON.parse(eventIsDivisible.queryStringParameters.n) || {};
        const x =  JSON.parse(eventIsDivisible.queryStringParameters.x) || {};
        const y =  JSON.parse(eventIsDivisible.queryStringParameters.y) || {};
        console.log('--year---------------------------------------------------------------------->' , n, x, y);

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: ((n % x === 0 && n % y === 0) ? true : false)
            })
        }

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
