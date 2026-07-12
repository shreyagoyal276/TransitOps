```php
<?php

include "config/db.php";

$error="";
$success="";


if(isset($_POST['register']))
{

    $name=trim($_POST['name']);
    $email=trim($_POST['email']);
    $password=trim($_POST['password']);
    $confirm_password=trim($_POST['confirm_password']);
    $role=$_POST['role'];



    // Validation

    if(empty($name) || empty($email) || empty($password) || empty($confirm_password))
    {
        $error="All fields are required";
    }


    elseif(!filter_var($email,FILTER_VALIDATE_EMAIL))
    {
        $error="Enter valid email address";
    }


    elseif($password != $confirm_password)
    {
        $error="Password does not match";
    }


    else
    {


        // Check existing user


        $check="SELECT * FROM users WHERE email='$email'";

        $result=mysqli_query($conn,$check);



        if(mysqli_num_rows($result)>0)
        {

            $error="Email already registered";

        }


        else
        {


            $sql="INSERT INTO users
            (name,email,password,role_id)
            VALUES
            ('$name','$email','$password','$role')";


            if(mysqli_query($conn,$sql))
            {

                $success="Registration successful. Please login";

            }
            else
            {

                $error="Registration failed";

            }


        }


    }


}


?>



<!DOCTYPE html>
<html lang="en">

<head>

<title>TransitOps Register</title>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width,initial-scale=1.0">


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">


<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


<style>


body{

min-height:100vh;
background:linear-gradient(135deg,#0f172a,#2563eb);
font-family:'Segoe UI',sans-serif;

}



.register-box{

min-height:100vh;
display:flex;
justify-content:center;
align-items:center;

}



.card-box{

width:450px;
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 20px 40px rgba(0,0,0,.25);

}



.logo{

text-align:center;
font-size:32px;
font-weight:700;
color:#2563eb;

}



.form-control,
.form-select{

height:50px;
border-radius:10px;

}



.btn-register{

height:50px;
border-radius:10px;
background:#2563eb;
border:none;
font-weight:600;

}



.btn-register:hover{

background:#1d4ed8;

}



.error{

color:red;
text-align:center;

}


.success{

color:green;
text-align:center;

}



</style>


</head>


<body>


<div class="container register-box">


<div class="card-box">


<div class="logo">

<i class="bi bi-truck"></i>
TransitOps

</div>


<p class="text-center text-muted mb-4">

Create your account

</p>



<form method="POST">



<div class="mb-3">


<label>Name</label>


<input 
type="text"
name="name"
class="form-control"
placeholder="Enter name"
required>


</div>




<div class="mb-3">


<label>Email</label>


<input 
type="email"
name="email"
class="form-control"
placeholder="Enter email"
required>


</div>





<div class="mb-3">


<label>Password</label>


<input 
type="password"
name="password"
class="form-control"
placeholder="Enter password"
required>


</div>





<div class="mb-3">


<label>Confirm Password</label>


<input 
type="password"
name="confirm_password"
class="form-control"
placeholder="Confirm password"
required>


</div>





<div class="mb-4">


<label>Select Role</label>


<select name="role" class="form-select">


<option value="1">
Fleet Manager
</option>


<option value="2">
Dispatcher
</option>


<option value="3">
Safety Officer
</option>


<option value="4">
Financial Analyst
</option>


</select>


</div>





<button 
type="submit"
name="register"
class="btn btn-primary w-100 btn-register">

<i class="bi bi-person-plus"></i>
Register

</button>



</form>




<?php

if($error!="")
{
echo "<p class='error mt-3'>$error</p>";
}


if($success!="")
{
echo "<p class='success mt-3'>$success</p>";
}

?>



<p class="text-center mt-4">

Already have account?

<a href="login.php">
Login
</a>

</p>


</div>


</div>


</body>

</html>
```
