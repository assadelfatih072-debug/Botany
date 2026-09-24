export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface OptionItem {
  key: OptionKey;
  textEn: string;
  textAr: string;
}

export type BotanyTopic =
  | 'Cell & Living Characteristics'
  | 'Metabolism & Homeostasis'
  | 'Growth, Genetics & DNA'
  | 'Reproduction & Tropisms'
  | 'Plants vs Animals & Adaptations'
  | 'Botanical Importance & Medicine'
  | 'Branches & Scopes of Botany';

export interface Question {
  id: number;
  questionEn: string;
  questionAr: string;
  options: OptionItem[];
  correctAnswer: OptionKey;
  topic: BotanyTopic;
  topicAr: string;
  explanationEn: string;
  explanationAr: string;
  pharmaceuticalInsight?: string;
  keywords: string[];
}

export type QuizMode = 'instant' | 'exam' | 'flashcards' | 'mistakes' | 'bookmarks';

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: OptionKey;
  isCorrect: boolean;
  timestamp: number;
}
