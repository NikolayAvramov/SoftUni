import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/dropdown";

const optionRoot = document.getElementById("menu");
getter();

async function getter() {
    let response = await fetch(url);
    let data = await response.json();
    const info = Array.from(Object.values(data));
    renderOption(info);
}

function renderOption(inf) {
    const options = inf.map(
        (element) =>
            html`<option value="${element._id}">${element.text}</option>`
    );
    render(options, optionRoot);
}

async function poster(data) {
    let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ text: data }),
    });
}

document.querySelector("input[type=submit]").addEventListener("click", addItem);

async function addItem(e) {
    e.preventDefault();
    const textNode = document.getElementById("itemText");
    const text = textNode.value;
    textNode.value = "";
    await poster(text);
    getter();
}
