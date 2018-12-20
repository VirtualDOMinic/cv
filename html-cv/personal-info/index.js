console.log("adding personal info");

const myPersonalDetails = {
  email: "hello@dominic.digital",
  emailHref: "mailto:hello@dominic.digital",
  tel: "+44 (0)7415 281 613"
};

Object.keys(myPersonalDetails).forEach(detailName => {
  if (detailName.includes("Href")) {
    targetElement = detailName.replace("Href", "");
    document.getElementById(targetElement).href = myPersonalDetails[detailName];
  } else {
    document.getElementById(detailName).innerText = myPersonalDetails[detailName];
  }
});
