//ҳ��˵��������˵������ߣ�����
var obj = null;

function checkHover() {
    if (obj) {
        obj.find('ul').fadeOut('fast');
    }
}

$(document).ready(function () {
    $('#Nav > li').hover(function () {
        if (obj) {
            obj.find('ul').fadeOut('fast');
            obj = null;
        } //if

        $(this).find('ul').fadeIn('fast');
    }, function () {
        obj = $(this);
        setTimeout(
			"checkHover()",
			400);
    });
});