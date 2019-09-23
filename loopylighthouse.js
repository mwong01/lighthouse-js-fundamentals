var x = "";
for (x = 100; x <= 200; x++) {
  var x3 = (x % 3 === 0);
  var x4 = (x % 4 === 0);
    
  if (x3 && x4) {
    console.log("LoopyLighthouse");
  } else if (x3) {
    console.log("Loopy");
  } else if (x4) {
    console.log("Lighthouse");
  } else {
    console.log(x);
  }
}