import express from "express";
import {
  checkImg,
  commentDetai,
  postComment,
} from "../controllers/detailController.js";

const detailRouter = express.Router();

// thông tin bình luận
detailRouter.get("/comment/:hinh_id", commentDetai);

// kiểm tra ảnh lưu hay chưa
detailRouter.get("/img-check/:hinh_id", checkImg);

// bình luận
detailRouter.post("/post-comment/:hinh_id", postComment);

export default detailRouter;
