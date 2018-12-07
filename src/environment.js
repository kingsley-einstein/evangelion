require('dotenv').config({path: require('path').join(__dirname, '/.env')});

//console.log(process.env.SECRET);

export const mongo_uri_for_dev = process.env.Dev_Mongo;
export const mongo_uri_for_prod = process.env.Prod_Mongo;
export const secret = process.env.SECRET