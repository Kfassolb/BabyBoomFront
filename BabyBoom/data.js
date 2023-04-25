module.exports = function(){
  var data = {
    tipocomprobantes: [
      {
        id: 1,
        nombreComprobante: "Boleta de venta electronica",
      },
      {
        id: 2,
        nombreComprobante: "Factura electrónica",
      },
      {
        id: 3,
        nombreComprobante: "Nota de crédito electrónica",
      },
      {
        id: 4,
        nombreComprobante: "Nota de débito electrónica",
      },
    ],
    Usuario: [
      {
        id: 1,
        Username: "Parka",
        Password: "FUw$^uDnW5&i8c",
      },
      {
        id: 2,
        Username: "Ame",
        Password: "zYP5uP^qmW^$57",
      },
      {
        id: 3,
        Username: "Pablito",
        Password: "PLeR2!7tB8%vzo",
      },
      {
        id: 4,
        Username: "Jachito",
        Password: "GmB!nxcbKV6s9X",
      },
    ],
    Servicio: [
      {
        IDservicio:1,
        NombreServicio:"Baño bebe",
      },
      {
        IDservicio:2,
        NombreServicio:"Dar comer bebe",
      },
      {
        IDservicio:3,
        NombreServicio:"Siesta bebe",
      },
    ],
    Producto: [
      {
        id:1,
        Nombre:"Babero",
        Tipo:"Prenda",
        Cantidad:2,
        PrecioUnitario:10 ,
      },
      {
        id:2,
        Nombre:"Coche",
        Tipo:"Transporte",
        Cantidad:1,
        PrecioUnitario:350,
      },
      {
        id:3,
        Nombre:"Sonaja",
        Tipo:"Juguete",
        Cantidad:5,
        PrecioUnitario:8,

      },
    ],
    TiposEnfermedades: [
      {
        IDTipoEnfermedad: 1,
        nombreEnfermedad: "Infecciones respiratorias",
        TipoEnfermedad:"Asma"
      },
      {
        IDTipoEnfermedad: 2,
        nombreEnfermedad: "Infecciones gastrointestinales",
        TipoEnfermedad:"Gastritis"
      },
      {
        IDTipoEnfermedad: 3,
        nombreEnfermedad: "Infecciones de la piel",
        TipoEnfermedad:"Bitiligo"
      },
      {
        IDTipoEnfermedad: 4,
        nombreEnfermedad: "Problemas de oído",
        TipoEnfermedad:"Sordera parcial"
      },
    ],
  }
  return data
}
