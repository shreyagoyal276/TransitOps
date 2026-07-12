<?php

include "includes/auth.php";
include "config/db.php";

?>

<!DOCTYPE html>

<html>

<head>

<title>Dashboard</title>

</head>

<body>

<h1>

Welcome

<?php

echo $_SESSION['name'];

?>

</h1>

<hr>

<h3>Modules</h3>

<ul>

<li>
<a href="vehicles/list.php">
Vehicles
</a>
</li>

<li>
<a href="drivers/list.php">
Drivers
</a>
</li>

<li>
<a href="trips/list.php">
Trips
</a>
</li>

<li>
<a href="maintenance/list.php">
Maintenance
</a>
</li>

<li>
<a href="fuel/list.php">
Fuel
</a>
</li>

<li>
<a href="expenses/list.php">
Expenses
</a>
</li>

<li>
<a href="logout.php">
Logout
</a>
</li>

</ul>

</body>

</html>