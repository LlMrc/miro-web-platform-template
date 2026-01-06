import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Tarifs() {
  const plans = [
    {
      name: "Site Vitrine",
      price: "400+",
      features: [
        "Design personnalisé",
        "5 pages",
        "Formulaire de contact",
        "Optimisation mobile",
        "Hébergement inclus (1 an)",
      ],
      recommended: false,
    },
    {
      name: "E-commerce",
      price: "999+",
      features: [
        "Jusqu'à 50 produits",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Optimisation SEO avancée",
        "Support prioritaire",
      ],
      recommended: true,
    },
    {
      name: "Sur Mesure",
      price: "Sur devis",
      features: [
        "Fonctionnalités complexes",
        "Design exclusif",
        "Intégration API",
        "Tableau de bord admin",
        "Maintenance dédiée",
      ],
      recommended: false,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center py-24 w-full px-4">
        <h1 className="text-4xl font-bold text-[#050038] mb-4">Nos Tarifs</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Des solutions transparentes et adaptées à tous vos besoins digitaux.
          Choisissez le plan qui vous correspond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-2xl border ${
                plan.recommended
                  ? "border-[#4262FF] bg-[#F5F7FF] shadow-lg relative"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-[#4262FF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAIRE
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#050038] mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-[#4262FF] mb-6">{plan.price}</div>
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.recommended
                    ? "bg-[#4262FF] text-white hover:bg-blue-700"
                    : "bg-white text-[#050038] border border-[#050038] hover:bg-gray-50"
                }`}
              >
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
