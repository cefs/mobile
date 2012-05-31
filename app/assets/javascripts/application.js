// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery.maskedinput
//= require_tree .

jQuery(function($){
   $("#user_lessor_cnpj, #user_lessee_cnpj, #user_debtor_cnpj, #user_debtor2_cnpj, #user_depositary_cnpj").mask("99.999.999/9999-99");
   $("#user_lessor_cep, #user_lessee_cep, #user_debtor_cep, #user_debtor2_cep, #user_depositary_cep").mask("99999-999");
});


$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})
