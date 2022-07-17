const inputColor = document.getElementById("input-color")
const selectOptions = document.getElementById("select-options")
const btn = document.getElementById("btn")
const color1 = document.getElementById("color1")
const hex1 = document.getElementById("hex1")
const color2 = document.getElementById("color2")
const hex2 = document.getElementById("hex2")
const color3 = document.getElementById("color3")
const hex3 = document.getElementById("hex3")
const color4 = document.getElementById("color4")
const hex4 = document.getElementById("hex4")
const color5 = document.getElementById("color5")
const hex5 = document.getElementById("hex5")

btn.addEventListener("click", getColorScheme)

hex1.addEventListener("click", () => copyToClipboard(hex1.textContent))
hex2.addEventListener("click", () => copyToClipboard(hex2.textContent))
hex3.addEventListener("click", () => copyToClipboard(hex3.textContent))
hex4.addEventListener("click", () => copyToClipboard(hex4.textContent))
hex5.addEventListener("click", () => copyToClipboard(hex5.textContent))

color1.addEventListener("click", () => copyToClipboard(hex1.textContent))
color2.addEventListener("click", () => copyToClipboard(hex2.textContent))
color3.addEventListener("click", () => copyToClipboard(hex3.textContent))
color4.addEventListener("click", () => copyToClipboard(hex4.textContent))
color5.addEventListener("click", () => copyToClipboard(hex5.textContent))

function getColorScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.slice(1)}&mode=${selectOptions.value}`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            color1.style.backgroundColor = data.colors[0].hex.value
            hex1.textContent = data.colors[0].hex.value
            color2.style.backgroundColor = data.colors[1].hex.value
            hex2.textContent = data.colors[1].hex.value
            color3.style.backgroundColor = data.colors[2].hex.value
            hex3.textContent = data.colors[2].hex.value
            color4.style.backgroundColor = data.colors[3].hex.value
            hex4.textContent = data.colors[3].hex.value
            color5.style.backgroundColor = data.colors[4].hex.value
            hex5.textContent = data.colors[4].hex.value
        })
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}