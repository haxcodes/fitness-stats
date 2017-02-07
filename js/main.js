var date = new Date();
var monthString = date.getFullYear() + '-' + (date.getMonth() + 1)
var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());

$.ajax({
  url: "https://hax.codes/fit/api/steps/daily/" + monthString
}).done(function(data) {
  setTimeout(function(){
    $('.month-steps').html(totalSteps(data));
  }, 500);
});

$.ajax({
  url: "https://hax.codes/fit/api/steps/daily/" + dateString
}).done(function(data) {
  setTimeout(function(){
    $('.day-steps').html(totalSteps(data));
  }, 500);
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

document.body.style.background = '#' + _.times(3, function(n) { return _.random(160,255).toString(16) }).join('');