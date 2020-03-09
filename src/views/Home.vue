<template>
  <v-app>
      <v-row>
        <v-navigation-drawer
          permanent
          
        >
          <v-text-field
            outlined
            rounded
            hide-details
            single-line
            clearable
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="pa-2"
          />
          <v-list
            three-line
          >
            <!--        <v-subheader>today</v-subheader>-->
            <v-list-item @click="iconClick1">
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Travis Howard</v-list-item-title>
              </v-list-item-content>
              <!--            <v-list-item-content>-->
              <!--              <v-list-item-title>Travis Howard</v-list-item-title>-->
              <!--              <v-list-item-subtitle><span class='text&#45;&#45;primary'>Ali Connors</span> &mdash; I'll be in your-->
              <!--                neighborhood-->
              <!--                doing errands this weekend. Do you want to hang out?-->
              <!--              </v-list-item-subtitle>-->
              <!--            </v-list-item-content>-->
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-app-bar elevation="1" color="white">
          <v-toolbar-title>Bncfbb</v-toolbar-title>

          <v-spacer/>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
      </v-row>
  </v-app>
</template>

<script>export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    iconClick1 () {
    },
    iconClick2 () {
    }
  }
  // created () {
  //   this.$vuetify.theme.dark = true
  // }
}

</script>
