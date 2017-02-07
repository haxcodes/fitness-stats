var date = new Date();
var monthString = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2)

$.ajax({
  url: "https://hax.codes/fit/api/steps/daily/" + monthString
}).done(function(data) {
  setTimeout(function(){
    $('.total-steps').html(totalSteps(data));
  }, 0);
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