if(process.env.NODE_ENV == 'production'){
  module.exports = {mongoURI: 'mongodb://david:jesus4love@ds147361.mlab.com:47361/davsun-prod'}
} else{
  module.exports = {mongoURI: 'mongodb://localhost/davsun-dev'}
}