const h2 = document.querySelector('h2');


function ChristmasDday(){
  const today = new Date();
  const christmas = new Date('2023-12-25T00:00:00');
  const Dday = christmas - today;
  const DdayD = Math.floor(Dday / (1000 * 60 *60 *24))
  const DdayH = Math.floor(Dday / (1000 * 60 *60) %24)
  const DdayM = Math.floor(Dday / (1000 * 60) %60)
  const DdayS = Math.floor(Dday / 1000 % 60)
  h2.innerText=`${DdayD}Day ${DdayH}h ${DdayM}m ${DdayS}s`
}
ChristmasDday()

setInterval(ChristmasDday,1000);