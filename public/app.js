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
    var events_1 = {}
    var events_2 = {}
    var events_3 = {}
    var events_4 = {}
    var events_5 = {}
    var events_6 = {}
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
        events_1 = {
          title: 'ห้องพักที่1',
          start: input.start,
          end: input.end
        }
        console.log(events_1)
        calendar()
      }
      if (input.room === 2) {
        app.room_2.push(json)
        events_2 = {
          title: 'ห้องพักที่2',
          start: input.start,
          end: input.end
        }
        console.log(events_2)
        calendar()
      }
      if (input.room === 3) {
        app.room_3.push(json)
        events_3 = {
          title: 'ห้องพักที่3',
          start: input.start,
          end: input.end
        }
        console.log(events_3)
        calendar()
      }
      if (input.room === 4) {
        app.room_4.push(json)
        events_4 = {
          title: 'ห้องพักที่4',
          start: input.start,
          end: input.end
        }
        console.log(events_4)
        calendar()
      }
      if (input.room === 5) {
        app.room_5.push(json)
        events_5 = {
          title: 'ห้องพักที่5',
          start: input.start,
          end: input.end
        }
        console.log(events_5)
        calendar()
      }
      if (input.room === 6) {
        app.room_6.push(json)
        events_6 = {
          title: 'ห้องพักที่6',
          start: input.start,
          end: input.end
        }
        console.log(events_6)
        calendar()
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
      if (input.room === 2) {
        if (app.room_2.length === 0) {
          return true
        }
        if (element_date_2(input) === true) {
          return true
        } else if (element_date_2(input) === false) {
          return false
        }
      }
      if (input.room === 3) {
        if (app.room_3.length === 0) {
          return true
        }
        if (element_date_3(input) === true) {
          return true
        } else if (element_date_3(input) === false) {
          return false
        }
      }
      if (input.room === 4) {
        if (app.room_4.length === 0) {
          return true
        }
        if (element_date_4(input) === true) {
          return true
        } else if (element_date_4(input) === false) {
          return false
        }
      }
      if (input.room === 5) {
        if (app.room_5.length === 0) {
          return true
        }
        if (element_date_5(input) === true) {
          return true
        } else if (element_date_5(input) === false) {
          return false
        }
      }
      if (input.room === 6) {
        if (app.room_6.length === 0) {
          return true
        }
        if (element_date_6(input) === true) {
          return true
        } else if (element_date_6(input) === false) {
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
    function element_date_2 (input) {
      for (var i = 0; i < app.room_2.length; i++) {
        var range = moment().range(app.room_2[i].start, app.room_2[i].end)
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
    function element_date_3 (input) {
      for (var i = 0; i < app.room_3.length; i++) {
        var range = moment().range(app.room_3[i].start, app.room_3[i].end)
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
    function element_date_4 (input) {
      for (var i = 0; i < app.room_4.length; i++) {
        var range = moment().range(app.room_4[i].start, app.room_4[i].end)
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
    function element_date_5 (input) {
      for (var i = 0; i < app.room_5.length; i++) {
        var range = moment().range(app.room_5[i].start, app.room_5[i].end)
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
    function element_date_6 (input) {
      for (var i = 0; i < app.room_6.length; i++) {
        var range = moment().range(app.room_6[i].start, app.room_6[i].end)
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
      $('#calendar').fullCalendar('renderEvent', events_1, true)
      $('#calendar').fullCalendar('renderEvent', events_2, true)
      $('#calendar').fullCalendar('renderEvent', events_3, true)
      $('#calendar').fullCalendar('renderEvent', events_4, true)
      $('#calendar').fullCalendar('renderEvent', events_5, true)
      $('#calendar').fullCalendar('renderEvent', events_6, true)
    }
  })
