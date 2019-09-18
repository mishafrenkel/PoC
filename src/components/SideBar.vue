<template>
  <div id="sidebar">
    <div id="nav">
      <router-link to="/">
        <img class="logoImage" src="assets\images\logo.png" />
      </router-link>
      <div class="premiumClass">
        <div class="row">
          <div class="col-sm-3">
            <img src="assets\images\profile.png" />
          </div>
          <div class="col-sm-9" style="padding-left:0% !important">
            <h5 style=" font-weight: bold;">{{ user.name }}</h5>
            <h6>{{ user.company }}</h6>
          </div>
        </div>
      </div>
      <div class="items" v-for="(item, index) in menu" :key="index">
        <img class="glyphicon" :src="`${item.icon}`" />
        <router-link :to="item.link">{{ item.title }}</router-link>
      </div>
      <hr />
      <h4>
        My Predictions
        <a
          href="#pageSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
          style="float:right"
        >+</a>
      </h4>
      <ul
        class="collapse"
        style="list-style-type: circle; padding-left:7%; font-size:120%;"
        id="pageSubmenu"
      >
        <div v-for="(pred, index) in myPrediction" :key="index">
          <li>
            <a href="#">{{ pred }}</a>
          </li>
          <br />
        </div>
      </ul>

      <hr />
      <h4>
        My Datasets
        <a
          href="#datasetSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
          style="float:right"
        >+</a>
      </h4>
      <ul
        class="collapse"
        style="list-style-type: circle; padding-left:0%; font-size:120%;"
        id="datasetSubmenu"
      >
        <div v-for="(pred, index) in myDataset" :key="index">
          <img class="glyphicon" :src="`${pred.icon}`" />
          <a href="#">{{ pred.name }}</a>
          <br />
          <br />
        </div>
      </ul>
    </div>
  </div>
</template>
explore.png
<script>
export default {
  name: 'SideBar',
  data: function() {
    return {
      myPrediction: [
        'MoM user churn for Q3',
        'Merch sales for Jan',
        'State-wise donor prediction'
      ],
      myDataset: [
        { name: 'Twitch data', icon: require('@/assets/images/database.png') },
        {
          name: 'SLOBS user data',
          icon: require('@/assets/images/database.png')
        },
        {
          name: 'External CSV file',
          icon: require('@/assets/images/csvimg.png')
        }
      ],
      user: {
        name: 'Monica Greenleaf',
        company: 'Microsoft Inc.'
      },
      menu: [
        {
          title: 'Explore',
          link: '',
          icon: require('@/assets/images/explore.jpg')
        },
        {
          title: 'Definitions',
          link: '',
          icon: require('@/assets/images/dictionary.png')
        },
        {
          title: 'Settings',
          link: '/settings',
          icon: require('@/assets/images/settings.png')
        },
        {
          title: 'Help',
          link: '',
          icon: require('@/assets/images/help.svg')
        }
      ]
    }
  }
}
</script>

<style>
#app {
  text-align: left;
}
#sidebar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  color: #2c3e50;
  background-color: rgb(230, 230, 230);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
.logoImage {
  height: 60%;
  width: 60%;
  margin-bottom: 10%;
}
.premiumClass {
  width: 100%;
  margin-bottom: 10%;
  background: lightgray;
  padding-right: 3%;
  padding-left: 3%;
}
.items {
  font-size: 15px;
  margin-bottom: 5%;
}
.glyphicon {
  height: 13%;
  width: 13%;
  padding-right: 5%;
}
hr {
  height: 1px;
  background-color: darkgrey;
}
</style>
