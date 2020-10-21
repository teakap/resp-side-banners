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
        console.log(rightBannerMappedAttrs)
        console.log('---------------------------')
        console.log(leftBannerMappedAttrs)
        //   const linkTarget = target === "self" ? "" : "_blank";
        //   const keepOnScrollClass = keepOnScroll === "keep" ? ".keep" : "";
        //   const linkClass = `.${linkText
        //     .toLowerCase()
        //     .replace(/\s/gi, "-")}-custom-header-links`;

        //   const anchorAttributes = {
        //     title: linkTitle,
        //     href: linkHref,
        //   };
        //   if (linkTarget) {
        //     anchorAttributes.target = linkTarget;
        //   }

        //   headerLinks.push(
        //     h(
        //       `div.banner-left{deviceClass}`,
        //       h("a", anchorAttributes, linkText)
        //     )
        //   );
        // });

    //   api.decorateWidget(linksPosition, (helper) => {
    //     return helper.h("ul.custom-header-links", headerLinks);
    //   });

    //   api.decorateWidget("home-logo:after", (helper) => {
    //     const dHeader = document.querySelector(".d-header");

    //     if (!dHeader) {
    //       return;
    //     }

    //     const isTitleVisible = helper.attrs.minimized;
    //     if (isTitleVisible) {
    //       dHeader.classList.add("hide-menus");
    //     } else {
    //       dHeader.classList.remove("hide-menus");
    //     }
    //   });
    });
  },
};
