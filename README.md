# Auction

[![Build Status](https://travis-ci.org/AleksandrKrav/Auction.svg?branch=master)](https://travis-ci.org/AleksandrKrav/Auction)
[![Packagist](https://img.shields.io/packagist/v/AleksandrKrav/Auction.svg)]()

a [Sails](http://sailsjs.org) application
Для запуску програми виконати таку послідовність дій:
1. Встановити nodejs, npm, mongodb
2. Перейти через командну строку в папку проекта
3. Виконати команду npm install
4. Запустити mongodb
5. Запустити програму через командну строку sails lift

Для 4 лабораторной работы :
1.
Используем docker-compose для запуска сервера(sailsjs) и БД(mongoDB). Используем два образа один node, второй - mongo.

Команда для зборки проекта:
sudo docker build -t auction .
Команда для запуска
sudo docker-compose up

2.
Для второго задания nodejs, sailsjs не совсем подходят для решения задания.
Проект не возможно собрать в один файл. Для пуска нужен один проект, включая npm.
Поэтому мы решили показать навыки работы с параметром -v.
Для запуска необходимо использовать команду :
docker run -v [путь к папке на host-машине]:/home/apps/auction/www auction grunt buildProd

3.
Мы опять столкнулись с проблемой, ведь образ сервера запускался раньше чем поднималась БД.
После обработки нескольких возможных вариантов решения проблемы, у нас остался единственный возможный,
это обычный sleep 60, который все исправил.
