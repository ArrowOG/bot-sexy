let handler = m => m.reply('*Buen dia.*👋☺️😘,_✨Te deseo un excelente inicio de dia✨_')

handler.customPrefix = /Buen días|buenos dias/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
