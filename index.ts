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
    let config = '<script>tailwind.config={darkMode:"class"}</script>';
    return html.replace("</head>", config + "</head>");
  },
};

export default plugin;
