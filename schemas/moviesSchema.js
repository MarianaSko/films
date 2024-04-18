import Joi from "joi";

export const createMovieSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.number().max(10),

    release_date: Joi.date(),
    genre: Joi.array(),
    actors: Joi.array(),
    director: Joi.string(),
    image: Joi.string(),
})

export const updateMovieSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    rating: Joi.number().max(10),
    release_date: Joi.date(),
    genre: Joi.array(),
    actors: Joi.array(),
    director: Joi.string(),
    image: Joi.string(),
})
    .min(1)
    .message("Body must have at least one field");


export const updateFavoriteStatusSchema = Joi.object({
    favorite: Joi.boolean().required()
})