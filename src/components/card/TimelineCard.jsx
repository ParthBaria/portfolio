import "../../styles/Learning.css";

export default function TimelineCard({ title, icon: Icon, items }) {
  return (
    <section className="education">
      <h2 className="education-title">
        <div className="icon-container">
          <Icon className="edu-icon" />
        </div>
        {title}
      </h2>

      <div className="timeline">
        {items.map((item, index) => (
          <div className="timeline-item" key={index}>
            <span className="dot" />
            <div className="content">
              <h3>{item.title}</h3>
              <p className="year">{item.period}</p>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
