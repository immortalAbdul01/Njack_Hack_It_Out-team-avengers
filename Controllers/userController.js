const User = require('./../models/userModel')
exports.signIn = async (req, res) => {
    try {

        const user = await User.create(req.body)
        res.status(201).json({
            status: 'sucess',
            data: user
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            mssg: err.message

        })

    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email }).select('+createPassword')
    if (!await user.correctPassword(password, user.createPassword)) {
        res.status(404).json({
            status: 'failed',
            mssg: 'incorrect password or email'
        })
    }
    res.status(201).json({
        status: 'sucess',
        mssg: 'you have sucessfully logged in',
        user: user
    })

}