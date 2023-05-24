import imagen from "./assets/medioambiente/ambiente4.jpg"
import articulo1 from "./assets/articles/articulo1.png"
export const Articles = [
  {
    title:"Artículo 1",
    description: "Registro de seguridad y salud laboral para mypes",
    etiqueta: "Seguridad",
    keywords: "seguridad, salud, trabajo, 29783, iso, 45001, stakeholders",
    image: articulo1,
    url:"/articulo1",
    date: new Date("05-24-2023")
  },
  {
    title:"Titulo1",
    description: "Esta es una breve descripción del artículo 1",
    etiqueta: "Calidad",
    keywords: "key12, key11, key13",
    image: imagen,
    date: new Date("01-05-2023")
  },
  {
    title:"Titulo2",
    description: "Esta es una breve descripción del artículo 2",
    etiqueta: "Seguridad",
    keywords: "key22, key21, key23",
    image: imagen,
    date: new Date("02-05-2023")
  },
  {
    title:"Titulo3",
    description: "Esta es una breve descripción del artículo 3",
    etiqueta: "Ambiente",
    keywords: "key32, key31, key33",
    image: imagen,
    date: new Date("03-05-2023")
  }
]