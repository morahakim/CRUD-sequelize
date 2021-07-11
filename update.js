const { Books } = require('./models')
// Kita lakukan query terhadap artikel
// Artikel tersebut memiliki id yang bernilai 1
const query = {
where: { id: 1 }
}
Books.update({
genre: 'horor'
}, query)
.then(() => {
console.log("Artikel berhasil diupdate")
process.exit()
})
.catch(err => {
console.error("Gagal mengupdate artikel!")
})