import { h } from "virtual-dom";
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "resp-side-banners",

  initialize() {
    withPluginApi("0.8.20", (api) => {
      const right_banner_settings = settings.right_banner;
      const left_banner_settings = settings.left_banner;
    //   if (!customHeaderLinks.length) {
    //     return;
    //   }


      const rightBannerMappedAttrs = right_banner_url;

      const leftBannerMappedAttrs = left_banner_url;
      const leftBanner = document.getElementById('left-banner')
      const rightBanner = document.getElementById('right-banner')
      leftBanner.appendChild(left_banner)
      rightBanner.appendChild(right_banner)
    });
  },
};
