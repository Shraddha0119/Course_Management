import Course from "../models/Course.js";
import User from "../models/User.js";

export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Check course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Get logged-in student
    const student = await User.findById(req.user.id);

    // Prevent duplicate enrollment
    if (student.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    student.enrolledCourses.push(courseId);
    await student.save();

    res.status(200).json({
      message: "Enrollment successful",
      course: course.title,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---my-courses-- //

export const getMyCourses = async (req, res) => {
  try {
    const student = await User.findById(req.user.id).populate("enrolledCourses");

    res.status(200).json({
      count: student.enrolledCourses.length,
      courses: student.enrolledCourses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



