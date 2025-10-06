export type APIProvider<TResponse = unknown> = {
  name: string;
  isPrioritized?: boolean;
  buildRequest: (text: string) => {
    url: string;
    headers: Record<string, string>;
    body: string;
  };
  parseResponse: (data: TResponse) => string;
};

export type OpenAIResponse = {
  choices?: { message?: { content?: string } }[];
};

export type GeminiResponse = {
  candidates?: { content?: { parts?: { text?: string }[] } }[];
};
