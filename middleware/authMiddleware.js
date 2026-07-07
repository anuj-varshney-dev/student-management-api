const jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }

        const token = authHeader.split(" ")[1]; // we need token only as thunderclient send bearer and token so we use slpit

        const decoded = jwt.verify( // 1.Checks if the token is valid 2.Returns the original payload
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded; // attaching logged in users information to the request 

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
}

module.exports = authMiddleware;