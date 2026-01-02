import "../styles/Learning.css";
import TimelineCard from "../components/card/TimelineCard";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";


const learning = [
  {
    title: "System Design",
    period: "Ongoing",
    description:
      "Studying scalable architectures, load balancing, caching strategies, database sharding, CAP theorem, and designing systems from 100 to millions of users.",
  },
  {
    title: "Data Structures & Algorithms (DSA)",
    period: "Daily Practice",
    description:
      "Practicing arrays, strings, linked lists, stacks, queues, trees, graphs, and dynamic programming with consistent problem-solving on coding platforms.",
  },
];
const experience = [
  {
    title: "Web and App developer Intern",
    period: "2026 – Present",
    description:
      "Built React components, improved performance, shipped features.",
  },
];
const education = [
  {
    title: "Bachelore of Engineering in computer science",
    period: "2022-2026",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
  },
];

export default function Learning() {
  return (
    <>
      <TimelineCard title="Experience" icon={FaBriefcase} items={experience} />;
      <TimelineCard title="Learning" icon={FaBrain} items={learning} />
      <TimelineCard
        title="Education"
        icon={FaGraduationCap}
        items={education}
      />
    </>
  );
}
