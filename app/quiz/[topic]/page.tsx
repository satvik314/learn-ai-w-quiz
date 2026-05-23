import { notFound } from "next/navigation";
import { getTopic, topics } from "../../data/topics";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.id }));
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const topic = getTopic(topicId);
  if (!topic) notFound();
  return <QuizClient topic={topic} />;
}
