const { Books } = require('./models')

Books.destroy({
    where: {
    sinopsi: 'buku yang menjelaskan tentang program'
    }
})
    
.then(() => console.log("Sinopsi dari buku program sudah dihapus"))