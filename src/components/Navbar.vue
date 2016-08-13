<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Application</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a v-link='"/"'><i class="fa fa-home"></i> Home</a></li>
          <li><a v-link='"/fruits"'>Fruits</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="loggedIn" class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-user"></i> 
              {{ displayName }} 
              <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li><a v-link='"/account"'>Account Setting</a></li>
            </ul>
          </li>
          <li>
            <a v-if="loggedIn" v-link='"/logout"'>Logout</a>
            <a v-if="!loggedIn" v-link='"/login"'>Login</a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  props: ['loggedIn', 'displayName'],
};
</script>