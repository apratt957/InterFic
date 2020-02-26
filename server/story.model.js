const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Story = new Schema(
  {
    name: {
      type: String
    },
    scenes: [
      {
        sceneId: Number,
        text: String,
        keywords: [Schema.Types.Mixed]
      }
    ]
  },
  { versionKey: false }
);

module.exports = mongoose.model('Story', Story);
