window.alert('今日も頑張ろう！')

$(function() {
    headerAdjust('.header');
    $(window).on('scroll', function() {
        headerAdjust('.header');
    });
});
/*なぞ*/
// ヘッダーのサイズ調整
var adjustPoint = 20;
var adjustClass = 'fix';
function headerAdjust(tgt) {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > adjustPoint) {
        $(tgt).addClass(adjustClass);
    } else {
        $(tgt).removeClass(adjustClass);
    }
}
/*なぞ*/