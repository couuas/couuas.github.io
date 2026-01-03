import{M as p}from"./markdown-BMSQkwth.js";import{H as u}from"./highlight-oFPFMupF.js";const n=new p({html:!0,highlight:function(t,e){if(e&&u.getLanguage(e))try{return'<pre class="hljs"><code>'+u.highlight(t,{language:e,ignoreIllegals:!0}).value+"</code></pre>"}catch{}return'<pre class="hljs"><code>'+n.utils.escapeHtml(t)+"</code></pre>"}}),f=n.renderer.rules.fence||function(t,e,s,c,l){return l.renderToken(t,e,s)};n.renderer.rules.fence=function(t,e,s,c,l){const o=t[e],a=o.info?n.utils.escapeHtml(o.info).trim():"",r=a?a.split(/\s+/g)[0]:"";if(r==="mermaid")return`<pre class="mermaid">${o.content}</pre>`;const i=f(t,e,s,c,l);return`<div class="code-wrapper">
                <div class="code-header">
                    <span class="lang-tag">${r}</span>
                    <button class="copy-btn" data-code="${n.utils.escapeHtml(o.content)}">
                        <i class="far fa-copy"></i> Copy
                    </button>
                </div>
                ${i}
            </div>`};n.renderer.rules.table_open=function(){return'<div class="table-responsive"><table class="table table-striped">'};n.renderer.rules.table_close=function(){return"</table></div>"};n.renderer.rules.heading_open=function(t,e,s,c,l){const a=t[e].tag.slice(1),r=t[e+1];if(r&&r.type==="inline"){const d=r.content.toLowerCase().trim().replace(/[^\u4e00-\u9fa5a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");return`<h${a} id="${d}">`}return`<h${a}>`};export{n as default};
