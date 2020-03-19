module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true,
      overrideBrowserslist: ["last 2 versions"]
    })
  ]
};
