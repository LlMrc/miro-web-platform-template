import React from 'react';

const DevisPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Demandez votre Devis Gratuit
          </h1>
          <p className="mt-4 text-lg text-gray-600 mb-8">
            Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais avec une estimation personnalisée.
          </p>
          
          <a href="/files/devis.pdf" download className="relative overflow-hidden group shadow-lg z-0 text-white inline-flex items-center justify-center p-3 border [background:#4262FF] rounded-3xl border-solid border-[#4262FF] hover:text-gray-800 transition-colors">
            <p className="text-center font-sans text-lg font-normal leading-6">
              Télécharger notre brochure
            </p>
            <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
          </a>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          {/* Iframe Placeholder for Google Form */}
          <div className="w-full aspect-[1/1] md:aspect-[4/3] bg-gray-100 flex items-center justify-center rounded border-2 border-dashed border-gray-300">
            <div className="text-center p-8">
              <p className="text-gray-500 font-medium mb-2">Google Form Placeholder</p>
              <p className="text-sm text-gray-400">
               
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9LQv3TEzejV2BpGU4IftFA7c8ys0UNtTbHNgm-n4I8xdBmg/viewform?embedded=true" width="640" height="893" frameBorder="0" marginHeight={0} marginWidth={0}>Chargement…</iframe>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisPage;
