/*global angular moment*/
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
    app.add = function (input) {
      if (check_date(input) === true) {
        insert(input)
      } else console.log('Nooooo')
    }
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
        if (element_date(input) === true) {
          return true
        } else if (element_date(input) === false) {
          return false
        }
      }
    }
    function element_date (input) {
      for (var i = 0; i < app.room_1.length; i++) {
        var range = moment().range(app.room_1[i].start, app.room_1[i].end)
        var date_insert = moment().range(input.start, input.end)
        if (date_insert.contains(range)) {
          return false
        }
      }
      return true
    }
  })
