import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-300">
      {/* Navegación */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0,0)}
            >
              {/* El logo buscará el archivo logo.png en la carpeta 'public' */}
              <img 
                src="/logo.png" 
                alt="Moon Stones Logo" 
                className="h-12 w-auto object-contain" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} 
              />
              {/* Respaldo de texto por si el logo no carga */}
              <div style={{ display: 'none' }} className="items-center gap-2">
                <div className="w-8 h-8 bg-stone-900 rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl">
                  M
                </div>
                <span className="font-serif font-light text-2xl tracking-widest text-stone-900">
                  MOON<span className="font-bold">STONES</span>
                </span>
              </div>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-stone-600 hover:text-stone-900 transition-colors text-sm uppercase tracking-wider">Inicio</a>
              <a href="#historia" className="text-stone-600 hover:text-stone-900 transition-colors text-sm uppercase tracking-wider">Historia</a>
              <a href="#portafolio" className="text-stone-600 hover:text-stone-900 transition-colors text-sm uppercase tracking-wider">Portafolio</a>
              <a href="#contacto" className="bg-stone-900 text-white px-6 py-2.5 rounded-sm hover:bg-stone-800 transition-colors text-sm uppercase tracking-wider">Contacto</a>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-stone-800 border-b border-stone-100 uppercase tracking-widest text-sm">Inicio</a>
              <a href="#historia" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-stone-800 border-b border-stone-100 uppercase tracking-widest text-sm">Historia</a>
              <a href="#portafolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-stone-800 border-b border-stone-100 uppercase tracking-widest text-sm">Portafolio</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-stone-900 font-bold uppercase tracking-widest text-sm">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 lg:pt-48 lg:pb-64 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Cocina de mármol elegante" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 max-w-4xl">
            La elegancia de la naturaleza <br className="hidden md:block" />
            <span className="font-light italic text-stone-300">en tus espacios.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-stone-200 max-w-2xl font-light mb-10">
            Proveedor e Importador de Revestimientos. <br/>
            Fabricante de Topes en Mármol, Granito, Coralina y Más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#portafolio" className="bg-white text-stone-900 px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-semibold hover:bg-stone-100 transition-all flex items-center justify-center gap-2">
              Ver Portafolio <ChevronRight size={18} />
            </a>
            <a href="#contacto" className="border border-white text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all text-center">
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=600&q=80" alt="Detalle de Mármol" className="rounded-sm object-cover h-64 w-full shadow-md" />
                <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80" alt="Textura de Cuarzo" className="rounded-sm object-cover h-64 w-full mt-8 shadow-md" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-stone-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">Nuestra Historia</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                Nacidos en el corazón de <span className="italic font-light">Punta Cana</span>
              </h3>
              <div className="space-y-4 text-stone-600 font-light leading-relaxed">
                <p>
                  Moon Stones nació en el año 2022, de la mano de su visionaria fundadora, <strong>Juana Polanco Rondon</strong>. Con una pasión innata por el diseño y un profundo respeto por los materiales naturales, Juana decidió crear una empresa que combinara elegancia, calidad y funcionalidad en cada proyecto.
                </p>
                <p>
                  Así, nos establecimos como un proveedor e importador de revestimientos de primera línea y fabricante de topes en mármol, granito, coralina y otros materiales exquisitos.
                </p>
                <p>
                  Lo que comenzó como un sueño rápidamente se convirtió en una realidad, expandiéndose en diferentes localidades de la República Dominicana. Hoy, seguimos creciendo, ofreciendo soluciones personalizadas con la misión de superar siempre las expectativas de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiales Banner */}
      <section className="bg-stone-900 text-stone-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-serif text-white mb-2">Mármol</p>
              <p className="text-xs uppercase tracking-widest text-stone-400">Rosso Levanto & Más</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-white mb-2">Cuarzo</p>
              <p className="text-xs uppercase tracking-widest text-stone-400">Calacatta Gold, Blanco, Gris</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-white mb-2">Granito</p>
              <p className="text-xs uppercase tracking-widest text-stone-400">Negro San Gabriel</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-white mb-2">Coralina</p>
              <p className="text-xs uppercase tracking-widest text-stone-400">Bordillos & Exteriores</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-white mb-2">Porcelánico</p>
              <p className="text-xs uppercase tracking-widest text-stone-400">Liem Dark Nature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio Section - PDF Incrustado */}
      <section id="portafolio" className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-stone-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">Colección 2025</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-stone-900">Nuestro Portafolio</h3>
            <div className="w-16 h-px bg-stone-300 mx-auto mt-6 mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-lg">
              Explora nuestro catálogo completo de proyectos, acabados y texturas naturales.
            </p>
          </div>

          <div className="bg-white p-4 shadow-xl rounded-md border border-stone-100">
            {/* Contenedor del Iframe responsivo */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-6 rounded overflow-hidden bg-stone-100">
              <iframe
                src="https://drive.google.com/file/d/1RvykverBXQshIaBLKd1ck4VRqQrgZJxq/preview"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="autoplay"
                title="Portafolio Moon Stones 2025"
              ></iframe>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://drive.google.com/file/d/1RvykverBXQshIaBLKd1ck4VRqQrgZJxq/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-semibold hover:bg-stone-800 transition-all flex items-center gap-2"
              >
                Abrir PDF en pantalla completa <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="bg-white py-24 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 text-white rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="p-12 lg:p-16 lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">¿Listo para transformar tu espacio?</h2>
              <p className="text-stone-300 font-light mb-10 text-lg">
                Hablemos sobre tu próximo proyecto de diseño. Nuestro equipo en Punta Cana y todo el país está listo para asesorarte.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-stone-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-sm mb-1">Ubicación</h5>
                    <p className="text-stone-400 font-light">Punta Cana, República Dominicana<br/>Servicio a nivel nacional</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-stone-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-sm mb-1">Teléfono / WhatsApp</h5>
                    <p className="text-stone-400 font-light">+1 (849) 259-5484</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-stone-400 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-sm mb-1">Email</h5>
                    <p className="text-stone-400 font-light">ventas@moonstones.com.do</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 lg:p-16 lg:w-1/2 bg-stone-800">
              <form 
                className="space-y-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open('https://wa.me/18492595484?text=Hola,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.', '_blank');
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Nombre completo</label>
                  <input type="text" className="w-full bg-stone-900 border border-stone-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-stone-400 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-2">Material de interés</label>
                  <input type="text" className="w-full bg-stone-900 border border-stone-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-stone-400 transition-colors" placeholder="Ej. Cuarzo Calacatta" />
                </div>
                <button type="submit" className="w-full mt-4 bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm hover:bg-[#20ba5a] transition-colors flex justify-center items-center gap-2">
                   Contactar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Moon Stones Logo" 
                className="h-8 w-auto object-contain brightness-0 invert opacity-80" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} 
              />
              <div style={{ display: 'none' }} className="items-center gap-2">
                <div className="w-6 h-6 bg-stone-800 flex items-center justify-center text-white font-serif font-bold text-xs">M</div>
                <span className="font-serif text-lg tracking-widest text-white">MOON<span className="font-bold">STONES</span></span>
              </div>
            </div>
            
            <p className="text-sm font-light">
              &copy; {new Date().getFullYear()} Moon Stones. Todos los derechos reservados. <br className="md:hidden"/> Fundada por Juana Polanco Rondon.
            </p>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <a 
        href="https://wa.me/18492595484?text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Chat en WhatsApp"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
