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
};

export default plugin;
