const userModel = require("./userModel");

const signup = async (req, res) => {
    const { yourName, yourEmail, yourPassword } = req.body;
   
    try {
       
        const userCreate = new userModel({
            name: yourName,
            email: yourEmail,
            password: yourPassword
        })
        await userCreate.save();
        console.log('User created successfully');
        res.status(201).send("User registered successfully");
        // json({ message: 'User registered successfully' })
    } catch (error) {
        console.log('Internal Server Error');
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const signin = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        try {
            const userObj = await userModel.findOne({ email: email })
            console.log("user from login",userObj);
            if (!userObj) {
                console.log("User not exist");
                res.send("User not exist");
            } else {
                if (password === userObj.password) {
                    console.log("login successs");
                    res.json({ message: "login success", username: userObj.name});
                }
            }
        } catch (error) {
            res.send("Invalid login");
        }
    }
}

module.exports = { signup, signin };
