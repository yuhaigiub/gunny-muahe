$(document).on("gunny_frame1 rendered", {}, function (event, uniqueId) {
    console.log('frame1');

    $('.qua-sinh-nhat').on('click', function () {
        $("#popup-confirm").addClass('active');
    })
})