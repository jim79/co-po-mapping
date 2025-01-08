function co1() {
    console.log("co1 change");
    var just = document.getElementById("co1-just");
    var i = 1;
    console.log(document.getElementById("co1-map").children)
    Array.from(document.getElementById("co1-map").getElementsByTagName("td")).forEach(cell =>{
        console.log(cell);
        if (cell.textContent != "") {
            console.log(cell.textContent)
            if (document.getElementById("co1-just-".concat(i)) == null) {
                console.log("null is true");
                if (!cell.hasAttribute("pso")) {
                    console.log("not pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co1-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PO"+i;
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                } else {
                    console.log("pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co1-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PSO"+(i-12);
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                }
                
            } 
        } else {
            if (document.getElementById("co1-just-".concat(i)) != null) {
                document.getElementById("co1-just-".concat(i)).remove()
            }
        }
        i = i+1;
        console.log(i)
    });
}

document.getElementById("co1-map").addEventListener("input",co1);


function co2() {
    console.log("co2 change");
    var just = document.getElementById("co2-just");
    var i = 1;
    console.log(document.getElementById("co2-map").children)
    Array.from(document.getElementById("co2-map").getElementsByTagName("td")).forEach(cell =>{
        console.log(cell);
        if (cell.textContent != "") {
            console.log(cell.textContent)
            if (document.getElementById("co2-just-".concat(i)) == null) {
                console.log("null is true");
                if (!cell.hasAttribute("pso")) {
                    console.log("not pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co2-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PO"+i;
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                } else {
                    console.log("pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co2-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PSO"+(i-12);
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                }
                
            } 
        } else {
            if (document.getElementById("co2-just-".concat(i)) != null) {
                document.getElementById("co2-just-".concat(i)).remove()
            }
        }
        i = i+1;
        console.log(i)
    });
}

document.getElementById("co2-map").addEventListener("input",co2);



function co3() {
    console.log("co3 change");
    var just = document.getElementById("co3-just");
    var i = 1;
    console.log(document.getElementById("co3-map").children)
    Array.from(document.getElementById("co3-map").getElementsByTagName("td")).forEach(cell =>{
        console.log(cell);
        if (cell.textContent != "") {
            console.log(cell.textContent)
            if (document.getElementById("co3-just-".concat(i)) == null) {
                console.log("null is true");
                if (!cell.hasAttribute("pso")) {
                    console.log("not pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co3-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PO"+i;
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                } else {
                    console.log("pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co3-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PSO"+(i-12);
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                }
                
            } 
        } else {
            if (document.getElementById("co3-just-".concat(i)) != null) {
                document.getElementById("co3-just-".concat(i)).remove()
            }
        }
        i = i+1;
        console.log(i)
    });
}

document.getElementById("co3-map").addEventListener("input",co3);



function co4() {
    console.log("co4 change");
    var just = document.getElementById("co4-just");
    var i = 1;
    console.log(document.getElementById("co4-map").children)
    Array.from(document.getElementById("co4-map").getElementsByTagName("td")).forEach(cell =>{
        console.log(cell);
        if (cell.textContent != "") {
            console.log(cell.textContent)
            if (document.getElementById("co4-just-".concat(i)) == null) {
                console.log("null is true");
                if (!cell.hasAttribute("pso")) {
                    console.log("not pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co4-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PO"+i;
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                } else {
                    console.log("pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co4-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PSO"+(i-12);
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                }
                
            } 
        } else {
            if (document.getElementById("co4-just-".concat(i)) != null) {
                document.getElementById("co4-just-".concat(i)).remove()
            }
        }
        i = i+1;
        console.log(i)
    });
}

document.getElementById("co4-map").addEventListener("input",co4);



function co5() {
    console.log("co5 change");
    var just = document.getElementById("co5-just");
    var i = 1;
    console.log(document.getElementById("co5-map").children)
    Array.from(document.getElementById("co5-map").getElementsByTagName("td")).forEach(cell =>{
        console.log(cell);
        if (cell.textContent != "") {
            console.log(cell.textContent)
            if (document.getElementById("co5-just-".concat(i)) == null) {
                console.log("null is true");
                if (!cell.hasAttribute("pso")) {
                    console.log("not pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co5-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PO"+i;
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                } else {
                    console.log("pso");
                    var row = document.createElement("tr");
                    row.setAttribute("width",screen.width)
                    row.id = "co5-just-".concat(i)

                    var po = document.createElement("td");
                    po.textContent = "PSO"+(i-12);
                    po.setAttribute("colspan","2")
                    row.appendChild(po);

                    var cl = document.createElement("td")
                    cl.textContent = cell.textContent
                    cl.setAttribute("colspan","2")
                    row.appendChild(cl)

                    var juster = document.createElement("td")
                    juster.setAttribute("contenteditable","true")
                    juster.setAttribute("colspan","11")
                    juster.classList.add("has-background-success-primary")
                    row.appendChild(juster)

                    just.appendChild(row);
                }
                
            } 
        } else {
            if (document.getElementById("co5-just-".concat(i)) != null) {
                document.getElementById("co5-just-".concat(i)).remove()
            }
        }
        i = i+1;
        console.log(i)
    });
}

document.getElementById("co5-map").addEventListener("input",co5);


function faculty_sync() {
    document.getElementById("sign").textContent = document.getElementById("faculty_name").textContent
}

document.getElementById("faculty_name").addEventListener("input",faculty_sync)