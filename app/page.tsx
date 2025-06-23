"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Star,
  ExternalLink,
} from "lucide-react";
import ProductModal from "@/components/product-modal";
import TestimonialCarousel from "@/components/testimonial-carousel";

// Define the ProductFromApi type to match the API response structure
type ProductFromApi = {
  name: string;
  image: string;
  category: string;
  description: string;
  images: { url: string }[];
};

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Array<{
    name: string;
    image: string;
    category: string;
    description: string;
    images: string[];
  }>>([]);

  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      Object.keys(sectionsRef.current).forEach((key) => {
        const section = sectionsRef.current[key];
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + scrollY;
          const sectionHeight = section.offsetHeight;

          // Si la sección está en el viewport
          if (
            scrollY > sectionTop - windowHeight * 0.75 &&
            scrollY < sectionTop + sectionHeight
          ) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener productos");
        }
        return res.json();
      })
      .then((data: ProductFromApi[]) => {
        const formattedProducts = data.map((product: ProductFromApi) => ({
          name: product.name,
          image: product.image,
          category: product.category,
          description: product.description,
          images: product.images.map((img) => img.url),
        }));
        setProducts(formattedProducts);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  // Reseñas de Google Maps (simuladas)
  const googleReviews = [
    {
      name: "María Fernández",
      rating: 5,
      date: "hace 2 meses",
      text: "Excelente atención, muy profesionales y cariñosos con mi perrito. El Dr. Gross siempre nos atiende con mucha paciencia y explica todo detalladamente. Recomiendo totalmente sus servicios.",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      date: "hace 3 meses",
      text: "Llevo a mis mascotas desde hace años y siempre recibo la mejor atención. El personal es muy amable y conocedor. Las instalaciones están siempre limpias y bien equipadas.",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Laura Gómez",
      rating: 5,
      date: "hace 1 mes",
      text: "Gracias al equipo de Agroveterinaria Gross por salvar a mi gatita. Llegamos en una emergencia y la atención fue inmediata y profesional. Son unos verdaderos profesionales.",
      photo: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Pedro Sánchez",
      rating: 4,
      date: "hace 4 meses",
      text: "Muy buena atención y asesoramiento. Los productos son de calidad aunque un poco caros. El servicio veterinario es excelente, mi perro siempre sale contento.",
      photo: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Fondo con gradiente y patrón */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b3007a] to-[#8e0061] opacity-95 z-0"></div>

        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Círculos decorativos */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#d4f528] opacity-20 blur-3xl z-0"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#c6e619] opacity-20 blur-3xl z-0"></div>

        {/* Contenido del hero */}
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-4 z-10">
              {/* Badge animado */}
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-2 animate-pulse">
                Más de 35 años de experiencia
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg animate-fadeInDown">
                <span className="block">Atención veterinaria</span>
                <span className="block mt-2 text-[#c6e619]">
                  con amor y compromiso
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/90 drop-shadow-md max-w-xl animate-fadeInUp">
                Cuidamos la salud y el bienestar de tus mascotas con
                profesionalismo y dedicación en Oberá y alrededores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20quisiera%20solicitar%20un%20turno&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#c6e619] hover:bg-[#d4f528] text-[#8e0061] font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                >
                  Solicitar Turno
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/clinica-veterinaria"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                >
                  Nuestros Servicios
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Indicadores de confianza */}
              <div className="flex flex-wrap gap-4 mt-4 text-white/90">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2">
                    <Star className="h-4 w-4 text-[#c6e619]" />
                  </div>
                  <span className="text-sm">4.8/5 en Google</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-2">
                    <Clock className="h-4 w-4 text-[#c6e619]" />
                  </div>
                  <span className="text-sm">Atención de emergencias</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
              {/* Círculo decorativo detrás de la imagen */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-[#c6e619]/20 blur-3xl z-0"></div>

              {/* Imagen principal con efectos */}
              <div className="relative w-full max-w-sm h-64 md:h-80 z-10 animate-float">
                <Image
                  src="/images/brown-white-dog.png"
                  alt="Perro feliz"
                  fill
                  className="object-contain scale-125 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]"
                  priority
                />

                {/* Elementos decorativos flotantes */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#c6e619]/80 flex items-center justify-center text-[#8e0061] font-bold text-lg animate-float-slow">
                  <span className="drop-shadow-md">35+</span>
                </div>

                <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-white/80 flex items-center justify-center animate-float-reverse">
                  <span className="text-[#8e0061] font-bold text-xs">
                    Oberá
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forma decorativa inferior */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 bg-white z-10"
          style={{
            clipPath:
              "polygon(0 100%, 100% 100%, 100% 0, 70% 50%, 30% 0, 0 50%)",
          }}
        ></div>
      </section>

      {/* Info Bar */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 rounded-lg border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <MapPin className="h-10 w-10 text-[#b3007a] mr-4" />
              <div>
                <h3 className="font-semibold text-gray-800">Ubicación</h3>
                <p className="text-gray-600">
                  Avenida Libertad 315, Oberá, Misiones 3360
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <Phone className="h-10 w-10 text-[#b3007a] mr-4" />
              <div>
                <h3 className="font-semibold text-gray-800">Contacto</h3>
                <p className="text-gray-600">
                  Teléfono para turnos y consultas
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <Clock className="h-10 w-10 text-[#b3007a] mr-4" />
              <div>
                <h3 className="font-semibold text-gray-800">Horarios</h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 8:00 - 19:00 | Sábados: 8:00 - 13:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => {
          sectionsRef.current["services"] = el;
        }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061] mb-4 animate-fadeIn">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios veterinarios para
              garantizar la salud y bienestar de tus mascotas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultas Clínicas",
                description:
                  "Atención médica general y especializada para todo tipo de mascotas",
                icon: "🩺",
              },
              {
                title: "Vacunación",
                description:
                  "Planes de vacunación personalizados para proteger a tu mascota",
                icon: "💉",
              },
              {
                title: "Cirugías",
                description:
                  "Procedimientos quirúrgicos con equipamiento de última generación",
                icon: "⚕️",
              },
              {
                title: "Laboratorio",
                description:
                  "Análisis clínicos para diagnósticos precisos y rápidos",
                icon: "🔬",
              },
              {
                title: "Farmacia Veterinaria",
                description:
                  "Medicamentos y productos especializados para el cuidado animal",
                icon: "💊",
              },
              {
                title: "Asesoramiento",
                description:
                  "Orientación profesional sobre nutrición y cuidados específicos",
                icon: "📋",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 transition-transform duration-300 ${
                  isVisible["services"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: "0.8s",
                }}
              >
                <div className="text-4xl mb-4 animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#8e0061] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/clinica-veterinaria"
              className="bg-[#8e0061] hover:bg-[#b3007a] text-white font-bold py-3 px-8 rounded-lg transition-all inline-flex items-center animate-pulse"
            >
              Ver todos los servicios <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={(el) => {
          sectionsRef.current["products"] = el;
        }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061] mb-4 animate-fadeIn">
              Productos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Disponemos de una amplia variedad de productos para el cuidado y
              bienestar de tus mascotas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
                  isVisible["products"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transitionDuration: "0.8s",
                }}
                onClick={() => openProductModal(product)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8e0061]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <span className="text-[#c6e619] text-sm font-medium">
                        {product.category}
                      </span>
                      <h3 className="text-white text-lg font-bold">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/productos-servicios"
              className="bg-[#8e0061] hover:bg-[#b3007a] text-white font-bold py-3 px-8 rounded-lg transition-all inline-flex items-center animate-pulse"
            >
              Ver catálogo completo <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - CARRUSEL */}
      <section
        ref={(el) =>{sectionsRef.current["reviews"] = el}}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061] mb-4 animate-fadeIn">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-6 w-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">
                4.8 de 5 estrellas
              </span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Basado en más de 120 reseñas en Google Maps
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible["reviews"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <TestimonialCarousel testimonials={googleReviews} />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/eL2SpGyw8C2ik3uT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#b3007a] font-medium hover:text-[#8e0061] transition-colors"
            >
              Ver todas las reseñas en Google Maps{" "}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <section
        ref={(el) => {sectionsRef.current["about"] = el}}
        className="py-16 bg-gray-50 overflow-x-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div
              className={`md:w-1/2 transition-all duration-1000 ${
                isVisible["about"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo de Agroveterinaria Gross"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={`md:w-1/2 space-y-6 transition-all duration-1000 ${
                isVisible["about"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061]">
                Sobre Nosotros
              </h2>
              <p className="text-gray-600">
                En Agroveterinaria Gross llevamos más de 35 años brindando
                atención veterinaria con amor, compromiso y asesoramiento
                profesional a todas las mascotas de Oberá y alrededores.
              </p>
              <p className="text-gray-600">
                Nuestro equipo está formado por profesionales altamente
                capacitados y apasionados por el bienestar animal, dedicados a
                ofrecer el mejor servicio y cuidado para tus compañeros.
              </p>
              <Link
                href="/nosotros"
                className="inline-block bg-[#c6e619] hover:bg-[#d4f528] text-[#8e0061] font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300"
              >
                Conocer más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#b3007a] to-[#8e0061] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse">
            ¿Necesitas atención para tu mascota?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para agendar una cita o resolver cualquier
            consulta sobre nuestros servicios
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20quisiera%20solicitar%20un%20turno&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-[#8e0061] font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 transition-transform duration-300 inline-flex items-center"
          >
            Solicitar Turno <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeProductModal}
          product={selectedProduct}
        />
      )}
    </main>
  );
}
