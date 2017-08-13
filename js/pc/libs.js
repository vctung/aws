
class LoginForm {

   constructor() {
      this.active('login-box')
   }

   active(selector) {
      this.remove();
      $('.'+selector).addClass('active');
   }

   remove() {
      $('.register-box').removeClass('active');
      $('.login-box').removeClass('active');
   }

}




$( document ).ready(function() {

  var form = new LoginForm();

  $('.register-box , .login-box').mouseenter(function(event) {
     /* Act on the event */
     var selecter = $(this).attr('class');
     selecter = selecter.substr(0,selecter.indexOf(' ')) ;
     form.active(selecter);
  });

  $("button[switch-view-login-register]").click(function(event) {
     var __selecter = $(this).attr('switch-view-login-register');
     form.active(__selecter);
  });

});
