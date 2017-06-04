
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


$(document).ready(function() {

    $('.call-data-table').DataTable();
    $('.zelect').zelect();
    $('.date').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
    $('.niceselect').niceSelect();

} );



$('.cancel-subscription').click(function(event) {
   swal({
        title: 'Cancel subscription ?',
        text: "Are you sure want to cancel the subscription !",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ce0832',
        cancelButtonColor: '#333333',
        confirmButtonText: 'Yes, Cancel it!',
        cancelButtonText: 'No'
      }).then(function () {
        swal(
          'Canceled!',
          'Your subscription  has been Canceled.',
          'success'
        )
      })
});


$('.save-change-key').click(function(event) {
   swal({
        title: 'Change key',
        text: "Are you sure you want to change your key? The existing key cannot be used after it has been changed",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ce0832',
        cancelButtonColor: '#333333',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then(function () {
        swal(
          'Changed!',
          'Your key has been changed.',
          'success'
        )
      })
});
