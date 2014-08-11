/**
 * Created by ftroitsky on 18/07/14.
 */

$('.t8s-lead-form')
    .on('submit', function(event){
        event.preventDefault();
        var form = $(this)
        var btn = form.find('.t8s-lead-form__button');
        btn.button('loading'),
//        setTimeout(function () {
//            btn.button("reset");
//            $('#successModal').modal('toggle');
//            $('.t8s-lead-form').clearForm();
//        }, 3e3)
        $.ajax({
            url: 'http://landing.dlmp.net/request',
            crossDomain: true,
            type : 'POST',
            data: form.serialize(),
            success: function(){
                $('#successModal').modal('toggle');
                 form.clearForm();
            }
        })
        .always(function () {
            btn.button('reset')

        })
    }
);

setFiels();


function setFiels(){
    var cookie = t8Cookie();
    var form = $('.t8s-lead-form');
    if (form){
        form.find('input:hidden[name=campaignParams]').val(cookie.campaignParams);
        form.find('input:hidden[name=campaignReferrer]').val(cookie.campaignReferrer);
    }

}

function t8Cookie(){
    $.cookie.json = true;
    var cookie = $.cookie('t8cookie');

    // Проверяем есть ли кука

    if (cookie){
        // Если да берем значение location.search и document.referrer из нее
        return cookie;

    } else {
        // Если нет, читаем location.search и document.referrer и ставим куку
        var storedObj = {
            campaignParams: location.search,
            campaignReferrer: document.referrer
        };

        $.cookie.json = true;
        $.cookie('t8cookie', storedObj, { expires: 10 });
        return storedObj;
    };
}



$.fn.clearForm = function() {
    return this.each(function() {
        var type = this.type, tag = this.tagName.toLowerCase();
        if (tag == 'form')
            return $(':input',this).clearForm();
        if (type == 'text' || type == 'password' || tag == 'textarea' || type == 'tel' || type == 'email' )
            this.value = '';
        else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};