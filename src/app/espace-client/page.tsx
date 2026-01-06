import Header from "@/components/header";
import Footer from "@/components/footer";

export default function EspaceClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center py-24 px-4 w-full max-w-lg mx-auto flex-1">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#050038] mb-2">Connexion</h1>
            <p className="text-gray-600">Accédez à votre espace client sécurisé</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Identifiant / Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#4262FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                placeholder="votre@email.com" 
              />
            </div>
            <div>
               <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <a href="#" className="text-sm text-[#4262FF] hover:underline">Oublié ?</a>
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#4262FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                placeholder="••••••••" 
              />
            </div>
            <button type="button" className="w-full bg-[#4262FF] text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Se connecter
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            Pas encore client ? <a href="/contact" className="text-[#4262FF] font-medium hover:underline">Contactez-nous</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
