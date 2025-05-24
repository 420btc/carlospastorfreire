import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProfileImage } from "@/components/custom/ProfileImage"

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "Una plataforma completa de comercio electrónico con panel de administración, gestión de inventario y analytics en tiempo real.",
    image: "/placeholder.svg?height=300&width=500",
    date: "13 de Marzo 2024",
    link: "https://ecommerce-demo.com",
    github: "https://github.com/usuario/ecommerce",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización offline.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Febrero 2024",
    link: "https://taskapp-demo.com",
    github: "https://github.com/usuario/taskapp",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    id: 3,
    title: "Weather Analytics Platform",
    description:
      "Plataforma de análisis meteorológico con visualizaciones interactivas, predicciones ML y API personalizada.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Enero 2024",
    link: "https://weather-analytics.com",
    github: "https://github.com/usuario/weather",
    tags: ["Vue.js", "Python", "D3.js", "FastAPI"],
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "Dashboard para gestión de redes sociales con programación de posts, analytics y gestión de múltiples cuentas.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Diciembre 2023",
    link: "https://social-dashboard.com",
    github: "https://github.com/usuario/social",
    tags: ["React", "Express", "Redis", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones automáticas y seguimiento de progreso.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Noviembre 2023",
    link: "https://lms-demo.com",
    github: "https://github.com/usuario/lms",
    tags: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description:
      "Plataforma inmobiliaria con búsqueda avanzada, tours virtuales 360° y sistema de gestión de propiedades.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Octubre 2023",
    link: "https://realestate-demo.com",
    github: "https://github.com/usuario/realestate",
    tags: ["Angular", "NestJS", "Three.js", "MySQL"],
  },
  {
    id: 7,
    title: "Fitness Tracking App",
    description:
      "Aplicación móvil para seguimiento de ejercicios con planes personalizados, métricas de progreso y comunidad social.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Septiembre 2023",
    link: "https://fitness-tracker.com",
    github: "https://github.com/usuario/fitness",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
  },
  {
    id: 8,
    title: "Cryptocurrency Portfolio",
    description:
      "Dashboard para gestión de portafolio de criptomonedas con análisis técnico, alertas de precio y trading automatizado.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Agosto 2023",
    link: "https://crypto-portfolio.com",
    github: "https://github.com/usuario/crypto",
    tags: ["Vue.js", "WebSocket", "TradingView", "Node.js"],
  },
  {
    id: 9,
    title: "Recipe Sharing Platform",
    description:
      "Plataforma social para compartir recetas con búsqueda inteligente, planificación de comidas y lista de compras automática.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Julio 2023",
    link: "https://recipe-platform.com",
    github: "https://github.com/usuario/recipes",
    tags: ["Next.js", "Prisma", "Cloudinary", "Stripe"],
  },
  {
    id: 10,
    title: "Project Management Tool",
    description:
      "Herramienta de gestión de proyectos con metodologías ágiles, seguimiento de tiempo y colaboración en equipo en tiempo real.",
    image: "/placeholder.svg?height=300&width=500",
    date: "Junio 2023",
    link: "https://project-manager.com",
    github: "https://github.com/usuario/project-mgmt",
    tags: ["React", "GraphQL", "Apollo", "PostgreSQL"],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Carlos Freire
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
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
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <ProfileImage />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Desarrollador
              <span className="block text-primary">Full Stack</span>
            </h1>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Mis Proyectos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes, desde aplicaciones web hasta plataformas complejas.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-border bg-card"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-card">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl md:text-3xl text-card-foreground">{project.title}</CardTitle>
                        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                          {project.date}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Proyecto
                          </Link>
                        </Button>
                        <Button variant="outline" asChild className="border-border hover:bg-muted">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
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
                    Soy un desarrollador full-stack apasionado por crear soluciones web innovadoras y funcionales. Con
                    más de 3 años de experiencia, me especializo en tecnologías modernas como React, Next.js, Node.js y
                    bases de datos tanto SQL como NoSQL.
                  </p>
                  <p>
                    Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando las mejores
                    prácticas y las últimas tendencias en desarrollo web. Me encanta resolver problemas complejos y
                    transformar ideas en productos digitales exitosos.
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
                    src="/placeholder.svg?height=400&width=400"
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
              <Button variant="outline" size="lg" asChild className="border-border hover:bg-muted">
                <Link href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                  LinkedIn
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
              © {new Date().getFullYear()} Carlos Freire. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
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
