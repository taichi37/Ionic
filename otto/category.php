<?php

    header( 'Access-Control-Allow-Origin: *' );

    $host = 'localhost';
    $port = '3306';
    $db = 'ionic2';
    $charset = 'utf8';
    $user = 'jesse';
    $pass = 'y60m8d6';
    $opt = NULL;

    $conf = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $db . ';charset=' . $charset;

    $conn = new PDO( $conf, $user, $pass, $opt );

    $sql = "select cid, tag from category";

    $result = $conn->query( $sql );

    while( $row = $result->fetch( PDO::FETCH_OBJ ) ){
        $data[] = $row;
    }

    echo json_encode( $data );

    $conn = null;

?>
