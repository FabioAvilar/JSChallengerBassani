// Remove element from the DOM
// You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
// Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button.
// const element = document.querySelector("#element");

const toggleColor = (isEntering) => {
    element.style.background = isEntering ? "orange" : "black";
};

// type in your code here
element.addEventListener("mouseover", () => toggleColor(true));
element.addEventListener("mouseleave", () => toggleColor(false));

