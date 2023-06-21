const itemsCost = {
    apple: 700,
    orange: 800,
    lemon: 900,
};
let totalCost = 0;

for (const buttons of document.getElementsByClassName("add-to-cart"))
{
    buttons.addEventListener("click", event => {
        const item = event.target.parentNode.parentNode.getAttribute("id");
        totalCost += itemsCost[item];
        document.getElementById("cost").innerText = totalCost;
        }
    );
}
    