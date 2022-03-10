let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete al grupo oficial para pasar un rato agradable usando el Bot o platicando con la familia de AGROMOS SP - Bot*

*➤ Grupo oficial del Bot:*
*1.- https://chat.whatsapp.com/H1UqcwM5TeZFjt7LELOVNS*
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*💚 AGROMOS SP - BOT 💚*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
