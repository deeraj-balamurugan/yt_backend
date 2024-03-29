import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, "./public/temp");
  },
  filename: function (res, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.random(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

export const upload = multer({
  storage,
});
