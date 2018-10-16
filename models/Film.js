const mongoose = require('mongoose')
const Schema = mongoose.Schema

const filmSchema = new Schema({
  Awards: [Schema.Types.Mixed],
  Genres: [String],
  OtherNames: [Schema.Types.Mixed],
  Participants: [Schema.Types.Mixed],
  ReleaseYear: Number,
  StoryLines: [Schema.Types.Mixed],
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String
})

const Film = mongoose.model('Film', filmSchema, 'Titles')

module.exports = Film
