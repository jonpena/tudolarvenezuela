import moment from 'moment';

export function ConvertValue(price: string) {
  const number = parseFloat(price.replace(',', '.'));
  return number.toFixed(2).toString();
}

export function ConvertDateES2En(fechaStr: string): string {
  const fechaEnIngles = fechaStr
    .replace(/enero/gi, 'January')
    .replace(/febrero/gi, 'February')
    .replace(/marzo/gi, 'March')
    .replace(/abril/gi, 'April')
    .replace(/mayo/gi, 'May')
    .replace(/junio/gi, 'June')
    .replace(/julio/gi, 'July')
    .replace(/agosto/gi, 'August')
    .replace(/septiembre/gi, 'September')
    .replace(/octubre/gi, 'October')
    .replace(/noviembre/gi, 'November')
    .replace(/diciembre/gi, 'December');

  // Crear un objeto Moment.js a partir de fechaEnIngles y el formato de entrada en inglés
  const fechaMoment = moment(fechaEnIngles, 'MMMM DD, YYYY hh:mm A', 'en');
  // Convertir el objeto Moment.js a una cadena con el formato deseado en inglés
  const fechaFormateada = fechaMoment.locale('en').format('hh:mm A DD/MM/YYYY');

  return fechaFormateada;
}
