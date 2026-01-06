import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Expertise() {
  const domains = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center py-24 px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#050038] mb-6 text-center">Notre Expertise</h1>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
          Une maîtrise des technologies les plus récentes pour garantir performance, sécurité et évolutivité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {domains.map((domain, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-bold text-[#050038] mb-6 border-b pb-4">{domain.title}</h3>
              <ul className="space-y-3">
                {domain.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#4262FF] rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
