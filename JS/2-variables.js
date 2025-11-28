function test() {
  // Block??? Idk...
  {
    var xVar = "xVar";
    let xLet = "xLet";
    const xConst = "xConst";
  }

  try {
  console.log("xVar = ", xVar);
  } catch (e) { 
    console.log(e);
  }
  try {
  console.log("xLet = ", xLet);
  } catch (e) { 
    console.log(e);
  }
  try {
  console.log("xConst = ", xConst);
  } catch (e) { 
    console.log(e);
  }
}

test();
