import { useEffect, useState } from "react";
import "../styles/blogs.css";
const BLOG_API =
  "https://medium2.p.rapidapi.com/user/9445bab88463/articles";

const API_HEADERS = {
  "x-rapidapi-key":
    "0c9ea115a5mshd6cc042b9f48346p1e7f61jsn925dac24f382",
  "x-rapidapi-host": "medium2.p.rapidapi.co",
  "Content-Type": "application/json",
};


export default function Blogs() {
  const [articles, setArticles] = useState(() => {
    try {
      const saved = sessionStorage.getItem("articles");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      // Already cached
      if (articles.length > 0) return;

      try {
        setIsLoading(true);

        const res = await fetch(BLOG_API, {
          method: "GET",
          headers: API_HEADERS,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const articleIds = data.associated_articles || [];

        const fetchedArticles = await Promise.all(
          articleIds.map(async (articleId) => {
            const result = await fetch(
              `https://medium2.p.rapidapi.com/article/${articleId}`,
              {
                method: "GET",
                headers: API_HEADERS,
              }
            );

            if (!result.ok) {
              throw new Error(
                `Article error! status: ${result.status}`
              );
            }

            return result.json();
          })
        );

        sessionStorage.setItem(
          "articles",
          JSON.stringify(fetchedArticles)
        );

        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [articles.length]);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date.replace(" ", "T")).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  };

  /*
   * Different layouts for different cards.
   *
   * The pattern repeats, so it works whether you have
   * 5 articles or 50 articles.
   */
  const getCardClass = (index) => {
    const layouts = [
      "blog-card--large",
      "blog-card--vertical",
      "blog-card--small",
      "blog-card--wide",
      "blog-card--medium",
      "blog-card--small",
      "blog-card--vertical",
      "blog-card--wide",
    ];

    return layouts[index % layouts.length];
  };

  if (isLoading && articles.length === 0) {
    return (
      <section className="blogs-section">
        <div className="blogs-header">
          <span className="blogs-eyebrow">THOUGHTS & ARTICLES</span>

          <h2>
            Things I've
            <span> learned.</span>
          </h2>

          <p>
            Writing about software engineering, JavaScript,
            system design and things that break at 2 AM.
          </p>
        </div>

        <div className="blogs-grid">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="blog-skeleton" key={item}>
              <div className="skeleton-line skeleton-small" />
              <div className="skeleton-line skeleton-title" />
              <div className="skeleton-line skeleton-text" />
              <div className="skeleton-line skeleton-text short" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="blogs-section">

      {/* HEADER */}
      <div className="blogs-header">

        <div className="blogs-heading-row">
          <div>
            <span className="blogs-eyebrow">
              THOUGHTS & ARTICLES
            </span>

            <h2>
              Ideas worth
              <span> sharing.</span>
            </h2>
          </div>

          <div className="article-count">
            <strong>
              {String(articles.length).padStart(2, "0")}
            </strong>

            <span>articles</span>
          </div>
        </div>

        <p>
          Notes on software engineering, JavaScript,
          system design, Docker and everything I learn
          while building things.
        </p>
      </div>

      {/* GRID */}
      <div className="blogs-grid">

        {articles.map((blog, index) => (
          <article
            key={blog.id}
            className={`blog-card ${getCardClass(index)}`}
          >

            {/* TOP */}
            <div className="blog-card-top">

              <span className="blog-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="blog-date">
                {formatDate(blog.published_at)}
              </span>

            </div>

            {/* CONTENT */}
            <div className="blog-content">

              <div className="blog-tags">
                {blog.tags?.slice(0, 3).map((tag) => (
                  <span key={tag}>
                    #{tag}
                  </span>
                ))}
              </div>

              <h3>{blog.title}</h3>

              <p>{blog.subtitle}</p>

            </div>

            {/* BOTTOM */}
            <div className="blog-card-bottom">

              <div className="blog-meta">

                <span>
                  {Math.ceil(blog.reading_time || 1)} min read
                </span>

                {blog.claps > 0 && (
                  <span>
                    👏 {blog.claps}
                  </span>
                )}

              </div>

              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-read"
              >
                <span>Read article</span>

                <span className="blog-arrow">
                  ↗
                </span>
              </a>

            </div>

            {/* DECORATIVE ELEMENT */}
            <div className="blog-glow" />

          </article>
        ))}

      </div>
    </section>
  );
}