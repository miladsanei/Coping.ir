$(document).ready(function(){
    function animateSlider() {
        $('.slider').addClass('animated');
    }
    var interval = setInterval(function(){
        if(document.readyState == 'complete'){
            clearInterval(interval);
            animateSlider();
        }
    }, 2000)
    $('.go-top').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    })
    $('.start').on('click', function(){
        $('body').addClass('new');
    })
    $('.close').on('click', function(){
        $('body').removeClass('new');
    })
    $('.show-password').hover(function(){
        $('.clipboard-password').attr('type', 'text');
    }, function(){
        $('.clipboard-password').attr('type', 'password');
    })
    let passwordField = $('.clipboard-password');
    passwordField.keyup(function(){
        if($(this).val() === 0 || $(this).val() === ''){
            $('.password-label').html('کلیپبورد عمومی');
        }else{
            $('.password-label').html('کلیپبورد خصوصی');
        }
    })
    let clipboardContentHeight = 0;
    $('.clipboard-item').each(function(i, value){
        clipboardContentHeight += parseInt($(this).height());
    });
    clipboardContentHeight += '';
    $('.clipboard-content').animate({scrollTop: clipboardContentHeight})
    
});
