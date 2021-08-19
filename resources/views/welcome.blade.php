<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>CCSICT-LMS</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
       <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
       <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
       <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
        <link href="https://cdn.jsdelivr.net/npm/@morioh/v-quill-editor/dist/editor.css" rel="stylesheet">
        <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
    </head>
    <body class="antialiased">
      
        <div id="app">
            <main-component></main-component>
          </div>

        <script src="{{mix('js/manifest.js')}}"></script>
        <script src="{{mix('js/vendor0.js')}}"></script>
        <script src="{{mix('js/vendor1.js')}}"></script>
        <script src="{{mix('js/vendor2.js')}}"></script>
        <script src="{{mix('js/vendor3.js')}}"></script>
        <script src="{{mix('js/vendor4.js')}}"></script>
        <script src="{{mix('js/vendor5.js')}}"></script>
        <script src="{{mix('js/vendor6.js')}}"></script>
        <script src="{{mix('js/app.js')}}"> </script>
        <script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@morioh/v-quill-editor/dist/editor.min.js" type="text/javascript"></script>
{{--         <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script> --}}
    </body>
</html>
