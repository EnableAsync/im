<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
      class="pa-1"
    >
      <v-text-field
        outlined
        rounded
        hide-details
        single-line
        clearable
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="py-1 px-2"
      />
      <v-list
        two-line
      >
        <!--        <v-subheader>today</v-subheader>-->
        <v-list-item
          @click="contactClick(chat)"
          v-for="chat in chats"
          :key="chat.sender"
        >
          <v-list-item-avatar>
            <v-img :src="chat.avatar"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ chat.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ chat.messages[chat.messages.length - 1].content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="2" color="white" app>
      <v-toolbar-title>{{selectChat.name}}</v-toolbar-title>

      <v-spacer/>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
<!--      <v-btn icon>-->
<!--        <v-icon>mdi-dots-vertical</v-icon>-->
<!--      </v-btn>-->
      <v-app-bar-nav-icon />
    </v-app-bar>
    <v-content class="flex-d" style="position: relative;">
      <v-col cols="12">
        <v-container>
          <v-row
            v-for="msg in selectChat.messages"
            :key="msg.id"
          >
            <v-avatar class="mt-5">
              <v-img :src="selectChat.avatar"></v-img>
            </v-avatar>
            <v-card class="ma-4">
              <v-card-title>{{ msg.content }}</v-card-title>
              <!--          <v-card-subtitle>this is subtitle</v-card-subtitle>-->
              <v-card-text>{{ msg.time }}</v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-col>
      <v-col>
        <v-spacer/>
      </v-col>
      <v-col id="enter" class="align-content-space-between" style="bottom: 0; position: absolute;">
        <v-container>
          <v-row>
            <v-textarea
              solo
              rounded
              clearable
              rows="1"
              auto-grow
            >
            </v-textarea>
          </v-row>
        </v-container>
      </v-col>
    </v-content>
    <v-navigation-drawer
      fixed
      right
      temporary
    />
  </v-app>
</template>

<script>export default {
  name: 'Home',
  data () {
    return {
      selectChat: {},
      chats: [
        {
          sender: 1,
          name: 'a',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          lastTime: '2020-03-09 10:33',
          isRead: false,
          messages: [
            {
              id: 1001,
              content: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
              sender: 1,
              time: '2020-03-09 10:33'
            },
            {
              id: 1002,
              content: 'ok',
              sender: 2,
              time: '2020-03-09 10:33'
            }
          ]
        },
        {
          sender: 2,
          name: 'b',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          lastTime: '2020-03-09 10:33',
          isRead: true,
          messages: [
            {
              id: 1003,
              content: 'test',
              sender: 1,
              time: '2020-03-09 10:33'
            },
            {
              id: 1004,
              content: 'ok',
              sender: 2,
              time: '2020-03-09 10:33'
            }
          ]
        }
      ]
    }
  },
  methods: {
    contactClick (sender) {
      this.selectChat = sender
    }
  }
}

</script>
<style>
  #enter {
    align-items: flex-end;
  }
</style>
