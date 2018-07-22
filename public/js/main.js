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
  $('#warning-reception-message, #success-reception-message, #warning-reception-node, #warning-wed-message, #success-wed-message, #warning-wed-node').hide();
  $('#wedding-input').show();
  $('#wedding-Details').hide()
});

$('#wedding-vote-cancel').on('click', function(){
  $('#warning-reception-message, #success-reception-message, #warning-reception-node, #warning-wed-message, #success-wed-message, #warning-wed-node').hide();
  $('#wedding-input').hide();
  $('#wedding-Details').show()
})

$("#wedding-vote-submit").on('click', function(){
  $('#warning-wed-message, #success-wed-message, #warning-wed-node, #warning-reception-message, #success-reception-message, #warning-reception-node').hide();
  var rad = $("input[name=wedding_vote]:checked").val();
  if(rad!=undefined){
    // $('#success-wed-message').fadeIn('slow');
    // $('#success-wed-message').delay(5000).fadeOut('slow');
    // $('#success-wed-message').show();
    $("#wedding-form").submit();
  }else{
    $('#warning-wed-message').show();
    // $('#warning-wed-node').find('p').text('Kindly select one option from above!')
  }
});

if($('#success-wed-message').length > 0){
  $('#wedding-input').hide();
  $(window).scrollTop($('#success-wed-message').offset().top);
  $('#wedding-Details').show();
  $('#success-wed-message').show();
}

if($('#warning-wed-node').length > 0){
  $(window).scrollTop($('#warning-wed-node').offset().top);
  $('#wedding-input').show();
  $('#wedding-Details').hide();
  $('#warning-wed-node').show();
}

// Reception Flow


$('#reception-Details').on('click', function() {
  $('#warning-reception-message, #success-reception-message, #warning-reception-node, #warning-wed-message, #success-wed-message, #warning-wed-node').hide();
  $('#reception-input').show();
  $('#reception-Details').hide();
  
});

$('#reception-vote-cancel').on('click', function(){
  $('#warning-reception-message, #success-reception-message, #warning-reception-node, #warning-wed-message, #success-wed-message, #warning-wed-node').hide();
  $('#reception-input').hide();
  $('#reception-Details').show();
})

$("#reception-vote-submit").on('click', function(){
  $('#warning-reception-message, #success-reception-message, #warning-reception-node, #warning-wed-message, #success-wed-message, #warning-wed-node').hide();
  var rad_reception = $("input[name=reception_vote]:checked").val();
  if(rad_reception!=undefined){
    // $('#success-wed-message').fadeIn('slow');
    // $('#success-wed-message').delay(5000).fadeOut('slow');
    // $('#success-wed-message').show();
    $("#reception-form").submit();
  }else{
    $('#warning-reception-message').show();
    // $('#warning-reception-node').find('p').text('Kindly select one option from above!')
  }
});

if($('#success-reception-message').length > 0){
  $('#reception-input').hide();
  $(window).scrollTop($('#success-reception-message').offset().top);
  $('#reception-Details').show();
  $('#success-reception-message').show();
}

if($('#warning-reception-node').length > 0){
  $(window).scrollTop($('#warning-reception-node').offset().top);
  $('#reception-input').show();
  $('#warning-reception-node').show();
  $('#reception-Details').hide();
}


