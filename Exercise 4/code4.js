function rgb(red, green, blue) {
    return "rgb("+red+","+green+","+blue+")";
}

function border(width, red, green, blue) {
    let color = rgb(red,green,blue);
    let string1 = width.concat(" solid ");
    return string1.concat(color);
}

document.addEventListener("DOMContentLoaded", () => {
    let border_red, border_green, border_blue = 0;
    let border_width, background_width = " ";
    let background_red, background_green, background_blue = 0;
    let text = document.querySelector("#text");
    document.querySelector("#border_red").addEventListener("input", () => {
        border_red = document.querySelector("#border_red").value;
    })
    document.querySelector("#border_green").addEventListener("input", () => {
        border_green = document.querySelector("#border_green").value;
    })
    document.querySelector("#border_blue").addEventListener("input", () => {
        border_blue = document.querySelector("#border_blue").value;
    })
    document.querySelector("#border_width").addEventListener("input", () => {
        border_width = document.querySelector("#border_width").value;
    })
    document.querySelector("#background_red").addEventListener("input", () => {
        background_red = document.querySelector("#background_red").value;
    })
    document.querySelector("#background_green").addEventListener("input", () => {
        background_green = document.querySelector("#background_green").value;
    })
    document.querySelector("#background_blue").addEventListener("input", () => {
        background_blue = document.querySelector("#background_blue").value;
    })
    document.querySelector("#background_width").addEventListener("input", () => {
        background_width = document.querySelector("#background_width").value;
    })
    document.querySelector("#apply").addEventListener("click", () => {
        text.style.backgroundColor = rgb(background_red, background_green, background_blue);
        text.style.border = border(border_width, border_red, border_green, border_blue);
        text.style.backgroundSize = background_width;
    })
});
