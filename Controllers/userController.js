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