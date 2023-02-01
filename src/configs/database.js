const mongoose = require("mongoose");

// Connection to MongoDB Atlas

exports.getConnection = function(){
    mongoose.connect("mongodb+srv://befest:befest@clusterprojetspersos.uwmqtur.mongodb.net/BeFest?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log("Connexion réussie à MongoDB"))
    .catch(error => {
      console.error("Connexion échouée à MongoDB");
      console.log(error);
    });
}
