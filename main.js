const jquery = require("jquery");

function planning_selector() {

    semes1 = $("input#semester-1")
    semes2 = $("input#semester-2")
    semes1.click();
    semes2.click();
}


//if (window.location.href == "http://intra.epitech.eu/planning/") {
    setTimeout(planning_selector(), 7000);
//}
