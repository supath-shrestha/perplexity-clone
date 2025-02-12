import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { ChatCompletion } from "openai/src/resources/index.js";
import { useState, useEffect } from "react";
import { marked } from "marked";

const [chatLog, setChatLog] = useState<Array<ChatCompletionMessageParam>>([
    { role: "user", content: "define science in a single sentence" },
    {
      content:
        "Science is the systematic study of the natural world through observation, experimentation, and analysis to understand and explain phenomena.",
      role: "assistant",
    },
    { role: "user", content: "can you explain it more?" },
    {
      role: "assistant",
      content:
        "Certainly! Science is a structured approach to acquiring knowledge about the universe and the laws that govern it. It involves several key components:\n\n1. **Observation**: Scientists begin by observing phenomena, identifying patterns or anomalies that prompt questions about how things work.\n\n2. **Hypothesis**: Based on these observations, scientists formulate testable explanations or predictions, known as hypotheses.\n\n3. **Experimentation**: To test these hypotheses, scientists design and conduct experiments, collecting data and controlling variables to isolate causes and effects.\n\n4. **Analysis**: The data gathered from experiments is analyzed to determine whether it supports or refutes the original hypothesis. This process often involves statistical methods.\n\n5. **Reproducibility**: Scientific findings must be reproducible by other researchers, which helps validate the results and conclusions. This is a cornerstone of the scientific method.\n\n6. **Peer Review**: Before research findings are widely accepted, they are typically subjected to peer review, where other experts evaluate the work for rigor and accuracy.\n\n7. **Theory Development**: Through repeated testing and validation, hypotheses that hold up over time may contribute to the development of scientific theories, which provide comprehensive explanations of complex phenomena.\n\n8. **Adaptability**: Science is iterative; as new evidence emerges, theories may be refined, expanded, or even discarded in light of better explanations.\n\nUltimately, science aims to provide a reliable framework for understanding the natural world, driving advancements in technology, medicine, and various fields by applying empirical evidence and critical thinking.",
    },
  ]);

  const getChatResponse = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        prompt: chatLog,
      }),
    }).then((res) => res.json());

    console.log(response);

    setChatLog((prev) => [
      ...prev,
      { role: response.data.role, content: response.data.content },
    ]);
  };

  console.log(chatLog)

  return (
    <div>
      <div>
        {chatLog.map((chat, idx) => (
          <div key={idx}>
            <span>Role:{chat.role}</span>
            Content:
            <div
              dangerouslySetInnerHTML={{
                __html: marked(chat.content as string),
              }}
            ></div>
          </div>
        ))}
      </div>
      <button className="mt-2" onClick={getChatResponse}>
        Get Response
      </button>
    </div>