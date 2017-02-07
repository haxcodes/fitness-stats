var date = new Date();
var monthString = date.getFullYear() + '-' + (date.getMonth() + 1)
var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());

$(document).ready(function(){
  $("#watch-container").animate({right: "0%"}, 2000, function() {
    $("#watch-container").addClass('enlarge');
  });
});


$.ajax({
  url: "https://hax.codes/fit/api/steps/daily/" + monthString
}).done(function(data) {
  setTimeout(function(){
    $('.month-steps').html(totalSteps(data));
  }, 2500);
});

$.ajax({
  url: "https://hax.codes/fit/api/steps/daily/" + dateString
}).done(function(data) {
  setTimeout(function(){
    $('.day-steps').html(totalSteps(data));
  }, 2600);
});

var totalSteps = function(data) {
  return _.reduce(_.filter(data, function(day) { 
            return _.where(day.summary, {activity: 'walking' }).length > 0 }), function(memo, day) {
              return _.findWhere(day.summary, {activity: 'walking'}).steps + memo;
            }, 0);
};

window.odometerOptions = {
  auto: false, 
  selector: '.animate-numbers', 
  format: '(,ddd).dd', 
  duration: 3000, 
  theme: 'default' 
};

document.body.style.background = '#99' + _.times(2, function(n) { return _.random(160,255).toString(16) }).join('');