try {
    var counter = 0;
    var a, output, data;
	for (var ln = 0; ln < document.links.length; ln++)
	{
        var lk = document.links[ln];
        var test = lk.href.match('http.*');
        if (test !== null) {
            counter++;
            a += '<li><a href="' + lk.href + '" title="' + lk.text + '">' + lk.href + '</a></li>';
            data += lk.href+'\n';
        }
    }
    a2 = a.slice(9);
    data2 = data.slice(9);
    output = '<div style="margin:30px"><h1>🔗 Alle Verlinkungen unter (<a href="'+window.location.href+'" target="blank">'+window.location.href+'</a>)</h1><p>Insgesamt '+counter+' Verlinkungen gefunden.</p><p><button onclick="'+function(a){var b=document.createElement("textarea"),c=document.getSelection();b.textContent=a,document.body.appendChild(b),c.removeAllRanges(),b.select(),document.execCommand("copy"),c.removeAllRanges(),document.body.removeChild(b)}(data2)+'">Liste Kopieren 📋</button></p><p><ol>'+a2+'</ol></p></div>';
	w = window.open('Alle Verlinkungen', 'scrollbars,resizable,width=400,height=600').document.write(output);
} catch (e) {
    console.log("Fehler beim Ausführen des Bookmarklets!");
    console.log(e);
}