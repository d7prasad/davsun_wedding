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
$('#warning-wed-message, #success-wed-message').hide();

$('#wedding-input').hide();
$('#wedding-Details').on('click', function() {
  $('#warning-wed-message, #success-wed-message').hide();
  $('#wedding-input').toggle();
});

$('#wedding-vote-cancel').on('click', function(){
  $('#warning-wed-message, #success-wed-message').hide();
  $('#wedding-input').hide();
})

$("#wedding-vote-submit").on('click', function(){
  $('#warning-wed-message, #success-wed-message').hide();
  var rad = $("input[name=wedding_vote]:checked").val();
  if(rad!=undefined){
    // $('#success-wed-message').fadeIn('slow');
    // $('#success-wed-message').delay(5000).fadeOut('slow');
    // $('#success-wed-message').show();
    $("#wedding-form").submit();
  }else{
    $('#warning-wed-message').show();
  }
});

if($('#success-wed-message').length > 0){
  $('#wedding-input').hide();
  $(window).scrollTop($('#wedding-text').offset().top);
  $('#success-wed-message').show();
}

if($('#warning-wed-node').length > 0){
  $(window).scrollTop($('#wedding-text').offset().top);
  $('#warning-wed-node').show();
}


