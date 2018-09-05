$('#submit').on('click', function(event) {
  //prevent default behavior of anchor # from showing up on link
event.preventDefault();
$('#results').html('Loading...');

let subreddit = $('#subreddit').val();
let url = 'https://www.reddit.com/r/' + subreddit +'.json';

let promise = fetch(url).then(function(response) {
  let promise = response.json();
  return promise;
});

promise.then(function(response) {
  let html = '';

  response.data.children.forEach(function(thread) {
    html += `
    <div style="float: left; text-align: center; margin: 0.5%; width: 15%;">
    <img
      src="${thread.data.thumbnail}">
    <h4 style="margin:0;">${thread.data.title}</h4>
    <p style="margin:0;">${thread.data.score}</p>
    <p style="margin:0;"><i>${thread.data.author}</i></p>
    </div>
    `;
  })


$('#results').html(html);
}, function(error) {
  console.log('error', error);
});

});
