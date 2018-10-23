$(function () {


    ////////////////////////////
    ////nav change on scroll////
    ////////////////////////////


    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.main_nav').addClass('dark');
        }
        else {
            $('.main_nav').removeClass('dark')
        }
    });



    ////////////////////////////
    /////////for RWD nav////////
   ////////////////////////////


    $('.toggle').click(function () {
        $('ul').toggleClass('active')
    });



    ////////////////////////////
    ///////header slider////////
    ///////////////////////////


    var nextBtn = $('.next_btn');
    var prevBtn = $('.prev_btn');
    var allSlides = $('.slide');
    var indexSlide = 0;
    var lastIndex = allSlides.length - 1;

    $(allSlides[indexSlide]).addClass('visible');

    nextBtn.on('click', function () {

        $(allSlides[indexSlide]).removeClass('visible');
        indexSlide++;
        if (indexSlide > lastIndex) {
            indexSlide = 0;
        }
        $(allSlides[indexSlide]).addClass('visible');
    })

    prevBtn.on('click', function () {
        $(allSlides[indexSlide]).removeClass('visible');
        indexSlide--;
        if (indexSlide < 0) {
            indexSlide = lastIndex;
        }
        $(allSlides[indexSlide]).addClass('visible');
    })




    ////////////////////////////
    //////form validation//////
    ///////////////////////////


    $("form").attr('novalidate', 'novalidate');

    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_message = false;
    var error_checkbox = false;

    $('#name').focusout(function () {
        check_fname();
    })

    $('#s_name').focusout(function () {
        check_sname();
    })

    $('#email').focusout(function () {
        check_email();
    })
    $('#email').focusout(function () {
        check_email();
    })

    $('#message').focusout(function () {
        check_message();
    })

    $('#checkbox').focusout(function () {
        check_checkbox();
    })

    function check_fname() {
        var pattern = /[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+/;
        var fname = $('#name').val();
        if (pattern.test(fname) && fname !== '') {
            $('#name').css("border", "2px solid #34F458");
        } else {
            $('#name').css("border", "2px solid #F90A0A");
            error_fname = true;
        }
    }

    function check_sname() {
        var pattern = /[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+/;
        var sname = $('#s_name').val();
        if (pattern.test(sname) && sname !== '') {
            $('#s_name').css("border", "2px solid #34F458");
        } else {
            $('#s_name').css("border", "2px solid #F90A0A");
            error_sname = true;
        }
    }

    function check_email() {
        var pattern = /[^@\s]+@[^@\s]+\.[^@\s]+/;
        var email = $('#email').val();
        if (pattern.test(email) && email !== '') {
            $('#email').css("border", "2px solid #34F458");
        } else {
            $('#email').css("border", "2px solid #F90A0A");
            error_email = true;
        }
    }

    function check_message() {
        var message = $('#message').val();
        if (message !== '') {
            $('#message').css("border", "2px solid #34F458");
        } else {
            $('#message').css("border", "2px solid #F90A0A");
            error_message = true;
        }
    }

    function check_checkbox() {

        if ($('#checkbox').is(':checked')) {
            $('.state').css("border", "2px solid #34F458");
        } else {
            $('.state').css("border", "2px solid #F90A0A");
            error_checkbox = true;
        }
    }

    $('form').submit(function (e) {
        e.preventDefault()

        error_fname = false;
        error_sname = false;
        error_email = false;
        error_message = false;
        error_checkbox = false;
        check_fname();
        check_sname();
        check_email();
        check_message();
        check_checkbox();

        if (error_fname === false && error_sname === false && error_email === false && error_message === false && error_checkbox === false) {
            alert("Wysłano formularz!");
            $('form').get(0).reset();
            return true;
        } else {
            alert("Wypełnij wszystkie pola");
            return false;
        }
    });
});



////////////////////////////
///page scroll navigation///
////////////////////////////


document.addEventListener('DOMContentLoaded', function () {

    const mainNav = document.querySelector('.scroll_nav');
    const sections = [];
    const li = mainNav.querySelectorAll('li');
    const links = mainNav.querySelectorAll('a');


    links.forEach(el => {
        const section = document.querySelector(el.getAttribute('href'));
        sections.push(section);
    });


    const autoAddClassOnScroll = () => {
        let active = -1;

        li.forEach(el => {
            el.classList.remove('active');
        });

        sections.forEach((el, i) => {
            if (el.offsetTop <= window.scrollY + window.innerHeight / 2) {
                active = i;
            }
        });

        if (active >= 0) {
            li[active].classList.add('active');
        }
    };

    links.forEach(el => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));

            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    window.addEventListener('scroll', () => {
        autoAddClassOnScroll();
    });

    autoAddClassOnScroll();


});

