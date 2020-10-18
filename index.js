const request = require('./request');
const sorting = require('./sorting');
const dotenv = require("dotenv");
const express = require("express");
const app =express();
dotenv.config();

const sourceUrl = process.env.sourceUrl;
const apiUrl = process.env.apiUrl;
app.get('/',function(req,res){
    (async (url) => {
        let textSource = await request.getApiResult(sourceUrl,true);
        let output = [];
       for(i=0;i<textSource.length;i++){
       let apiResponse = await request.getApiResult(apiUrl+textSource[i][0],false);
       apiResponse = JSON.parse(apiResponse);
       output.push(sorting.sorting(textSource,apiResponse));
       }
       res.send(output);
       })();


});

app.listen(3000);

