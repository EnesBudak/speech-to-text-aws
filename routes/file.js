const router = require("express").Router();

const upload = require("../services/audio-upload");

const singleUpload = upload.single("audio");

router.post("/file", (req, res) => {
  singleUpload(req, res, function(err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }]
      });
    }

    return res.json({ imageUrl: req.file.location });
  });
});
module.exports = router;
