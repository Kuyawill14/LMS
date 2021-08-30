<template>
  <v-row class="fill-height">

      <v-col cols="12" v-if="isloading">
            <v-container class="fill-height" v-if="isloading" style="height:30vh">
            <v-row  align-content="center" justify="center">
                <v-col class="text-subtitle-1 text-center" cols="12">
                    Loading
                </v-col>
                <v-col cols="6">
                    <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
                </v-col>
            </v-row>
            </v-container>
        </v-col>

    <v-col v-if="!isloading">
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="280">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
            <!--   <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
              <div>Sample</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment/src/moment';
  export default {
    props:['role'],
    data: () => ({
    CalendarSched:[],
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'amber darken-4', 'orange', 'yellow darken-3', 'amber','blue-grey'],
      isloading: true,
      DateToday: null,
      unfinishCount: 0
    }),
    mounted () {
      this.getGeneralClassworks();
      const newDate = new Date();
      this.DateToday = moment(newDate).format("YYYY-MM-DDTHH:mm:ss");
    },
    methods: {
    async getGeneralClassworks() {
        axios.get('/api/profile/mycalendar')
        .then(res=>{
          
            this.CalendarSched = res.data;
            const events = [];
            const nowDate = new Date();
               
            if(res.data.length != 0){
                const data = moment(this.CalendarSched[0].from_date)._d
                for (let index = 0; index < this.CalendarSched.length; index++) {
      
                  let test = moment(this.CalendarSched[index].from_date);
                  let color;
                  let name;
                  if(this.role == 'Student' && this.CalendarSched[index].status == 'Submitted'){
                    name = this.CalendarSched[index].title+'(submitted)';
                    color = "success";
                  }
                  else if(this.role == 'Student' &&  this.CalendarSched[index].status != 'Submitted' && this.CheckFormatDue(this.CalendarSched[index].to_date) < this.DateToday){
                    name = this.CalendarSched[index].title+'(missing)';
                    color = "error";
                    this.unfinishCount++;
          
                  }
                  else{
                    name =  this.CalendarSched[index].title;
                    color = this.colors[this.rnd(0, this.colors.length - 1)];
                    this.unfinishCount++;
                  }
                  events.push({
                      name: name,
                      start: moment(this.CalendarSched[index].from_date)._d,
                      end: moment(this.CalendarSched[index].to_date)._d,
                      color: color,
                    })
                this.$emit('RecieveTotalClasswork', this.unfinishCount)
              }
            }
                  
           
            this.events = events;

            this.isloading = !this.isloading;
      /*       setTimeout(() => {
                this.isloading = !this.isloading;
        }, 1000); */
            //this.$refs.calendar.checkChange()
        })
    },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          //console.log(event);
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }
        nativeEvent.stopPropagation()
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      CheckFormatDue(value){
          if (value) {
              return moment(String(value)).format("YYYY-MM-DDTHH:mm:ss")
          }
      },

    },
  }
</script>

<style>
/* .v-calendar-weekly {
display: table;
table-layout: fixed;
} */
/* .v-calendar-weekly__week {
height: auto;
display: table-row;
}
.v-calendar-weekly__day {
display: table-cell;
width: calc(100% / 7)
} */


</style>