$(function(){

  var letterDigits = ["a", "b", "c", "d", "e", "f"];

  var parseDigit = function(digit) {
    for (var i = 0; i < letterDigits.length; i++) {
      if (digit === letterDigits[i]) {
        return i + 10;
      }
    }
    return parseInt(digit);
  }

  var translate = function(input) {
    var total = 0;
    for (var d=0; d<input.length; d++) {
      newD = parseDigit(input[d]);
      total += (newD) * (Math.pow(16, d));
    }
    return total;
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val().toLowerCase().split("");
    number.reverse();
    var final = translate(number);
    $(".output").text(final);
  });
});
