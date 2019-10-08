$(function () {
    $.ajax({
        url: '/manifest.json',
        dataType: 'json',
        success: function (data) {
            $('#version').text('Version: ' + data.version);
        }
    });
});