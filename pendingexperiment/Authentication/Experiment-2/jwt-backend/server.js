// jwt-backend/server.js (Node.js Backend)

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = 3000;

// --- 1. CONFIGURATION and MIDDLEWARES ---
app.use(express.json()); 
app.use(cors()); 

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key'; 

// --- 2. FAKE USER DATABASE (For Simplicity) ---
const hardcodedUser = {
    id: 1,
    username: 'testuser',
    password: 'password123' 
};

// --- 3. LOGIN ROUTE (Issues Token) ---
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== hardcodedUser.username || password !== hardcodedUser.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const userPayload = { 
        id: hardcodedUser.id, 
        username: hardcodedUser.username 
    };

    const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: '1h' }); 
    
    res.json({ token }); 
});

// --- 4. JWT VERIFICATION MIDDLEWARE ---
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) {
        return res.status(401).json({ message: 'Token missing' }); 
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user; 
        next(); 
    });
}

// --- 5. PROTECTED ROUTE (Requires Token) ---
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ 
        message: 'You have accessed a protected route!', 
        user: req.user 
    });
});

// --- 6. START SERVER ---
app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});