$(document).ready(function() {
    $("#register-link").click(function() {
      $(".login").hide();
      $(".register").show();
    });
  
    $("#login-link").click(function() {
      $(".register").hide();
      $(".login").show();
    });
  
    // Placeholder for actual form handling
    $(".container form").submit(function(e) {
      e.preventDefault();
      // Handle the form submission here
      console.log("Form submitted!");
    });
  });