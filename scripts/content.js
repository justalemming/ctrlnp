document.addEventListener("keydown", function (event) {
  if (event.key == "n" && event.ctrlKey == true) {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "ArrowDown",
        code: "ArrowDown",
        keyCode: 40,
      })
    );
  }

  if (event.key == "p" && event.ctrlKey == true) {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "ArrowUp",
          code: "ArrowUp",
          keyCode: 38,
        })
      );
  }
});
