
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
  },
  "vedanta-basics": {
    title: "Vedanta Basics",
    questions: [
      {
        id: 1,
        question: "What does the word 'Vedanta' literally mean?",
        options: ["Ancient wisdom", "End of knowledge", "End of the Vedas", "Supreme bliss"],
        correctAnswer: 2,
        explanation: "The word 'Vedanta' literally means 'the end (anta) of the Vedas,' referring both to the Upanishads which are positioned at the end of the Vedas, and to the ultimate knowledge they contain."
      },
      {
        id: 2,
        question: "Which of these is a core concept in Advaita Vedanta?",
        options: ["Dualism", "Non-dualism", "Qualified non-dualism", "Pluralism"],
        correctAnswer: 1,
        explanation: "Non-dualism (Advaita) is the core concept of Advaita Vedanta, which teaches that Brahman (the ultimate reality) and Atman (the individual soul) are one and the same."
      },
      {
        id: 3,
        question: "Who is considered the main systematizer of Advaita Vedanta philosophy?",
        options: ["Patanjali", "Shankaracharya", "Buddha", "Ramanuja"],
        correctAnswer: 1,
        explanation: "Adi Shankaracharya (8th century CE) is considered the main systematizer of Advaita Vedanta. He wrote commentaries on principal Upanishads, the Brahma Sutras, and the Bhagavad Gita."
      },
      {
        id: 4,
        question: "According to Vedanta, what is 'Maya'?",
        options: ["The ultimate reality", "The creative power of God", "The illusory nature of the world", "The individual soul"],
        correctAnswer: 2,
        explanation: "In Vedanta, Maya refers to the illusory nature of the world. It is the power that veils the true nature of Brahman and projects the appearance of the phenomenal world."
      },
      {
        id: 5,
        question: "Which text is considered one of the three foundational texts (prasthanatrayi) of Vedanta?",
        options: ["Yoga Sutras", "Puranas", "Upanishads", "Tantras"],
        correctAnswer: 2,
        explanation: "The Upanishads form one of the three foundational texts (prasthanatrayi) of Vedanta, along with the Brahma Sutras and the Bhagavad Gita."
      }
    ]
  },
  "bhagavad-gita": {
    title: "Bhagavad Gita",
    questions: [
      {
        id: 1,
        question: "The Bhagavad Gita is a part of which larger Indian epic?",
        options: ["Ramayana", "Mahabharata", "Bhagavata Purana", "Vishnu Purana"],
        correctAnswer: 1,
        explanation: "The Bhagavad Gita is a 700-verse text that is part of the larger Indian epic, the Mahabharata."
      },
      {
        id: 2,
        question: "Who is the main speaker in the Bhagavad Gita?",
        options: ["Arjuna", "Krishna", "Yudhishthira", "Bhishma"],
        correctAnswer: 1,
        explanation: "Krishna is the main speaker in the Bhagavad Gita, imparting spiritual wisdom to the warrior Arjuna before the Kurukshetra War."
      },
      {
        id: 3,
        question: "What are the three main yogas or spiritual paths taught in the Bhagavad Gita?",
        options: [
          "Karma Yoga, Bhakti Yoga, Jnana Yoga", 
          "Hatha Yoga, Raja Yoga, Kundalini Yoga", 
          "Mantra Yoga, Laya Yoga, Kriya Yoga",
          "Ashtanga Yoga, Vinyasa Yoga, Iyengar Yoga"
        ],
        correctAnswer: 0,
        explanation: "The Bhagavad Gita primarily teaches three main yogas or spiritual paths: Karma Yoga (the path of selfless action), Bhakti Yoga (the path of devotion), and Jnana Yoga (the path of knowledge)."
      },
      {
        id: 4,
        question: "What is the central teaching about action in the Bhagavad Gita?",
        options: [
          "Avoid all action", 
          "Act without attachment to the fruits of action", 
          "Only perform religious actions", 
          "Act only for personal gain"
        ],
        correctAnswer: 1,
        explanation: "A central teaching of the Bhagavad Gita is to act without attachment to the fruits of action (nishkama karma). One should perform one's duty without concern for success or failure."
      },
      {
        id: 5,
        question: "According to the Bhagavad Gita, what is the purpose of divine incarnation?",
        options: [
          "To punish evil-doers", 
          "To protect the righteous and establish dharma", 
          "To create a new religion", 
          "To conquer neighboring kingdoms"
        ],
        correctAnswer: 1,
        explanation: "According to the Bhagavad Gita (Chapter 4, Verse 8), the purpose of divine incarnation is to protect the righteous, destroy evil, and establish dharma (righteousness) in every age."
      }
    ]
  },
  "spiritual-practices": {
    title: "Spiritual Practices",
    questions: [
      {
        id: 1,
        question: "What is the meaning of 'japa' in spiritual practice?",
        options: ["Silent meditation", "Repetition of a mantra", "Offerings to a deity", "Controlled breathing"],
        correctAnswer: 1,
        explanation: "Japa refers to the repetition of a mantra or divine name, either aloud, in a whisper, or mentally. It is a common practice in many spiritual traditions."
      },
      {
        id: 2,
        question: "According to Patanjali, how many limbs (angas) are there in Ashtanga Yoga?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 2,
        explanation: "According to Patanjali's Yoga Sutras, there are 8 limbs (Ashtanga) of yoga: yama, niyama, asana, pranayama, pratyahara, dharana, dhyana, and samadhi."
      },
      {
        id: 3,
        question: "What is the purpose of pranayama practice?",
        options: [
          "Physical exercise", 
          "Control of the breath and life-force (prana)", 
          "Concentration on a deity", 
          "Purification of the body"
        ],
        correctAnswer: 1,
        explanation: "The purpose of pranayama practice is to control the breath and through it, the life-force (prana). This leads to a calming of the mind and preparation for deeper meditation."
      },
      {
        id: 4,
        question: "What is the meaning of 'dhyana' in spiritual practice?",
        options: [
          "Concentration on a single point", 
          "Sustained meditation", 
          "Complete absorption", 
          "Ritual worship"
        ],
        correctAnswer: 1,
        explanation: "Dhyana refers to sustained meditation, a continuous flow of attention toward the object of meditation. It follows dharana (concentration) and precedes samadhi (absorption) in the yogic path."
      },
      {
        id: 5,
        question: "According to Vedanta, what is the ultimate goal of spiritual practice?",
        options: [
          "Material prosperity", 
          "Self-realization", 
          "Supernatural powers", 
          "Rebirth in heaven"
        ],
        correctAnswer: 1,
        explanation: "According to Vedanta, the ultimate goal of spiritual practice is Self-realization: recognizing one's true nature as the eternal, infinite consciousness (Brahman/Atman) beyond all limitations."
      }
    ]
  }
};
