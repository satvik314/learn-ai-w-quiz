import Link from "next/link";
import { topics } from "./data/topics";

export default function HomePage() {
  return (
    <main className="screen">
      <h1 className="title crt-glow">AI&nbsp;ARCADE</h1>
      <p className="subtitle">
        &gt; Insert curiosity to continue <span className="blink">_</span>
      </p>

      <div className="topics-grid">
        {topics.map((t) => (
          <Link key={t.id} href={`/quiz/${t.id}`} className="topic-card">
            <span className="topic-icon">{t.icon}</span>
            <span className="topic-title">{t.title}</span>
            <span className="topic-blurb">{t.blurb}</span>
            <span className="topic-cta">&gt; PRESS START</span>
          </Link>
        ))}
      </div>

      <div className="footer">
        &copy; AI ARCADE &middot; 5 TOPICS &middot; 5 QUESTIONS EACH
      </div>
    </main>
  );
}
