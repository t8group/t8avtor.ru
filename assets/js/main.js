/**
 * Created by ftroitsky on 18/07/14.
 */

$('.t8s-lead-form__button').click(
    function(e){
        e.preventDefault();
        var btn = $(this);
        btn.button('loading'),
            setTimeout(function () {
                btn.button("reset")
            }, 3e3)
//        $.ajax(
//
//        ).always(function () {
//                btn.button('reset')
    }
);