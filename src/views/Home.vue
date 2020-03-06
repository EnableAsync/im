<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
      width="400"
    >
      <v-row class="fill-height" no-gutters>
        <!--color="blue darken-3"-->
        <v-navigation-drawer
          mini-variant
          mini-variant-width="70"
          permanent
        >
          <v-list-item style="padding-top: 10px">
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/lists/5.jpg"
                alt="Alice"
              >
            </v-avatar>
          </v-list-item>

          <v-list
            dense
          >
            <v-list-item>
              <v-list-item-action>
                <v-icon large @click="iconClick1">mdi-message-text</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-list three-line>
          <!--        <v-subheader>today</v-subheader>-->
          <v-text-field
            outlined
            rounded
            hide-details
            single-line
            clearable
            prepend-inner-icon="mdi-magnify"
            label="Search"
          />
          <v-list-item>
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
      </v-row>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar-title>Bncfbb</v-toolbar-title>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
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
