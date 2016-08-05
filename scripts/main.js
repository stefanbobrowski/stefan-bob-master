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


    /* Animate Work */

    // var work = $('.work');
    // var workList = work.find('.work-list li');
    // var workVisible = false;

    // function animateWork() {
    //     if (window.matchMedia('(min-width: 600px)').matches) {

    //         if( work.visible(false) && ! workVisible) {
    //             console.log('we here');

    //             workList.addClass('come-in-work');

    //             workVisible = true;
    //         }

    //     }
    // }


    $(window).on('scroll load', function(e) {
        animateSkills();
        // animateWork();
    });

        function goToByScroll(id){
        $('html,body').animate({scrollTop: $("#"+id).offset().top},1000);
        return false;
    }

    $('.contact-link').on('click', function() {
        console.log('hello');
        goToByScroll('contact');
    })




});