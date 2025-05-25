import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Mail, Subtitles, Twitter, Pencil, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProfileImage } from "@/components/custom/ProfileImage"
import { AnimatedTitle } from "@/components/AnimatedTitle"

interface ProjectType {
  id: number
  title: string
  subtitle?: string  // Nuevo campo opcional para el subtítulo
  description: string
  image: string
  date: string
  link: string
  github: string
  tags: string[]
  status: 'completed' | 'in-progress' // Estado del proyecto: completado o en progreso
}

const projects: ProjectType[] = [
  {
    "id": 1,
    "title": "Candlerush 1",
    "subtitle": "btcer.fun",
    "description": "Una plataforma de juego y simulación de trading de criptomonedas en una versión temprana con datos en tiempo real y apuestas ficticias basadas en las velas japonesas y las temporalidades, con resolución automática.",
    "image": "/Candlerush2.png",
    "date": "5 de Marzo 2025",
    "link": "https://btcer.fun",
    "github": "https://github.com/420btc/cndle",
    "tags": ["React Native", "TypeScript", "JavaScript"],
    "status": "completed"
  },
  {
    "id": 2,
    "title": "MeteoMálaga",
    "subtitle": "meteomalaga.fun",
    "description": "Aplicación de apuestas sobre pronósticos meteorológicos para Málaga con datos en tiempo real, análisis de predicciones y estadísticas. Apuestas con resolución automática en el momento del pronóstico.",
    "image": "/metemalaga.png",
    "date": "12 de Marzo 2025",
    "link": "https://meteomalaga.fun",
    "github": "https://github.com/420btc/meteomalaga",
    "tags": ["React Native", "JavaScript", "TypeScript", "Supabase"],
    "status": "completed"
  },
  {
    "id": 3,
    "title": "Carlos Freire FPV",
    "subtitle": "carlosfpv.es",
    "description": "Mi web personal para la venta de servicios de grabación con drones FPV en la Costa del Sol, Málaga. Secciones de contacto, meteorología con datos reales, servicios, proyectos y equipo disponible. No dudes en contactarme!",
    "image": "/freirefpv.png",
    "date": "20 de Marzo 2025",
    "link": "https://carlosfpv.es",
    "github": "https://github.com/420btc/freirefpv",
    "tags": ["Vue.js", "Python", "HTML", "EmailJS"],
    "status": "completed"
  },
  {
    "id": 4,
    "title": "Horizon Creative",
    "subtitle": "horizoncreative.es",
    "description": "Horizon Creative es una página web de portafolio profesional para agencias creativas, freelancers y estudios de diseño. Permite mostrar proyectos, servicios, equipo y datos de contacto, incluido mapa de ubicación.",
    "image": "/Horizonf.png",
    "date": "10 de Abril 2025",
    "link": "https://horizoncreative.es",
    "github": "https://github.com/420btc/horizoncreative",
    "tags": ["Next.js", "TypeScript", "EmailJS", "JavaScript", "CSS"],
    "status": "completed"
  },
  {
    "id": 5,
    "title": "CandleRush 2",
    "subtitle": "candlerush.es",
    "description": "Segunda versión de CandleRush, una plataforma mejorada de simulación y juego de trading de criptomonedas. Análisis profundo en sección Mi Perfil. Selección de par y temporalidad. Apuestas automáticas inteligentes con resolución integrada.",
    "image": "/rush2.png",
    "date": "28 de Abril 2025",
    "link": "https://candlerush.es",
    "github": "https://github.com/420btc/CandleRush2",
    "tags": ["Next.js", "Supabase", "TypeScript", "JavaScript"],
    "status": "in-progress"
  },
  {
    "id": 6,
    "title": "NotfoundInk",
    "subtitle": "notfoundink.art",
    "description": "Portfolio web para NotfoundInk de Ana Maria DCG, una colección de arte digital, con integración de acuñado de NFTs en la página web, conexión con billetera y sistema de ventas por formulario en sección de contacto.",
    "image": "/notfound.png",
    "date": "5 de Mayo 2025",
    "link": "https://notfoundink.art",
    "github": "https://github.com/420btc/notfoundink",
    "tags": ["Next.js", "TypeScript", "Supabase", "Stripe", "Solana"],
    "status": "completed"
  },
  {
    "id": 7,
    "title": "AI Dreamer",
    "subtitle": "aidreamer.es",
    "description": "Aplicación y web diseñada para registrar, analizar y explorar los sueños desde una perspectiva inspirada en las teorías psicoanalíticas de Sigmund Freud. Incluye un diccionario de símbolos oníricos y la capacidad de llevar un historial detallado con IA personal.",
    "image": "/aidreamer.png",
    "date": "12 de Mayo 2025",
    "link": "https://dreamsfreud.vercel.app/",
    "github": "https://github.com/420btc/DreamFreud",
    "tags": ["Next.js", "TypeScript", "Supabase", "OpenAI", "JavaScript"],
    "status": "completed"
  },
  {
    "id": 8,
    "title": "YourDayIn",
    "subtitle": "yourdayin.es",
    "description": "Aplicación web y móvil con Agente IA integrado para ayudarte a planificar tu día con los 5 lugares para visitar en función de tu búsqueda. Integración con OpenAI para obtener información sobre los lugares.",
    "image": "/yourdayin.png",
    "date": "18 de Mayo 2025",
    "link": "https://tudiaen.vercel.app/game",
    "github": "https://github.com/420btc/Tud-aen",
    "tags": ["Next.js", "TypeScript", "JavaScript", "OpenAI"],
    "status": "in-progress"
  },
  {
    "id": 9,
    "title": "Book Creator PDF",
    "subtitle": "pdfbookcreator.es",
    "description": "Aplicación web y móvil para crear libros PDF con contenido personalizado y en línea. Soporta PDFs ilimitados y permite su ordenación. Integración con OpenAI para obtener información sobre los libros que quieras en un chat integrado.",
    "image": "/bookcreator.png",
    "date": "23 de Mayo 2025",
    "link": "https://bookcreatorr.netlify.app/",
    "github": "https://github.com/usuario/recipes",
    "tags": ["Next.js", "TypeScript", "OpenAI", "PDF"],
    "status": "completed"
  },
  {
    "id": 10,
    "title": "Facetime Tracker",
    "subtitle": "facetimertrack.com",
    "description": "FaceTime Tracker es una aplicación web PC que utiliza TensorFlow para detectar y registrar el tiempo que pasas frente a tu PC. Especialmente útil para medir la exposición a videollamadas, clases virtuales o cualquier actividad que requiera el uso de cámara web.",
    "image": "/facetime.png",
    "date": "1 de Junio 2025",
    "link": "https://facedetection-wine.vercel.app/",
    "github": "https://github.com/420btc/FacetimeTracker",
    "tags": ["Next.js", "TypeScript", "TensorFlow", "OpenCV"],
    "status": "in-progress"
  }
]
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
        <div className="container flex h-14 items-center">
          <div className="flex-1">
            <Link href="/" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors">
              <span className="hidden sm:inline">Carlos Pastor Freire</span>
              <span className="sm:hidden text-base whitespace-nowrap relative -top-0.5">Carlos Freire</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre mí
            </Link>
          </nav>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-1 sm:space-x-4">
              {/* Botón de Novela - Versión móvil */}
              <Link
                href="/novela"
                className="lg:hidden flex items-center justify-center h-9 px-3 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors border border-muted"
              >
                <Pencil className="h-3.5 w-3.5 mr-1" />
                <span>Mi novela</span>
              </Link>
              
              {/* Botón de Novela - Versión desktop */}
              <Link
                href="/novela"
                className="hidden lg:flex text-sm font-medium text-muted-foreground hover:text-primary transition-colors items-center gap-1"
              >
                Mi Novela <Pencil className="h-3.5 w-3.5" />
              </Link>
              
              {/* Botones de redes sociales */}
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <a href="https://github.com/420btc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <a href="https://x.com/CarlosFreire0" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              
              {/* Botones ocultos en móvil */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <a href="mailto:tu@email.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <ProfileImage />
            <AnimatedTitle />
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creo experiencias web modernas y funcionales. Especializado en React, Next.js y TypeScript para construir
              aplicaciones que me permiten demostrar mis habilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#projects">Ver Proyectos Personales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Mis Proyectos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Una selección de mis trabajos más recientes, desde aplicaciones web hasta plataformas complejas.
            </p>
            
            {/* Botones de filtro */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
              <Button 
                variant="outline" 
                className="px-6 py-2 text-base rounded-full border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Aplicaciones y Webs
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-2 text-base rounded-full border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                Juegos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-border bg-card h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40" />
                  </div>
                  <div className="p-4 sm:p-8 lg:p-12 flex-1 flex flex-col justify-center bg-card relative">
                    {/* Sección móvil - Fecha y estado en la parte superior */}
                    <div className="sm:hidden flex justify-between items-start mb-4">
                      <div className="text-sm text-muted-foreground">
                        {project.date}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`px-2 py-0.5 text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800' 
                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`w-2 h-2 rounded-full mr-1 ${
                            project.status === 'completed' 
                              ? 'bg-green-500' 
                              : 'bg-orange-500'
                          }`}></span>
                          <span className="text-xs">
                            {project.status === 'completed' ? 'Finalizado' : 'Trabajando'}
                          </span>
                        </div>
                      </Badge>
                    </div>
                    
                    {/* Sección escritorio - Fecha y estado en esquina superior derecha */}
                    <div className="hidden sm:flex absolute top-6 right-6 flex-col items-end space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {project.date}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`px-3 py-1 text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800' 
                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`w-2 h-2 rounded-full mr-2 ${
                            project.status === 'completed' 
                              ? 'bg-green-500' 
                              : 'bg-orange-500'
                          }`}></span>
                          {project.status === 'completed' ? 'Finalizado' : 'Trabajando'}
                        </div>
                      </Badge>
                    </div>
                    {project.id === 1 && (
                      // Ícono en la esquina inferior derecha del contenido - Candlerush
                      <div className="absolute bottom-0 right-0 pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/iconocandlerush.png"
                            alt="Candlerush Icon"
                            width={40}
                            height={40}
                            className="w-14 h-14 -mt-8"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 2 && (
                      // Ícono en la esquina inferior derecha del contenido - MeteoMálaga
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/meteo2png.png"
                            alt="MeteoMálaga Icon"
                            width={40}
                            height={40}
                            className="w-14 h-14 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 3 && (
                      // Ícono en la esquina inferior derecha del contenido - Carlos Freire FPV
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/iconofpv.png"
                            alt="FPV Icon"
                            width={40}
                            height={40}
                            className="w-14 h-14 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 4 && (
                      // Ícono en la esquina inferior derecha del contenido - Horizon Creative
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/logobueno.png"
                            alt="Horizon Creative Icon"
                            width={40}
                            height={40}
                            className="w-12 h-12"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 5 && (
                      // Ícono en la esquina inferior derecha del contenido - Candlerush 2
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/candleicono.png"
                            alt="Candlerush 2 Icon"
                            width={80}
                            height={40}
                            className="w-16 h-12 object-contain"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 6 && (
                      // Ícono en la esquina inferior derecha del contenido - NotfoundInk
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/foundicon2.png"
                            alt="NotfoundInk Icon"
                            width={40}
                            height={40}
                            className="w-11 h-11 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 7 && (
                      // Ícono en la esquina inferior derecha del contenido - AI Dreamer
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/aidreamerx.png"
                            alt="AI Dreamer Icon"
                            width={40}
                            height={40}
                            className="w-12 h-12 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 8 && (
                      // Ícono en la esquina inferior derecha del contenido - YourDayIn
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/dayinlogo.png"
                            alt="YourDayIn Icon"
                            width={40}
                            height={40}
                            className="w-14 h-14 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 9 && (
                      // Ícono en la esquina inferior derecha del contenido - Book Creator PDF
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/bookcreatord.png"
                            alt="Book Creator PDF Icon"
                            width={40}
                            height={40}
                            className="w-14 h-14 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    {project.id === 10 && (
                      // Ícono en la esquina inferior derecha del contenido - FaceTime Tracker
                      <div className="absolute bottom-0 right-0 translate-x-[-10px] pointer-events-none hidden md:block">
                        <div className="transform scale-[3] origin-bottom-right">
                          <Image 
                            src="/trackericono.png"
                            alt="FaceTime Tracker Icon"
                            width={40}
                            height={40}
                            className="w-14 h-14 -mt-14"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1 mt-2 sm:mt-0">
                      <CardHeader className="p-0 mb-2 sm:mb-6 relative">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <div>
                          <CardTitle className="text-2xl md:text-3xl text-card-foreground mt-2 sm:mt-0">
                            {project.title}
                          </CardTitle>
                          {project.subtitle && (
                            <div className="text-2xl md:text-3xl text-muted-foreground">
                              {project.subtitle}
                            </div>
                          )}
                        </div>
                        <div className="sm:hidden text-xs text-muted-foreground">
                          {project.date}
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 sm:mt-6">
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button asChild className="shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Proyecto
                          </Link>
                        </Button>
                        <Button variant="outline" asChild className="border-border hover:bg-muted w-full sm:w-auto">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Sobre mí</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Soy Carlos Freire, un desarrollador full-stack apasionado por crear proyectos innovadores y funcionales. Con
                    experiencia en tecnologías modernas como React, Next.js, Node.js y bases de datos tanto SQL como NoSQL.
                  </p>
                  <p>
                    Mi enfoque se centra en los LLMs como herramienta para resolver problemas complejos y la creación de mis propios proyectos acelerandose con los ultimos modelos y editores de código.
                  </p>
                  <p>
                    Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos de
                    código abierto y compartiendo conocimientos con la comunidad de desarrolladores.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-lg dark:shadow-xl bg-muted/20">
                  <Image
                    src="/yop2.jpeg"
                    alt="About me"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">¿Trabajamos juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estoy siempre abierto a nuevos proyectos y oportunidades. Si tienes una idea o necesitas ayuda con tu
              próximo proyecto, no dudes en contactarme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="mailto:tu@email.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Carlos Freire. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
