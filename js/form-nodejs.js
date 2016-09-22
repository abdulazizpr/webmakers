$(function () {

    $('#form-daftar-nodejs').validator();

    $('#form-daftar-nodejs').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "valform-nodejs.php";

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
                        $('#form-daftar-nodejs').find('.messages').html(alertBox);
                        $('#form-daftar-nodejs')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});