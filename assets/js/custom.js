const fillDivs = document.querySelectorAll(".fill");

function updateWidths() {
  fillDivs.forEach((fillDiv) => {
    const randomWidth = Math.floor(Math.random() * 101);
    fillDiv.style.width = randomWidth + "%";
  });
}

setInterval(updateWidths, 3000);
