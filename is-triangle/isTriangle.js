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
exports.lambdaHandler = async (eventIsTriangle, context) => {
    try {
        const a =  JSON.parse(eventIsTriangle.queryStringParameters.a) || {};
        const b =  JSON.parse(eventIsTriangle.queryStringParameters.b) || {};
        const c =  JSON.parse(eventIsTriangle.queryStringParameters.c) || {};

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: (((a + b) > c && (b + c) > a && (a + c) > b))
            })
        }

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
