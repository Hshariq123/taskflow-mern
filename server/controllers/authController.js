async function registerUser(req, res) {
    let data = req.body;
    console.log(data);
    res.send('Registration successful');
}

const AuthController = {
    registerUser
}

module.exports = AuthController;