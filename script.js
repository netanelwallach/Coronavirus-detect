function showSymptoms() {
    var coronavirusSick = document.getElementById("isCoronavirusSick").value;
    var symptoms = document.querySelector("#coronavirusSymptoms");
    if (coronavirusSick === "yes") {
        symptoms.classList.remove("hide");
    } else {
        symptoms.classList.add("hide");
    }
}

