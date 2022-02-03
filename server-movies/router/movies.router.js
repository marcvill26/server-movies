const express = require('express');
const Movie = require('../models/Movie');
const moviesRouter = express.Router();

const movies = [
    {id: 1, title:'The GodFather', director: 'Francis Ford Copplola', year:'1972', genre:'Crime, Drama'},
    {id: 2, title:'Titanic', director: 'James Cameron', year:'1997', genre:'romance'},
    {id: 3, title:'Capitan Philips', director: 'Paul Greengrass', year:'2013', genre:'Drama,Thriller'},
    {id: 4, title:'The Holiday', director: 'Nancy Meyers', year:'2006', genre:'Romance'},
    {id: 5, title:'Shutter Island', director: 'Martin Scorsese', year:'2010', genre:'Thriller'},
];

//Gets...
moviesRouter.get('/', (req, res, next) => {
    let filtro ={};
    if (req.query.title) {
        filtro = {...filtro, title: req.query.title};
    }
    const anterioresFilms = Number(req.query.anterioresFilms);
    const posterioresFilms = Number(req.query.posterioresFilms);
    if (!isNaN(anterioresFilms) && !isNaN(posterioresFilms)){
        filtro = {...filtro,year: {$lt: anterioresFilms, $gte: posterioresFilms}};
    } else if (!isNaN(anterioresFilms)){
        filtro = {...filtro,year: {$lt:anterioresFilms}}
    } else if (!isNaN(posterioresFilms)){
        filtro = {...filtro,year: {$gte:posterioresFilms}};
    }
    console.log('Filtro de /Movies', filtro);
    return Movie.find(filtro)
    .then(movieleidas => {
        return res.status(200).json(movieleidas);
    }) 
    .catch(err => {
        const error = new Error(err);
        error.status = 500;
        return next (error);

    });
});

//get movies by id

moviesRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return Movie.findById(id)
    .then ((movie) => {
        if (!movie){
            const error = new Error('Pelicula no encontrada');
            error.status = 404;
            return next(error);
        }
        return res.status(200).json(movie);
    })
    .catch(err => {
        const error = new Error (err);
        error.status = 500;
        return next (error);
    });
});

//get by title

moviesRouter.get('/movies/title/:title', (req, res, next) => {
    const title = req.params.title;

    return Movie.findById(title)
    .then((movie) => {
        if (!movie){
            const error= new Error('Titulo de pelicula no encontrada');
            error.status(404);
            return next (error);
        }
        return res.status(200).json(movie);
    })
    .catch(err => {
        const error = new Error(err);
        error.status(500);
        return next (error);
    });
});

// get by genre 

moviesRouter.get('/movies/genre/:genre', (req, res, next) => {
    const genre = req.params.genre;
    return Movie.findById(genre)
    .then((movie) => {
        if (!movie){
            const error = new Error('Tipo de pelicula no encontrado');
            error.status(404);
            return next (error);
        }
        return res.status(200).json(movie);
    })
    .catch(err => {
        const error = new Error(err);
        error.status(500);
        return next(error);
    });
});
module.exports= moviesRouter;