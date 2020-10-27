var nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"];

var planks = ["splintered plank", "straight plank", "bent plank"];

function groupAndClean(items, cleaningMethod, done) {
  for (var i = 0; i < items.length; i++) {
    cleaningMethod(items[i])
  }
 
  done()
}
 
console.log(groupAndClean(nails.concat(planks), clean, function() {
  console.log('Whew, that was a lot of work!')
}));

