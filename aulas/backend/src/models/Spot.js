const mongoose = require('mongoose');

/** 
 * Gravamos o ID de usuário para fazer referência para quem criou
 * o Spot no banco e também referênciamos com o ref: 'User', para o 
 * model User, fazendo uma referência.
*/

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', UserSchema);