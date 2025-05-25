import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Download, ArrowLeft, Headphones } from "lucide-react"
import Link from "next/link"
import { AudioPlayer } from "@/components/AudioPlayer"

// Datos de los capítulos
const capitulos = [
  {
    id: 1,
    titulo: "Capítulo 1: Espías y Experimentos",
    descripcion: "Los inicios de una investigación que desafía la realidad",
    fecha: "10 de Junio 2013",
    archivo: "/novela/capitulos/Capitulo 1 - Espías y Experimentos.pdf",
    audio: "/novela/capitulos/Capitulo 1.mp3"
  },
  {
    id: 2,
    titulo: "Capítulo 2: Envidia hacia las abejas",
    descripcion: "Cuando lo cotidiano se vuelve sospechoso",
    fecha: "13 de Junio 2013",
    archivo: "/novela/capitulos/Capitulo 2 - Envidia hacia las abejas.pdf",
    audio: "/novela/capitulos/Capitulo 2.mp3"
  },
  {
    id: 3,
    titulo: "Capítulo 3: Miradas entre las cortinas",
    descripcion: "Las apariencias engañan más de lo que creemos",
    fecha: "25 de Julio 2013",
    archivo: "/novela/capitulos/Capitulo 3 - Miradas entre las cortinas.pdf",
    audio: "/novela/capitulos/Capitulo 3.mp3"
  },
  {
    id: 4,
    titulo: "Capítulo 4: Zumbídos en el Jardín",
    descripcion: "Los sonidos que no deberían estar ahí",
    fecha: "29 de Julio 2013",
    archivo: "/novela/capitulos/Capitulo 4- Zumbídos en el Jardín.pdf",
    audio: "/novela/capitulos/Capitulo 4.mp3"
  },
  {
    id: 5,
    titulo: "Capítulo 5: El Laberinto de Susurros",
    descripcion: "Cuando los secretos toman vida propia",
    fecha: "10 de Abril 2025",
    archivo: "/novela/capitulos/Capitulo 5 - El Laberinto de Susurros.pdf",
    audio: "/novela/capitulos/Capitulo 5.mp3"
  },
  {
    id: 6,
    titulo: "Capítulo 6: El peso de los planos",
    descripcion: "Las estructuras que nos rodean tienen más que contarnos",
    fecha: "15 de Abril 2025",
    archivo: "/novela/capitulos/Capitulo 6 - El peso de los planos.pdf",
    audio: "/novela/capitulos/Capitulo 6.mp3"
  },
  {
    id: 7,
    titulo: "Capítulo 7: La penumbra",
    descripcion: "En la oscuridad, los miedos toman forma",
    fecha: "24 de Abril 2025",
    archivo: "/novela/capitulos/Capitulo 7 - La penumbra.pdf",
    audio: "/novela/capitulos/Capitulo 7.mp3"
  },
  {
    id: 8,
    titulo: "Capítulo 8: Sonido en las Sombras",
    descripcion: "Lo que el oído capta cuando la vista falla",
    fecha: "2 de Mayo 2025",
    archivo: "/novela/capitulos/Capitulo 8 - Sonido en las Sombras.pdf",
    audio: "/novela/capitulos/Capitulo 8.mp3"
  },
  {
    id: 9,
    titulo: "Capítulo 9: Misterios y Amistad",
    descripcion: "Los lazos que se forman en la búsqueda de la verdad",
    fecha: "21 de Mayo 2025",
    archivo: "/novela/capitulos/Capitulo 9 - Misterios y Amistad.pdf",
    audio: "/novela/capitulos/Capitulo 9.mp3"
  },
  {
    id: 10,
    titulo: "Capítulo 10: En desarrollo",
    descripcion: "",
    fecha: "!Pronto disponible!",
    archivo: null,
    audio: null,
    enDesarrollo: true
  },
  {
    id: 11,
    titulo: "Libro Completo",
    descripcion: "Disfruta de la experiencia completa de la novela con todos los capítulos",
    fecha: "¡Pronto disponible!",
    esLibroCompleto: true
  }
]

