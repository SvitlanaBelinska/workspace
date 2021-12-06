
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
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // SMTP PORT
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'sendemaillambda@gmail.com',
        pass: 'Sveta123@'
    }
});
 
exports.lambdaHandler = async (event, context, callback) => {
    console.log('_______________________________________________________________________________');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'sendemaillambda@gmail.com', 
               pass: 'Sveta123@' 
              },
        tls: {
                rejectUnauthorized: false
             }
    });


    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST'
        },
    });
    console.log('___________________done____________________________________________________________');

    let _body = event.body;

    let body_txt='<h2>Contact Form Details</h2>';
    for (var key in _body) {
        var res = key.replace("_", " ");
        body_txt +='<p><strong>' + titleCase(res) +' : </strong>'+_body[key] + '</p>';
    }


    let mailOptions = {
        from: 'sendemaillambda@gmail.com',
        to: 'svi.belinska@gmail.com',
        subject: 'SUBJECT',
        html: body_txt
    };

    transporter.sendMail(mailOptions, done(null,_body));
    console.log('______________________sendMail_________________________________________________________');
    return null;
};

// convert the key as the label
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // return the joined string
    return splitStr.join(' ');
}




