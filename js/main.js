$.ajax({
  url: "https://hax.codes/fit/api/getCombined"
}).done(function(data) {
  $('#data').html(data);
});