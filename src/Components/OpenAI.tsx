import { useCallback, useState } from "react";

const makeOpenAiRequest = async (content: string): Promise<string> => {
  const org = process.env.REACT_APP_OPENAI_ORG;
  const key = process.env.REACT_APP_OPENAI_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const message = {
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": content }],
  };

  const body = JSON.stringify(message);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "OpenAI-Organization": `${org}`,
      "Content-Type": "application/json",
    },
    body: body,
  });

  if (response.ok) {
    const responseJson = await response.json();
    return responseJson.choices[0].message.content;
  } else {
    const error = await response.text();
    return `${response.status} ${response.statusText} ${error}`;
  }
};

export const OpenAI = () => {
  const [prompt, setPrompt] = useState(
    "How do you do a broad back adjustment in sewing?"
  );
  const [chat, setChat] = useState("");

  const fetchIsHappening = useCallback(async () => {
    const response = await makeOpenAiRequest(prompt);
    setChat(response);
  }, [prompt]);

  return (
    <>
      <h1>Ask ChatGPT anything!</h1>
      <label>
        Input your question here:
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </label>
      <button onClick={fetchIsHappening}>Go!</button>
      <div>{chat}</div>
    </>
  );
};
