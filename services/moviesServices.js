import Movie from "../models/Movie.js";

export const getAllMovies = () => Movie.find();

export const addMovie = (data) => Movie.create(data);

export const removeMovie = (contactId) => Movie.findByIdAndDelete(contactId)

export const updateMovieById = (contactId, data) => Movie.findByIdAndUpdate(contactId, data)
