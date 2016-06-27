<!DOCTYPE html>
<html>

<head>
	<title>RGB</title>
	<style type="text/css">
		#gameCanvas{
			background-color: black;		
			padding-left: 0;
   		padding-right: 0;
			margin-left: auto;
			margin-right: auto;
			display: block;
			border: solid 3px white;
		}
		body{
			background-color: black;		
		}
        *{
            font-family: 'Press Start 2P', cursive;
        }
        .fontCred{
            width: 8%;
            position: fixed;
            left: 0px;
            top: 40%;
            font-size: 10px;
        }
        #score{
            color: white;
            font-size: 20px;
            position: fixed;
            left: 48%;
            top: 10%;
        }
	</style>
    <link href='https://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
</head>

<body>
	<canvas id="gameCanvas"></canvas>
    <p class="fontCred">"Press Start 2P" by Cody "CodeMan38" Boisclair.</p>
    <p id="score"></p>
	<script type="text/javascript" src="game.js"></script>
</body>

</html>
