/*global angular moment $*/
angular.module('todoApp', [])
  .controller('myApp', function () {
    var app = this
    app.title = 'Hotel_Booking'
    app.room_1 = []
    app.room_2 = []
    app.room_3 = []
    app.room_4 = []
    app.room_5 = []
    app.room_6 = []
    var json_data = {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month'
      }
    }
    var events = {}
    calendar()
    app.add = function (input) {
      if (check_date(input) === true) {
        insert(input)
      // events_view(input)
      } else console.log('Nooooo')
    }
    // function events_view () {}
    function build_json (input) {
      var data = {
        name: input.name,
        surname: input.surname,
        room: input.room,
        start: input.start,
        end: input.end
      }
      return data
    }
    function insert (input) {
      var json = build_json(input)
      if (input.room === 1) {
        app.room_1.push(json)
        events = {
          title: 'ห้องพักที่1',
          start: input.start,
          end: input.end
        }
        // events.push(dateinput)
        console.log(events)
        calendar()
      }
      if (input.room === 2) {
        app.room_2.push(json)
      }
      if (input.room === 3) {
        app.room_3.push(json)
      }
      if (input.room === 4) {
        app.room_4.push(json)
      }
      if (input.room === 5) {
        app.room_5.push(json)
      }
      if (input.room === 6) {
        app.room_6.push(json)
      }
    }
    app.setTime = function (time) {
      return moment(time).format('ll')
    }
    function check_date (input) {
      if (input.room === 1) {
        if (app.room_1.length === 0) {
          return true
        }
        if (element_date_1(input) === true) {
          return true
        } else if (element_date_1(input) === false) {
          return false
        }
      }
    }
    function element_date_1 (input) {
      for (var i = 0; i < app.room_1.length; i++) {
        var range = moment().range(app.room_1[i].start, app.room_1[i].end)
        var date_insert = moment().range(input.start, input.end)
        if (date_insert.contains(range)) {
          return false
        }
        if (range.contains(input.start) || range.contains(input.end)) {
          return false
        }
      }
      return true
    }
    // calendar()
    $('#calendar').fullCalendar(json_data) // function calendar json
    function calendar () {
      // $('#calendar').fullCalendar(json_data) // function calendar json
      $('#calendar').fullCalendar('renderEvent', events, true)
    }
  })
