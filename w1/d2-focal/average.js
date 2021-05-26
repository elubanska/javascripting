function average(list) {
  var sum = 0;

  for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
  }
  return sum / list.length;
}
console.log(average([3, 5, 7]));
