// The MREID of the entity will be extracted and appended to the knowledge graph

try {
    let mreid_tmp = document.getElementsByClassName("DssFqf OIQuDd")[0].getAttribute('href').match("%3D%2F(.*?)%26hl");
    let entityname_tmp = document.getElementsByClassName("kno-ecr-pt")[0].innerText;
    let dataAttribute = mreid_tmp[1];

    if (dataAttribute) {
        try {
            let mreid = dataAttribute.replace(/%2F/g, '/');
            let mreid_html = document.createTextNode(mreid+ " | "); 
            console.log(mreid);
            let mreid_container = document.createElement("strong");
            mreid_container.appendChild(mreid_html);
            mreid_container.style.color = "red";
            mreid_container.style.padding = "0 0 0 1em";
            let box = document.querySelector(".DI6Ufb");
            if (box == null) {
                box = document.querySelector(".kp-hc");
            }
            box.appendChild(mreid_container);
            let link = document.createElement("a");
            link.setAttribute("href", "https://trends.google.com/trends/explore?q=" + entityname_tmp);
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener");
            let linkText = document.createTextNode("Check via Google Trends");
            link.appendChild(linkText);
            box.appendChild(link);
        } catch (e) {
            let mreid_html_no = document.createTextNode("** Faulty MREID! **"); 
        }
    }

} catch (e) {
    let mreid_html_no = document.createTextNode("** No MREID found! **");
    let box_no = document.querySelector("#kxbcct,#resultStats");
    let mreid_container_no = document.createElement("strong");
    mreid_container_no.appendChild(mreid_html_no);
    mreid_container_no.style.color = "red";
    box_no.appendChild(mreid_container_no);
}