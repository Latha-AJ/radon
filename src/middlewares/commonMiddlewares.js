const http = require("http")

const mid1= function ( req, res, next) {
    let today = new Date();
    let month = today.getMonth()+1;
    let year =today.getFullYear();
    let date = today.getDate();
    console.log(today+ " "+ req.socket.localAddress+ " "+ req.path)
    next()
}



module.exports.mid1= mid1


