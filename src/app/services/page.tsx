import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      description: "Sites vitrines, e-commerce et applications web performantes et modernes.",
      icon: "💻",
    },
    {
      title: "Applications Mobiles",
      description: "Développement natif et hybride pour iOS et Android.",
      icon: "📱",
    },
    {
      title: "Design UI/UX",
      description: "Conception d'interfaces intuitives et centrées sur l'utilisateur.",
      icon: "🎨",
    },
    {
      title: "SEO & Marketing",
      description: "Optimisation pour les moteurs de recherche et stratégies digitales.",
      icon: "📈",
    },
    {
      title: "Audit & Conseil",
      description: "Analyse technique et accompagnement dans votre transformation digitale.",
      icon: "🔍",
    },
    {
      title: "Maintenance",
      description: "Support technique, mises à jour et sécurité de vos projets.",
      icon: "🛠️",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center py-24 px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#050038] mb-6 text-center">Nos Services</h1>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
          Nous accompagnons les entreprises dans leur croissance numérique avec une gamme complète de services sur mesure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#050038] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
