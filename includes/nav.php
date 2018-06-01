<?php
  if(isset($_GET['p'])) {
    $page = $_GET['p'];
  }else{
    $page = "?p=register";
  }
?>
<nav class="navbar navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="?p=register"><?php echo $servertitle; ?></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <?php
        if($page == "register") {
          echo "<li class='active'><a href='?p=register'>注册</a></li>";
        }else{
          echo "<li><a href='?p=register'>注册</a></li>";
        }

        if($page == "status") {
          echo "<li class='active'><a href='?p=status'>服务器状态</a></li>";
        }else{
          echo "<li><a href='?p=status'>服务器状态</a></li>";
        }
//
//        if($page == "connect") {
//          echo "<li class='active'><a href='?p=connect'>How to Connect</a></li>";
//        }else{
//          echo "<li><a href='?p=connect'>How to Connect</a></li>";
//        }

//        if($page == "downloads") {
//          echo "<li class='active'><a href='?p=downloads'>Downloads</a></li>";
//        }else{
//          echo "<li><a href='?p=downloads'>Downloads</a></li>";
//        }
        ?>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="?p=info"><span class="glyphicon glyphicon-search"></span> 修复历史</a></li>
      </ul>
    </div>
  </div>
</nav>
