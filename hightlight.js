try {
    var d, e, f, g, h, i, j, k, l, m, n;
    var o = document['getElementById']('supp-legends-5864');
    var p = {};
    p['link'] = '#A7D189';
    p['nofollow'] = '#FDBD76';
    p['ugc'] = '#FAEBA6';
    p['sponsored'] = '#EB949D';
    var q = {};
    q['link'] = '#86AF68';
    q['nofollow'] = '#DB913F';
    q['ugc'] = '#FCDCA9';
    q['sponsored'] = '#C9646E';
    d = document['getElementsByTagName']('a');
    for (e = 0x0; e < d['length']; e++)
    {
        f = d[e];
        g = f['attributes'];
        j = ![];
        k = ![];
        l = ![];
        m = ![];
        for (h = 0x0; h < g['length']; h++)
        {
            i = g[h];
            n = i['name']['toLowerCase']();
            if (n == 'rel' && i['value']['toLowerCase']()['indexOf']('nofollow') != -0x1)
            {
                j = !![];
            }
            if (n == 'rel' && i['value']['toLowerCase']()['indexOf']('ugc') != -0x1)
            {
                k = !![];
            }
            if (n == 'rel' && i['value']['toLowerCase']()['indexOf']('sponsored') != -0x1)
            {
                l = !![];
            }
            if (n == 'href')
            {
                m = !![];
            }
        }
        if (m)
        {
            if (j) f['style']['backgroundColor'] = p['nofollow'];
            else %20
            if (k) f['style']['backgroundColor'] = p['ugc'];
            else %20
            if (l) f['style']['backgroundColor'] = p['sponsored'];
            else %20 f['style']['backgroundColor'] = p['link'];
            f['style']['border'] = '2px solid ' + (j ? q['nofollow'] : q['link']);
            if (j) f['style']['borderColor'] = q['nofollow'];
            else %20
            if (k) f['style']['borderColor'] = q['ugc'];
            else %20
            if (l) f['style']['borderColor'] = q['sponsored'];
            else %20 f['style']['borderColor'] = q['link'];
            f['style']['color'] = 'black';
            f['style']['padding'] = '3px';
        }
    }
    if (!o)
    {
        var r = document['createElement']('div');
        o = document['createElement']('fieldset');
        o['style']['border'] = '1px solid grey';
        r['setAttribute']('id', 'supp-legends-5864');
        r['style']['position'] = 'fixed';
        r['style']['backgroundColor'] = 'white';
        r['style']['width'] = '300px';
        r['style']['right'] = '5px';
        r['style']['bottom'] = '5px';
        r['style']['zIndex'] = 0x3e7;
        r['appendChild'](o);
        var t = document['createElement']('span');
        var u = document['createTextNode']('X');
        t['appendChild'](u);
        t['style']['position'] = 'absolute';
        t['style']['right'] = '5px';
        t['style']['top'] = '0px';
        t['style']['cursor'] = 'pointer';
        t['style']['padding'] = '0 4px';
        t['style']['backgroundColor'] = 'white';
        t['onclick'] = function ()
        {
            r['parentNode']['removeChild'](r);
        };
        r['appendChild'](t);
        document['body']['appendChild'](r);
    }
    colorize = function (v)
    {
        var w = document['createElement']('legend');
        w['style']['marginLeft'] = '5px';
        var x = document['createTextNode']('Legends: ');
        w['appendChild'](x);
        o['appendChild'](w);
        for (var y in v)
        {
            var z = document['createElement']('DIV');
            z['innerHTML'] = y;
            z['style']['border'] = '2px solid ' + q[y];
            z['style']['padding'] = '3px';
            z['style']['margin'] = '10px';
            z['style']['backgroundColor'] = v[y];
            o['appendChild'](z);
        }
    };
    colorize(p);
} catch (e) {
    console.log("Fehler beim Ausführen des Bookmarklets");
    console.log(e);
}
