// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//
//     var vowels = ['a','e','i','o','u'];
//     var data = $(".original").val();
//     $(".original").val('');
//     var elements = data.split('');
//     var coded = [];
//
//     elements.forEach(function(element) {
//       if (vowels.indexOf(element) === -1) {
//         coded.push(element);
//       } else {
//         coded.push('-');
//       }
//     });
//     var final = '';
//     coded.forEach(function(element) {
//       final += element;
//     });
//     $(".coded").text(final);
//   });
// });

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var vowels = ['a','e','i','o','u'];
    var data = $(".original").val();
    $(".original").val('');
    var elements = data.split('');
    var coded = [];

    for (var index = 0; index < elements.length; index += 1) {
      if (vowels.indexOf(elements[index]) === -1) {
        coded.push(elements[index]);
      } else {
        coded.push('-');
      }
    };
    var final = '';
    for (var index = 0; index < coded.length; index += 1) {
      final += coded[index];
    };
    $(".coded").text(final);
  });
});
