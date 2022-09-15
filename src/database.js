
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://gabriel:621gm848620@softgarten-mbyfr.mongodb.net/zanatest?retryWrites=true&w=majority', {
// mongoose.connect('mongodb+srv://gabriel:621gm848620@softgarten-mbyfr.mongodb.net/zanahora?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost/zanahora-db', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('db is Up'))
    .catch(err => console.error(err));
