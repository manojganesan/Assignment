const sorting = require('./sorting');
module.exports = {
 getApiResult:function(url,flag){
    return new Promise((resolve, reject) => {
        const http      = require('http'),
              https     = require('https');
		let client = http;
		if (url.toString().indexOf("https") === 0) {
            client = https;
        }
        client.get(url, (response) => {
            let outputData = '';
            response.on('data', (chunk) => {
                outputData += chunk;
            });
			response.on('end', () => {
				resolve((flag)? sorting.counter(outputData):outputData);
            });
        }).on("error", (error) => {
            reject({"status":400,"message":"Unable to fetch the Data.","reason":error});
        });
    });
}

};
