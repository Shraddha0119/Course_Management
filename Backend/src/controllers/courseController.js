import Course from "../models/Course.js";
import User from "../models/User.js";

// Create Course (Admin / Instructor)
export const createCourse = async (req, res) => {
  try {
    const { title, description, price, duration, thumbnail, instructor } = req.body;

    if (!title || !description || !price || !duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Assign instructor: if instructor creates, assign self; if admin, use body
    const instructorId =
      req.user.role === "instructor" ? req.user.id : instructor;

    const course = await Course.create({
      title,
      description,
      price,
      duration,
      thumbnail,
      instructor: instructorId,
    });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Courses (Public)
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single course by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor", "name email");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Course (Admin / Instructor)
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Only instructor of the course or admin can update
    if (req.user.role === "instructor" && course.instructor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    Object.assign(course, req.body); // update fields
    await course.save();

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete course (Admin only)
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await course.remove();

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Instructor / Admin: View Students Enrolled in Course
export const getCourseStudents = async (req, res) => {
  try {
    const { id } = req.params; // courseId

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Instructor can only access their own course
    if (req.user.role === "instructor" && course.instructor.toString() !== req.user.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    const students = await User.find({
      role: "student",
      enrolledCourses: id,
    }).select("name email");

    res.status(200).json({
      course: course.title,
      totalStudents: students.length,
      students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
