import { Link } from "react-router-dom";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Courses",
    links: ["Web Development", "Data Science", "AI & ML", "Cloud", "Design"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQs", "Community", "Terms of Service", "Privacy Policy"],
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 mt-auto">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-extrabold flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg">
                🎓
              </span>
              <span className="text-white">
                Course<span className="text-gradient">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-sm">
              An AI-powered learning platform that helps you master in-demand
              tech skills with personalized tutoring, interactive courses, and
              verified certificates.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {["𝕏", "f", "in", "▶", "📷"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-sm transition-colors"
                  aria-label={`Social ${i}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter mini */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {year} CoursePro. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Made with</span>
            <span className="text-red-500">❤</span>
            <span className="text-sm text-gray-400">for learners worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
