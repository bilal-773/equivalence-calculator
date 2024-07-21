document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("olevels").addEventListener("change", toggleSections);
    document.getElementById("matricFsc").addEventListener("change", toggleSections);

    function toggleSections() {
        if (document.getElementById("olevels").checked) {
            document.getElementById("olevelsSection").style.display = "block";
            document.getElementById("matricFscSection").style.display = "none";
        } else {
            document.getElementById("olevelsSection").style.display = "none";
            document.getElementById("matricFscSection").style.display = "block";
        }
        clearMarks(); // Clear marks when switching sections
    }

    function clearMarks() {
        // Clear all input fields
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');

        // Clear all calculated marks
        document.querySelectorAll('span').forEach(span => span.innerText = '0');
    }

    function calculate() {
        // Advanced Maths
        let advAttempted = parseInt(document.getElementById("advAttempted").value) || 0;
        let advCorrect = parseInt(document.getElementById("advCorrect").value) || 0;
        let advPositive = advCorrect;
        let advNegative = (advAttempted - advCorrect) * 0.25;
        document.getElementById("advPositive").innerText = advPositive;
        document.getElementById("advNegative").innerText = advNegative.toFixed(2);

        // Basic Maths
        let basicAttempted = parseInt(document.getElementById("basicAttempted").value) || 0;
        let basicCorrect = parseInt(document.getElementById("basicCorrect").value) || 0;
        let basicPositive = basicCorrect;
        let basicNegative = (basicAttempted - basicCorrect) * 0.25;
        document.getElementById("basicPositive").innerText = basicPositive;
        document.getElementById("basicNegative").innerText = basicNegative.toFixed(2);

        // English
        let engAttempted = parseInt(document.getElementById("engAttempted").value) || 0;
        let engCorrect = parseInt(document.getElementById("engCorrect").value) || 0;
        let engPositive = engCorrect * 0.33;
        let engNegative = (engAttempted - engCorrect) * 0.33 * 0.25;
        document.getElementById("engPositive").innerText = engPositive.toFixed(2);
        document.getElementById("engNegative").innerText = engNegative.toFixed(2);

        // IQ
        let iqAttempted = parseInt(document.getElementById("iqAttempted").value) || 0;
        let iqCorrect = parseInt(document.getElementById("iqCorrect").value) || 0;
        let iqPositive = iqCorrect;
        let iqNegative = (iqAttempted - iqCorrect) * 0.25;
        document.getElementById("iqPositive").innerText = iqPositive;
        document.getElementById("iqNegative").innerText = iqNegative.toFixed(2);

        // Calculate total marks
        let totalPositiveMarks = advPositive + basicPositive + engPositive + iqPositive;
        let totalNegativeMarks = advNegative + basicNegative + engNegative + iqNegative;
        let totalMarks = totalPositiveMarks - totalNegativeMarks;
        document.getElementById("totalPositive").innerText = totalPositiveMarks;
        document.getElementById("totalNegative").innerText = totalNegativeMarks.toFixed(2);
        document.getElementById("totalMarks").innerText = totalMarks.toFixed(2);

        // Calculate aggregate
        let aggregate = 0;
        if (document.getElementById("olevels").checked) {
            let olevelsEquivalence = parseFloat(document.getElementById("olevelsEquivalence").value) || 0;
            aggregate = (olevelsEquivalence * 0.5) + (totalMarks * 0.5);
        } else {
            let matricPercentage = parseFloat(document.getElementById("matricPercentage").value) || 0;
            let fscPercentage = parseFloat(document.getElementById("fscPercentage").value) || 0;
            aggregate = (matricPercentage * 0.1) + (fscPercentage * 0.4) + (totalMarks * 0.5);
        }
        document.getElementById("aggregate").innerText = aggregate.toFixed(2);
    }

    document.querySelector("button").addEventListener("click", calculate);
});

