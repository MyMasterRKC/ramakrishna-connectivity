
import { QuizQuestion } from "../components/quiz/QuizCard";

interface QuizData {
  [key: string]: {
    title: string;
    questions: QuizQuestion[];
  };
}

export const quizData: QuizData = {
  "sri-ramakrishna": {
    title: "Sri Ramakrishna",
    questions: [
      {
        id: 1,
        question: "When was Sri Ramakrishna born?",
        options: ["1836", "1853", "1863", "1884"],
        correctAnswer: 0,
        explanation: "Sri Ramakrishna was born on February 18, 1836, in the village of Kamarpukur in Bengal, India."
      },
      {
        id: 2,
        question: "What was Sri Ramakrishna's message about different religions?",
        options: [
          "Only Hinduism leads to salvation", 
          "Different religions are different paths leading to the same goal", 
          "One should convert to the religion of their choice", 
          "Religious practices should be abandoned"
        ],
        correctAnswer: 1,
        explanation: "Sri Ramakrishna's famous teaching was 'As many faiths, so many paths.' He experienced various religious paths and found that all religions lead to the same ultimate reality."
      },
      {
        id: 3,
        question: "Which temple did Sri Ramakrishna serve as a priest?",
        options: [
          "Belur Math Temple", 
          "Dakshineswar Kali Temple", 
          "Kalighat Temple", 
          "Jagannath Temple"
        ],
        correctAnswer: 1,
        explanation: "Sri Ramakrishna served as a priest at the Dakshineswar Kali Temple, where he performed spiritual practices and attracted disciples."
      },
      {
        id: 4,
        question: "What was the relationship between Sri Ramakrishna and Sarada Devi?",
        options: [
          "Teacher and student", 
          "Brother and sister", 
          "Husband and wife", 
          "Unrelated spiritual figures"
        ],
        correctAnswer: 2,
        explanation: "Sri Ramakrishna and Sarada Devi were husband and wife. Their marriage was spiritual in nature, and Sarada Devi is known as the Holy Mother."
      },
      {
        id: 5,
        question: "What practice did Sri Ramakrishna emphasize most for spiritual seekers?",
        options: [
          "Intellectual study of scriptures", 
          "Renunciation of worldly life", 
          "Sincere longing for God", 
          "Strict adherence to rituals"
        ],
        correctAnswer: 2,
        explanation: "Sri Ramakrishna emphasized sincere longing for God (vyakulata) as the most important quality for spiritual seekers. He often said that one should cry for God with the same intensity as a drowning person gasps for air."
      }
    ]
  },
  "sri-sarada-devi": {
    title: "Sri Sarada Devi",
    questions: [
      {
        id: 1,
        question: "When was Sri Sarada Devi born?",
        options: ["1836", "1853", "1863", "1884"],
        correctAnswer: 1,
        explanation: "Sri Sarada Devi was born on December 22, 1853, in the village of Jayrambati in Bengal, India."
      },
      {
        id: 2,
        question: "At what age was Sri Sarada Devi married to Sri Ramakrishna?",
        options: ["5", "8", "14", "18"],
        correctAnswer: 0,
        explanation: "Sri Sarada Devi was married to Sri Ramakrishna at the age of five, following the custom of child marriage prevalent in India at that time."
      },
      {
        id: 3,
        question: "What title is commonly used to refer to Sri Sarada Devi?",
        options: [
          "Divine Mother", 
          "Holy Mother", 
          "Sacred Sister", 
          "Spiritual Teacher"
        ],
        correctAnswer: 1,
        explanation: "Sri Sarada Devi is commonly referred to as the 'Holy Mother' (Sri Sri Ma) by devotees worldwide."
      },
      {
        id: 4,
        question: "What was one of the most significant teachings of Sri Sarada Devi?",
        options: [
          "The importance of ritual worship", 
          "The need for social service", 
          "Universal acceptance and compassion", 
          "The superiority of Hinduism"
        ],
        correctAnswer: 2,
        explanation: "One of Sri Sarada Devi's most significant teachings was universal acceptance and compassion. She said, 'I am the mother of the virtuous as well as the wicked.'"
      },
      {
        id: 5,
        question: "How did Sri Sarada Devi spend most of her life after Sri Ramakrishna's passing?",
        options: [
          "In seclusion as a renunciate", 
          "Traveling throughout India", 
          "Guiding disciples and devotees", 
          "Writing spiritual texts"
        ],
        correctAnswer: 2,
        explanation: "After Sri Ramakrishna's passing, Sri Sarada Devi spent most of her life guiding disciples and devotees, embodying the ideal of spiritual motherhood."
      }
    ]
  },
  "swami-vivekananda": {
    title: "Swami Vivekananda",
    questions: [
      {
        id: 1,
        question: "What was Swami Vivekananda's birth name?",
        options: ["Narendranath Datta", "Rakhal Ghosh", "Gadadhar Chattopadhyay", "Mahendranath Gupta"],
        correctAnswer: 0,
        explanation: "Swami Vivekananda was born as Narendranath Datta on January 12, 1863, in Calcutta (now Kolkata), India."
      },
      {
        id: 2,
        question: "Which famous speech by Swami Vivekananda began with 'Sisters and Brothers of America'?",
        options: [
          "The speech at Chicago University", 
          "The address at the Parliament of Religions in Chicago", 
          "His farewell speech in London", 
          "His inaugural address at Belur Math"
        ],
        correctAnswer: 1,
        explanation: "Swami Vivekananda's famous speech at the Parliament of Religions in Chicago in 1893 began with 'Sisters and Brothers of America,' which received a standing ovation."
      },
      {
        id: 3,
        question: "What organization did Swami Vivekananda found?",
        options: [
          "Divine Life Society", 
          "Ramakrishna Math and Mission", 
          "Theosophical Society", 
          "Brahmo Samaj"
        ],
        correctAnswer: 1,
        explanation: "Swami Vivekananda founded the Ramakrishna Math and Mission to propagate the teachings of Sri Ramakrishna and to serve humanity."
      },
      {
        id: 4,
        question: "What was Swami Vivekananda's interpretation of Vedanta philosophy often called?",
        options: [
          "Neo-Vedanta", 
          "Practical Vedanta", 
          "Modern Vedanta", 
          "Universal Vedanta"
        ],
        correctAnswer: 1,
        explanation: "Swami Vivekananda's interpretation of Vedanta philosophy is often called 'Practical Vedanta,' as he emphasized applying philosophical principles in everyday life and service to humanity."
      },
      {
        id: 5,
        question: "Which famous quote about the goal of human life is attributed to Swami Vivekananda?",
        options: [
          "'Be good, do good'", 
          "'Arise, awake, and stop not till the goal is reached'", 
          "'Truth is one; sages call it by various names'", 
          "'Each soul is potentially divine'"
        ],
        correctAnswer: 3,
        explanation: "The quote 'Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal' is attributed to Swami Vivekananda and summarizes his teaching."
      }
    ]
  }
};
