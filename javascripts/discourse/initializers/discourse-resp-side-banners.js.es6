import { h } from "virtual-dom";
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "resp-side-banners",

  initialize() {
    withPluginApi("0.8.20", (api) => {
      const right_banner_url = settings.right_banner_url;
      const left_banner_url = settings.left_banner_url;
    //   if (!customHeaderLinks.length) {
    //     return;
    //   }


      const rightBannerMappedAttrs = right_banner_url;

      const leftBannerMappedAttrs = left_banner_url;
      const leftBanner = document.getElementById('left-banner-a')
      const rightBanner = document.getElementById('right-banner-a')
      
      leftBanner.href = settings.left_banner_url;
      rightBanner.href = settings.right_banner_url;
    });
  },
};
