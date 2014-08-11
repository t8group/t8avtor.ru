/**
 * Created by ftroitsky on 18/07/14.
 */

$('.t8s-lead-form').on('submit', function(event){
        event.preventDefault();
        var btn = $(this).find('.t8s-lead-form__button');
        btn.button('loading'),
            setTimeout(function () {
                btn.button("reset");
                $('#successModal').modal('toggle');
                console.log('modal');
            }, 3e3)
//        $.ajax(
//
//        ).always(function () {
//                btn.button('reset')
    }
);