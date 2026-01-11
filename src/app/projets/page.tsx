import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Projets() {
  const projects = [
    {
      title: "E-commerce Mode",
      category: "Développement Web",
      description: "Une boutique en ligne moderne avec paiement sécurisé.",
      color: "bg-blue-100",
      link: "https://github.com/LlMrc/ecommerce-demo",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Lifestyle App",
      category: "Mobile iOS/Android",
      description: "Application de suivi d'hummeur et de méditation.",
      color: "bg-green-100",
      link: "https://lml-creative.vercel.app/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Tableau de Bord SaaS",
      category: "Application Web",
      description: "Interface d'administration pour gestion d'entreprise.",
      color: "bg-purple-100",
      link: "https://lml-creative.vercel.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Medical Center",
      category: "Portail Web",
      description: "Refonte complète de l'identité numérique d'un groupe financier.",
      color: "bg-gray-100",
      link: "https://ephata.vercel.app/",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop"
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
            <Link href={project.link} key={index} target="_blank" className="group cursor-pointer block">
              <div className={`w-full h-64 rounded-2xl mb-6 ${project.color} overflow-hidden relative`}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[#4262FF] font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-[#050038] mb-2 group-hover:text-[#4262FF] transition-colors">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
