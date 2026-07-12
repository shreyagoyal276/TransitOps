```php
<?php
session_start();
include "config/db.php";

$error="";


if(isset($_POST['login']))
{
    $email=trim($_POST['email']);
    $password=trim($_POST['password']);
    $role=$_POST['role'];



    // Validation

    if(empty($email) || empty($password))
    {
        $error="All fields are required";
    }

    elseif(!filter_var($email,FILTER_VALIDATE_EMAIL))
    {
        $error="Please enter a valid email";
    }


    else
    {


        $sql="SELECT * FROM users 
              WHERE email='$email' 
              AND role_id='$role'";


        $result=mysqli_query($conn,$sql);



        if(mysqli_num_rows($result)>0)
        {


            $row=mysqli_fetch_assoc($result);



            // Check account lock

            if($row['lock_time'] != NULL)
            {

                if(strtotime($row['lock_time']) > time())
                {

                    $remaining=ceil(
                    (strtotime($row['lock_time'])-time())/60
                    );


                    $error="Account locked. Try after ".$remaining." minutes";

                }

                else
                {

                    mysqli_query($conn,
                    "UPDATE users 
                    SET failed_attempts=0,
                    lock_time=NULL
                    WHERE id=".$row['id']);

                }

            }



            if($error=="")
            {


                // Password check


                if($password==$row['password'])
                {


                    // Reset attempts


                    mysqli_query($conn,
                    "UPDATE users 
                    SET failed_attempts=0,
                    lock_time=NULL
                    WHERE id=".$row['id']);



                    $_SESSION['user_id']=$row['id'];
                    $_SESSION['name']=$row['name'];
                    $_SESSION['role']=$row['role_id'];



                    header("Location: dashboard.php");
                    exit;


                }

                else
                {


                    $attempt=$row['failed_attempts']+1;



                    if($attempt>=5)
                    {


                        $lock=date(
                        "Y-m-d H:i:s",
                        strtotime("+10 minutes")
                        );


                        mysqli_query($conn,
                        "UPDATE users SET 
                        failed_attempts=$attempt,
                        lock_time='$lock'
                        WHERE id=".$row['id']);


                        $error="5 wrong attempts. Account locked for 10 minutes";


                    }

                    else
                    {


                        mysqli_query($conn,
                        "UPDATE users SET 
                        failed_attempts=$attempt
                        WHERE id=".$row['id']);



                        $left=5-$attempt;

                        $error="Wrong password. $left attempts left";

                    }

                }


            }


        }

        else
        {

            $error="User not found";

        }


    }

}

?>



<!DOCTYPE html>
<html lang="en">

<head>

<title>TransitOps Login</title>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">


<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


<style>

body{
    min-height:100vh;
    background:linear-gradient(135deg,#0f172a,#2563eb);
    font-family:'Segoe UI',sans-serif;
}


.login-container{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
}


.login-card{

    width:900px;
    background:white;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 20px 40px rgba(0,0,0,.25);

}



.left-section{

    background:linear-gradient(135deg,#2563eb,#1e40af);
    color:white;
    padding:50px;

}


.left-section h1{

    font-size:42px;
    font-weight:700;

}



.feature{

    margin-top:35px;

}



.feature p{

    margin-bottom:18px;

}


.feature i{

    margin-right:10px;

}




.right-section{

    padding:50px;

}



.form-control,
.form-select{

    height:50px;
    border-radius:10px;

}



.login-btn{

    height:50px;
    border-radius:10px;
    background:#2563eb;
    border:none;
    font-weight:600;

}



.login-btn:hover{

    background:#1d4ed8;

}



.error{

    color:red;
    text-align:center;
    margin-top:15px;

}



@media(max-width:768px){

.left-section{
display:none;
}

.login-card{
width:90%;
}

}


</style>


</head>


<body>


<div class="container login-container">


<div class="row login-card">



<div class="col-md-6 left-section">


<h1>
<i class="bi bi-truck"></i>
TransitOps
</h1>


<p>
Smart Transport Operations Platform
</p>


<div class="feature">


<p>
<i class="bi bi-check-circle-fill"></i>
Vehicle Management
</p>


<p>
<i class="bi bi-check-circle-fill"></i>
Driver Tracking
</p>


<p>
<i class="bi bi-check-circle-fill"></i>
Trip Management
</p>


<p>
<i class="bi bi-check-circle-fill"></i>
Expense Monitoring
</p>


</div>


</div>




<div class="col-md-6 right-section">


<h2>
Welcome Back!
</h2>


<p class="text-muted">
Login to manage your operations
</p>




<form method="POST">


<div class="mb-3">

<label>Email</label>

<input 
type="email"
name="email"
class="form-control"
placeholder="Enter email">


</div>




<div class="mb-3">

<label>Password</label>

<input 
type="password"
name="password"
class="form-control"
placeholder="Enter password">


</div>




<div class="mb-4">

<label>Login As</label>


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
name="login"
class="btn btn-primary w-100 login-btn">

<i class="bi bi-box-arrow-in-right"></i>
Login

</button>


</form>



<?php

if($error!="")
{
echo "<p class='error'>$error</p>";
}

?>


</div>


</div>


</div>


</body>

</html>
```
