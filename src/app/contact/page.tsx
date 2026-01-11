import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col lg:flex-row items-start justify-center py-24 px-4 w-full max-w-7xl mx-auto gap-16">
        {/* Info Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#050038] mb-6">Parlons de votre projet</h1>
          <p className="text-lg text-gray-600 mb-8">
            Une idée ? Un besoin spécifique ? Notre équipe est prête à échanger avec vous pour comprendre vos enjeux.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4 text-[#4262FF]">📍</div>
              <div>
                <h3 className="font-bold text-[#050038]">Adresse</h3>
                <p className="text-gray-600">123 Avenue de l&apos;Innovation<br/>75000 Paris, France</p>
              </div>
            </div>
            <div className="flex items-start">
               <div className="bg-blue-50 p-3 rounded-full mr-4 text-[#4262FF]">📧</div>
              <div>
                <h3 className="font-bold text-[#050038]">Email</h3>
                <p className="text-gray-600">gravityleap73@gmail.com</p>
              </div>
            </div>
             <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4 text-[#4262FF]">📞</div>
              <div>
                <h3 className="font-bold text-[#050038]">Téléphone</h3>
                <p className="text-gray-600">+509 43 37 50 02</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#4262FF] focus:ring-[#4262FF] outline-none transition-colors" placeholder="Jean" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#4262FF] focus:ring-[#4262FF] outline-none transition-colors" placeholder="Dupont" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#4262FF] focus:ring-[#4262FF] outline-none transition-colors" placeholder="jean@exemple.com" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#4262FF] focus:ring-[#4262FF] outline-none transition-colors" placeholder="Décrivez votre projet..."></textarea>
            </div>
            <button type="button" className="w-full bg-[#4262FF] text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
