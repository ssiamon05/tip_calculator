'use strict';

var billTotal, peopleTotal, tipPercent;

billTotal = $('#billTotal').val();
peopleTotal = $('#peopleTotal').val();

$('#billTotal').on('change', function() {
    billTotal = $('#billTotal').val();
});
$('#peopleForm').on('change', function() {
    peopleTotal = $('#peopleTotal').val();
});
console.log(billTotal);
console.log(peopleTotal);