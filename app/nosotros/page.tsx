"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Valor = {
  id: number;
  titulo: string;
  descripcion: string;
  informacionGeneralId: number;
};

type Miembro = {
  id: number;
  nombre: string;
  cargo: string;
  foto: string;
};

type InformacionGeneral = {
  id: number;
  historia: string;
  imagen: string;
  mision: string;
  vision: string;
  valores: Valor[];
  equipo: Miembro[];
};

type EventoTrayectoria = {
  id: number;
  anio: number;
  titulo: string;
  descripcion: string;
  imagen: string;
};

export default function NosotrosPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const [info, setInfo] = useState<InformacionGeneral | null>(null);
  const [timelineEvents, settimelineEvents] = useState<EventoTrayectoria[]>([]);
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const res = await fetch("/api/trayectoria");
        if (!res.ok) throw new Error("Error al obtener la trayectoria");
        const data = await res.json();
        settimelineEvents(data);
      } catch (err: any) {
        setError(err.message || "Error inesperado");
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  useEffect(() => {
    const fetchMiembros = async () => {
      try {
        const res = await fetch("/api/miembros");
        if (!res.ok) throw new Error("Error al cargar los miembros");
        const data = await res.json();
        setMiembros(data);
      } catch (error) {
        console.error("Error al obtener miembros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMiembros();
  }, []);


  useEffect(() => {
    fetch("/api/sobre-nosotros")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

  if (loading) return <div>Cargando...</div>;
  if (!info) return <div>No hay información disponible</div>;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#b3007a] to-[#8e0061] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown">
            Sobre Nosotros
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp">
            Conoce nuestra historia, misión y valores que nos han guiado durante
            más de 35 años
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fadeInLeft">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={info.imagen || "/placeholder.svg"}
                  alt="Equipo de Agroveterinaria Gross"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 animate-fadeInRight">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061]">
                Nuestra Historia
              </h2>
              <p className="text-gray-600">{info.historia}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 animate-fadeInLeft">
              <div className="mb-6 inline-block p-3 bg-[#f0f0f0] rounded-full">
                <div className="w-16 h-16 bg-[#b3007a] rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#8e0061] mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 mb-4">{info.mision}</p>
            </div>

            {/* Values */}
            <ul className="space-y-4">
              {info.valores.map((valor) => (
                <li
                  key={valor.id}
                  className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="bg-[#c6e619] p-1 rounded-full mr-3 mt-1 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#8e0061]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{valor.titulo}</h3>
                    <p className="text-gray-600">{valor.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
       {/* Timeline */}
      <section
        ref={(el) => {
          sectionsRef.current["timeline"] = el;
        }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061] mb-4 animate-fadeIn">
              Nuestra Trayectora
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de tres décadas de crecimiento, aprendizaje y servicio a la
              comunidad de Oberá
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div
              className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#b3007a] transition-all duration-1000 ${
                isVisible["timeline"] ? "h-full" : "h-0"
              }`}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center"
                >
                  {/* Left side item */}
                  {index % 2 === 0 ? (
                    <>
                      <div
                        className={`md:w-1/2 md:pr-12 md:text-right transition-all duration-1000 ${
                          isVisible["timeline"]
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-20"
                        }`}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <h3 className="text-2xl font-bold text-[#8e0061] mb-2">
                            {event.anio}
                          </h3>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {event.titulo}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {event.descripcion}
                          </p>
                          <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md md:ml-auto">
                            <Image
                              src={event.imagen || "/placeholder.svg"}
                              alt={event.titulo}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#b3007a] text-white font-bold border-4 border-white shadow-md z-10 mx-4 transition-all duration-1000 ${
                          isVisible["timeline"]
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
                      >
                        {index + 1}
                      </div>
                      <div className="md:w-1/2 md:pl-12 hidden md:block">
                        {/* Empty space for right side on even items */}
                      </div>
                    </>
                  ) : (
                    /* Right side item */
                    <>
                      <div className="md:w-1/2 md:pr-12 hidden md:block">
                        {/* Empty space for left side on odd items */}
                      </div>
                      <div
                        className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#b3007a] text-white font-bold border-4 border-white shadow-md z-10 mx-4 transition-all duration-1000 ${
                          isVisible["timeline"]
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
                      >
                        {index + 1}
                      </div>
                      <div
                        className={`md:w-1/2 md:pl-12 transition-all duration-1000 ${
                          isVisible["timeline"]
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-20"
                        }`}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <h3 className="text-2xl font-bold text-[#8e0061] mb-2">
                            {event.anio}
                          </h3>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {event.titulo}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {event.descripcion}
                          </p>
                          <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                            <Image
                              src={event.imagen || "/placeholder.svg"}
                              alt={event.titulo}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Mobile view - always show content in a column */}
                  <div className="md:hidden w-full">
                    <div className="flex items-center mb-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#b3007a] text-white font-bold border-4 border-white shadow-md z-10 mr-4 transition-all duration-1000 ${
                          isVisible["timeline"]
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#8e0061]">
                          {event.anio}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {event.titulo}
                        </h4>
                      </div>
                    </div>
                    <div
                      className={`ml-14 transition-all duration-1000 ${
                        isVisible["timeline"]
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
                    >
                      <p className="text-gray-600 mb-4">{event.descripcion}</p>
                      <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={event.imagen || "/placeholder.svg"}
                          alt={event.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8e0061] mb-4 animate-fadeIn">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con la salud y el bienestar de tu
              mascota
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {miembros.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transform hover:translate-y-[-10px] transition-transform duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.foto || "/placeholder.svg"}
                    alt={member.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8e0061] mb-1">
                    {member.nombre}
                  </h3>
                  <p className="text-[#b3007a] font-medium mb-3">
                    {member.cargo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8e0061] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-pulse">
            ¿Quieres formar parte de nuestra historia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visítanos y descubre por qué tantas familias confían en nosotros
            para el cuidado de sus mascotas
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5493755677918&text=Hola,%20quisiera%20solicitar%20un%20turno&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-[#8e0061] font-bold py-3 px-8 rounded-lg transition-all inline-flex items-center animate-bounce"
          >
            Contáctanos <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
