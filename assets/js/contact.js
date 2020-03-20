$(document).ready(function () {

    //to animate the navbar-dropdown burger.
    $('.burger-button').on('click', () => {
      $('.animated-burger').toggleClass('open');
    });

    // $('#submit').on('click', function() {
    // const name = $('#name').val().trim(),
    //  email = $('#email').val().trim(),
    //  message = $('#message').val().trim();
  
    //  if(!name  ||  !email  ||  !message)  {
    //      alert( "Please confirm you input")
    //  }  else {
    //      $.ajax({
    //          url:  "https://formspree.io/page.c.tyler@gmail.com",
    //          method: "POST",
    //          data: $(this).serialize(),
    //          dataType: 'json'
    //      })
        
    //     alert('Message Sent');
    //  }
    // })
});