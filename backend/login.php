<?php
session_start();
include "config/db.php";

$error="";

if(isset($_POST['login']))
{
    $email=$_POST['email'];
    $password=$_POST['password'];
    $role=$_POST['role'];

    $sql="SELECT * FROM users WHERE email='$email' AND role_id='$role'";
    $result=mysqli_query($conn,$sql);

    if(mysqli_num_rows($result)>0)
    {
        $row=mysqli_fetch_assoc($result);

        if($password==$row['password'])
        {
            $_SESSION['user_id']=$row['id'];
            $_SESSION['name']=$row['name'];
            $_SESSION['role']=$row['role_id'];

            header("Location: dashboard.php");
            exit;
        }
        else
        {
            $error="Wrong Password";
        }
    }
    else
    {
        $error="User Not Found";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<title>TransitOps Login</title>
<link rel="stylesheet" href="assets/style.css">
</head>

<body>

<div class="login-box">

<h2>TransitOps</h2>
<p>Smart Transport Operations Platform</p>

<form method="POST">

<input type="email" name="email" placeholder="Email" required>

<input type="password" name="password" placeholder="Password" required>

<select name="role">

<option value="1">Fleet Manager</option>
<option value="2">Dispatcher</option>
<option value="3">Safety Officer</option>
<option value="4">Financial Analyst</option>

</select>

<button type="submit" name="login">
Login
</button>

</form>

<p style="color:red;">
<?php echo $error; ?>
</p>

</div>

</body>
</html>