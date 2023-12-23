import express from "express";
import {
  deleteImg,
  deleteImgAdmin,
  getUserDetail,
  listImg,
  listImgSave,
} from "../controllers/manageController.js";

const manageImgRouter = express.Router();

// thông tin user
manageImgRouter.get("/user-detail/", getUserDetail);

// danh sách ảnh đã tạo theo user id
manageImgRouter.get("/list-img", listImg);

// danh sách ảnh đã lưu theo user id
manageImgRouter.get("/list-img-save", listImgSave);

// xóa hình
manageImgRouter.delete("/delete-img/:hinh_id", deleteImg);

// xóa luôn hình theo hinh_id
manageImgRouter.delete("/delete-img-admin/:hinh_id", deleteImgAdmin);

export default manageImgRouter;
