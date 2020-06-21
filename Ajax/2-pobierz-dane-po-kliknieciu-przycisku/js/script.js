$('document').ready(function () {
  // $('button').on('click', function () {
  //   $.get('https://akademia108.pl/api/ajax/get-post.php')
  //     .done(function (data) {
  //       if (!$('#userData').length) {
  //         $('body').append($('<div id="userData"></div>'));
  //       }
  //       $('#userData').html(`<p>User ID:${data.userId}</p><p>id:${data.id}</p><p>title:${data.title}</p><p>body:${data.body}</p>`)
  //     })
  //     .fail(function (err) {
  //       console.log(err);

  //     })
  // })

  // V2
  $('button').on('click', function () {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
      .done(function (data) {
        if (!$('#userData').length) {
          $('body').append($('<div id="userData"></div>'));
        }
        $('#userData').html(`<p>User ID:${data.userId}</p><p>id:${data.id}</p><p>title:${data.title}</p><p>body:${data.body}</p>`)
      })
      .fail(function (err) {
        console.log(err);

      })
  })

})