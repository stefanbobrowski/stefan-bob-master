$(document).ready(function() {

    window.setTimeout(function() {
        $('.lightning').addClass('flash');
        $('.headshot-wrapper').addClass('lit');
    }, 400);

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

    var skills = $('.skills');
    var skillList = skills.find('.skill-list li');
    var work = $('.work');
    var skillsVisible = false;
    var workVisible = false;
    var currentWorkItem;

    $(window).on('scroll load', function(e) {
        if (e.type == 'load') {

        }

        animateSkills();
    });

    animateSkills();

    function animateSkills() {
        if( skills.visible(false) && ! skillsVisible) {
            skillList.addClass('come-in-skill');

            window.setTimeout(function() {
                skillList.addClass('appeared');
            }, 1200);

            skillsVisible = true;
        }

        $('.work-list li').each(function(i, el) {
            var el = $(el);

            // if (el.visible(true)) {
            //     el.addClass('come-in-work');
            // }
        });
    }

});