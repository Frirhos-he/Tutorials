<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="images/favicon.png" />
        <link rel="stylesheet" href="css/style.css">
        <title>Peradotto SRL</title>
    </head>
        <body>
            <?php include_once './php/header.php'?>

            <div class= "wrapper">

                    <div class = "login">
                            <h2>Login</h2>
                                 <form method="post" action="./php/dashboard.php">
                                    <input type="text" name="email" placeholder="Enter your email...">
                                    <input type="password" name="password" placeholder="Enter your password..."><br>
                                    <button type="submit" class="button">Accedi</button>
                                </form>
                        

                    </div>
            </div>



            <!--   <?php include_once './php/footer.php'?>   -->   
        <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
                integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
        </body>
</html>