<?php

    header( 'Access-Control-Allow-Origin: *' );

    $host = 'localhost';
    $port = '3306';
    $db = 'ionic2';
    $charset = 'utf8';
    $user = 'jesse';
    $pass = '******';
    $opt = NULL;
    $conf = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $db . ';charset=' . $charset;

    $conn = new PDO( $conf, $user, $pass, $opt );

    $key = $_POST['key'];
    //$key = 'create';

    switch( $key )
    {
    case "create":
        $category = $_POST['category'];
        //$category = '電腦';
        $name = $_POST['name'];
        //$name = 'test';
        $description = $_POST['description'];
        //$description = 'test test test';

        $sql = "insert into product( category, name, description ) values( :category, :name, :description )";

        $result = $conn->prepare( $sql );
        $result->bindParam( ':category', $category, PDO::PARAM_STR );
        $result->bindParam( ':name', $name, PDO::PARAM_STR );
        $result->bindParam( ':description', $description, PDO::PARAM_STR );
        $result->execute();

        $conn = null;
        break;

    case "delete":
        $id = $_POST['id'];

        $sql = "delete from product where id = :id";

        $result = $conn->prepare( $sql );
        $result->bindParm( ':id', $id, PDO::PARAM_INT );
        $result->execute();

        $conn = null;
        break;

    default:
    }

?>
