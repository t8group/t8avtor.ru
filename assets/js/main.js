/**
 * Created by ftroitsky on 18/07/14.
 */

$('.t8s-lead-form').submit(
    function(e){
        e.preventDefault();
        $('.t8s-lead-form').fadeToggle();
        $('.t8s-lead-form--msg').delay(1000).fadeToggle();
//        $('.t8s-lead-form--msg').fadeIn();
    }
);