
<!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>{{config('app.name')}}</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
        .content img{
            height: 15rem;
            background: #455056;
        }
        .main_container{
            display: flex;
            width: 100%;
        }
        img{
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
        }
        .box{
            width: 250px;        
            border: 5px solid black;
        }    
        .box_small{
            height: 70px;
            margin-top: 8px;
        }
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td >
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <h2 style="color:#FF5400"> {{config('app.name')}} </h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:left;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:10px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:25px;font-family:'Rubik',sans-serif;">A student is requesting to join your course</h1>
                                        <p style="color:#455056; font-size:13px;line-height:24px; margin:0; margin-top:5px">
                                            <span style="font-weight: bold">{{$name}}</span>  want's to join your <span style="font-weight: bold">{{$course_name}} - {{$class_name}}</span>.
                                        </p>
                                        <div class="content" style="color:#455056; font-size:13px;; margin:0;margin-top:0px;">
                                         
                                         <div class="main_container" style="padding-left: 1rem" >
                                             <div class="box_small">
                                                <img class="user_img"
                                                src="{{$profile}}">
                                            </div>
                                             <div style="margin-top: 23px;margin-left:10px">
                                                 <span style="font-size:14px;font-weight:900;">{{$name}}</span><br>
                                                {{--  <span style="font-weight:bold;">Request Date: </span><span>January 11, 2020</span> --}}
                                             </div>
                                         </div>
                                        </div>

                                        <p style="font-size: 35px;margin-top: 0px;margin-bottom: 0px;">  </strong></p >
                                        <a href="{{url($url)}}"
                                            style="text-align:center;background:#FF5400;width: 10rem;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">
                                            View Request
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>{{config('app.name')}}</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>