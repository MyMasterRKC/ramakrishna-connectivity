
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const LevelsSection = () => {
  const levels = [
    {
      level: "LEVEL 0",
      grades: "Preschool to Grade 3",
      title: "Colour & Learn & Religious Lessons for Children",
      author: "by Swami Raghaveshananda",
      prayers: "Gayatri Mantra (Om bhur bhuva swah)",
      activities: "Attendance, recitation of mantras, colouring, relating stories and singing"
    },
    {
      level: "LEVEL 1",
      grades: "Grade 4 learners",
      title: "The Story of Sri Sarada Devi",
      author: "by Swami Smaranananda",
      prayers: "Jananim saradam devim & Gita verse 1."
    },
    {
      level: "LEVEL 2",
      grades: "Grade 5 learners",
      title: "The Story of Sri Ramakrishna",
      author: "by Swami Smaranananda",
      prayers: "Sthapakaya ca dharmasya & Gita Verse 11."
    },
    {
      level: "LEVEL 3",
      grades: "Grade 6 learners",
      title: "The Story of Vivekananda",
      author: "by Ray & Gupta",
      prayers: "Namah sri yati rajaya & Gita Verses 2, 3."
    },
    {
      level: "LEVEL 4",
      grades: "Grade 7 learners",
      title: "Hinduism for Children",
      prayers: "Gayatri Mantra (Om bhur bhuva swaha) & Gita Verses 4, 5."
    },
    {
      level: "LEVEL 5",
      grades: "Grade 8 learners",
      title: "Ramayana - Story of the Divine Prince",
      prayers: "Gurur brahma gurur vishnu & Gita Verses 6, 7."
    },
    {
      level: "LEVEL 6",
      grades: "Grade 9 learners",
      title: "A Short Life of the Holy Mother",
      author: "by Swami Pavitrananda",
      prayers: "Sarvesham svastir bhavatu & Gita Verse 8."
    },
    {
      level: "LEVEL 7",
      grades: "Grade 10 learners",
      title: "A Short Life of Sri Ramakrishna",
      author: "by Swami Tejasananda",
      prayers: "Purnamadah purnadmidam & Gita Verses 9, 10."
    },
    {
      level: "LEVEL 8",
      grades: "Grade 11 learners",
      title: "A Short Life of Swami Vivekananda",
      author: "by Swami Tejasananda",
      prayers: "Saha navavatu & Gita Verses 1, 2, 3 & 11."
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Levels</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Our curriculum is structured in levels based on age groups, each with specific learning materials and prayers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {levels.map((level, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2 bg-orange-50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl text-orange-700">{level.level}</CardTitle>
                <div className="bg-orange-100 rounded-full p-2">
                  {index < 4 ? (
                    <BookOpen className="h-5 w-5 text-orange-600" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-orange-600" />
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 font-medium">{level.grades}</p>
            </CardHeader>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-gray-800 mb-1">Book: {level.title}</h3>
              {level.author && <p className="text-sm text-gray-600 mb-2">{level.author}</p>}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm"><span className="font-medium">Prayer & Gita:</span> {level.prayers}</p>
                {level.activities && (
                  <p className="text-sm mt-2"><span className="font-medium">Activities:</span> {level.activities}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LevelsSection;
