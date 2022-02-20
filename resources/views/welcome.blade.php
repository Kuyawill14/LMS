<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4SESLD7R6L"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4SESLD7R6L');
    </script>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <title>{{config('app.name')}}</title>
            <link rel="icon" type="image/png" href="{{URL::asset('/images/orange_title.png')}}">
            <!-- Fonts -->
            <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
          <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
            <link href="https://cdn.jsdelivr.net/npm/@morioh/v-quill-editor/dist/editor.css" rel="stylesheet">
            <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
      
            <style>
              /* #fb-root > div.fb_dialog.fb_dialog_advanced > div > iframe {
                height: 60px !important;
                width: 60px  !important;
              }

              #fb-customer-chat > span > iframe {
                min-height: 300px !important;
                width: 399px !important;
              } */

              html {
                scroll-behavior: smooth !important;
              }
                            
            </style>
          </head>
        <body class="antialiased">
          <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>
   
          
            <div id="app">
                <main-component></main-component>
              </div>
              
            <script src="{{mix('js/manifest.js')}}"></script>
            <script src="{{mix('js/vendor~utils-0.js')}}"></script>
            <script src="{{mix('js/vendor~utils-1.js')}}"></script>
          {{--   <script src="{{mix('js/vendor~utils-2.js')}}"></script> --}}
            <script src="{{mix('js/vendor~utils-3.js')}}"></script>
            <script src="{{mix('js/vendor~utils-4.js')}}"></script>
            <script src="{{mix('js/vendor~utils-5.js')}}"></script>
            <script src="{{mix('js/vendor~utils-6.js')}}"></script>
            <script src="{{mix('js/app.js')}}"> </script>
            <script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>
     
            <script src="https://cdn.jsdelivr.net/npm/@morioh/v-quill-editor/dist/editor.min.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/datejs/1.0/date.min.js" integrity="sha512-/n/dTQBO8lHzqqgAQvy0ukBQ0qLmGzxKhn8xKrz4cn7XJkZzy+fAtzjnOQd5w55h4k1kUC+8oIe6WmrGUYwODA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js"></script>

           <script>
            if (window.location.hostname.indexOf("www") == 0) {
    window.location = window.location.href.replace("www.","");
}

setInterval(() => {
  console.clear();
}, 10000);
            </script> 
        </body>
</html>
