import express from "express";
import { enrollCourse } from "../controllers/enrollController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { getMyCourses } from "../controllers/enrollController.js";

const router = express.Router();

// Student enroll course
router.post(
  "/:courseId",
  protect,
  authorize("student"),
  enrollCourse
);

router.get(
  "/my-courses",
  protect,
  authorize("student"),
  getMyCourses
);



export default router;
