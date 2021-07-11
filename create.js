const { Books } = require('./models')

Books.create({
isbn: 1234,
judul: 'buku program',
sinopsi: 'buku yang menjelaskan tentang program',
penulis: 'hakim',
genre: 'edukasi'
})
.then(article => {
    console.log(article)
})
.catch(err => {
    console.log(err)
})