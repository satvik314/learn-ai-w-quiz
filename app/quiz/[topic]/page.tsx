import { notFound } from "next/navigation";
import { getTopic, topics } from "../../data/topics";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.id }));
}

export default function QuizPage({ params }: { params: { topic: string } }) {
  const topic = getTopic(params.topic);
  if (!topic) notFound();
  return <QuizClient topic={topic} />;
}
