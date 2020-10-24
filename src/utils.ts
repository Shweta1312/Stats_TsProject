export const dateStringToDate = (dateString: string): Date => {
  const date = dateString
  .split('/')   //  ['28','10','2018']
  .map((value: string): number => {
    return parseInt(value);   // [28,10,2018]
  });

  //Format of date is ...Date(Year, Month(starts from 0), Day)
  return new Date(date[2], date[1] - 1, date[0]);
};
