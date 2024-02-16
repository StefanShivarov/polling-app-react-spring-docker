
export function formatDate(dateString) {
    const date = new Date(dateString);

    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return monthNames[monthIndex] + ' ' + year;
}
  
export function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug", 
    "Sep", "Oct", "Nov", "Dec"
  ];

  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  return date.getDate() + ' ' + monthNames[monthIndex] + ' ' +
    year + ' - ' + (hour <= 9 ? '0' : '') + date.getHours() + 
    ':' + (minutes <= 9 ? '0' : '') + date.getMinutes();
}  