/** @type {import('next').NextConfig} */

const path = require("path");
const MiniSvgDataUriPlugin = require("mini-svg-data-uri");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/,
      generator: {
        dataUrl: (content) => {
          if (typeof content !== "string") {
            content = content.toString();
          }
          return MiniSvgDataUriPlugin(content);
        },
      },
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      resourceQuery: { not: [/url/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
