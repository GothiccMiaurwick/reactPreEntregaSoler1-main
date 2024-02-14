const productos = [
  {
    nombre: "Semillas de Ajo",
    imagen: "../public/img/Semillas_de_ajo.png",
    descripcion: "Añade un toque punzante y maravilloso a los platos.",
    precio: 40,
    categoria: "primavera",
  },
  {
    nombre: "Semillas de Chirivía",
    imagen: "../public/img/Semillas_de_chirivia.png",
    descripcion: "Un tubérculo de primavera primo hermano de la zanahoria.",
    precio: 20,
    categoria: "primavera",
  },
  {
    nombre: "Semillas de Coliflor",
    imagen: "../public/img/Semillas_de_coliflor.png",
    descripcion: "Valiosa, pero de crecimiento lento y de vuenos nutrientes.",
    precio: 80,
    categoria: "primavera",
  },
  {
    nombre: "Semillas de Fresa",
    imagen: "../public/img/Semillas_de_fresa.png",
    descripcion:
      "Una fruta dulce, jugosa y de atractivo color rojo, muy apreciada.",
    precio: 100,
    categoria: "primavera",
  },
  {
    nombre: "Semillas de Café",
    imagen: "../public/img/Semillas_de_cafe.png",
    descripcion: "Plántalo en verano para tener un cafeto.",
    precio: 2500,
    categoria: "primavera",
  },
  {
    nombre: "Brote de Patata",
    imagen: "../public/img/Semillas_de_patata.png",
    descripcion: "Un tubérculo cultivado en muchas zonas.",
    precio: 50,
    categoria: "primavera",
  },
  {
    nombre: "Bulbo de Tulipán",
    imagen: "../public/img/Semillas_de_tulipan.png",
    descripcion: "Tarda 6 días en producir una colorida flor.",
    precio: 20,
    categoria: "primavera",
  },
  {
    nombre: "Semillas de col rizada",
    imagen: "../public/img/Semillas_de_col.png",
    descripcion: "Sus hojas brillantes quedan genial en sopas y sofritos.",
    precio: 70,
    categoria: "primavera",
  },
  {
    nombre: "Allium azul",
    imagen: "../public/img/Semillas_de_allium.png",
    descripcion:
      "Su flor crece con forma de esfera para invitar al máximo de mariposas posible.",
    precio: 30,
    categoria: "primavera",
  },
  {
    nombre: "Ruibarbo",
    imagen: "../public/img/Semillas_de_ruibarbo.png",
    descripcion:
      "Sus tallos son tremendamente agrios, pero conforman un buen postre si se edulcoran",
    precio: 100,
    categoria: "primavera",
  },
  {
    nombre: "Semillas de Amapola",
    imagen: "../public/img/Semillas_de_amapola.png",
    descripcion:
      "Además de su colorida flor, la amapola tiene usos culinarios y medicinales.",
    precio: 100,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Arándano",
    imagen: "../public/img/Semillas_de_arandano.png",
    descripcion:
      "Una baya muy popular que se dice tiene muchos beneficios para la salud.",
    precio: 80,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Carambola",
    imagen: "../public/img/Semillas_de_carambola.png",
    descripcion:
      "Una fruta muy jugosa que crece en climas cálidos y húmedos. Ligeramente dulce con un matiz ácido.",
    precio: 400,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Chile",
    imagen: "../public/img/Semillas_de_chile.png",
    descripcion: "Pica como un demonio, pero tiene un toque de dulzura.",
    precio: 40,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Girasol",
    imagen: "../public/img/Semillas_de_girasol.png",
    descripcion: "Hay un mito que dice que siempre gira buscando el sol.",
    precio: 200,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Lentejuela",
    imagen: "../public/img/Semillas_de_lentejuela.png",
    descripcion:
      "Una flor tropical que prospera con el aire húmedo del verano. Tiene un aroma dulce y fuerte.",
    precio: 50,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Lombarda",
    imagen: "../public/img/Semillas_de_lombarda.png",
    descripcion: "Se usa a menudo en ensaladas y chucrut.",
    precio: 100,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Melón",
    imagen: "../public/img/Semillas_de_melon.png",
    descripcion: "Un capricho fresco y dulce de verano.",
    precio: 80,
    categoria: "verano",
  },
  {
    nombre: "Semillas de Alcachofa",
    imagen: "../public/img/Semillas_de_alcachofa.png",
    descripcion:
      "El capullo de un cardo. Sus hojas espinosas esconden un interior carnoso y sustancioso.",
    precio: 30,
    categoria: "otoño",
  },
  {
    nombre: "Semillas de Amaranto",
    imagen: "../public/img/Semillas_de_amaranto.png",
    descripcion: "Un cereal lila cultivado por una antigua civilización.",
    precio: 70,
    categoria: "otoño",
  },
  {
    nombre: "Semillas de Invierno",
    imagen: "../public/img/Semillas_de_invierno.png",
    descripcion: "Un surtido de semillas silvestres de invierno.",
    precio: 120,
    categoria: "invierno",
  },
];

const obtenerProductos = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 1000);
});

export default obtenerProductos;
