    const click = document.getElementById("name");
    click.style.transition = "all 3s";
    setInterval(() => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      click.style.color = "#" + randomColor;
    }, 3000);
