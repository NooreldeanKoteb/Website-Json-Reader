
'use strict';
const https = require('https');

const request = https.get('https://YourWebsiteHere.com', response => {
    let body = '';
    response.on('data', data =>{
        body+= data.toString();
    });
    response.on('end', () => {
        const parsedData = JSON.parse(body);
        users = parsedData;
    });
})





