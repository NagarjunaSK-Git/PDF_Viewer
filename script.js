function openPopup(pdfSrc) {
    var pdfModal = document.getElementById("pdfModal");
    var pdfEmbed = document.getElementById("pdfEmbed");

    pdfEmbed.src = pdfSrc;
    pdfModal.style.display = "block";
}

function closePopup() {
    var pdfModal = document.getElementById("pdfModal");
    pdfModal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var pdfModal = document.getElementById("pdfModal");
    if (event.target == pdfModal) {
        pdfModal.style.display = "none";
    }
}
