$(document).ready(function() {
  
  alert("Started...");
    //listen_for_form_submission_here
    $('#login-form').submit(function(event) {
      event.preventDefault(); // prevent default form submission
      
      // get form data
      var username = $('#username').val();
      var password = $('#password').val();
  
      // sending_the_data_to_server_using_AJAX
      $.ajax({
        type: 'POST',
        url: './php/login.php',
        data: { username: username, password: password },
        dataType: 'json',
        success: function(response) {
          if (response.success) {
            // redirect to profile pagee
            localStorage.setItem('session_key',response.session_id);            
            //alert(response.sesssion_id);
            window.location.href = './profile.html';

          } else {
            // display-error message
            alert(response.message);
          }
        },
        error: function() {
          // display-the-error-message
          alert('Error connecting to server.');
        }
      });
    });
  });
