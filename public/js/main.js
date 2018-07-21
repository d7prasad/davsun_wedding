// // Animate Smooth Scroll
// $('#venue-Details').on('click', function() {
//   const images = $('#header').position().top;

//   $('html, body').animate(
//     {
//       scrollTop: images
//     },
//     900
//   );
// });
$('#wedding-input').hide();
$('#wedding-Details').on('click', function() {
  $('#wedding-input').toggle();
});

$('#wedding-vote-cancel').on('click', function(){
  $('#wedding-input').hide();
})

$("#wedding-vote-submit").on('click', function(){
  alert($("input[name=wedding-vote]:checked").val())
});