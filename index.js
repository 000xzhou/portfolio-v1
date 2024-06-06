const about = document.getElementById("about");
const fitness = document.getElementById("fitness");
const jobly = document.getElementById("jobly");
const others = document.getElementById("others");

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-link")
      //   remove all class call active
      .forEach((el) => el.classList.remove("active"));

    // add active to the one clicked
    this.classList.add("active");

    // set display
    // hide all with class info
    document
      .querySelectorAll(".info")
      .forEach((div) => (div.style.display = "none"));
    // Get the href hash without the #
    const hrefId = this.getAttribute("href").substring(1);
    console.log(hrefId);

    document.getElementById(hrefId).style.display = "block";
  });
});
