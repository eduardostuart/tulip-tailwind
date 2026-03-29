/// <reference path="./types.d.ts" />

const plugin: TulipPlugin = {
  name: "tailwind",

  head() {
    return [
      {
        tag: "script",
        attrs: {
          src: "https://cdn.tailwindcss.com",
        },
      },
    ];
  },

  transformHtml(html: string, page: Page): string {
    let fonts = this.config.fonts || {};
    let fontConfig = "";
    if (fonts.sans || fonts.serif || fonts.mono) {
      let extend = [];
      if (fonts.sans) extend.push("sans:['" + fonts.sans + "','system-ui','sans-serif']");
      if (fonts.serif) extend.push("serif:['" + fonts.serif + "','Georgia','serif']");
      if (fonts.mono) extend.push("mono:['" + fonts.mono + "','ui-monospace','monospace']");
      fontConfig = ",theme:{fontFamily:{" + extend.join(",") + "}}";
    }
    let config = '<script>tailwind.config={darkMode:"class"' + fontConfig + '}</script>';
    return html.replace("</head>", config + "</head>");
  },
};

export default plugin;
