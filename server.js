// Простой локальный сервер на 5555 порту => localhost:5555

// Получаем модуль http, который необходим для создания сервера
const http = require("http");
// Получаем модуль fs, который необходим для работы с файлами 
const fs = require("fs");
   
http.createServer((request, response) => {
    let filePath = "index.html";

    if(request.url !== "/") {
        // Получаем путь после слеша
        filePath = request.url.substr(1);
    }

    // Ищем файл
    fs.readFile(filePath, function(error, data) {
        // Если не нашли - ошибка    
        if(error) {  
            response.statusCode = 404;
            response.end("Ресурс не найден!");
        }   
        // Если нашли - возвращаем данные
        else {
            response.end(data);
        }
    });
     
    // Запускаем сервер на 5555 порту
}).listen(5555, () => 
console.log("Локальный сервер запущен на localhost:5555"));