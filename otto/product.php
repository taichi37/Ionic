<?php

    header( 'Access-Control-Allow-Origin: *' );

    $tag = $_GET['tag'];

    $host = 'localhost';
    $port = '3306';
    $db =  'ionic2';
    $charset = 'utf8';
    $user = 'jesse';
    $pass = 'y60m8d6';
    $opt = NULL;

    $conf = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $db . ';charset=' . $charset;

    $conn = new PDO( $conf, $user, $pass, $opt );

    $sql = "select id, category, name, description from product where category = :tag";

    //$result = $conn->query( $sql );
    $result = $conn->prepare( $sql );
    $result->bindParam(':tag', $tag, PDO::PARAM_STR);
    $result->execute();

    while( $row = $result->fetch( PDO::FETCH_OBJ ) ) {
        $data[] = $row;
    }

    echo json_encode( $data );

    $conn = null;

?>
