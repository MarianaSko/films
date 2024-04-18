import express from "express";
import moviesController from "../controllers/moviesController.js";
import validateBody from "../decorators/validateBody.js";
import { createMovieSchema, updateMovieSchema } from "../schemas/moviesSchema.js";
import { isValidId } from "../middlewares/isValidId.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAllMovies);

moviesRouter.delete("/:id", isValidId, moviesController.deleteMovie);

moviesRouter.post("/add", validateBody(createMovieSchema), moviesController.createMovie);

moviesRouter.put("/:id", isValidId, validateBody(updateMovieSchema), moviesController.updateMovie);

export default moviesRouter;