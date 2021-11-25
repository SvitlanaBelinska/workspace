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
exports.lambdaHandler = async (eventBanjo, context) => {
    try {
        // const ret = await axios(url);
        const name =  eventBanjo.queryStringParameters.name || {};
        // console.log('--name---------------------------------------------------------------------->' , name);
        
        if (name[0].toLowerCase() === 'r') {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: (`${name} plays banjo`)
                })
            }
          } else {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: (`${name} does not play banjo`)
                })
            }
          } 

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
