<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->

    <title>{{ config('app.name', 'ORANGE') }}</title>

    <!-- Scripts -->
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{asset('css/dashboard.css')}}">

    <!-- Styles -->

</head>
<body>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>


    <div class="container-fluid">
        <div class="row">
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="sidebar-sticky pt-3">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">
                        <span data-feather="home"></span>
                        Dashboard <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file"></span>
                        Orders
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="shopping-cart"></span>
                        Products
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="users"></span>
                        Customers
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Reports
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Integrations
                      </a>
                    </li>
                  </ul>
          
                  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                      <span data-feather="plus-circle"></span>
                    </a>
                  </h6>
                  <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Current month
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Last quarter
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Social engagement
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Year-end sale
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    @yield('content')
              </main>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>
