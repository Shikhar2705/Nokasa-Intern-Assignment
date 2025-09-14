const validateUserV1 = (req, res, next) => {
    const { id, password } = req.body;

    // Missing Fields Check
    if (!id || !password) {
        return res.status(400).json({ status: "error", message: "Missing required fields: id and password" });
    }

    // Email Format Check for V1
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(id)) {
        return res.status(400).json({ status: "error", message: "Invalid email format" });
    }

    // Password Strength (For example a min. length of 6 characters)
    if (password.length < 6) {
        return res.status(400).json({ status: "error", message: "Password must be at least 6 characters long" });
    }

    next();
}

const validateUserV2 = (req, res, next) => {
    const { id, password } = req.body;

    // Missing Fields Check
    if (!id || !password) {
        return res.status(400).json({ status: "error", message: "Missing required fields: id and password" });
    }

    // Phone Number Format Check for V2 (Assuming a simple 10 digit number format)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(id)) {
        return res.status(400).json({ status: "error", message: "Invalid phone number format" });
    }
      

    // Password Strength (For example a min. length of 6 characters)
    if (password.length < 6) {
        return res.status(400).json({ status: "error", message: "Password must be at least 6 characters long" });
    }

    next();
}

modules.exports = {
    validateUserV1,
    validateUserV2
};