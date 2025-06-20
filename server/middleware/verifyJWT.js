const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log(JSON.stringify(authHeader));
    if(!authHeader) return res.status(403).json({ message: "Token tidak ditemukan" });
    const token = authHeader.split(' ')[1];
    console.log(token);
    if(!token) {
        return res.status(403).json({ message: "Token tidak ditemukan" });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) {
            console.log(`Verify JWT ERror: ${err}`);
            return res.status(403).json({ message: "Unauthorized access" });
        }
        // console.log(req.username);
        req.username = decoded.username;
        req.role = decoded.role;
        console.log(req.username);
        next();
    });
}

module.exports = verifyJWT;
// Explanation:
// In this snippet, we have a middleware function named verifyJWT that will verify the JWT token sent by the client.
// The middleware function will check if the token is present in the request headers. If the token is not found, it will return a 403 status code with a message "Token tidak
// ditemukan".
// If the token is found, the middleware function will verify the token using the jwt.verify method. If the token is invalid or expired, it will return a 401 status code with a
// message "Unauthorized access".
// If the token is valid, the middleware function will extract the username from the decoded token and attach it to the request object as req.username. This allows the
// subsequent route handler to access the username of the authenticated user.
// Finally, the middleware function calls the next function to pass the control
// to the next middleware or route handler in the request-response cycle.
// The verifyJWT middleware can be used in any route handler that requires authentication. For example, you can use it in the routes that require authentication as follows: