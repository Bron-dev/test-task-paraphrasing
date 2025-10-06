export type APIProvider = {
  name: string;
  isPrioritized?: boolean;
  buildRequest: (text: string) => {
    url: string;
    headers: Record<string, string>;
    body: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseResponse: (data: any) => string;
};
