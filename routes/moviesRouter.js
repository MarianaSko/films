import express from "express";


import moviesController from "../controllers/moviesController.js";
import validateBody from "../decorators/validateBody.js";
import { createMovieSchema, updateMovieSchema, updateFavoriteStatusSchema } from "../schemas/moviesSchema.js";
import { isValidId } from "../middlewares/isValidId.js";

const moviesRouter = express.Router();

// moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAllMovies);

moviesRouter.get("/:id", isValidId, moviesController.getOneMovie);

moviesRouter.delete("/:id", isValidId, moviesController.deleteMovie);

moviesRouter.post("/", validateBody(createMovieSchema), moviesController.createMovie);

moviesRouter.put("/:id", isValidId, validateBody(updateMovieSchema), moviesController.updateMovie);

moviesRouter.patch('/:id/favorite', isValidId, validateBody(updateFavoriteStatusSchema), moviesController.updateStatus)

export default moviesRouter;