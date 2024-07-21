function calculate() {
    // Advanced Maths
    let advTotal = parseInt(document.getElementById("advTotal").value);
    let advAttempted = parseInt(document.getElementById("advAttempted").value);
    let advCorrect = parseInt(document.getElementById("advCorrect").value);
    let advPositive = advCorrect;
    let advNegative = (advAttempted - advCorrect) * 0.25;
    document.getElementById("advPositive").innerText = advPositive;
    document.getElementById("advNegative").innerText = advNegative;

    // Basic Maths
    let basicTotal = parseInt(document.getElementById("basicTotal").value);
    let basicAttempted = parseInt(document.getElementById("basicAttempted").value);
    let basicCorrect = parseInt(document.getElementById("basicCorrect").value);
    let basicPositive = basicCorrect;
    let basicNegative = (basicAttempted - basicCorrect) * 0.25;
    document.getElementById("basicPositive").innerText = basicPositive;
    document.getElementById("basicNegative").innerText = basicNegative;

    // English
    let engTotal = parseInt(document.getElementById("engTotal").value);
    let engAttempted = parseInt(document.getElementById("engAttempted").value);
    let engCorrect = parseInt(document.getElementById("engCorrect").value);
    let engPositive = engCorrect * 0.33;
    let engNegative = (engAttempted - engCorrect) * 0.33 * 0.25;
    document.getElementById("engPositive").innerText = engPositive;
    document.getElementById("engNegative").innerText = engNegative;

    // IQ
    let iqTotal = parseInt(document.getElementById("iqTotal").value);
    let iqAttempted = parseInt(document.getElementById("iqAttempted").value);
    let iqCorrect = parseInt(document.getElementById("iqCorrect").value);
    let iqPositive = iqCorrect;
    let iqNegative = (iqAttempted - iqCorrect) * 0.25;
    document.getElementById("iqPositive").innerText = iqPositive;
    document.getElementById("iqNegative").innerText = iqNegative;

    // Calculate total marks
    let totalPositiveMarks = advPositive + basicPositive + engPositive + iqPositive;
    let totalNegativeMarks = advNegative + basicNegative + engNegative + iqNegative;
    let totalMarks = totalPositiveMarks - totalNegativeMarks;
    document.getElementById("totalPositive").innerText = totalPositiveMarks;
    document.getElementById("totalNegative").innerText = totalNegativeMarks;
    document.getElementById("totalMarks").innerText = totalMarks;

    // Calculate aggregate
    let olevelsEquivalence = parseFloat(document.getElementById("olevelsEquivalence").value);
    let aggregate = (olevelsEquivalence * 0.5) + (totalMarks * 0.5);
    document.getElementById("aggregate").innerText = aggregate.toFixed(2);
}
