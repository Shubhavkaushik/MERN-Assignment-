const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const express = require('express');

const url = '*********';
const mongoConnect = async () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fd = await mongoose.connection.collection("DATA")
              
            fd.find({}).toArray((err,data)=>{
                global.alldata = data;
            })
           
           fd.distinct('country',  (err, data)=> {
                global.country= data;
                      });


            fd.distinct('sector',  (err, data)=> {
                  global.sector= data;
                                });

                               
         

                       
        //    fd.distinct('country',  (err, data)=> {
        //         global.country= data;
        //                });

                       
        //      fd.distinct('country',  (err, data)=> {
        //         global.country= data;
        //                });

                       
        //      fd.distinct('country',  (err, data)=> {
        //         global.country= data;
        //                });
                

            
        }
    }


    )
}

module.exports.mongoConnect = mongoConnect;
