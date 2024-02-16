$(document).ready(function () {
   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


   $('.channel-dropdown .dropdown-toggle').click(function(){
      $('.channel-dropdown .dropdown-toggle i').toggleClass('fa-angle-down');
      $('.channel-dropdown .dropdown-toggle i').toggleClass('fa-xmark');
   })

   $('.my-accord .header').click(function(e){
      $(this).siblings('.body').slideToggle(()=>{
         $(e.currentTarget).parent().toggleClass('open')
      })
   })

   $('.right-section .right-top .search-form input').focus(function(){
      $('.right-section .right-top .search-form').css('width', '250px');
      $('.right-section .right-top .search-form button i').removeClass('fa-magnifying-glass');
      $('.right-section .right-top .search-form button i').addClass('fa-xmark');
   })
   $('.right-section .right-top .search-form input').focusout(function(){
      $('.right-section .right-top .search-form').css('width', '150px');
      $('.right-section .right-top .search-form button i').removeClass('fa-xmark');
      $('.right-section .right-top .search-form button i').addClass('fa-magnifying-glass');
   })


   $('#toggle-group-members').click(function(){
      $('.right-right').toggleClass('open');
   });


   $('#back_to_home').click(function(){
      $('.right-section').fadeOut();
   })

   $('.groups .my-accord .item').click(function(){
      $('.right-section').fadeIn('slow');
   })

   if (window.innerWidth < 576) {
      $('.right-top .my-btn.fs-5').removeClass('fs-5').addClass('fs-6')
   }

});