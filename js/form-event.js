$(function () {

    $('#form-daftar-event').validator();

    $('#form-daftar-event').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "valform-event.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#form-daftar-event').find('.messages').html(alertBox);
                        $('#form-daftar-event')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});