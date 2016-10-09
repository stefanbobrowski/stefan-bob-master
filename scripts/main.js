$(document).ready(function() {

    /* Lightning */

    window.setTimeout(function() {
        $('.lightning').addClass('flash');
        if (window.matchMedia('(min-width: 600px)').matches) {
            $('.headshot-wrapper').addClass('lit');
        }
    }, 400);


    /* Visible? */

    $.fn.visible = function(partial, offset) {
        currentWorkItem = $(this);

        offset = offset || 0;
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom + offset : _top + offset,
            compareBottom = partial === true ? _top + offset : _bottom + offset;

        return compareBottom <= viewBottom;
    };


    /* Animate Skills */

    var skills = $('.skills');
    var skillList = skills.find('.skill-list li');
    var skillsVisible = false;

    function animateSkills() {
        if (window.matchMedia('(min-width: 600px)').matches) {
            if( skills.visible(false) && ! skillsVisible) {
                skillList.addClass('come-in-skill');

                window.setTimeout(function() {
                    skillList.addClass('appeared');
                }, 1200);

                skillsVisible = true;
            }
        }
    }

    $(window).on('scroll load', function(e) {
        animateSkills();
    });


    /* Work Double Tap on Mobile */

    var workItem = $('.work-list li a');
    var touchmoved;

    $(workItem).on('touchend', function (e) {
        'use strict'; //satisfy code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('hover') && touchedmoved != true) {
            return true;
        } else {
            link.addClass('hover');
            $(workItem).not(this).removeClass('hover');
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
    }).on('touchmove', function(e) {
        touchmoved = true;
    }).on('touchstart', function() {
        touchmoved = false;
    });


    /* Jump to Section */
    function goToByScroll(id){
        $('html,body').animate({scrollTop: $("#"+id).offset().top},1000);
        return false;
    }

    $('.contact-link').on('click', function() {
        goToByScroll('contact');
    })

    $('.hero-arrow').on('click', function() {
        goToByScroll('about');
    })


    /* Contact */

    $('.contact-form').on('submit', function(e) {
        $(this).find('button').prop('disabled', true);

        var name = $(this).find('input[name="name"]').val();
        var email = $(this).find('input[name="email"]').val();
        var message = $(this).find('textarea[name="message"]').val();

        $.ajax({
            method: "POST",
            url: "send.php",
            data: { name: name, email: email, message: message },
            success: function(data) {
                if (data.indexOf(data) != -1) {
                    $('.message-status').addClass('message-success');
                    $('.message-status').html('Hey ' + name + "! Your message was sent!");
                } else {
                    $('.message-status').addClass('message-fail');
                    $('.message-status').html('Hey ' + name + "! Something went wrong!");
                }

                $('.contact-form').find('button[name="submit"]').addClass('submitted');
            }
        });

        e.preventDefault();
    });

});
