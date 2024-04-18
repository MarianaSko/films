import * as moviesService from "../services/moviesServices.js";
import HttpError from "../helpers/HttpError.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const getAllMovies = async (req, res) => {
    const result = await moviesService.getAllMovies();
    res.json(result);
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    const result = await moviesService.removeMovie(id);
    if (!result) {
        throw HttpError(404);
    }
    res.json(result)
};

const createMovie = async (req, res) => {
    const result = await moviesService.addMovie(req.body)
    res.status(201).json(result)
};

const updateMovie = async (req, res) => {
    const { id } = req.params;

    const result = await moviesService.updateMovieById(id, req.body)
    if (!result) {
        throw HttpError(404);
    }
    res.json(result)
};


export default {
    getAllMovies: ctrlWrapper(getAllMovies),
    deleteMovie: ctrlWrapper(deleteMovie),
    createMovie: ctrlWrapper(createMovie),
    updateMovie: ctrlWrapper(updateMovie),
}