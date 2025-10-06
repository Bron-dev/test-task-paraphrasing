import { APIProvider, OpenAIResponse, GeminiResponse } from '@/lib/types';

export const PROVIDERS: [APIProvider<OpenAIResponse>, APIProvider<GeminiResponse>] = [
  {
    name: 'openai',
    isPrioritized: true,
    buildRequest: (text) => ({
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-5',
        messages: [{ role: 'user', content: `Paraphrase: ${text}` }],
      }),
    }),
    parseResponse: (data) => data?.choices?.[0]?.message?.content || 'No response',
  },
  {
    name: 'gemini',
    buildRequest: (text) => ({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_KEY}`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Paraphrase: ${text}` }] }],
      }),
    }),
    parseResponse: (data) => data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response',
  },
];

export const DELAY_BEFORE_FALLBACK_STARTING = 3000;

export const SAMPLE_TEXT =
  'The Border Collie is a highly intelligent and versatile breed known for its exceptional herding abilities. Originating from the border region between England and Scotland, this breed has been recognized as one of the most skilled working dogs in the world. With their distinctive appearance and remarkable intelligence, Border Collies have become a popular choice for both working and companion dogs.\n' +
  'Physically, Border Collies are medium-sized dogs with a well-proportioned body and a strong, agile build. They have a dense double coat that comes in a variety of colors, including black and white, red and white, and tricolor. Their expressive eyes, usually brown but sometimes blue, are one of their most striking features, reflecting their intelligence and eagerness to please.\n' +
  'Known for their boundless energy and drive, Border Collies thrive in an active lifestyle. They require ample exercise and mental stimulation to keep them happy and healthy. These dogs excel in various dog sports, such as agility, obedience, and flyball. They are also frequently used in search and rescue operations due to their exceptional scenting abilities.\n' +
  'Border Collies are highly trainable and eager to learn. Their intelligence and problem-solving skills make them quick learners, and they excel in obedience training. They have a natural instinct for herding, and even without formal training, they can display remarkable herding behaviors. However, their high energy levels and intense focus can sometimes make them challenging for novice dog owners.\n' +
  'In addition to their working abilities, Border Collies make excellent family pets for active households. They are known for their loyalty, affection, and strong bond with their owners. However, their herding instincts may lead them to nip or try to herd small children or other pets, so early socialization and training are crucial.\n' +
  'While Border Collies are generally healthy dogs, they may be prone to certain genetic health conditions such as hip dysplasia and epilepsy. Regular veterinary check-ups, a nutritious diet, and regular exercise are essential for maintaining their overall well-being.\n' +
  'In summary, the Border Collie is a remarkable breed with outstanding intelligence, agility, and herding instincts. Whether as a working dog or a loyal family companion, they bring joy, enthusiasm, and unwavering devotion to their owners.';
