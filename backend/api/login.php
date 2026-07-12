<?php
session_start();
include "../config/db.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"] ?? "";
$password = $data["password"] ?? "";
$role = $data["role"] ?? "";

$sql = "SELECT * FROM users WHERE email=? AND role_id=?";
$stmt = mysqli_prepare($conn,$sql);

mysqli_stmt_bind_param($stmt,"si",$email,$role);
mysqli_stmt_execute($stmt);

$result=mysqli_stmt_get_result($stmt);

if(mysqli_num_rows($result)>0){

    $row=mysqli_fetch_assoc($result);

    if($password==$row["password"]){

        $_SESSION["user_id"]=$row["id"];
        $_SESSION["name"]=$row["name"];
        $_SESSION["role"]=$row["role_id"];

        echo json_encode([
            "success"=>true,
            "user"=>[
                "id"=>$row["id"],
                "name"=>$row["name"],
                "role"=>$row["role_id"]
            ]
        ]);

    }else{

        echo json_encode([
            "success"=>false,
            "message"=>"Wrong Password"
        ]);

    }

}else{

    echo json_encode([
        "success"=>false,
        "message"=>"User Not Found"
    ]);

}