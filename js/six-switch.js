let team = "RCB";

switch (team) {
  case "RCB":
    console.log("way to finals");
    break;
  case "SRH":
    console.log("eliminated");
    break;
  case "PBKS":
    console.log("struggling to get into finals");
    break;
  default:
    console.log("no team");
}

//  example two

let score = 80;

switch (true) {
  case score > 75:
    console.log("Distinction");
    break;
  case score > 65 && score < 75:
    console.log("Distinction");
    break;
  default:
    console.log("did not get result");
}
