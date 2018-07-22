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
$('#warning-wed-message, #success-wed-message, #warning-reception-message, #success-reception-message').hide();

$('#wedding-input, #reception-input').hide();

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
    $('#warning-wed-node').find('p').text('Kindly select one option from above!')
  }
});

if($('#success-wed-message').length > 0){
  $('#wedding-input').hide();
  $(window).scrollTop($('#wedding-text').offset().top);
  $('#success-wed-message').show();
}

if($('#warning-wed-node').length > 0){
  $(window).scrollTop($('#wedding-text').offset().top);
  $('#wedding-input').show();
  $('#warning-wed-node').show();
}

// Reception Flow


$('#reception-Details').on('click', function() {
  $('#warning-reception-message, #success-reception-message').hide();
  $('#reception-input').toggle();
});

$('#reception-vote-cancel').on('click', function(){
  $('#warning-reception-message, #success-reception-message').hide();
  $('#reception-input').hide();
})

$("#reception-vote-submit").on('click', function(){
  $('#warning-reception-message, #success-reception-message').hide();
  var rad_reception = $("input[name=reception_vote]:checked").val();
  if(rad_reception!=undefined){
    // $('#success-wed-message').fadeIn('slow');
    // $('#success-wed-message').delay(5000).fadeOut('slow');
    // $('#success-wed-message').show();
    $("#reception-form").submit();
  }else{
    $('#warning-reception-message').show();
    $('#warning-reception-node').find('p').text('Kindly select one option from above!')
  }
});

if($('#success-reception-message').length > 0){
  $('#reception-input').hide();
  $(window).scrollTop($('#reception-text').offset().top);
  $('#success-reception-message').show();
}

if($('#warning-reception-node').length > 0){
  $(window).scrollTop($('#reception-text').offset().top);
  $('#reception-input').show();
  $('#warning-reception-node').show();
}


