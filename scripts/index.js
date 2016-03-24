/* global Reveal, hljs */
Reveal.initialize({
    dependencies: [
        {
            src: 'plugin/highlight/highlight.js',
            async: true,
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        }
    ],
    history: true,
    slideNumber: true
});
