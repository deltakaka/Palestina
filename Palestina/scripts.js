document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".donate-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert(`Obrigado por doar pro ${this.textContent}!`);
        });

        button.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#45a049";
        });

        button.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#4CAF50";
        });
    });
});
