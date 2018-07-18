// Animate Smooth Scroll
// $('#view-work').on('click', function() {
//   const images = $('#images').position().top;

//   $('html, body').animate(
//     {
//       scrollTop: images
//     },
//     900
//   );
// });

$('#wedding-form').hide();
$('#wedding-Details').on('click', function(){
  $('#wedding-form').toggle();
})