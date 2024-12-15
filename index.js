
//제이쿼리js
console.clear();

//커서
const $cursor = $('.cursor');
const $cursorShadow = $('.cursor-shadow');

$(window).mousemove(function(e){
    console.log("e.clientX : " + e.clientX);
    console.log("e.clientY : " + e.clientY);

    $cursor.css({
        left:e.clientX,
        top:e.clientY
    });

    $cursorShadow.css({
        left:e.clientX,
        top:e.clientY
    });
});


$('.cursor-big').mouseenter(function(){
    $('html').addClass('need-to-cursor-big');
});

$('.cursor-big').mouseleave(function(){
    $('html').removeClass('need-to-cursor-big');
});


//사이드바
function SideBar__init(){
    const $SideBarIndex = $('.side-bar_index');

    $('.side-bar__menu-box-1>ul>li:not(:last-child)').mouseenter(function(){
        const $this = $(this);
        const position = $this.position();

        $SideBarIndex.css('top', position.top+10);
        $SideBarIndex.css('left', position.left+20);
        $SideBarIndex.css('transition', 'left .2s .2s, top .2s 0s');
    });

    $('.side-bar__menu-box-1>ul>li:not(:last-child)').mouseleave(function(){
        $SideBarIndex.css('top', '');
        $SideBarIndex.css('left', '-100px');
        $SideBarIndex.css('transition', 'left .2s 0s, top .2s .2s');
    });
}

SideBar__init();