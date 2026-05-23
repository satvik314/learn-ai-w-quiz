"use client";

import Link from "next/link";
import { useState } from "react";
import type { Topic } from "../../data/topics";

const KEYS = ["A", "B", "C", "D"];

export default function QuizClient({ topic }: { topic: Topic }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = topic.questions.length;
  const q = topic.questions[index];
  const isCorrect = selected !== null && selected === q.answer;

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= total) {
      setDone(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / total) * 100);
    const msg =
      pct === 100
        ? "FLAWLESS VICTORY! You're an AI wizard."
        : pct >= 80
        ? "HIGH SCORE! Solid grasp of the topic."
        : pct >= 60
        ? "NICE RUN! A few more rounds and you'll level up."
        : "GAME OVER. Replay to unlock mastery!";

    return (
      <main className="screen">
        <div className="score-card">
          <div className="question-label">~ RESULTS ~</div>
          <div className="score-big">{score} / {total}</div>
          <div className="score-line">SCORE: {pct}%</div>
          <p className="score-msg">{msg}</p>
          <div className="actions">
            <button className="btn" onClick={restart}>RETRY</button>
            <Link className="btn ghost" href="/">SELECT TOPIC</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="screen">
      <div className="quiz-wrap">
        <div className="hud">
          <div className="hud-cell">{topic.icon} {topic.title.toUpperCase()}</div>
          <div className="hud-cell">SCORE&nbsp;{String(score).padStart(2, "0")}</div>
          <div className="hud-cell">Q&nbsp;{index + 1}/{total}</div>
        </div>

        <div className="progress" aria-hidden>
          {topic.questions.map((_, i) => (
            <span
              key={i}
              className={
                "dot " + (i < index ? "done " : "") + (i === index ? "current" : "")
              }
            />
          ))}
        </div>

        <div className="question-box">
          <div className="question-label">QUESTION {index + 1}</div>
          <div className="question-text">{q.question}</div>
        </div>

        <div className="options">
          {q.options.map((opt, i) => {
            let cls = "option";
            if (selected !== null) {
              if (i === q.answer) cls += " correct";
              else if (i === selected) cls += " wrong";
            }
            return (
              <button
                key={i}
                className={cls}
                disabled={selected !== null}
                onClick={() => pick(i)}
              >
                <span className="key">{KEYS[i]}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="feedback">
            <span className={"tag " + (isCorrect ? "good" : "bad")}>
              {isCorrect ? "CORRECT" : "WRONG"}
            </span>
            {q.explanation}
          </div>
        )}

        <div className="actions">
          {selected !== null ? (
            <button className="btn" onClick={next}>
              {index + 1 >= total ? "SEE RESULTS" : "NEXT >"}
            </button>
          ) : (
            <Link className="btn ghost" href="/">&lt; QUIT</Link>
          )}
        </div>
      </div>
    </main>
  );
}
