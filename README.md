# Тестовое задание для inetstudio

Выполненное тестовое задание для inetstudio от [Полиенко В. С.](https://github.com/Kasaklalita) Условие задания доступно [здесь](https://github.com/inetstudio/vue-js-interview/blob/master/README.md).

Приложение построено на Vue3 + Vite + TS. Также использовались:

- pinia в качестве хранилища
- eslint в качестве линтера
- prettier для форматирования кода
- tailwind в качестве CSS-фреймворка
- Docker для сборки

Используются husky pre-commit хуки, перед каждым коммитом запускается линтер, prettier и tsc-check.

## Запуск через Docker

Приложение может быть запущено посредством Docker. Для этого нужно перейти в папку проекта и выполнить следующую команду:

```bash
docker build -t vue-interview .
```

Когда сборка завершится, проект нужно запустить и перейти по http://localhost:5173/

```bash
docker run -dp 5173:5173 vue-interview
```

## Запуск через npm

Чтобы запустить проект через npm, требуется зайти в папку проекта и выполнить следующие команды, после чего перейти по предложенной ссылке:

```bash
npm install
npm run dev
```
