<template>
  <v-row >

     <v-col cols="12"  style="height:550px" v-if="isloading">
          <v-container class="fill-height" v-if="isloading" >
              <vue-element-loading :active="isloading" 
              text="Loading"
              duration="0.7"
              :textStyle="{fontSize: '20px'}"
              spinner="line-scale" color="#EF6C00"  size="60" />
          </v-container>
      </v-col>

    <v-col cols="12" v-if="!isloading">
      <v-row>
        <v-col cols="12" class="mb-0 pb-0">
            <div :class="$vuetify.breakpoint.mdAndUp ? 'text-h6 font-weight-bold': 'font-weight-bold'">MY CALENDAR</div> 
        </v-col>
        <v-col cols="12" class="mb-0 pb-0">
            <v-divider></v-divider>
        </v-col>
        <v-col cols="12" class="pa-0 mb-0" >
          <v-card elevation="3">
            <v-sheet height="50">
                <v-toolbar
                  flat
                >
                  <v-btn
                    v-if="$vuetify.breakpoint.mdAndUp"
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
              <v-sheet :class="!$vuetify.breakpoint.mdAndUp ? 'pt-2' : ''"  :height="$vuetify.breakpoint.mdAndUp ? '750' : '500'" width="100%">
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
                  max-width="350px"
                >
                  <v-card color="grey lighten-4" min-width="350px" max-width="350px" flat>
                    <v-toolbar
                      :color="selectedEvent.color"
                      dark
                      dense
                    >
                    
                      <v-toolbar-title style="width:100%" v-html="selectedEvent.name"></v-toolbar-title>
                      <v-spacer></v-spacer>
                    <!--   <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn> -->
                      <v-btn @click="selectedOpen = false" icon>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <div> <span class="font-weight-bold">Due date: </span> {{format_date(selectedEvent.end)}}</div>
                        <div >
                            <v-btn @click="$router.push({path: '/classwork/'+selectedEvent.course_id+'/classwork-details?clwk='+selectedEvent.classwork_id})" 
                            rounded text :color="selectedEvent.color">
                              View Classwork
                          <v-icon right>mdi-eye</v-icon>
                        </v-btn>
                        </div>
                    </v-card-text>
                  
                  </v-card>
                </v-menu>
              </v-sheet>
              </v-card>
        </v-col>
       </v-row>
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
      DateToday: null
    }),
    mounted () {
      this.getGeneralClassworks();
      const newDate = new Date();
      this.DateToday = moment(newDate).format('YYYY-MM-DD HH:mm:ss');
    },
    methods: {
    format_date(value) {
        if (value) {
            return moment(String(value)).format('dddd, h:mm a')
        }
    },
    async getGeneralClassworks() {
        axios.get('/api/profile/mycalendar')
        .then(res=>{
          
            this.CalendarSched = res.data;
            const events = [];
            const nowDate = new Date();
               
            if(res.data.length != 0){
                const data = moment(this.CalendarSched[0].from_date)._d

                for (let index = 0; index < this.CalendarSched.length; index++) {
                  const allDay = this.rnd(0, 3) === 0;
                  let test = moment(this.CalendarSched[index].from_date);
                  let color;
                  let name;
                  if(this.role == 'Student' && this.CalendarSched[index].status == 'Submitted'){
                    name = this.CalendarSched[index].title+'(submitted)';
                    color = "success";
                    //console.log(this.CalendarSched[index].status);
                  }
                  else if((this.role == 'Student' &&  this.CalendarSched[index].status != 'Submitted'  &&  this.CalendarSched[index].availability == 1) && this.CheckFormatDue(this.CalendarSched[index].to_date) < this.DateToday){
                    name = this.CalendarSched[index].title+'(missing)';
                    color = "error";
                  }
                  else if((this.role == 'Student' &&  this.CalendarSched[index].status != 'Submitted'  &&  this.CalendarSched[index].availability == 0) && this.CheckFormatDue(this.CalendarSched[index].to_date) < this.DateToday){
                    name = this.CalendarSched[index].title;
                    color = this.colors[this.rnd(0, this.colors.length - 1)];
                  }
                  else if(this.role == 'Student' &&  this.CalendarSched[index].status == 'Submitting' || this.CalendarSched[index].status == 'Taking'){
                     name = this.CalendarSched[index].title+(this.CalendarSched[index].status);
                     color = "info";
                     //console.log(this.CalendarSched[index].status);
                  }
                  else{
                    name =  this.CalendarSched[index].title;
                    color = this.colors[this.rnd(0, this.colors.length - 1)];
                  }
                  events.push({
                      name: name,
                      start: moment(this.CalendarSched[index].from_date)._d,
                      end: moment(this.CalendarSched[index].to_date)._d,
                      color: color,
                      timed: !allDay,
                      classwork_id: this.CalendarSched[index].classwork_id,
                      course_id: this.CalendarSched[index].course_id,
                      class_id: this.CalendarSched[index].class_id
                    })
              }
            }
                  
           
            this.events = events;

            this.isloading = !this.isloading;
           /*  setTimeout(() => {
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
              return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
          }
      },

    },
  }
</script>