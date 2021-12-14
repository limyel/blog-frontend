import {marked} from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/base16/nova.css';

export function toMd(content) {
    let rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        },
    });
    return marked(content).replace(/<pre>/g, "<pre class='hljs'>")
}