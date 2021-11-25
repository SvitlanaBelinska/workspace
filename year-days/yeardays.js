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
exports.lambdaHandler = async (eventYearDays, context) => {
    try {
        // const ret = await axios(url);
        const year =  JSON.parse(eventYearDays.queryStringParameters.year) || {};
        console.log('--year---------------------------------------------------------------------->' , year);

        if(year == 0){
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: (year + " year has 366 days")
                })
            }
           } else {
             if (year % 4 == 0 && year % 100 != 0 ){
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: (year + " year has 366 days")
                })
            }           
            } 

             else {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    // message: ('${body.year} has 365 days')
                    message: (year + " year has 365 days")


                })
            }           
            }} 

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
