Верстка сделана с помощью GUlP и БЭМ.

Для работы надо:
1. Скачать node.js
2. В папке проекта открыть консоль и написать npm install(установить дев.Зависимости из package.json)

Команды gulp:
1. gulp start 
Команда запускает все команды gulp, исполняет их далее запускает watcher и browserSync.
2. gulp pug 
Команда компилирует файлы pug из папки 'src/pug/pages/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.pug' в html файлы в папке 'build/'
3. gulp sass
Команда собирает файлы scss из папок 'src/static/style/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.scss', 'src/pug/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.scss' и создает  main.min.css в папке 'build/css'
4. gulp scripts
Команда собирает файлы js из папок 'src/static/js/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.js', 'src/pug/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.js' и создает lib.min.js в папке 'build/js'
5. gulp svg
Команда собирает файлы svg из папок 'src/static/image/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.svg' и создает файл sprite.svg в папке 'build/image'. Обращаться к svg надо по их id в этом файле
6. gulp watch
Команда запускает отслеживание изменений во всех папках и файлах проекта.
7. gulp other:img
Команнда собирает все картинки из папки 'src/static/image/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.ЛЮБОЙ_ФОРМАТ_ФАЙЛА' и  перекидывает их в папку 'build/image'
8. gulp other:fonts
Команнда собирает все шрифты из папки 'src/static/fonts/НАЗВАНИЕ_ЛЮБОЙ_ПАПКИ/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.ЛЮБОЙ_ФОРМАТ_ФАЙЛА' и  перекидывает их в папку 'build/fonts'
9. gulp other:styleLib
Команнда собирает все css файлы библиотек из папки 'src/static/style/lib/ЛЮБОЕ_НАЗВАНИЕ_ФАЙЛА.css' и  перекидывает их в папку 'build/css/lib'
"# volgograd360" 
