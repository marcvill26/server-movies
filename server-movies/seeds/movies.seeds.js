const  mongoose = require('mongoose');
const db = require('../db');
const Movie = require('../models/Movie');

const movies = [
    {
        title: 'The GodFather',
        director:'Francis Ford Copplola',
        year:'1972',
        genre:'Crime, Drama'
    },

    {
        title: 'Titanic',
        director:'James Cameron',
        year:'1997',
        genre:'Romance'
    },
    {
        title: 'Capitan Phillips',
        director:'Paul Greengrass',
        year:'2013',
        genre:'Drama, Thriller'
    },
    {
        title: 'The Holiday',
        director:'Paul Greengrass',
        year:'2006',
        genre:'romance, comedia'
    },
    {
        title: 'Shutter Island',
        director:'Martin Scorsese',
        year:'2010',
        genre:'Thriller, Intriga'
    },
];