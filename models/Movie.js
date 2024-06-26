import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Set title for movie'],
    },
    description: {
        type: String,
        default: 'No description'
    },
    rating: {
        type: Number,
        max: 10,
        default: 0
    },
    release_date: {
        type: Date,
        default: Date.now
    },
    genre: {
        type: [String],
        default: ["Genre is not specified"]
    },
    actors: {
        type: [String],
        default: ["Actors are not specified"]
    },
    director: {
        type: String,
        default: 'Director is not specified',
    },
    image: {
        type: String,
        default: 'https://img.pixers.pics/pho_wat(s3:700/FO/60/38/17/86/700_FO60381786_66ee019b3b157f8ec2bff7d6f7bf9340.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-movie-icon-items-for-cinema-isolated-on-white-background-reel-of.jpg.jpg',
    },
}, { versionKey: false })

movieSchema.post("save", handleSaveError);

movieSchema.pre("findOneAndUpdate", setUpdateSettings);

movieSchema.post("findOneAndUpdate", handleSaveError);

const Movie = model("movie", movieSchema);

export default Movie;