<!DOCTYPE html>
<html lang="pl">
<head>

	<meta charset="utf-8">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="">
	
	<meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1">
	
    <link rel="stylesheet" href="{{asset('css/style.css')}}" type="text/css" />
    <link rel="stylesheet" href="{{asset('css/css/fontello.css')}}" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=latin-ext" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="{{asset('js/profile/jquery.scrollTo.min.js')}}"></script>
	<!--[if lt IE 9]>
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
	<![endif]-->
	
</head>

<body>

    <header>

        <div id="logBar">
            <span>
            <a href="#">Zaloguj się</a>
            /
            <a href="#">Zarejerstruj się</a>
            </span>
        </div>

        

        <nav>
            <ul class="menu">
              <li><a href="#">Nawigacja1</a></li>/
              <li><a href="#">Nawigacja2</a></li>/
              <li><a href="#">Nawigacja3</a></li>/
              <li><a href="#">Nawigacja4</a></li>/
              <li><a href="#">Nawigacja5</a></li>
            </ul>
        </nav>
    </header>


    <main>
        <article>
            <div id="content">
                
                <div id="search-section">
                    <label>Wpisz frazę <input type="text" id="inputValue"></label>
                    <button id="search-button">Wyszukaj</button>
                    <div id="search-result"></div>
                </div>

                <div id="ads">
                    <aside>
                    </aside>
                </div>
                <div style="clear:both;"></div>
            
            </div>
           
        </article>
    </main>
    
    <script type="text/javascript" src="{{asset('js/profile/search.js')}}"></script>
</body>
</html>