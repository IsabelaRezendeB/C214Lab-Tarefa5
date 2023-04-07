const mongoose = require('mongoose');

// substituir pelo seu link
const uri = `mongodb+srv://user:<password>@cluster0.hgbrisq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const FilmeSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    ano: Number,
    genero: String,
});

const FilmeModel = mongoose.model('FilmeModel', FilmeSchema);

module.exports = {
    FilmeModel,
};