(function( $ ){
    "use strict";

    $.fn.validate = function(config, text) {

        //Objects in window window.validate, window.send_form
        window.validate = new Array();

        /* main options
         ----------------------------------------------------------------------------------------------------------------*/
        var options = {
            type  : "standart", // or ajax
			usesweetalerts : true,
			success_texth : "Thank you!",
			success_textp : "Your message has been sent!",
			style_user 	  : "",
			style_base 	  : "<style>.input_error{color:red!important; border:1px solid red;}</style>",
			class_error   : "input_error",
			validators : {
			  reg : {
				name	  : /^([a-z]+)([a-z\-\ \.])$/i,
				email	  : /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
				url		  : /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
				phone	  : /^([0-9\+\-\ ]{4,15})$/,
				date	  : /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
				en  	  : /^[A-Za-z]+$/,
				blank 	  : /^[*]+$/
			  },
			  text : {
				name   : "Please enter  name",
				email   : "Please enter a valid email",
				url   : "For example: http://jQueryscript.net",
				phone   : "Please enter a valid phone number",
				date  : "dd/mm/yyyy",
				en    : "English only",
				blank    : "Required field"
				
			  }
			},
			callbacks : {
			  // do something...
			}
        }

        $.extend(options.validators.text, text);
        $.extend(options, config);

        $(  options.style_base  +
            "<style>"+ options.style_user +"</style>").appendTo( $('head') );

        if(options.usesweetalerts)
            $(  "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/sweetalert/0.3.3/sweet-alert.min.css'>" +
                "<script src='https://cdnjs.cloudflare.com/ajax/libs/sweetalert/0.3.3/sweet-alert.min.js'></script>").appendTo( $('head') );

        /* Callback types
         ------------------------------------------------------------------------------------------*/
        var formType = {
            standart : function($form){
                var res = false;
                if( !checkForm($form) ){
                    res = true;
                }
                return res;
            },
            ajax     : function($form){
                var res = false, action = $form.attr('action'), type = $form.attr('method'), data = $form.serialize();
                window.send_form = $form;
                if( !checkForm($form) ){
                    var success = (options.callbacks.ajax_success) ? options.callbacks.ajax_success : (options.usesweetalerts) ? sweetAlert(options.success_texth, options.success_textp, "success") : alert(options.success_textp),
                        before = (options.callbacks.ajax_beforeSend) ? options.callbacks.ajax_beforeSend : false;
                    $.ajax({
                        type    : type,
                        url     : action,
                        data    : data,
                        beforeSend : before,
                        success : success
                    });
                }

                return res;
            }
        }


        /* Test elements
         ------------------------------------------------------------------------------------------*/
        var check = function($element, key){
            return options.validators.reg[key].test( $element.val() );
        };

        var checkForm = function($form){
            var i = 0;
            $form.find('[data-require]').each(function(){
                var $element = $(this), key = $element.data('require');
                if( !check($element, key) ) {
                    if( errorText.haveInWindow($element)[0] )
                        errorText.add($element, key, false);
                    else
                        errorText.add($element, key, true);
                    i++;
                }

            });
            return i;
        }


        /* Show error text
         ------------------------------------------------------------------------------------------*/
        var errorText = {
            add : function($element, key, add){
                var message = options.validators.text[key];
                if(add) errorText.addToWindow($element);
                $element
                    .addClass(options.class_error)
                    .val(message);
            },
            remove : function($element){
                var res = errorText.haveInWindow($element);
                if( res[0] ) delete window.validate[res[1]];
                $element
                    .removeClass(options.class_error)
            },
            haveInWindow : function($element){
                var res = [false, 0],
                    name = $element.attr('name');

                $.each(window.validate, function(index){
                    if( $(this) )
                        if( name == $(this).attr('name') ){
                            res = [true, index];
                        };
                });
                return res;
            },
            addToWindow : function($element){
                var object = new Object(),
                    name = $element.attr('name'),
                    value = $element.val();

                object.name = name;
                object.value = value;

                var res = errorText.haveInWindow($element);
                if(!res[0])
                    window.validate.push(object);
                else if( window.validate[res[1]].value != value )
                    window.validate[res[1]].value = value;
            },
            removeInWindow : function($element){
                var res = false,
                    name = $element.attr('name'),
                    value = $element.val();

                $.each(window.validate, function(){
                    if( $(this) ){
                        var name_ = $(this).attr('name'),
                            value_ = $(this).attr('value');
                        if( name == name_ && value != value_) res = (value_ != "") ? value_ : (value_ == "") ? "1" : false;
                    }
                });

                return res;
            }
        };


        /* Submit form
         ------------------------------------------------------------------------------------------*/
        this.each(function(){
            //Submit forms
            $(this)
                .submit(function(){
                    var user_type = $(this).data('type') || options.type;
                    var type = (user_type == "standart") ? formType.standart($(this)) : (user_type == "ajax") ? formType.ajax($(this)) : formType.standart($(this));
                    return type;
                });
            //Each elements
            $(this)
                .find('input[data-require]:visible')
                .each(function(){
                    var $element = $(this), key = $element.data('require');
                    //autocomplete off
                    $element.attr('autocomplete','off');
                    //Out focus
                    $(this).blur(function(){
                        if( !check($element, key) )
                            errorText.add($element, key, true);
                        else
                            errorText.remove($element);
                    });
                    //In focus
                    $(this).focus(function(){
                        var info = errorText.removeInWindow($element);
                        if( info == "1") $(this).val("");
                        else if( info ) $(this).val(info);
                        $element.removeClass(options.class_error)
                    });
                });
        });
    };

})(jQuery);