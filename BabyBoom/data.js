module.exports = function(){
  var data = {
    TiposComprobantes: [
      {
        IDTipoComprobante: 1,
        nombreComprobante: "Boleta de venta electronica",
      },
      {
        IDTipoComprobante: 2,
        nombreComprobante: "Factura electrónica",
      },
      {
        IDTipoComprobante: 3,
        nombreComprobante: "Nota de crédito electrónica",
      },
      {
        IDTipoComprobante: 4,
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
    TiposEnfermedades: [
      {
        id: 1,
        nombreEnfermedad: "Asma",
        TipoEnfermedad:"Infecciones respiratorias"
      },
      {
        id: 2,
        nombreEnfermedad: "Gastritis",
        TipoEnfermedad:"Infecciones gastrointestinales"
      },
      {
        id: 3,
        nombreEnfermedad: "Bitiligo",
        TipoEnfermedad:"Infecciones de la piel",
      },
      {
        id: 4,
        nombreEnfermedad: "Sordera parcial",
        TipoEnfermedad:"Problemas de oído",
      },
    ],
  }
  return data
}