export default function NovelaPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al portafolio
            </Link>
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2"></h1>
            
            {/* Tarjeta de la portada */}
            <div className="flex justify-center my-8">
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800">
                <div className="relative" style={{ paddingBottom: '150%' }}> {/* Mantener proporción 2:3 para 1024x1536 */}
                  <img 
                    src="/portada1.png" 
                    alt="Portada de Bajo la Normalidad" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mt-6">
            El descubrimiento de un secreto profundo y antiguo bajo la superficie de un pueblo aparentemente normal. Este secreto, ligado a estructuras ocultas y fenómenos inexplicables, desafía la comprensión de los jóvenes protagonistas y los arrastra a una peligrosa investigación que pone a prueba su amistad, enfrentándolos a las acciones encubiertas de aquellos en quienes confiaban y revelando una historia oculta que envuelve a todo su pueblo.


            </p>

            {/* Tarjeta de Resumen en Podcast */}
            <div className="mt-8 md:col-span-2">
              <Card className="bg-gradient-to-br from-muted/20 to-muted/10 border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-full md:w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Headphones className="h-12 w-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Resumen de la Novela</h3>
                      <p className="text-muted-foreground mb-4">
                        Escucha un resumen detallado de la trama, personajes y misterios de "Bajo la Normalidad". Perfecto para ponerte al día o recordar los detalles clave de la historia.
                      </p>
                      <div className="w-full">
                        <AudioPlayer 
                          src="/novela/capitulos/Podcast.mp3" 
                          title="Resumen completo de Bajo la Normalidad"
                          label="Podcast"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capitulos.map((capitulo) => (
            <Card 
              key={capitulo.id} 
              className={`hover:shadow-md transition-shadow min-h-[120px] flex flex-col justify-between h-full ${
                capitulo.esLibroCompleto 
                  ? 'border-2 border-blue-300 dark:border-blue-400 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 md:col-span-2'
                  : ''
              }`}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <h3 className={`text-base sm:text-lg font-bold ${capitulo.esLibroCompleto ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                          {capitulo.titulo}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 sm:mt-0">
                          {capitulo.esLibroCompleto ? (
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                              ¡Nuevo!
                            </span>
                          ) : capitulo.enDesarrollo ? (
                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                              <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-orange-500 mr-1"></span>
                                Trabajando
                              </div>
                            </span>
                          ) : null}
                          <span className="text-xs text-muted-foreground sm:hidden">{capitulo.fecha}</span>
                        </div>
                      </div>
                      <p className={`text-sm mt-1 ${capitulo.esLibroCompleto ? 'text-gray-700 dark:text-gray-300' : 'text-muted-foreground'}`}>
                        {capitulo.descripcion}
                      </p>
                      <div className="hidden sm:flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{capitulo.fecha}</span>
                        {capitulo.audio && (
                          <span className="flex items-center text-xs text-blue-500">
                            <Headphones className="h-3 w-3 mr-1" /> Audio disponible
                          </span>
                        )}
                      </div>
                      {/* Muestra la fecha en móvil solo si no hay audio */}
                      {capitulo.audio && (
                        <div className="sm:hidden flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{capitulo.fecha}</span>
                          <span className="flex items-center text-xs text-blue-500">
                            <Headphones className="h-3 w-3 mr-1" /> Audio disponible
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0 flex sm:justify-end mt-2 sm:mt-0">
                      {capitulo.esLibroCompleto ? (
                        <div className="w-full sm:w-48">
                          <Button 
                            variant="default" 
                            size="lg" 
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                          >
                            Registrarse
                          </Button>
                        </div>
                      ) : capitulo.archivo ? (
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm" 
                          className="w-full sm:w-auto gap-2"
                        >
                          <Link href={capitulo.archivo} download>
                            <Download className="h-4 w-4" />
                            <span className="hidden sm:inline">Descargar</span>
                            <span className="sm:hidden">PDF</span>
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          Próximamente
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {capitulo.audio && (
                    <div className="mt-3 w-full">
                      <AudioPlayer 
                        src={capitulo.audio} 
                        title={`${capitulo.titulo} - Audiobook`} 
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p> 2025 Carlos Pastor Freire. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
