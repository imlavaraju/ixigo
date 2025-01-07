import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    // Access the Authorization header
    const token = req.headers['authorization']; // or req.get('Authorization')

    if (!token) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }

    try {
        // Remove the "Bearer " prefix if present
        const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;
        
        // Verify the token
        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};
