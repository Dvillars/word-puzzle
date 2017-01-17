$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var vowels = ['a','e','i','o','u'];
    var data = $(".original").val();
    var elements = data.split('');
    var coded = [];



    elements.forEach(function(element) {
      if (vowels.indexOf(element) === -1) {
        coded.push(element);
      } else {
        coded.push('-');
      }
    });
    var final = '';
    coded.forEach(function(element) {
      final += element;
    });
    $(".coded").text(final);
  });
});
