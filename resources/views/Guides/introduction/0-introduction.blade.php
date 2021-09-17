@extends('Guides.layouts.layout')
@section('content')
<header class="docs-header">
   <h1 class="docs-heading">Introduction <span class="docs-time">Last updated: 2021-09-17</span>
   </h1>
   <section class="docs-intro">
       <p>Online Resources App for a New Guild of Education (ORANGE) is a Learning Management
           System that is a
           mobile first approach web-based system.
           This will provide the teacher in conducting the class in terms of planning, evaluating
           and monitoring
           the learning progress of the students from time to time.
       </p>

       <div style="margin:auto;text-align:center">
   
           <iframe
               src="https://player.vimeo.com/video/601244029?h=d67ddce656&muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=0&#t=150s"
               width="1000" height="400" frameborder="0"
               allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
               <h5>Orange Video Hightlights</h5>
             </div>

   </section>
   <!--//docs-intro-->



</header>

<br>
<br>
<hr>
@include('Guides.introduction.1-login') 

@include('Guides.introduction.2-create_course') 







@endsection