document.addEventListener("keydown", function (event) {
  if (event.key == "n" && event.ctrlKey == true) {
    const keyDownEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
    });
    document.activeElement.dispatchEvent(keyDownEvent);
  }

  if (event.key == "p" && event.ctrlKey == true) {
    const keyUpEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
    });
    document.activeElement.dispatchEvent(keyUpEvent);
  }
});
