import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800">
          Learn Without Limits
        </h1>

        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Master modern technologies with our Course Management System.
          Learn React, Node.js, Express, MongoDB, and build real-world
          projects.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Explore Courses
          </Link>

          <Link
            to="/register"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Register
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">📚 Expert Courses</h3>
            <p className="mt-3 text-gray-600">
              Industry-level courses designed for beginners and professionals.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">👨‍🏫 Best Instructors</h3>
            <p className="mt-3 text-gray-600">
              Learn from experienced instructors and developers.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">🎓 Certification</h3>
            <p className="mt-3 text-gray-600">
              Receive certificates after completing your courses.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold">💼 Career Support</h3>
            <p className="mt-3 text-gray-600">
              Build projects and prepare for real interviews.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white rounded-xl p-12 text-center my-16">
        <h2 className="text-4xl font-bold">
          Ready to Start Learning?
        </h2>

        <p className="mt-4 text-lg">
          Join today and begin your journey toward becoming a Full Stack Developer.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
}

export default Home;