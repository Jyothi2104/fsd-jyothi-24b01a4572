const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Login page
app.get("/", (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Simple example credentials
    if (username === "admin" && password === "1234") {

        // Create cookie
        res.cookie("username", username, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        res.send(`
            <h2>Login Successful!</h2>
            <a href="/dashboard">Go to Dashboard</a>
        `);
    } else {
        res.send("Invalid username or password");
    }
});

// Dashboard
app.get("/dashboard", (req, res) => {

    // Read cookie
    const username = req.cookies.username;

    if (!username) {
        return res.send("Please login first.");
    }

    res.send(`
        <h2>Welcome ${username}!</h2>
        <p>You are logged in.</p>
        <a href="/logout">Logout</a>
    `);
});

// Logout
app.get("/logout", (req, res) => {

    // Delete cookie
    res.clearCookie("username");

    res.send(`
        <h2>Logged out successfully!</h2>
        <a href="/">Login Again</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});