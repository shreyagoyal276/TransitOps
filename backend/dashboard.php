<?php

include "includes/auth.php";
include "config/db.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>

<title>TransitOps Dashboard</title>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<!-- Bootstrap -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">


<!-- Icons -->

<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


<style>


body{

    background:#f1f5f9;
    font-family:'Segoe UI',sans-serif;

}



/* Sidebar */


.sidebar{

    height:100vh;
    background:linear-gradient(180deg,#0f172a,#2563eb);
    color:white;
    position:fixed;
    width:260px;
    padding:25px;

}


.logo{

    font-size:28px;
    font-weight:700;
    margin-bottom:40px;

}


.sidebar a{

    text-decoration:none;
    color:white;
    display:block;
    padding:12px;
    border-radius:10px;
    margin-bottom:10px;

}


.sidebar a:hover{

    background:rgba(255,255,255,0.15);

}


.sidebar i{

    margin-right:12px;

}




/* Main */


.main{

    margin-left:260px;
    padding:30px;

}



/* Topbar */


.topbar{

    background:white;
    padding:20px;
    border-radius:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 5px 15px rgba(0,0,0,.08);

}


.user{

    font-weight:600;
    color:#334155;

}




/* Welcome */


.welcome{

    margin-top:30px;
    background:linear-gradient(135deg,#2563eb,#1e40af);
    color:white;
    padding:35px;
    border-radius:20px;

}


.welcome h1{

    font-weight:700;

}




/* Cards */


.module-card{

    background:white;
    border-radius:18px;
    padding:25px;
    height:170px;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
    transition:.3s;

}


.module-card:hover{

    transform:translateY(-8px);

}



.module-card i{

    font-size:35px;
    color:#2563eb;

}



.module-card a{

    text-decoration:none;
    color:#1e293b;

}



.logout{

    background:#ef4444;

}


.logout:hover{

    background:#dc2626 !important;

}



@media(max-width:768px){


.sidebar{

    width:100%;
    height:auto;
    position:relative;

}


.main{

    margin-left:0;

}


}


</style>


</head>



<body>



<!-- Sidebar -->


<div class="sidebar">


<div class="logo">

<i class="bi bi-truck"></i>
TransitOps

</div>



<a href="dashboard.php">

<i class="bi bi-speedometer2"></i>
Dashboard

</a>



<a href="vehicles/list.php">

<i class="bi bi-truck-front"></i>
Vehicles

</a>



<a href="drivers/list.php">

<i class="bi bi-person-badge"></i>
Drivers

</a>



<a href="trips/list.php">

<i class="bi bi-map"></i>
Trips

</a>



<a href="maintenance/list.php">

<i class="bi bi-tools"></i>
Maintenance

</a>



<a href="fuel/list.php">

<i class="bi bi-fuel-pump"></i>
Fuel Management

</a>



<a href="expenses/list.php">

<i class="bi bi-cash-stack"></i>
Expenses

</a>



<a class="logout mt-4" href="logout.php">

<i class="bi bi-box-arrow-right"></i>
Logout

</a>



</div>






<!-- Main Content -->


<div class="main">



<div class="topbar">


<h4 class="mb-0">
Dashboard
</h4>


<div class="user">

<i class="bi bi-person-circle"></i>

<?php echo $_SESSION['name']; ?>

</div>


</div>





<div class="welcome">


<h1>
Welcome,
<?php echo $_SESSION['name']; ?>
</h1>


<p>
Manage your complete transport operations from one place.
</p>


</div>






<h3 class="mt-5 mb-4">
Modules
</h3>





<div class="row g-4">



<div class="col-md-4">

<div class="module-card">

<i class="bi bi-truck-front"></i>

<h5 class="mt-3">

<a href="vehicles/list.php">
Vehicles
</a>

</h5>

<p class="text-muted">
Manage fleet vehicles
</p>

</div>

</div>






<div class="col-md-4">

<div class="module-card">

<i class="bi bi-person-badge"></i>

<h5 class="mt-3">

<a href="drivers/list.php">
Drivers
</a>

</h5>

<p class="text-muted">
Manage driver details
</p>

</div>

</div>







<div class="col-md-4">

<div class="module-card">

<i class="bi bi-map"></i>

<h5 class="mt-3">

<a href="trips/list.php">
Trips
</a>

</h5>

<p class="text-muted">
Track ongoing trips
</p>

</div>

</div>








<div class="col-md-4">

<div class="module-card">

<i class="bi bi-tools"></i>

<h5 class="mt-3">

<a href="maintenance/list.php">
Maintenance
</a>

</h5>

<p class="text-muted">
Vehicle maintenance records
</p>

</div>

</div>








<div class="col-md-4">

<div class="module-card">

<i class="bi bi-fuel-pump"></i>

<h5 class="mt-3">

<a href="fuel/list.php">
Fuel
</a>

</h5>

<p class="text-muted">
Fuel consumption tracking
</p>

</div>

</div>








<div class="col-md-4">

<div class="module-card">

<i class="bi bi-cash-stack"></i>

<h5 class="mt-3">

<a href="expenses/list.php">
Expenses
</a>

</h5>

<p class="text-muted">
Manage operational expenses
</p>

</div>

</div>




</div>


</div>



</body>

</html>

