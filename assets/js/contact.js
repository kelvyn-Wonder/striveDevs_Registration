jQuery(document).ready(function(){
  jQuery('#contact-form').on('submit', function(e) {
    jQuery.ajax({
      url: '#',
      data: jQuery(this).serialize(),
      type: 'POST',
      success: function(data){

        jQuery('#contact-form')[0].reset();

        swal({
          title: "Thank You!",
          text: "Your request has been submitted successfully. We will contact you soon.",
          icon: "success",
          content: {
            element: "div",
            attributes: {
              innerHTML: `
                <p>Make sure you follow Us On All Social Media Platforms:</p>
                <div style="display: flex; justify-content: center; font-size: 30px;">
                  <a href="https://chat.whatsapp.com/EfZH0QoKfEdKvsqbx5gJLA" target="_blank" style="margin: 0 10px; color: #25D366;">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.tiktok.com/@strivedev" target="_blank" style="margin: 0 10px; color: #000;">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                  <a href="https://youtube.com/@strivedev?si=kJAQp7tUzxG7aMj9" target="_blank" style="margin: 0 10px; color: #e4405f;">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/strivedevsgh/" target="_blank" style="margin: 0 10px; color:rgb(70, 127, 233);">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <p><strong>Click OK to close this message.</strong></p>
              `
            }
          },
          buttons: {
            ok: {
              text: "OK",
              value: true,
            }
          }
        });
      },
      error: function(data){
        jQuery('#contact-form')[0].reset();

        swal({
          title: "Thank You!",
          text: "Your request has been submitted successfully. We will contact you soon.",
          icon: "success",
          content: {
            element: "div",
            attributes: {
              innerHTML: `
                <p>Make sure you follow Us On All Social Media Platforms:</p>
                <div style="display: flex; justify-content: center; font-size: 30px;">
                  <a href="https://chat.whatsapp.com/EfZH0QoKfEdKvsqbx5gJLA" target="_blank" style="margin: 0 10px; color: #25D366;">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.tiktok.com/@strivedev" target="_blank" style="margin: 0 10px; color: #000;">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                  <a href="https://youtube.com/@strivedev?si=kJAQp7tUzxG7aMj9" target="_blank" style="margin: 0 10px; color: #e4405f;">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/strivedevsgh/" target="_blank" style="margin: 0 10px; color:rgb(70, 127, 233);">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <p><strong>Click OK to close this message.</strong></p>
              `
            }
          },
          buttons: {
            ok: {
              text: "OK",
              value: true,
            }
          }
        });
      },
    });
    e.preventDefault();
  });

  jQuery('#subscribe-form').on('submit', function(e) {
    jQuery.ajax({
      url: '#',
      data: jQuery(this).serialize(),
      type: 'POST',
      success: function(data){

        jQuery('#subscribe-form')[0].reset();

        swal({
          title: "Thank You!",
          text: "Your subscription request has been submitted successfully.",
          icon: "success",
          content: {
            element: "div",
            attributes: {
              innerHTML: `
                <p>Make sure you follow Us On All Social Media Platforms:</p>
                <div style="display: flex; justify-content: center; font-size: 30px;">
                  <a href="https://chat.whatsapp.com/EfZH0QoKfEdKvsqbx5gJLA" target="_blank" style="margin: 0 10px; color: #25D366;">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.tiktok.com/@strivedev" target="_blank" style="margin: 0 10px; color: #000;">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                  <a href="https://youtube.com/@strivedev?si=kJAQp7tUzxG7aMj9" target="_blank" style="margin: 0 10px; color: #e4405f;">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/strivedevsgh/" target="_blank" style="margin: 0 10px; color:rgb(70, 127, 233);">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <p><strong>Click OK to close this message.</strong></p>
              `
            }
          },
          buttons: {
            ok: {
              text: "OK",
              value: true,
            }
          }
        });
      },
      error: function(data){

        jQuery('#subscribe-form')[0].reset();

        swal({
          title: "Thank You!",
          text: "Your request has been submitted successfully. We will contact you soon.",
          icon: "success",
          content: {
            element: "div",
            attributes: {
              innerHTML: `
                <p>Make sure you follow Us On All Social Media Platforms:</p>
                <div style="display: flex; justify-content: center; font-size: 30px;">
                  <a href="https://chat.whatsapp.com/EfZH0QoKfEdKvsqbx5gJLA" target="_blank" style="margin: 0 10px; color: #25D366;">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="https://www.tiktok.com/@strivedev" target="_blank" style="margin: 0 10px; color: #000;">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                  <a href="https://youtube.com/@strivedev?si=kJAQp7tUzxG7aMj9" target="_blank" style="margin: 0 10px; color: #e4405f;">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/strivedevsgh/" target="_blank" style="margin: 0 10px; color:rgb(70, 127, 233);">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <p><strong></strong></p>
              `
            }
          },
          buttons: {
            ok: {
              text: "OK",
              value: true,
            }
          }
        });
      }
    });
    e.preventDefault();
  });
});
