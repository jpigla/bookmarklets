<div align="center">
    <h1>Bookmarklets</h1>
    <sub>Bookmarklets for any purpose</sub>
    <br><br>
</div>

## How to use

Use following code as address (url) for your bookmark and customize the url of the js file you want to inject to the page.

```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/jpigla/bookmarklets/<file-path-and-name>.js'})();
```

<div><br></div>
To deliver an executable js file we make use of the incredible service of https://www.jsdelivr.com/.
With jsDelivr you can deliver any GitHub release, commit, or branch. **Example:**

https://cdn.jsdelivr.net/gh/user/repo@version/file -> https://cdn.jsdelivr.net/gh/jpigla/bookmarklets/seo/highlight-links.js

<div><br><hr></div>

## Simple Bookmarklets

**Opens the current web page in Google Search Console** (Login / Account required)  
`javascript: (function () {window.open('https://www.google.com/webmasters/tools/dashboard?hl=de&siteUrl='+.location.protocol + '//' + window.location.hostname, '_blank');})()`


**Opens the current SERP with reduced results (9) to force removal of featured snippet and see organic pos.**  
`javascript:void(location.href=''%20+%20window.location.href%20+%20'&num=9')`