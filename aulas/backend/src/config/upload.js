const multer = require('multer');
const path = require('path');

/**
 * Utilizamos o multer para trabalhar com upload de imagens e arquivos. porque o 
 * JSON não aceita upload de imagem, por isso precisamos usar Multipart Form para 
 * trabalharmos com uploads de arquivos, imagens.
 * 
 * Para fazermos a importação da lib do multer para o modulo do Node.js precisamos executar o seguinte 
 * comando para downlaod das dependências: yarn add multer
 */

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),      
        filename: (req, file, cb) => {
            /**
             * Captura a extensão do arquivo.
             */
            const ext = path.extname(file.originalname);

            /**
             * O basename remove a extensão do arquivo do nome do arquivo, ficando somente o nome do arquivo.
             * Ele retorna o nome da imagem sem a extensão.
             */
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};