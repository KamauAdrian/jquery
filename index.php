<?php

if (isset($_POST['upload'])){
    $name=$_FILES['file']['name'];
//$size=$_FILES['file']['size'];
//$type=$_FILES['file']['type'];
    $tmp_name=$_FILES['file']['tmp_name'];
    if (!empty($name)){
$location = 'uploads';
        if(move_uploaded_file($tmp_name,$location.$name)){
            echo 'uploaded';
        };
    }else{

    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Jquery example</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="css/custom.css" />
</head>
<body>
<a href="#">This is a link</a>
<form action="index.php" method="post" enctype="multipart/form-data">
<input type="file" name="file" /><br /><br />
    <input type="submit" name="upload" value="Upload" />
</form>
<div id="user_post">

</div>

<input type="text" id="user_text" class="comment_border" placeholder="leave a comment" /><br /><br />
<input type="submit" class="btn btn-success" id="btn_post" value="POST" />
<div id="display_text"></div>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/selectors.js"></script>
<script type="text/javascript" src="js/upload.js"></script>
</body>
</html>
<?php
?>