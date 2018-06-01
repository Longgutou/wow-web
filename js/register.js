$('document').ready(function()
{
    /* validation */
    $("#register-form").validate({
        rules:
        {
            user: {
                required: true,
                minlength: 3
            },
            pass: {
                required: true,
                minlength: 3,
                maxlength: 15
            },
            pass2: {
                required: true,
                equalTo: '#pass'
            },
            email: {
                required: true,
                email: true
            }
        },
        messages:
        {
            user: "用户名只是需要三个字符",
            pass:{
                required: "需要输入密码",
                minlength: "密码最少需要三个字符"
            },
            email: "请输入正确的邮箱",
            pass2:{
                required: "重新输入你的密码",
                equalTo: "密码不匹配,重新输入你的密码"
            }
        },
        submitHandler: submitForm
    });
    /* validation */

    /* form submit */
    function submitForm()
    {
        var data = $("#register-form").serialize();

        $.ajax({

            type : 'POST',
            url  : 'functions/register.php',
            data : data,
            beforeSend: function()
            {
                $("#error").fadeOut();
                $("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; 创建中 ...');
            },
            success :  function(data)
            {
                if(data==1){

                    $("#error").fadeIn(1000, function(){


                        $("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; 抱歉,用户名已存在</div>');

                        $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; 创建账号');

                    });

                }
                else if(data=="registered")
                {
                    $(".form-signin").fadeOut(500);
                    $("#success").html("<div class=\'alert alert-success alert-dismissable fade in\'>已经成功创建账号 !<br>修改 realmlist 47.93.198.61</div>");
                    $("#btn-submit").html('注册中');
                }
                else{

                    $("#error").fadeIn(1000, function(){

                        $("#error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+data+' !</div>');

                        $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; 创建账号');

                    });

                }
            }
        });
        return false;
    }
    /* form submit */

});
