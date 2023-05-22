# Стартуем:
## Бэкенд:

NestJS, PostgreSQL 15.2

### Разворачивание:
1. Установить [docker engine](https://docs.docker.com/engine/install/)
   1. [Добавить группу и прочее](https://docs.docker.com/engine/install/linux-postinstall/)
   2. Убедиться, что он установлен корректно, выполнив в терминале ```docker --version```
   3. Установить плагин [Docker Compose](https://docs.docker.com/compose/install/linux/)
   4. Рекомендуется установить [новый билдер](https://docs.docker.com/build/install-buildx/).
   5. Проверить работу без рута командой ```docker run hello-world```
2. Установить [NodeJS 18.16.0 (LTS)](https://nodejs.org/ru)
3. Установить [Yarn 1.22.19](https://classic.yarnpkg.com/lang/en/docs/install/) командой ```npm i -g yarn```
4. Перейти в директорию backend и установить зависимости командой ```yarn```
5. Перейти в родительскую (предыдущую) директорию
6. Запустить dev-контейнеры командой ```docker-compose up``` (или ```docker compose up``` в зависимости от версии и метода установки Compose)
