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
    descripcion: "Próximamente más aventuras",
    fecha: "Próximamente",
    archivo: null,
    audio: null
  },
  {
    id: 11,
    titulo: "Libro Completo",
    descripcion: "Disfruta de la experiencia completa de la novela con todos los capítulos",
    fecha: "Disponible ahora",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Bajo la Normalidad</h1>
            <p className="text-xl text-muted-foreground">
            El descubrimiento de un secreto profundo y antiguo bajo la superficie de un pueblo aparentemente normal. Este secreto, relacionado con estructuras ocultas y fenómenos inexplicables, desafía la comprensión de los jóvenes protagonistas y los empuja a una investigación peligrosa que pone a prueba su amistad y los confronta con las acciones ocultas de aquellos en quienes confiaban, sugiriendo que están desenterrando una "historia oculta del pueblo entero"
            </p>
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
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-lg font-bold ${capitulo.esLibroCompleto ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                        {capitulo.titulo}
                      </h3>
                      {capitulo.esLibroCompleto && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          ¡Nuevo!
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${capitulo.esLibroCompleto ? 'text-gray-700 dark:text-gray-300' : 'text-muted-foreground'}`}>
                      {capitulo.descripcion}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{capitulo.fecha}</span>
                      {capitulo.audio && (
                        <span className="flex items-center text-xs text-blue-500">
                          <Headphones className="h-3 w-3 mr-1" /> Audio disponible
                        </span>
                      )}
                    </div>
                    {capitulo.audio && (
                      <div className="mt-2">
                        <AudioPlayer 
                          src={capitulo.audio} 
                          title={`${capitulo.titulo} - Audiobook`} 
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 flex justify-end">
                    {capitulo.esLibroCompleto ? (
                      <div className="w-full md:w-48 mt-2">
                        <Button 
                          variant="default" 
                          size="lg" 
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          Registrarse
                        </Button>
                      </div>
                    ) : capitulo.archivo ? (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full md:w-auto gap-2"
                      >
                        <Link href={capitulo.archivo} download>
                          <Download className="h-4 w-4" />
                          <span className="hidden sm:inline">Descargar</span>
                          <span className="sm:hidden">PDF</span>
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        Próximamente
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p> 2023 Carlos Pastor Freire. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
