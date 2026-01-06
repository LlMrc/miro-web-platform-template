import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Guide() {
  const articles = [
    {
      title: "Pourquoi une approche Mobile-First est essentielle ?",
      excerpt: "Découvrez comment optimiser l'expérience utilisateur sur smartphone.",
      category: "UX Design",
      date: "5 Jan 2026",
    },
    {
      title: "Les tendances Tech à surveiller en 2026",
      excerpt: "IA générative, Web3 et Serverless : ce qui va changer la donne.",
      category: "Tech",
      date: "28 Dec 2025",
    },
    {
      title: "Sécuriser votre application web",
      excerpt: "Les meilleures pratiques pour protéger vos données et celles de vos clients.",
      category: "Sécurité",
      date: "15 Dec 2025",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center py-24 px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#050038] mb-6 text-center">Guide & Ressources</h1>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
          Conseils, tutoriels et analyses pour vous aider à naviguer dans l&apos;univers digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="h-48 bg-gray-100 w-full"></div> {/* Placeholder for image */}
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span className="text-[#4262FF] font-medium bg-blue-50 px-2 py-1 rounded-md">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#050038] mb-3 leading-tight">{article.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                <div className="text-[#4262FF] font-medium text-sm flex items-center">
                  Lire l&apos;article <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
