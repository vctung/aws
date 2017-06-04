
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
