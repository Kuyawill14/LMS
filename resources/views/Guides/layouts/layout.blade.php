<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->

    <title>{{ config('app.name', 'ORANGE') }}</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Bootstrap 4 Template For Software Startups">
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media">
    <link rel="shortcut icon" href="favicon.ico">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet">

    <!-- FontAwesome JS-->
    <script defer src="assets/fontawesome/js/all.min.js"></script>

    <!-- Plugins CSS -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.2/styles/atom-one-dark.min.css">
    <link rel="stylesheet" href="assets/plugins/simplelightbox/simple-lightbox.min.css">

    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/theme.css">

</head>

<body class="docs-page">
    <header class="header fixed-top">
        <div class="branding docs-branding">
            <div class="container-fluid position-relative py-2">
                <div class="docs-logo-wrapper">
                    <button id="docs-sidebar-toggler" class="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none"
                        type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div class="site-logo"><a class="navbar-brand" href="index.html">><span
                                class="logo-text">Orange<span class="text-alt"> Guide</span></span></a></div>
                </div>
                <!--//docs-logo-wrapper-->
                <div class="docs-top-utilities d-flex justify-content-end align-items-center">
                    <div class="top-search-box d-none d-lg-flex">
                        <form class="search-form">
                            <input type="text" placeholder="Search the docs..." name="search"
                                class="form-control search-input">
                            <button type="submit" class="btn search-btn" value="Search"><i
                                    class="fas fa-search"></i></button>
                        </form>
                    </div>

                    <ul class="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
                    </ul>
                    <!--//social-list-->
                    <a href="https://isu-orange.com/login" class="btn btn-primary d-none d-lg-flex">Login</a>
                </div>
                <!--//docs-top-utilities-->
            </div>
            <!--//container-->
        </div>
        <!--//branding-->
    </header>
    <!--//header-->


    <div class="docs-wrapper">
        <div id="docs-sidebar" class="docs-sidebar">
            <div class="top-search-box d-lg-none p-3">
                <form class="search-form">
                    <input type="text" placeholder="Search the docs..." name="search" class="form-control search-input">
                    <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <nav id="docs-nav" class="docs-nav navbar">
                <ul class="section-items list-unstyled nav flex-column pb-3">
                    <li class="nav-item section-title"><a class="nav-link scrollto" href="#section-1"><span
                                class="theme-icon-holder me-2"><i class="fas fa-map-signs"></i></span>Introduction</a>
                    </li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#1-login">Login</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#1-create-course">Create Course</a>
                        <ul class="section-items list-unstyled nav flex-column pb-3">
                            <li class="nav-item"><a class="nav-link scrollto" href="#1-create-course-details">Course
                                    Details</a></li>
                            <li class="nav-item"><a class="nav-link scrollto" href="#1-create-course-grading">Grading
                                    Criteria</a></li>
                            <li class="nav-item"><a class="nav-link scrollto" href="#1-create-course-class">Classes</a>
                            </li>
                        </ul>
                    </li>



                    <li class="nav-item section-title"><a class="nav-link scrollto" href="#section-2"><span
                      class="theme-icon-holder me-2"><i class="fas fa-book"></i></span>Course</a>
          </li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Class</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Announcemnt</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Classwork</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Modules</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Student's Progress</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">People (Students)</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Gradebook</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Grading Criteria</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link scrollto" href="#">Settings</a></li>

                </ul>

            </nav>
            <!--//docs-nav-->
        </div>


        <div class="docs-content pb-0">
            <div class="container">
                <article class="docs-article" id="section-1">

                    @yield('content')

                </article>

            </div>


            <footer class="footer">
                <div class="container text-center py-5">
                    <small class="copyright">Copyright &copy; <a href="https://isu-orange.com/" target="_blank">ISUE
                            ORANGE</a></small>
                    <ul class="social-list list-unstyled pt-4 mb-0">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-github fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-slack fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-product-hunt fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-instagram fa-fw"></i></a></li>
                    </ul>
                    <!--//social-list-->
                </div>
            </footer>
        </div>

    </div>

    <!--//docs-wrapper-->


    <!-- Javascript -->
    <script src="assets/plugins/popper.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>


    <!-- Page Specific JS -->
    <script src="assets/plugins/smoothscroll.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js"></script>
    <script src="assets/js/highlight-custom.js"></script>
    <script src="assets/plugins/simplelightbox/simple-lightbox.min.js"></script>
    <script src="assets/plugins/gumshoe/gumshoe.polyfills.min.js"></script>
    <script src="assets/js/docs.js"></script>

</body>

</html>
