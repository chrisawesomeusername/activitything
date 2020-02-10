console.log('teest');


document.getElementById('user1Total').addEventListener('click',function(){
  var user1HourA = parseInt(document.getElementById('user1HourA').value);
  var user1HourB = parseInt(document.getElementById('user1HourB').value);
  var user1HourC = parseInt(document.getElementById('user1HourC').value);
  var user1HourD = parseInt(document.getElementById('user1HourD').value);
  var user1HourE = parseInt(document.getElementById('user1HourE').value);

  console.log(user1HourA);
  console.log(user1HourB);
  console.log(user1HourC);
  console.log(user1HourD);
  console.log(user1HourE);

  var user1Total = user1HourA + user1HourB + user1HourC + user1HourD + user1HourE;
  console.log(user1Total);

  document.getElementById('user1Result').value = user1Total;
})
