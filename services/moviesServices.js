import Movie from "../models/Movie.js";

export const getAllMovies = () => Movie.find();
export const getMoviesByFilter = (filter, query = {}) => {
    if (!filter.favorite) {
        filter = { owner: filter.owner }
    }
    return Movie.find(filter, null, query)
}


export const getMoviesCountByFilter = filter => {
    if (!filter.favorite) {
        filter = { owner: filter.owner }
    }
    return Movie.countDocuments(filter)
};

export const getMovieById = (contactId) => Movie.findById(contactId);
export const getMovieByFilter = filter => Movie.findOne(filter);

export const addMovie = (data) => Movie.create(data);

export const removeMovie = (contactId) => Movie.findByIdAndDelete(contactId)
export const removeMovieByFilter = filter => Movie.findOneAndDelete(filter)

export const updateMovieById = (contactId, data) => Movie.findByIdAndUpdate(contactId, data)
export const updateMovieByFilter = (filter, data) => Movie.findOneAndUpdate(filter, data);

export const updateStatusContact = (contactId, data) => Movie.findByIdAndUpdate(contactId, data);
export const updateStatusByFilter = (filter, data) => Movie.findOneAndUpdate(filter, data)