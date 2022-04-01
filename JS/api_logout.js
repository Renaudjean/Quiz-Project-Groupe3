const res = require("express/lib/response");

module.exports.sign_logout = (req, response) => {
        req.session.user = false;     
        response.redirect('/')
}