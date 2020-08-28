<?php
    header('content-type:text/html;charset=utf8');
    $servername = "localhost";
    $username = "root";
    $password = "root";

    // 创建链接
    $conn = mysqli_connect($servername,$username,$password);
    if(mysqli_connect_error()){
        die('连接失败');
    }

?>