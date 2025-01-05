function beforeprint_event() {
    console.log("before event fired");
    document.getElementById("jcm").classList.toggle("is-hidden")
    document.getElementsByName("selector").forEach(select => {
        select.classList.toggle("is-hidden");
        var text = document.getElementById(select.id.concat("text"));
        var drop = document.getElementById(select.id.concat("select"));
        text.textContent = drop.options[drop.selectedIndex]?.text || '';
        text.classList.toggle("is-hidden");
    });
}

function afterprint_event() {
    console.log("after event fired");
    // Get all <p> elements (that replaced <select> elements)
    document.getElementById("jcm").classList.toggle("is-hidden")
    document.getElementsByName("selector").forEach(select => {
        select.classList.toggle("is-hidden");
        var text = document.getElementById(select.id.concat("text").toString());
        text.classList.toggle("is-hidden");
    });
}



function printer() {
    
}


window.addEventListener("beforeprint",beforeprint_event);
window.addEventListener("afterprint",afterprint_event);