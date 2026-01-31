const blogs = [
  {
    id: 1,
    title: "CAP theorem for big companies",
    date: "January 8, 2026",
    excerpt:
      "Key lessons, mistakes, and practical insights from building a real full-stack application.",
    link: "https://medium.com/p/44618e37f091",
  },
];

export default function Blogs() {
  return (
    <section className="projects" style={{ padding: "60px 10%" }}>
      <h2 className="section-title" style={{ marginBottom: "30px" }}>
        Blogs
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {blogs.map(blog => (
          <div
            key={blog.id}
            style={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "8px",
              padding: "14px 18px",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "#94a3b8",
                marginBottom: "4px",
              }}
            >
              {blog.date}
            </p>

            <h3
              style={{
                fontSize: "1rem",
                color: "#f97316",
                marginBottom: "6px",
              }}
            >
              {blog.title}
            </h3>

            <p
              style={{
                fontSize: "0.85rem",
                color: "#cbd5e1",
                lineHeight: "1.5",
              }}
            >
              {blog.excerpt}
            </p>

            <a
              href={blog.link}
              style={{
                fontSize: "0.8rem",
                color: "#f97316",
                fontWeight: 500,
              }}
            >
              Read →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
