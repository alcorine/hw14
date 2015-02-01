maintainSameHeight($('[data-same-height="blog-info"]'));

function maintainSameHeight($list) {
    var height = 0;

    $list.each(function () {
        var $this = $(this);
        if ($this.outerHeight() > height) {
            height = $this.outerHeight();
        }
    });

    $list.css("height", height);
}