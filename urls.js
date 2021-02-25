const express = require('express');
const shortid = require('shortid');
const router = express.Router();

const urls ={};

router.get("/",(req,res)=>{ //get all urls
    const urlList=[];
    Object.keys(urls).forEach((shortURL) =>{ //create an all urlList obj and store all short/long URL as key-value in urlList 
        urlList.push({id: shortURL, long_url: urls[shortURL]});
    });
    res.send(urlList);

});

router.post("/",(req,res)=>{
    const long_url = req.body.long_url; //get long url from req body
    const id = shortid.generate();
    urls[id] = long_url;        // store long url as value of key[id] in urls obj.
    res.status(201).send(urls);
});

router.get("/:id",(req,res)=>{
    const id = req.params.id;
    const long_url = urls[id];
    if(long_url){
        res.send({id,
             long_url:long_url});
    }
    else{
    res.status(404).send({"error":"NOT FOUND !. Invalid Short URL"});
    }
});


module.exports = router;