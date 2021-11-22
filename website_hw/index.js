
$(window).scroll(function() {
  parallax();
})

function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

                 function play2(){
                        var audio = document.getElementById("audio2");
                        audio.play();
                                  }

function parallax() {
  var wScroll= $(window).scrollTop(); //storing how far from top to

  $('.slide1').css('background-position', 'center ' + (wScroll*0.75) + 'px')
  $('#logo').css('transform', )

}

function rando() {
  var randyrandom = randint(0, 10000)
  setTimeout(function(){$( ".glitch-box" ).addClass( "glitch2" );setTimeout(function(){$( ".glitch-box" ).removeClass( "glitch2" )}, 200);rando()}, randyrandom)
}
function typer(input, classy) {
  var i = 0;
  function typing() {
    if (i < input.length) {
    setTimeout(function(){$(classy).append(input.charAt(i)); i++; typing()}, randint(20, 150))}
  }
  typing()
}


$('.glitch').hover(function() {
  $(this).addClass('glitch');
}, function() {
  $(this).removeClass('glitch');
});

$(document).ready(function(){
rando()

typer("HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.", ".ellison")
})
//
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$(function() {

    var glitchbox = $(".h2");
    var glitchboxTop = glitchbox.offset().top;
    var windowHeight = $(window).height();

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if ( scroll >= ( glitchboxTop - windowHeight )) {

            $(".h2").addClass("vhs-flicker");

        }
    });
});
