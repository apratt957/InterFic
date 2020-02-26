const router = require('express').Router();
const Story = require('../story.model');
module.exports = router;

//get all stories
router.get('/', async (req, res, next) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    next(error);
  }
});

//create new story
router.post('/', async (req, res, next) => {
  try {
    const newStory = new Story({ name: req.body.name });
    await newStory.save();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// add scene to story
router.patch('/addScene', async (req, res, next) => {
  try {
    const updatedStory = await Story.findOneAndUpdate(
      { _id: req.body.id },
      {
        $push: {
          scenes: {
            sceneId: req.body.sceneId,
            text: req.body.text,
            keywords: [{ key: req.body.keyword, pointer: req.body.pointer }]
          }
        }
      },
      { new: true }
    );
    res.json(updatedStory);
  } catch (error) {
    next(error);
  }
});
