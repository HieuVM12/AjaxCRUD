// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

showPopup = (url, title) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            $('#form-modal .modal-body').html(res);
            $('#form-modal .modal-title').html(title);
            $('#form-modal').modal('show');

        }
    })
}

hidePopup = (url) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            $('#view-all').html(res.html);
            $('#form-modal .modal-body').html('');
            $('#form-modal .modal-title').html('');
            $('#form-modal').modal('hide');
        }
    })
}


jQueryAjaxPost = (form) => {
    try {
        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.isValid) {
                    $('#view-all').html(res.html);
                    $('#form-modal .modal-body').html('');
                    $('#form-modal .modal-title').html('');
                    $('#form-modal').modal('hide');
                    $.alert('Thành công', {
                        autoClose: true,
                        closeTime: 3000,
                        type: 'success',
                        position: ['top-right'],
                        title: 'Thông báo',
                        isOnly: true,
                        minTop: 10,
                        onShow: function () {
                        },
                        // onClose callback
                        onClose: function () {
                        },
                    });
                }
                else
                    $('#form-modal .modal-body').html(res.html);
            },
            error: function (err) {
                console.log(err);
            }
        })

    } catch (e) {
        console.log(e);
    }
    return false;
}

jQueryAjaxDelete = (form) => {
    try {
        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                $('#view-all').html(res.html);
                $('#form-modal .modal-body').html('');
                $('#form-modal .modal-title').html('');
                $('#form-modal').modal('hide');
                $.alert('Đã xóa thành công', {
                    autoClose: true,
                    closeTime: 3000,
                    type: 'danger',
                    position: ['top-right'],
                    title: 'Thông báo',
                    isOnly: true,
                    minTop: 10,
                    onShow: function () {
                    },
                    // onClose callback
                    onClose: function () {
                    },
                });
            },
            error: function (err) {
                console.log(err);
            }
        })

    } catch (e) {
        console.log(e);
    }
    return false;
}

