(this["webpackJsonpgithub-gist-api"]=this["webpackJsonpgithub-gist-api"]||[]).push([[81],{51:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,i,o){if(n.language===a){var r=n.tokenStack=[];n.code=n.code.replace(i,(function(e){if("function"===typeof o&&!o(e))return e;for(var i,s=r.length;-1!==n.code.indexOf(i=t(a,s));)++s;return r[s]=e,i})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var i=0,o=Object.keys(n.tokenStack);!function r(s){for(var u=0;u<s.length&&!(i>=o.length);u++){var c=s[u];if("string"===typeof c||c.content&&"string"===typeof c.content){var p=o[i],g=n.tokenStack[p],l="string"===typeof c?c:c.content,f=t(a,p),k=l.indexOf(f);if(k>-1){++i;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,n.grammar),"language-"+a,g),d=l.substring(k+f.length),y=[];h&&y.push.apply(y,r([h])),y.push(m),d&&y.push.apply(y,r([d])),"string"===typeof c?s.splice.apply(s,[u,1].concat(y)):c.content=y}}else c.content&&r(c.content)}return s}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.7314058a.chunk.js.map