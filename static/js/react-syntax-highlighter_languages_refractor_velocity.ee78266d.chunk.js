(this["webpackJsonpgithub-gist-api"]=this["webpackJsonpgithub-gist-api"]||[]).push([[141],{225:function(e,t,n){"use strict";function a(e){!function(e){e.languages.velocity=e.languages.extend("markup",{});var t={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:true|false)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};t.variable.inside={string:t.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:t.number,boolean:t.boolean,punctuation:t.punctuation},e.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?]]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|]]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,inside:{punctuation:/[{}]/}},rest:t}},variable:t.variable}),e.languages.velocity.tag.inside["attr-value"].inside.rest=e.languages.velocity}(e)}e.exports=a,a.displayName="velocity",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_velocity.ee78266d.chunk.js.map