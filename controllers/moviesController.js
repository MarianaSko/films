import * as moviesService from "../services/moviesServices.js";
import HttpError from "../helpers/HttpError.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const getAllMovies = async (req, res) => {
    const result = await moviesService.getAllMovies();
    res.json(result);
    // const { _id: owner } = req.user;
    // const { page = 1, limit = 10, favorite } = req.query;
    // const { page = 1, limit = 10 } = req.query;
    // const skip = (page - 1) * limit;
    // const result = await moviesService.getMoviesByFilter({}, { skip, limit });
    // const total = await moviesService.getMoviesCountByFilter({});
    // res.json({ total, result });
};

const getOneMovie = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await moviesService.getMovieByFilter({ _id: id, owner });
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    // const { _id: owner } = req.user;
    const result = await moviesService.removeMovie(id);
    if (!result) {
        throw HttpError(404);
    }
    res.json(result)
};

const createMovie = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await moviesService.addMovie({ ...req.body, owner })
    res.status(201).json(result)
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await moviesService.updateMovieByFilter({ _id: id, owner }, req.body)
    if (!result) {
        throw HttpError(404);
    }
    res.json(result)
};

const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await moviesService.updateStatusByFilter({ _id: id, owner }, req.body)
    if (!result) {
        throw HttpError(404);
    }
    res.json(result)
}

export default {
    getAllMovies: ctrlWrapper(getAllMovies),
    getOneMovie: ctrlWrapper(getOneMovie),
    deleteMovie: ctrlWrapper(deleteMovie),
    createMovie: ctrlWrapper(createMovie),
    updateMovie: ctrlWrapper(updateMovie),
    updateStatus: ctrlWrapper(updateStatus)
}