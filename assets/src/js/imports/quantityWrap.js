export default function () {
    const wrap = document.querySelector(".quantity-wrap");
    if (!wrap) {
        return;
    }

    wrap.addEventListener("click", (ev) => {
        if (!ev.target.matches(".quantity-btn")) {
            return;
        }

        const type = ev.target.dataset.value;
        let currentValue = parseInt(wrap.querySelector(".quantity-input").value);
        if (type === "increase") {
            currentValue++;
        } else {
            if (currentValue === 1) {
                return;
            }
            currentValue--;
        }
        wrap.querySelector(".quantity-input").value = currentValue;
    })
}