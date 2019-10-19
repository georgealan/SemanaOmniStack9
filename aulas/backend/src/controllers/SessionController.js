const User = require('../models/User');

module.exports = {
    async store(req, res){
        const {email} = req.body;
        
        //usamos a variável let porque ela pode mudar.
        let user = await User.findOne({email});

        if (!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};
