'use strict'

const Telegram = require('telegram-node-bot'),
    tg = new Telegram.Telegram('703634839:AAHY8dHALlJZrr9XPcutZspZts4oZMuu9ZY', {
        workers: 1
    });

const PingController = require('./controllers/ping');
const OtherwiseController = require('./controllers/otherwise');
const PizzaController = require('./controllers/pizza');

tg.router.when(new Telegram.TextCommand('/startOrdinazioni', 'pizzaCommand'), new PizzaController())
        .when(new Telegram.TextCommand('/pizza', 'pizzaCommand'), new PizzaController())
        .when(new Telegram.TextCommand('/resoconto', 'pizzaCommand'), new PizzaController())
        .when(new Telegram.TextCommand('/ping', 'pingCommand'), new PingController())      
        .when(new Telegram.TextCommand('/spese', 'speseCommand'), new SpeseController())  
        .otherwise(new OtherwiseController());