import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

// Placeholder images would ideally be real project screenshots
// Using colors for now to simulate project thumbnails

export default function Projets() {
  const projects = [
    {
      title: "E-commerce Mode",
      category: "Développement Web",
      description: "Une boutique en ligne moderne avec paiement sécurisé.",
      color: "bg-blue-100",
    },
    {
      title: "App Fitness",
      category: "Mobile iOS/Android",
      description: "Application de suivi d'entraînement et nutrition.",
      color: "bg-green-100",
    },
    {
      title: "Tableau de Bord SaaS",
      category: "Application Web",
      description: "Interface d'administration pour gestion d'entreprise.",
      color: "bg-purple-100",
    },
    {
      title: "Site Corporate",
      category: "Site Vitrine",
      description: "Refonte complète de l'identité numérique d'un groupe financier.",
      color: "bg-gray-100",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center py-24 px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#050038] mb-6 text-center">Nos Réalisations</h1>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
          Découvrez comment nous aidons nos clients à concrétiser leurs ambitions digitales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`w-full h-64 rounded-2xl mb-6 ${project.color} overflow-hidden relative`}>
                 <div className="absolute inset-0 flex items-center justify-center text-[#050038]/20 font-bold text-2xl">
                    {project.title} Image
                 </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[#4262FF] font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-[#050038] mb-2 group-hover:text-[#4262FF] transition-colors">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
