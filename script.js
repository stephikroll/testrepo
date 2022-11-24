// computes the simple interest and displays the result
function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        // Ensure user entered a valid amount for the principal
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").focus();
        return 0;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // compute the simple interest amount and the future calendar year
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear() + parseInt(years);
    
    // set the text string confirming the input values to the computation
    // and displaying the simple interest amount
    document.getElementById("result").innerHTML = 
        "If you deposit \<span class='output'>" + principal + 
        "\</span\>,\<br\>at an interest rate of \<span class='output'>" +
        rate + "%\</span\>,\<br\>You will receive an amount of \<span class='output'>" +
        interest + "\</span\>,\<br\>in the year \<span class='output'>" + year + "\</span\>\<br\>";

    document.getElementById("principal").focus();    
}

// displays the interest rate selected by moving the slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        