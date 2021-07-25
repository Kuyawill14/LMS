<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Invite</title>

        <!-- Fonts -->
        <style>
            .container{
                text-align: center;
                display: block;
            }
            .btn_container{
                text-align: center;
                display: block;
            }
            .btn{
                padding: 0.5rem;
                outline: none;
                border: none;
                min-width: 6rem;
                max-width: 50vw;
                font-weight: bolder;
                border-radius: 2.7rem / 100%;
                background-color: #EF6C00;
            }
            .name, .class_name, .class_code{
                font-weight: bold;
                font-size: 18px;
            }
        </style>
       
    </head>
    <body class="antialiased">
        <div id="app">
            <div class="container"></div>
                <h3>Greetings!</h3>

                <div>You have been adden by <span class="name">{{$name}}</span> to be a student in <span class="class_name">{{$course_name}} {{$class_name}}</span>  using the Class code: <span class="class_code">{{$class_code}}</span></div>
                <small>(A learning management system by CCSICT college)</small>
              {{--   <div class="btn_container">
                    <button type="button" class="btn">Accept</button>
                </div> --}}
                
            </div>
        </div>
       


            
        
                {{-- <container class="fill-height pa-2 grey lighten-4" fluid>
                    <v-row justify="center" align-content="center">
                        <v-col justify="center"  cols="12" md="6" class="text-center">
                            <v-row justify="center" align-content="center">
                                <v-col cols="12" class="text-center primary"   style="height:10vh" >
                                     <h1 class="white--text"> CCSICT-LMS</h1>
                                </v-col>
                                <v-col justify="center" cols="12" class="text-center"    >
                                    <h6 class="white--text">Greetings!</h6>
                                    <div>You have been adden by Wilson Magaoay to be a student in BSIT 3-1 a CCSICT-LMS</div>
                                    <small>(A learning management system by CCSICT college)</small>
                                </v-col>
                                 <v-col justify="center" cols="12" class="text-center"  >
                                   <v-btn color="primary"  rounded>
                                       Accept
                                   </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
            
                        
                    </v-row>
                </container> 
        --}}
  

       
        
        <script src="{{mix('js/app.js')}}"> </script>
        
    </body>
</html>
