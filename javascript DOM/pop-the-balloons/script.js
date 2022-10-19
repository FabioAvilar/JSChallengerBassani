// Pop the balloons
// Make the balloons pop by hovering over them.
// Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible.
// Your goal is to pop all the balloons one after the other.

const list = document.getElementById("list");
const handleHover = (event) => {
    if (event.target !== list) {
        event.target.style.visibility = "hidden";
    }
};

list.addEventListener("mouseover", handleHover);
