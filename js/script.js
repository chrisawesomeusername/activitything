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
});

document.getElementById('user2Total').addEventListener('click',function(){
  var user2HourA = parseInt(document.getElementById('user2HourA').value);
  var user2HourB = parseInt(document.getElementById('user2HourB').value);
  var user2HourC = parseInt(document.getElementById('user2HourC').value);
  var user2HourD = parseInt(document.getElementById('user2HourD').value);
  var user2HourE = parseInt(document.getElementById('user2HourE').value);

  console.log(user2HourA);
  console.log(user2HourB);
  console.log(user2HourC);
  console.log(user2HourD);
  console.log(user2HourE);

  var user2Total = user2HourA + user2HourB + user2HourC + user2HourD + user2HourE;
  console.log(user1Total);

  document.getElementById('user2Result').value = user2Total;
})


// document.getElementById('user1Total').addEventListener('click',function(){
//   var hours = [
//     parseInt(document.getElementById('user1HourA').value),
//     parseInt(document.getElementById('user1HourB').value),
//     parseInt(document.getElementById('user1HourC').value),
//     parseInt(document.getElementById('user1HourD').value),
//     parseInt(document.getElementById('user1HourE').value)
//   ];
//   for (var i = 0; i < hours.length; i++) {
//     console.log(hours);
//   }
// });
