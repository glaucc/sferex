import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
    

  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


  return (
        <>
            <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="max-image-preview:large" />
  <title>Sferex – A Social Media Agency to Show Your Potential</title>
  <link rel="dns-prefetch" href="//s0.wp.com" />
  <link rel="dns-prefetch" href="//wordpress.com" />
  
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

  <link href="https://fonts.gstatic.com" crossOrigin rel="preconnect" />
  <link rel="alternate" type="application/rss+xml" title="Sferex » Feed" href="https://bluetesting0.wordpress.com/feed/" />
  <link rel="alternate" type="application/rss+xml" title="Sferex » Comments Feed" href="https://bluetesting0.wordpress.com/comments/feed/" />
  <style dangerouslySetInnerHTML={{__html: "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 0.07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n" }} />
  <link crossOrigin="anonymous" rel="stylesheet" id="all-css-0-1" href="https://s0.wp.com/_static/??-eJxljN0OwiAMhV9I1phMohfGZwFGsBstZIVsvr3oBfHnruec7ytsWbnExXMBqirHGpAFtuwSKSGM/vGTBidygA/NxhS6SGZdfEEOypoVGvrddBnZxTp5eSOTkTu2dzIQ8j8yC5S2Lzbt/XhRN7oetdaX03nU4/wEdcRK4g==&cssminify=yes" type="text/css" media="all" />
  <style id="wp-block-image-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-image img{box-sizing:border-box;height:auto;max-width:100%;vertical-align:bottom}.wp-block-image[style*=border-radius]>a,.wp-block-image[style*=border-radius] img{border-radius:inherit}.wp-block-image.has-custom-border img{box-sizing:border-box}.wp-block-image.aligncenter{text-align:center}.wp-block-image.alignfull img,.wp-block-image.alignwide img{height:auto;width:100%}.wp-block-image.aligncenter,.wp-block-image .aligncenter,.wp-block-image.alignleft,.wp-block-image .alignleft,.wp-block-image.alignright,.wp-block-image .alignright{display:table}.wp-block-image.aligncenter>figcaption,.wp-block-image .aligncenter>figcaption,.wp-block-image.alignleft>figcaption,.wp-block-image .alignleft>figcaption,.wp-block-image.alignright>figcaption,.wp-block-image .alignright>figcaption{caption-side:bottom;display:table-caption}.wp-block-image .alignleft{float:left;margin:.5em 1em .5em 0}.wp-block-image .alignright{float:right;margin:.5em 0 .5em 1em}.wp-block-image .aligncenter{margin-left:auto;margin-right:auto}.wp-block-image figcaption{margin-bottom:1em;margin-top:.5em}.wp-block-image.is-style-circle-mask img,.wp-block-image.is-style-rounded img,.wp-block-image .is-style-rounded img{border-radius:9999px}@supports ((-webkit-mask-image:none) or (mask-image:none)) or (-webkit-mask-image:none){.wp-block-image.is-style-circle-mask img{border-radius:0;-webkit-mask-image:url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></svg>');mask-mode:alpha;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain}}.wp-block-image :where(.has-border-color){border-style:solid}.wp-block-image :where([style*=border-top-color]){border-top-style:solid}.wp-block-image :where([style*=border-right-color]){border-right-style:solid}.wp-block-image :where([style*=border-bottom-color]){border-bottom-style:solid}.wp-block-image :where([style*=border-left-color]){border-left-style:solid}.wp-block-image :where([style*=border-width]){border-style:solid}.wp-block-image :where([style*=border-top-width]){border-top-style:solid}.wp-block-image :where([style*=border-right-width]){border-right-style:solid}.wp-block-image :where([style*=border-bottom-width]){border-bottom-style:solid}.wp-block-image :where([style*=border-left-width]){border-left-style:solid}.wp-block-image figure{margin:0}\n" }} />
  <style id="wp-block-heading-inline-css" dangerouslySetInnerHTML={{__html: "\nh1.has-background,h2.has-background,h3.has-background,h4.has-background,h5.has-background,h6.has-background{padding:1.25em 2.375em}\n" }} />
  <style id="wp-block-columns-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-columns{align-items:normal!important;box-sizing:border-box;display:flex;flex-wrap:wrap!important;margin-bottom:1.75em}@media (min-width:782px){.wp-block-columns{flex-wrap:nowrap!important}}.wp-block-columns.are-vertically-aligned-top{align-items:flex-start}.wp-block-columns.are-vertically-aligned-center{align-items:center}.wp-block-columns.are-vertically-aligned-bottom{align-items:flex-end}@media (max-width:781px){.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column{flex-basis:100%!important}}@media (min-width:782px){.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column{flex-basis:0;flex-grow:1}.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column[style*=flex-basis]{flex-grow:0}}.wp-block-columns.is-not-stacked-on-mobile{flex-wrap:nowrap!important}.wp-block-columns.is-not-stacked-on-mobile>.wp-block-column{flex-basis:0;flex-grow:1}.wp-block-columns.is-not-stacked-on-mobile>.wp-block-column[style*=flex-basis]{flex-grow:0}:where(.wp-block-columns.has-background){padding:1.25em 2.375em}.wp-block-column{flex-grow:1;min-width:0;overflow-wrap:break-word;word-break:break-word}.wp-block-column.is-vertically-aligned-top{align-self:flex-start}.wp-block-column.is-vertically-aligned-center{align-self:center}.wp-block-column.is-vertically-aligned-bottom{align-self:flex-end}.wp-block-column.is-vertically-aligned-bottom,.wp-block-column.is-vertically-aligned-center,.wp-block-column.is-vertically-aligned-top{width:100%}\n.wp-block-columns-is-layout-flow.wp-block-columns-is-layout-flow > *{margin-block-start: 0;margin-block-end: 0;}.wp-block-columns-is-layout-flow.wp-block-columns-is-layout-flow > * + *{margin-block-start: var(--wp--style--block-gap);margin-block-end: 0;}.wp-block-columns-is-layout-constrained.wp-block-columns-is-layout-constrained > *{margin-block-start: 0;margin-block-end: 0;}.wp-block-columns-is-layout-constrained.wp-block-columns-is-layout-constrained > * + *{margin-block-start: var(--wp--style--block-gap);margin-block-end: 0;}.wp-block-columns-is-layout-flex.wp-block-columns-is-layout-flex{gap: var(--wp--style--block-gap);}.wp-block-columns-is-layout-grid.wp-block-columns-is-layout-grid{gap: var(--wp--style--block-gap);}\n" }} />
  <style id="wp-block-paragraph-inline-css" dangerouslySetInnerHTML={{__html: "\n.is-small-text{font-size:.875em}.is-regular-text{font-size:1em}.is-large-text{font-size:2.25em}.is-larger-text{font-size:3em}.has-drop-cap:not(:focus):first-letter{float:left;font-size:8.4em;font-style:normal;font-weight:100;line-height:.68;margin:.05em .1em 0 0;text-transform:uppercase}body.rtl .has-drop-cap:not(:focus):first-letter{float:none;margin-left:.1em}p.has-drop-cap.has-background{overflow:hidden}p.has-background{padding:1.25em 2.375em}:where(p.has-text-color:not(.has-link-color)) a{color:inherit}\n" }} />
  <style id="wp-block-spacer-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-spacer{clear:both}\n" }} />
  <style id="wp-block-group-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-group{box-sizing:border-box}\n" }} />
  <style id="wp-block-separator-inline-css" dangerouslySetInnerHTML={{__html: "\n@charset \"UTF-8\";.wp-block-separator{border:1px solid;border-left:none;border-right:none}.wp-block-separator.is-style-dots{background:none!important;border:none;height:auto;line-height:1;text-align:center}.wp-block-separator.is-style-dots:before{color:currentColor;content:\"···\";font-family:serif;font-size:1.5em;letter-spacing:2em;padding-left:2em}\n.wp-block-separator{border-color: currentColor;border-width: 0 0 1px 0;border-style: solid;color: #d9d9d9;}\n" }} />
  <style id="wp-block-button-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-button__link{box-sizing:border-box;cursor:pointer;display:inline-block;text-align:center;word-break:break-word}.wp-block-button__link.aligncenter{text-align:center}.wp-block-button__link.alignright{text-align:right}:where(.wp-block-button__link){border-radius:9999px;box-shadow:none;padding:calc(.667em + 2px) calc(1.333em + 2px);text-decoration:none}.wp-block-button[style*=text-decoration] .wp-block-button__link{text-decoration:inherit}.wp-block-buttons>.wp-block-button.has-custom-width{max-width:none}.wp-block-buttons>.wp-block-button.has-custom-width .wp-block-button__link{width:100%}.wp-block-buttons>.wp-block-button.has-custom-font-size .wp-block-button__link{font-size:inherit}.wp-block-buttons>.wp-block-button.wp-block-button__width-25{width:calc(25% - var(--wp--style--block-gap, .5em)*.75)}.wp-block-buttons>.wp-block-button.wp-block-button__width-50{width:calc(50% - var(--wp--style--block-gap, .5em)*.5)}.wp-block-buttons>.wp-block-button.wp-block-button__width-75{width:calc(75% - var(--wp--style--block-gap, .5em)*.25)}.wp-block-buttons>.wp-block-button.wp-block-button__width-100{flex-basis:100%;width:100%}.wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-25{width:25%}.wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-50{width:50%}.wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-75{width:75%}.wp-block-button.is-style-squared,.wp-block-button__link.wp-block-button.is-style-squared{border-radius:0}.wp-block-button.no-border-radius,.wp-block-button__link.no-border-radius{border-radius:0!important}.wp-block-button.is-style-outline>.wp-block-button__link,.wp-block-button .wp-block-button__link.is-style-outline{border:2px solid;padding:.667em 1.333em}.wp-block-button.is-style-outline>.wp-block-button__link:not(.has-text-color),.wp-block-button .wp-block-button__link.is-style-outline:not(.has-text-color){color:currentColor}.wp-block-button.is-style-outline>.wp-block-button__link:not(.has-background),.wp-block-button .wp-block-button__link.is-style-outline:not(.has-background){background-color:transparent;background-image:none}.wp-block-button .wp-block-button__link:where(.has-border-color){border-width:initial}.wp-block-button .wp-block-button__link:where([style*=border-top-color]){border-top-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-right-color]){border-right-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-bottom-color]){border-bottom-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-left-color]){border-left-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-style]){border-width:initial}.wp-block-button .wp-block-button__link:where([style*=border-top-style]){border-top-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-right-style]){border-right-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-bottom-style]){border-bottom-width:medium}.wp-block-button .wp-block-button__link:where([style*=border-left-style]){border-left-width:medium}\n" }} />
  <style id="wp-block-buttons-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-buttons.is-vertical{flex-direction:column}.wp-block-buttons.is-vertical>.wp-block-button:last-child{margin-bottom:0}.wp-block-buttons>.wp-block-button{display:inline-block;margin:0}.wp-block-buttons.is-content-justification-left{justify-content:flex-start}.wp-block-buttons.is-content-justification-left.is-vertical{align-items:flex-start}.wp-block-buttons.is-content-justification-center{justify-content:center}.wp-block-buttons.is-content-justification-center.is-vertical{align-items:center}.wp-block-buttons.is-content-justification-right{justify-content:flex-end}.wp-block-buttons.is-content-justification-right.is-vertical{align-items:flex-end}.wp-block-buttons.is-content-justification-space-between{justify-content:space-between}.wp-block-buttons.aligncenter{text-align:center}.wp-block-buttons:not(.is-content-justification-space-between,.is-content-justification-right,.is-content-justification-left,.is-content-justification-center) .wp-block-button.aligncenter{margin-left:auto;margin-right:auto;width:100%}.wp-block-buttons[style*=text-decoration] .wp-block-button,.wp-block-buttons[style*=text-decoration] .wp-block-button__link{text-decoration:inherit}.wp-block-buttons.has-custom-font-size .wp-block-button__link{font-size:inherit}.wp-block-button.aligncenter{text-align:center}\n" }} />
  <link crossOrigin="anonymous" rel="stylesheet" id="all-css-20-1" href="https://s0.wp.com/wp-content/mu-plugins/jetpack-plugin/production/_inc/blocks/button/view.css?m=1656348725h&cssminify=yes" type="text/css" media="all" />
  <style id="wp-block-media-text-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-media-text{box-sizing:border-box;direction:ltr;display:grid;grid-template-columns:50% 1fr;grid-template-rows:auto}.wp-block-media-text.has-media-on-the-right{grid-template-columns:1fr 50%}.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__media{align-self:start}.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media,.wp-block-media-text .wp-block-media-text__content,.wp-block-media-text .wp-block-media-text__media{align-self:center}.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__media{align-self:end}.wp-block-media-text .wp-block-media-text__media{grid-column:1;grid-row:1;margin:0}.wp-block-media-text .wp-block-media-text__content{direction:ltr;grid-column:2;grid-row:1;padding:0 8%;word-break:break-word}.wp-block-media-text.has-media-on-the-right .wp-block-media-text__media{grid-column:2;grid-row:1}.wp-block-media-text.has-media-on-the-right .wp-block-media-text__content{grid-column:1;grid-row:1}.wp-block-media-text__media img,.wp-block-media-text__media video{height:auto;max-width:unset;vertical-align:middle;width:100%}.wp-block-media-text.is-image-fill .wp-block-media-text__media{background-size:cover;height:100%;min-height:250px}.wp-block-media-text.is-image-fill .wp-block-media-text__media>a{display:block;height:100%}.wp-block-media-text.is-image-fill .wp-block-media-text__media img{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}@media (max-width:600px){.wp-block-media-text.is-stacked-on-mobile{grid-template-columns:100%!important}.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media{grid-column:1;grid-row:1}.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content{grid-column:1;grid-row:2}}\n" }} />
  <style id="wp-block-site-title-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-block-site-title a{color:inherit}\n.wp-block-site-title{font-size: var(--wp--preset--font-size--medium);font-weight: 700;}\n.wp-block-site-title a:where(:not(.wp-element-button)){text-decoration: none;}\n.wp-block-site-title a:where(:not(.wp-element-button)):hover{text-decoration: underline;}\n" }} />
  <style id="wp-block-library-inline-css" dangerouslySetInnerHTML={{__html: "\n:root{--wp-admin-theme-color:#007cba;--wp-admin-theme-color--rgb:0,124,186;--wp-admin-theme-color-darker-10:#006ba1;--wp-admin-theme-color-darker-10--rgb:0,107,161;--wp-admin-theme-color-darker-20:#005a87;--wp-admin-theme-color-darker-20--rgb:0,90,135;--wp-admin-border-width-focus:2px;--wp-block-synced-color:#7a00df;--wp-block-synced-color--rgb:122,0,223}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){:root{--wp-admin-border-width-focus:1.5px}}.wp-element-button{cursor:pointer}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}.has-text-align-center{text-align:center}.has-text-align-left{text-align:left}.has-text-align-right{text-align:right}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{clip:rect(1px,1px,1px,1px);word-wrap:normal!important;border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.screen-reader-text:focus{clip:auto!important;background-color:#ddd;-webkit-clip-path:none;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style*=border-top-color]){border-top-style:solid}html :where([style*=border-right-color]){border-right-style:solid}html :where([style*=border-bottom-color]){border-bottom-style:solid}html :where([style*=border-left-color]){border-left-style:solid}html :where([style*=border-width]){border-style:solid}html :where([style*=border-top-width]){border-top-style:solid}html :where([style*=border-right-width]){border-right-style:solid}html :where([style*=border-bottom-width]){border-bottom-style:solid}html :where([style*=border-left-width]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}figure{margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}\n.has-text-align-justify {\n\ttext-align:justify;\n}\n.wp-block-cover__image-background.has-parallax {\n\tbackground-size: cover;\n}\n" }} />
  <link crossOrigin="anonymous" rel="stylesheet" id="all-css-30-1" href="https://s0.wp.com/_static/??-eJx9jcEOAjEIRH9IxNVo3IPxW9ouUczSkkKzv291kz0ZL2SAeTO4KKSSnbKjNNC5PTgbhkk4QwwVF01FYNv3yWyHjLk4d842sT5+p6VSqd9Fg38cQhMHmkm67R+2VseolcygT+Em4M8Ofuvuchsu1+F4Hk+H8fUGD7pKmQ==&cssminify=yes" type="text/css" media="all" />
  <style id="wpcom-admin-bar-inline-css" dangerouslySetInnerHTML={{__html: "\n\n\t\t\t.admin-bar {\n\t\t\t\tposition: inherit !important;\n\t\t\t\ttop: auto !important;\n\t\t\t}\n\t\t\t.admin-bar .goog-te-banner-frame {\n\t\t\t\ttop: 32px !important\n\t\t\t}\n\t\t\t@media screen and (max-width: 782px) {\n\t\t\t\t.admin-bar .goog-te-banner-frame {\n\t\t\t\t\ttop: 46px !important;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@media screen and (max-width: 480px) {\n\t\t\t\t.admin-bar .goog-te-banner-frame {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t}\n\t\t\t}\n\t\t\n" }} />
  <style id="global-styles-inline-css" dangerouslySetInnerHTML={{__html: "\nbody{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--primary: #212121;--wp--preset--color--secondary: #5d588e;--wp--preset--color--foreground: #212121;--wp--preset--color--background: #ffffff;--wp--preset--color--tertiary: #757575;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: clamp(0.833rem, 0.833rem + ((1vw - 0.48rem) * 0.321), 1rem);--wp--preset--font-size--medium: clamp(1rem, 1rem + ((1vw - 0.48rem) * 0.385), 1.2rem);--wp--preset--font-size--large: clamp(1.2rem, 1.2rem + ((1vw - 0.48rem) * 0.462), 1.44rem);--wp--preset--font-size--x-large: clamp(1.44rem, 1.44rem + ((1vw - 0.48rem) * 0.554), 1.728rem);--wp--preset--font-size--x-small: clamp(0.833rem, 0.833rem + ((1vw - 0.48rem) * 1), 0.833rem);--wp--preset--font-size--xx-large: clamp(1.728rem, 1.728rem + ((1vw - 0.48rem) * 0.665), 2.074rem);--wp--preset--font-family--nimbus-sans: Nimbus Sans;--wp--preset--font-family--albert-sans: 'Albert Sans';--wp--preset--font-family--alegreya: Alegreya;--wp--preset--font-family--arvo: Arvo;--wp--preset--font-family--bodoni-moda: 'Bodoni Moda';--wp--preset--font-family--cabin: Cabin;--wp--preset--font-family--chivo: Chivo;--wp--preset--font-family--commissioner: Commissioner;--wp--preset--font-family--cormorant: Cormorant;--wp--preset--font-family--courier-prime: 'Courier Prime';--wp--preset--font-family--crimson-pro: 'Crimson Pro';--wp--preset--font-family--dm-mono: 'DM Mono';--wp--preset--font-family--dm-sans: 'DM Sans';--wp--preset--font-family--domine: Domine;--wp--preset--font-family--eb-garamond: 'EB Garamond';--wp--preset--font-family--epilogue: Epilogue;--wp--preset--font-family--figtree: Figtree;--wp--preset--font-family--fira-sans: 'Fira Sans';--wp--preset--font-family--fraunces: Fraunces;--wp--preset--font-family--ibm-plex-mono: 'IBM Plex Mono';--wp--preset--font-family--ibm-plex-sans: 'IBM Plex Sans';--wp--preset--font-family--inter: Inter;--wp--preset--font-family--josefin-sans: 'Josefin Sans';--wp--preset--font-family--jost: Jost;--wp--preset--font-family--libre-baskerville: 'Libre Baskerville';--wp--preset--font-family--libre-franklin: 'Libre Franklin';--wp--preset--font-family--literata: Literata;--wp--preset--font-family--lora: Lora;--wp--preset--font-family--merriweather: Merriweather;--wp--preset--font-family--montserrat: Montserrat;--wp--preset--font-family--newsreader: Newsreader;--wp--preset--font-family--nunito: Nunito;--wp--preset--font-family--open-sans: 'Open Sans';--wp--preset--font-family--overpass: Overpass;--wp--preset--font-family--petrona: Petrona;--wp--preset--font-family--piazzolla: Piazzolla;--wp--preset--font-family--playfair-display: 'Playfair Display';--wp--preset--font-family--plus-jakarta-sans: 'Plus Jakarta Sans';--wp--preset--font-family--poppins: Poppins;--wp--preset--font-family--raleway: Raleway;--wp--preset--font-family--roboto-slab: 'Roboto Slab';--wp--preset--font-family--roboto: Roboto;--wp--preset--font-family--rubik: Rubik;--wp--preset--font-family--sora: Sora;--wp--preset--font-family--source-sans-pro: 'Source Sans Pro';--wp--preset--font-family--source-serif-pro: 'Source Serif Pro';--wp--preset--font-family--space-mono: 'Space Mono';--wp--preset--font-family--texturina: Texturina;--wp--preset--font-family--work-sans: 'Work Sans';--wp--preset--spacing--30: 0.75rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2rem;--wp--preset--spacing--70: 3rem;--wp--preset--spacing--80: 4rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}body { margin: 0;--wp--style--global--content-size: 520px;--wp--style--global--wide-size: 1000px;}.wp-site-blocks { padding-top: var(--wp--style--root--padding-top); padding-bottom: var(--wp--style--root--padding-bottom); }.has-global-padding { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding :where(.has-global-padding) { padding-right: 0; padding-left: 0; }.has-global-padding > .alignfull { margin-right: calc(var(--wp--style--root--padding-right) * -1); margin-left: calc(var(--wp--style--root--padding-left) * -1); }.has-global-padding :where(.has-global-padding) > .alignfull { margin-right: 0; margin-left: 0; }.has-global-padding > .alignfull:where(:not(.has-global-padding)) > :where([class*=\"wp-block-\"]:not(.alignfull):not([class*=\"__\"]),.wp-block:not(.alignfull),p,h1,h2,h3,h4,h5,h6,ul,ol) { padding-right: var(--wp--style--root--padding-right); padding-left: var(--wp--style--root--padding-left); }.has-global-padding :where(.has-global-padding) > .alignfull:where(:not(.has-global-padding)) > :where([class*=\"wp-block-\"]:not(.alignfull):not([class*=\"__\"]),.wp-block:not(.alignfull),p,h1,h2,h3,h4,h5,h6,ul,ol) { padding-right: 0; padding-left: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }.wp-site-blocks > * { margin-block-start: 0; margin-block-end: 0; }.wp-site-blocks > * + * { margin-block-start: 1.5rem; }body { --wp--style--block-gap: 1.5rem; }body .is-layout-flow > *{margin-block-start: 0;margin-block-end: 0;}body .is-layout-flow > * + *{margin-block-start: 1.5rem;margin-block-end: 0;}body .is-layout-constrained > *{margin-block-start: 0;margin-block-end: 0;}body .is-layout-constrained > * + *{margin-block-start: 1.5rem;margin-block-end: 0;}body .is-layout-flex{gap: 1.5rem;}body .is-layout-grid{gap: 1.5rem;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}body{background-color: var(--wp--preset--color--background);color: var(--wp--preset--color--foreground);font-family: var(--wp--preset--font-family--nimbus-sans);font-size: var(--wp--preset--font-size--small);line-height: 1.5;--wp--style--root--padding-top: 0;--wp--style--root--padding-right: var(--wp--style--block-gap);--wp--style--root--padding-bottom: 0;--wp--style--root--padding-left: var(--wp--style--block-gap);}a:where(:not(.wp-element-button)){color: var(--wp--preset--color--primary);font-family: Nimbus Sans;text-decoration: underline;}a:where(:not(.wp-element-button)):hover{text-decoration: none;}h1, h2, h3, h4, h5, h6{font-family: Roboto;font-style: normal;font-weight: 700;line-height: 1.125;}h1{font-size: var(--wp--preset--font-size--xx-large);}h2{font-size: var(--wp--preset--font-size--x-large);}h3{font-size: var(--wp--preset--font-size--large);}h4{font-size: var(--wp--preset--font-size--medium);}h5{font-size: var(--wp--preset--font-size--small);}h6{font-size: var(--wp--preset--font-size--x-small);}.wp-element-button, .wp-block-button__link{background-color: var(--wp--preset--color--primary);border-radius: 2px;border-width: 0;color: var(--wp--preset--color--background);font-family: inherit;font-size: var(--wp--preset--font-size--x-small);font-weight: 700;letter-spacing: 0.04em;line-height: inherit;padding: 1.050420168em 2.100840336em;text-decoration: none;text-transform: uppercase;}.wp-element-button:hover, .wp-block-button__link:hover{background-color: var(--wp--preset--color--secondary);color: var(--wp--preset--color--background);}.wp-element-button:focus, .wp-block-button__link:focus{background-color: var(--wp--preset--color--secondary);color: var(--wp--preset--color--background);}.wp-element-button:active, .wp-block-button__link:active{background-color: var(--wp--preset--color--primary);color: var(--wp--preset--color--background);}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-primary-color{color: var(--wp--preset--color--primary) !important;}.has-secondary-color{color: var(--wp--preset--color--secondary) !important;}.has-foreground-color{color: var(--wp--preset--color--foreground) !important;}.has-background-color{color: var(--wp--preset--color--background) !important;}.has-tertiary-color{color: var(--wp--preset--color--tertiary) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-primary-background-color{background-color: var(--wp--preset--color--primary) !important;}.has-secondary-background-color{background-color: var(--wp--preset--color--secondary) !important;}.has-foreground-background-color{background-color: var(--wp--preset--color--foreground) !important;}.has-background-background-color{background-color: var(--wp--preset--color--background) !important;}.has-tertiary-background-color{background-color: var(--wp--preset--color--tertiary) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-primary-border-color{border-color: var(--wp--preset--color--primary) !important;}.has-secondary-border-color{border-color: var(--wp--preset--color--secondary) !important;}.has-foreground-border-color{border-color: var(--wp--preset--color--foreground) !important;}.has-background-border-color{border-color: var(--wp--preset--color--background) !important;}.has-tertiary-border-color{border-color: var(--wp--preset--color--tertiary) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-x-small-font-size{font-size: var(--wp--preset--font-size--x-small) !important;}.has-xx-large-font-size{font-size: var(--wp--preset--font-size--xx-large) !important;}.has-nimbus-sans-font-family{font-family: var(--wp--preset--font-family--nimbus-sans) !important;}.has-albert-sans-font-family{font-family: var(--wp--preset--font-family--albert-sans) !important;}.has-alegreya-font-family{font-family: var(--wp--preset--font-family--alegreya) !important;}.has-arvo-font-family{font-family: var(--wp--preset--font-family--arvo) !important;}.has-bodoni-moda-font-family{font-family: var(--wp--preset--font-family--bodoni-moda) !important;}.has-cabin-font-family{font-family: var(--wp--preset--font-family--cabin) !important;}.has-chivo-font-family{font-family: var(--wp--preset--font-family--chivo) !important;}.has-commissioner-font-family{font-family: var(--wp--preset--font-family--commissioner) !important;}.has-cormorant-font-family{font-family: var(--wp--preset--font-family--cormorant) !important;}.has-courier-prime-font-family{font-family: var(--wp--preset--font-family--courier-prime) !important;}.has-crimson-pro-font-family{font-family: var(--wp--preset--font-family--crimson-pro) !important;}.has-dm-mono-font-family{font-family: var(--wp--preset--font-family--dm-mono) !important;}.has-dm-sans-font-family{font-family: var(--wp--preset--font-family--dm-sans) !important;}.has-domine-font-family{font-family: var(--wp--preset--font-family--domine) !important;}.has-eb-garamond-font-family{font-family: var(--wp--preset--font-family--eb-garamond) !important;}.has-epilogue-font-family{font-family: var(--wp--preset--font-family--epilogue) !important;}.has-figtree-font-family{font-family: var(--wp--preset--font-family--figtree) !important;}.has-fira-sans-font-family{font-family: var(--wp--preset--font-family--fira-sans) !important;}.has-fraunces-font-family{font-family: var(--wp--preset--font-family--fraunces) !important;}.has-ibm-plex-mono-font-family{font-family: var(--wp--preset--font-family--ibm-plex-mono) !important;}.has-ibm-plex-sans-font-family{font-family: var(--wp--preset--font-family--ibm-plex-sans) !important;}.has-inter-font-family{font-family: var(--wp--preset--font-family--inter) !important;}.has-josefin-sans-font-family{font-family: var(--wp--preset--font-family--josefin-sans) !important;}.has-jost-font-family{font-family: var(--wp--preset--font-family--jost) !important;}.has-libre-baskerville-font-family{font-family: var(--wp--preset--font-family--libre-baskerville) !important;}.has-libre-franklin-font-family{font-family: var(--wp--preset--font-family--libre-franklin) !important;}.has-literata-font-family{font-family: var(--wp--preset--font-family--literata) !important;}.has-lora-font-family{font-family: var(--wp--preset--font-family--lora) !important;}.has-merriweather-font-family{font-family: var(--wp--preset--font-family--merriweather) !important;}.has-montserrat-font-family{font-family: var(--wp--preset--font-family--montserrat) !important;}.has-newsreader-font-family{font-family: var(--wp--preset--font-family--newsreader) !important;}.has-nunito-font-family{font-family: var(--wp--preset--font-family--nunito) !important;}.has-open-sans-font-family{font-family: var(--wp--preset--font-family--open-sans) !important;}.has-overpass-font-family{font-family: var(--wp--preset--font-family--overpass) !important;}.has-petrona-font-family{font-family: var(--wp--preset--font-family--petrona) !important;}.has-piazzolla-font-family{font-family: var(--wp--preset--font-family--piazzolla) !important;}.has-playfair-display-font-family{font-family: var(--wp--preset--font-family--playfair-display) !important;}.has-plus-jakarta-sans-font-family{font-family: var(--wp--preset--font-family--plus-jakarta-sans) !important;}.has-poppins-font-family{font-family: var(--wp--preset--font-family--poppins) !important;}.has-raleway-font-family{font-family: var(--wp--preset--font-family--raleway) !important;}.has-roboto-slab-font-family{font-family: var(--wp--preset--font-family--roboto-slab) !important;}.has-roboto-font-family{font-family: var(--wp--preset--font-family--roboto) !important;}.has-rubik-font-family{font-family: var(--wp--preset--font-family--rubik) !important;}.has-sora-font-family{font-family: var(--wp--preset--font-family--sora) !important;}.has-source-sans-pro-font-family{font-family: var(--wp--preset--font-family--source-sans-pro) !important;}.has-source-serif-pro-font-family{font-family: var(--wp--preset--font-family--source-serif-pro) !important;}.has-space-mono-font-family{font-family: var(--wp--preset--font-family--space-mono) !important;}.has-texturina-font-family{font-family: var(--wp--preset--font-family--texturina) !important;}.has-work-sans-font-family{font-family: var(--wp--preset--font-family--work-sans) !important;}\n" }} />
  <style id="core-block-supports-inline-css" dangerouslySetInnerHTML={{__html: "\n.wp-elements-e628c86206aa8559ebec64a008758f10 a{color:var(--wp--preset--color--foreground);}.wp-container-25.wp-container-25.wp-container-25.wp-container-25 > * + *{margin-block-start:0px;margin-block-end:0;}.wp-container-54.wp-container-54 > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width:580px;margin-left:auto !important;margin-right:auto !important;}.wp-container-54.wp-container-54 > .alignwide{max-width:580px;}.wp-container-54.wp-container-54 > .alignfull{margin-right:calc(0px * -1);margin-left:calc(0px * -1);}.wp-container-54.wp-container-54.wp-container-54.wp-container-54 > * + *{margin-block-start:35px;margin-block-end:0;}.wp-container-57.wp-container-57{flex-wrap:nowrap;justify-content:space-between;}.wp-container-2.wp-container-2 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-10.wp-container-10 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-29.wp-container-29 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-45.wp-container-45 > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width:100%;margin-left:auto !important;margin-right:auto !important;}.wp-container-2.wp-container-2 > .alignwide,.wp-container-10.wp-container-10 > .alignwide,.wp-container-29.wp-container-29 > .alignwide,.wp-container-45.wp-container-45 > .alignwide{max-width:100%;}.wp-container-2.wp-container-2 .alignfull,.wp-container-10.wp-container-10 .alignfull,.wp-container-29.wp-container-29 .alignfull,.wp-container-45.wp-container-45 .alignfull,.wp-container-54.wp-container-54 .alignfull{max-width:none;}.wp-container-2.wp-container-2 > .alignfull,.wp-container-10.wp-container-10 > .alignfull,.wp-container-29.wp-container-29 > .alignfull{margin-right:calc(var(--wp--preset--spacing--50) * -1);margin-left:calc(var(--wp--preset--spacing--50) * -1);}.wp-container-3.wp-container-3,.wp-container-6.wp-container-6,.wp-container-11.wp-container-11,.wp-container-14.wp-container-14,.wp-container-31.wp-container-31,.wp-container-34.wp-container-34{flex-wrap:nowrap;gap:2em 0px;}.wp-container-4.wp-container-4 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-12.wp-container-12 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-32.wp-container-32 > :where(:not(.alignleft):not(.alignright):not(.alignfull)){margin-right:0 !important;}.wp-container-5.wp-container-5 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-13.wp-container-13 > :where(:not(.alignleft):not(.alignright):not(.alignfull)),.wp-container-33.wp-container-33 > :where(:not(.alignleft):not(.alignright):not(.alignfull)){margin-left:0 !important;}.wp-container-8.wp-container-8 > *,.wp-container-15.wp-container-15 > *,.wp-container-17.wp-container-17 > *,.wp-container-20.wp-container-20 > *,.wp-container-22.wp-container-22 > *,.wp-container-25.wp-container-25 > *,.wp-container-28.wp-container-28 > *,.wp-container-35.wp-container-35 > *,.wp-container-37.wp-container-37 > *,.wp-container-40.wp-container-40 > *,.wp-container-42.wp-container-42 > *,.wp-container-47.wp-container-47 > *,.wp-container-54.wp-container-54 > *{margin-block-start:0;margin-block-end:0;}.wp-container-8.wp-container-8.wp-container-8.wp-container-8 > * + *,.wp-container-28.wp-container-28.wp-container-28.wp-container-28 > * + *,.wp-container-47.wp-container-47.wp-container-47.wp-container-47 > * + *{margin-block-start:1.5rem;margin-block-end:0;}.wp-container-15.wp-container-15.wp-container-15.wp-container-15 > * + *,.wp-container-17.wp-container-17.wp-container-17.wp-container-17 > * + *,.wp-container-20.wp-container-20.wp-container-20.wp-container-20 > * + *,.wp-container-22.wp-container-22.wp-container-22.wp-container-22 > * + *{margin-block-start:12px;margin-block-end:0;}.wp-container-19.wp-container-19,.wp-container-24.wp-container-24,.wp-container-39.wp-container-39,.wp-container-44.wp-container-44,.wp-container-52.wp-container-52,.wp-container-56.wp-container-56{flex-wrap:nowrap;}.wp-container-35.wp-container-35.wp-container-35.wp-container-35 > * + *,.wp-container-37.wp-container-37.wp-container-37.wp-container-37 > * + *,.wp-container-40.wp-container-40.wp-container-40.wp-container-40 > * + *,.wp-container-42.wp-container-42.wp-container-42.wp-container-42 > * + *{margin-block-start:20px;margin-block-end:0;}.wp-container-48.wp-container-48,.wp-container-50.wp-container-50{flex-wrap:nowrap;gap:12px;}\n" }} />
  <link crossOrigin="anonymous" rel="stylesheet" id="all-css-34-1" href="https://s0.wp.com/_static/??-eJx9jtEOgjAMRX/I2kAI8cX4LQPKnNnWpesw/r3jhaAPe+tt7mkPvhPMHJWioj4pUMZUJtSCWT+ernPOFzx1QoHki3UxoyUGz7NRx/EnwOqNkxYaWesjswQXYTICW99qC02ebR0t1tYptiDlDEKJRWFlCf+5hR5eGExWkt2QNxJxS7U+dvuJR7h3463r+2HoxtcXyyd8JA==&cssminify=yes" type="text/css" media="all" />
  <style id="jetpack-global-styles-frontend-style-inline-css" dangerouslySetInnerHTML={{__html: "\n:root { --font-headings: unset; --font-base: unset; --font-headings-default: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif; --font-base-default: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;}\n" }} />
  <link crossOrigin="anonymous" rel="stylesheet" id="all-css-36-1" href="https://s0.wp.com/wp-content/themes/h4/global.css?m=1420737423h&cssminify=yes" type="text/css" media="all" />
  <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://bluetesting0.wordpress.com/xmlrpc.php?rsd" />
  <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://s0.wp.com/wp-includes/wlwmanifest.xml" />
  <meta name="generator" content="WordPress.com" />
  <link rel="shortlink" href="https://wp.me/eKtb3" />
  {/* Jetpack Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Sferex" />
  <meta property="og:description" content="A Social Media Agency to Show Your Potential" />
  <meta property="og:url" content="https://bluetesting0.wordpress.com/" />
  <meta property="og:site_name" content="Sferex" />
  <meta property="og:image" content="https://s0.wp.com/i/blank.jpg" />
  <meta property="og:image:alt" content />
  <meta property="og:locale" content="en_US" />
  <meta property="fb:app_id" content={249643311490} />
  {/* End Jetpack Open Graph Tags */}
  <link rel="shortcut icon" type="image/x-icon" href="https://s0.wp.com/i/favicon.ico" sizes="16x16 24x24 32x32 48x48" />
  <link rel="icon" type="image/x-icon" href="https://s0.wp.com/i/favicon.ico" sizes="16x16 24x24 32x32 48x48" />
  <link rel="apple-touch-icon" href="https://s0.wp.com/i/webclip.png" />
  <link rel="search" type="application/opensearchdescription+xml" href="https://bluetesting0.wordpress.com/osd.xml" title="Sferex" />
  <link rel="search" type="application/opensearchdescription+xml" href="https://s1.wp.com/opensearch.xml" title="WordPress.com" />
  <meta name="application-name" content="Sferex" /><meta name="msapplication-window" content="width=device-width;height=device-height" /><meta name="msapplication-tooltip" content="A Social Media Agency to Show Your Potential" /><meta name="msapplication-task" content="name=Write a post;action-uri=https://wordpress.com/post/bluetesting0.wordpress.com;icon-uri=https://s0.wp.com/i/icons/post.ico" /><meta name="msapplication-task" content="name=Moderate comments;action-uri=https://bluetesting0.wordpress.com/wp-admin/edit-comments.php?comment_status=moderated;icon-uri=https://s0.wp.com/i/icons/comment.ico" /><meta name="msapplication-task" content="name=Upload new media;action-uri=https://bluetesting0.wordpress.com/wp-admin/media-new.php;icon-uri=https://s0.wp.com/i/icons/media.ico" /><meta name="msapplication-task" content="name=Blog stats;action-uri=https://bluetesting0.wordpress.com/wp-admin/index.php?page=stats;icon-uri=https://s0.wp.com/i/icons/stats.ico" /><meta name="description" content="A Social Media Agency to Show Your Potential" />
  <style media="print" dangerouslySetInnerHTML={{__html: "#wpadminbar { display:none; }" }} />
  <style media="screen" dangerouslySetInnerHTML={{__html: "\n\thtml { margin-top: 32px !important; }\n\t@media screen and ( max-width: 782px ) {\n\t\thtml { margin-top: 46px !important; }\n\t}\n" }} />
  <style id="wp-fonts-local" dangerouslySetInnerHTML={{__html: "\n@font-face{font-family:\"Nimbus Sans\";font-style:normal;font-weight:400;font-display:fallback;src:url('https://s0.wp.com/wp-content/themes/pub/tu/assets/fonts/nimbus-sans_normal_400.woff') format('woff');}@font-face{font-family:\"Nimbus Sans\";font-style:normal;font-weight:700;font-display:fallback;src:url('https://s0.wp.com/wp-content/themes/pub/tu/assets/fonts/nimbus-sans_normal_700.woff') format('woff');}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;font-display:fallback;src:url('https://s0.wp.com/wp-content/themes/pub/tu/assets/fonts/nimbus-sans_italic_400.woff') format('woff');}@font-face{font-family:\"Nimbus Sans\";font-style:italic;font-weight:700;font-display:fallback;src:url('https://s0.wp.com/wp-content/themes/pub/tu/assets/fonts/nimbus-sans_italic_700.woff') format('woff');}\n" }} />
  
  <div className="wpcom-bubble action-bubble">
    <div className="bubble-txt" />
  </div>



























  <div className="wp-site-blocks" data-aos="fade-right">
    <main className="wp-block-group is-layout-flow wp-container-8 wp-block-group-is-layout-flow">
      <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{marginTop: '0px', marginBottom: '0px'}}>
        <div className="wp-block-columns alignfull is-layout-flex wp-container-3 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{paddingRight: '0px', paddingLeft: '0px', flexBasis: '66.5%'}}>
            <figure className="wp-block-image size-large"><img decoding="async" width={5472} height={3648} src="https://bluetesting0.files.wordpress.com/2023/04/alesia-kazantceva-xlm6-fpwk5q-unsplash.jpg?w=1024" alt="" className="wp-image-11" /></figure>
          </div>
          <div className="wp-block-column is-vertically-aligned-bottom has-global-padding is-layout-constrained wp-container-2 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '33.5%'}}>
            <h1 className="wp-block-heading" style={{fontSize: 'max(48px, 5.5vw)', fontStyle: 'normal', fontWeight: 700, lineHeight: '0.9'}}>Sferex<br />Agentliyi</h1>
          </div>
        </div>
        <div className="wp-block-columns alignfull is-layout-flex wp-container-6 wp-block-columns-is-layout-flex">
          <div className="wp-block-column has-global-padding is-content-justification-right is-layout-constrained wp-container-4 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '67%'}}>
            <p><em className="roboto-p">Sferex, bütün ölçülü bizneslərə qabaqcıl rəqəmsal həllər təqdim etməkdə ixtisaslaşan dinamik və innovativ agentlikdir. Müvafiq sahələrində mütəxəssis olan yüksək ixtisaslı peşəkarlardan ibarət komanda ilə biz müştərilərimizə məqsədlərinə çatmaqda və bizneslərini inkişaf etdirməkdə kömək edən yüksək keyfiyyətli xidmətlər təqdim etməyə sadiqik.</em></p>
          </div>
          <div className="wp-block-column has-global-padding is-content-justification-left is-layout-constrained wp-container-5 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '33%'}} />
        </div>
        <div style={{height: '2rem'}} aria-hidden="true" className="wp-block-spacer" />
      </div>
    </main>


















    <main data-aos="fade-left" className="wp-block-group is-layout-flow wp-container-28 wp-block-group-is-layout-flow">
      <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{marginTop: '0px', marginBottom: '0px'}}>
       
       
       
              
      <div className="wp-block-columns alignfull is-layout-flex wp-container-11 wp-block-columns-is-layout-flex">
  <div className="wp-block-column is-vertically-aligned-bottom has-global-padding is-layout-constrained wp-container-9 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '37.5%'}}>
    <h1 className="wp-block-heading our-work" style={{fontSize: 'max(48px, 5.5vw)', fontStyle: 'normal', fontWeight: 700, lineHeight: '0.9'}}>Gördüyümüz işlər</h1>
    <div style={{height: '15rem'}} aria-hidden="true" className="wp-block-spacer" />
  </div>
  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{paddingRight: '0px', paddingLeft: '0px', flexBasis: '62.5%'}}>
    <figure className="wp-block-image size-large is-resized"><img decoding="async" src="https://bluetesting0.files.wordpress.com/2023/04/kawe-rodrigues-_cdwc2cygek-unsplash.jpg?w=1024" alt="" className="wp-image-27" width={826} height={550} /></figure>
  </div>
</div>
<div style={{height: '0.2rem'}} aria-hidden="true" className="wp-block-spacer" />

        <div className="wp-block-columns alignfull is-layout-flex wp-container-14 wp-block-columns-is-layout-flex">
        <div style={{height: '1rem'}} aria-hidden="true" className="wp-block-spacer" />

          <div className="wp-block-column has-global-padding is-content-justification-right is-layout-constrained wp-container-12 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '60%'}}>
            <p><em className="roboto-p">Bizim iş portfelimiz müştərilərimiz üçün tamamladığımız bir çox uğurlu layihələri nümayiş etdirir. Fərdi veb və mobil proqramların hazırlanmasından tutmuş rəqəmsal marketinq kampaniyalarına və brendinq təşəbbüslərinə qədər biz bütün ölçülü bizneslərə məqsədlərinə çatmaqda və yeni uğur səviyyələrinə çatmaqda kömək etmişik. <br></br><br></br>Təcrübəli peşəkar komandamız müştərilərimizin gözləntilərini aşan yüksək keyfiyyətli həllər təqdim etməyə sadiqdir. Sizin kimi bizneslər üçün təqdim etdiyimiz təsirli nəticələri görmək üçün portfelimizi araşdırın.</em></p>
          </div>
          <div className="wp-block-column has-global-padding is-content-justification-left is-layout-constrained wp-container-13 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '90%'}} />
        </div>
        <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{marginTop: '0px', marginBottom: '0px', paddingTop: '3.5vw', paddingBottom: '3.5vw'}}>
          <div className="wp-block-group alignwide has-link-color wp-elements-e628c86206aa8559ebec64a008758f10 is-layout-flow wp-container-25 wp-block-group-is-layout-flow">
            <div className="wp-block-columns is-layout-flex wp-container-19 wp-block-columns-is-layout-flex">
              <div data-aos="fade-right" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '33%'}}>
                <div className="wp-block-group is-layout-flow wp-container-15 wp-block-group-is-layout-flow">
                  <figure className="wp-block-image size-full"><img decoding="async" src="https://dotcompatterns.files.wordpress.com/2022/07/martin-katler-qm4xm0pdhfs-unsplash.jpg" alt="" className="wp-image-5638" /></figure>
                  <p style={{fontSize: '0.875rem', lineHeight: '1.4'}}>SFD (Yeni, SMM – @sfdbox və <a href="http://josefr.one">Veb Applikasiya</a>)</p>
                </div>
              </div>
              <div data-aos="fade-left" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '67%'}}>
                <div className="wp-block-group is-layout-flow wp-container-17 wp-block-group-is-layout-flow">
                  <figure className="wp-block-image size-large size-full"><img decoding="async" width={3662} height={2395} src="https://bluetesting0.files.wordpress.com/2023/04/element5-digital-cewgsmd8rvq-unsplash-1.jpg?w=1024" alt="" className="wp-image-15" /></figure>
                  <p style={{fontSize: '0.875rem', lineHeight: '1.4'}}>Makyaj One (SMM – @makyaj.one və Veb Applikasiya – <a href="http://makyaj.one">makyaj.one</a>)</p>
                </div>
              </div>
            </div>
            <div style={{height: '3.5vw'}} aria-hidden="true" className="wp-block-spacer" />
            <div className="wp-block-columns is-layout-flex wp-container-24 wp-block-columns-is-layout-flex">
              <div data-aos="fade-right" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '75%'}}>
                <div className="wp-block-group is-layout-flow wp-container-20 wp-block-group-is-layout-flow">
                  <figure className="wp-block-image size-large size-full"><img decoding="async" width={2968} height={1930} src="https://bluetesting0.files.wordpress.com/2023/04/micky-white-i9otdlel9qo-unsplash.jpg?w=1024" alt="" className="wp-image-17" /></figure>
                  <p style={{fontSize: '0.875rem', lineHeight: '1.4'}}>Yeni, Bürc Official (SMM – @burcofficial)</p>
                </div>
              </div>
              <div data-aos="fade-left" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '25%'}}>
                <div className="wp-block-group is-layout-flow wp-container-22 wp-block-group-is-layout-flow">
                <figure class="wp-block-image size-full"><img decoding="async" width="1536" height="1369" src="https://bluetesting0.files.wordpress.com/2023/04/large_smg00047416.jpg" alt="" class="wp-image-25" /></figure>
                  <p className="has-text-align-center" style={{fontSize: '0.875rem', lineHeight: '1.4'}}><strong>Sənin Səhifən</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height: '2rem'}} aria-hidden="true" className="wp-block-spacer" />
      </div>
    </main>






















    <main data-aos="fade-left" className="wp-block-group is-layout-flow wp-container-47 wp-block-group-is-layout-flow">
      <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{marginTop: '0px', marginBottom: '0px'}}>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="wp-block-columns alignfull is-layout-flex wp-container-31 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-bottom has-global-padding is-layout-constrained wp-container-29 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '33.5%'}}>
            <h1 data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-heading" style={{fontSize: 'max(48px, 5.5vw)', fontStyle: 'normal', fontWeight: 700, lineHeight: '0.9'}}>Nə edirik?</h1>
          </div>
          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{paddingRight: '0px', paddingLeft: '0px', flexBasis: '66.5%'}}>
            <figure className="wp-block-image alignright size-large is-resized"><img decoding="async" src="https://bluetesting0.files.wordpress.com/2023/04/mick-n-50xwnikxixi-unsplash-1.jpg?w=1024" alt="" className="wp-image-12" width={709} height={472} /></figure>
          </div>
        </div>

        <div style={{height: '1rem'}} aria-hidden="true" className="wp-block-spacer" />

        <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-columns alignfull is-layout-flex wp-container-34 wp-block-columns-is-layout-flex">
            
          <div className="wp-block-column has-global-padding is-content-justification-right is-layout-constrained wp-container-32 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '67%'}}>
            <p className="has-text-align-left roboto-p"><em>Sferex-də biz bütün rəqəmsal ehtiyaclarınız üçün bir pəncərə olmaqdan qürur duyuruq. İstər vebsayt dizaynı və inkişafı, mobil proqramların hazırlanması, axtarış sisteminin optimallaşdırılması və ya sosial medianın idarə edilməsini axtarırsınızsa, məqsədlərinizə çatmağınıza kömək edəcək təcrübəmiz və təcrübəmiz var.</em></p>
          </div>
          <div className="wp-block-column has-global-padding is-content-justification-left is-layout-constrained wp-container-33 wp-block-column-is-layout-constrained" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)', flexBasis: '90%'}} />
        </div>


        <div className="wp-block-group alignwide has-global-padding is-layout-constrained wp-container-45 wp-block-group-is-layout-constrained" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <h2 data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-heading">Servislərimiz</h2>
          <div style={{height: '20px'}} aria-hidden="true" className="wp-block-spacer" />
          <div className="wp-block-columns is-layout-flex wp-container-39 wp-block-columns-is-layout-flex">
            <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-group is-layout-flow wp-container-35 wp-block-group-is-layout-flow" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <hr className="wp-block-separator has-alpha-channel-opacity is-style-wide" />
                <h4 className="wp-block-heading has-ast-global-color-2-color has-text-color">Sosial Media Menecmenti</h4>
                <p className="has-ast-global-color-3-color has-text-color">Sosial media marketinq xidmətlərimiz bizneslərə hədəf auditoriyası ilə əlaqə saxlamağa və onlayn mövcudluğunu artırmağa kömək etmək üçün nəzərdə tutulub. Biz hər bir biznesin unikal ehtiyaclarına uyğunlaşdırılmış fərdi sosial media strategiyalarını işləyib hazırlayır və həyata keçiririk ki, bu da brend şüurunu, müştərilərin aktivliyini və mesaj dönümünü artırmaq məqsədi daşıyır. </p>
                <p className="has-ast-global-color-3-color has-text-color">Xidmətlərimizə məzmunun yaradılması, icma idarəçiliyi, sosial media reklamı, performansın izlənməsi və hesabatı daxildir. Sosial mediada mövcudluğunuzu növbəti səviyyəyə qaldırmağınıza və biznes məqsədlərinizə çatmağınıza kömək etmək üçün elə indi qeydiyyatdan <a href="https://forms.gle/e9Lt1SJHMa61GE7B7">keçin.</a></p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-group is-layout-flow wp-container-37 wp-block-group-is-layout-flow" style={{paddingTop: '10px', paddingRight: '0px', paddingBottom: '10px', paddingLeft: '0px'}}>
                <hr className="wp-block-separator has-alpha-channel-opacity is-style-wide" />
                <h4 className="wp-block-heading has-ast-global-color-2-color has-text-color">Veb və Mobil Applikasiya Hazırlanması</h4>
                <p className="has-ast-global-color-3-color has-text-color">Veb və mobil proqram inkişaf xidmətlərimiz bizneslərə müştərilərinin ehtiyaclarına cavab verən innovativ və istifadəçi dostu rəqəmsal həllər yaratmağa kömək etmək üçün nəzərdə tutulub. Biz yüksək keyfiyyətli istifadəçi təcrübələrini təqdim etməyə diqqət yetirməklə, hər bir biznesin unikal tələblərinə uyğunlaşdırılmış fərdi veb və mobil proqramlar yaratmaqda ixtisaslaşmışıq. </p>
                <p className="has-ast-global-color-3-color has-text-color">Xidmətlərimizə ideya və konsepsiyanın inkişafı, UI/UX dizaynı, proqram təminatının inkişafı, sınaq və yerləşdirmə, davamlı dəstək və texniki xidmət daxildir. İdeyalarınızı həyata keçirməyə və biznesinizi irəli aparacaq rəqəmsal həllər yaratmağımız üçün <a href="http://forms.gle/e9Lt1SJHMa61GE7B7">klikləyin</a>.</p>
              </div>
            </div>
          </div>
          {/* <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-columns is-layout-flex wp-container-44 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-group is-layout-flow wp-container-40 wp-block-group-is-layout-flow" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <hr className="wp-block-separator has-alpha-channel-opacity is-style-wide" />
                <h4 className="wp-block-heading has-ast-global-color-2-color has-text-color">Biznes İnkişafı</h4>
                <p>Biznesin inkişafı xidmətlərimiz bizneslərə böyümə üçün yeni imkanları müəyyən etməyə və məqsədlərinə çatmaq üçün strategiyalar hazırlamağa kömək etmək üçün nəzərdə tutulub. Biz müştərilərimizin unikal ehtiyaclarını və problemlərini anlamaq üçün onlarla sıx əməkdaşlıq edirik və onların xüsusi tələblərinə uyğunlaşdırılmış fərdi həllər hazırlayırıq.<br /></p>
                <p>Xidmətlərimizə bazar araşdırması və təhlili, strateji planlaşdırma, brendinq və yerləşdirmə, potensialın yaradılması və satış strategiyasının hazırlanması daxildir. Təcrübəli peşəkarlardan ibarət komandamız müştərilərimizə biznes məqsədlərinə çatmaqda və yeni uğur səviyyələrinə çatmaqda kömək etməyə sadiqdir. Biznesinizi növbəti səviyyəyə çıxarmağınız üçün <a href="http://forms.gle/e9Lt1SJHMa61GE7B7">klikləyin.</a></p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-group is-layout-flow wp-container-42 wp-block-group-is-layout-flow" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <hr className="wp-block-separator has-alpha-channel-opacity is-style-wide" />
                <h4 className="wp-block-heading has-ast-global-color-2-color has-text-color">Rəqəmsal Marketinq</h4>
                <p className="has-ast-global-color-3-color has-text-color">Rəqəmsal marketinq xidmətlərimiz bizneslərə onlayn görünmələrini artırmaq, daha çox potensial müştəriləri cəlb etmək və dönüşümləri təmin etmək üçün nəzərdə tutulub. Biz ölçülə bilən nəticələrin çatdırılmasına diqqət yetirməklə, hər bir biznesin unikal ehtiyaclarına uyğunlaşdırılmış fərdi rəqəmsal marketinq strategiyaları hazırlayır və həyata keçiririk. </p>
                <p className="has-ast-global-color-3-color has-text-color">Xidmətlərimizə axtarış sisteminin optimallaşdırılması (SEO), klik başına ödəniş (PPC) reklamı, sosial media marketinqi, e-poçt marketinqi və məzmun marketinqi daxildir. Müştərilərimizin rəqəmsal marketinq investisiyalarının təsirini görə bilmələrini təmin etmək üçün biz həmçinin ətraflı performans izləmə və hesabat təqdim edirik. Gəlin biznesinizi böyütmək və hədəflərinizə çatmaq üçün rəqəmsal marketinqin gücündən istifadə etmək üçün <a href="http://forms.gle/e9Lt1SJHMa61GE7B7">klikləyin.</a></p>
              </div>
            </div>
          </div> */}
        </div>
        <div style={{height: '2rem'}} aria-hidden="true" className="wp-block-spacer" />
      </div>
    </main>




    <div data-aos="fade-in" data-aos-anchor-placement="center-bottom" style={{padding: '75% 0 0 0', position: 'relative'}}><iframe src="https://player.vimeo.com/video/818522098?h=79c8da18a5&badge=0&autopause=0&player_id=0&app_id=58479" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} title="b9d30362f20112b48da6d2a82fb98bebd76eb07377eae9d32751358322086e95.mp4" /></div>






















    <div className="wp-block-group alignwide has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{paddingTop: '100px', paddingBottom: '100px'}}>
      <div className="wp-block-columns alignwide is-layout-flex wp-container-52 wp-block-columns-is-layout-flex">
        <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
          <p><em className="roboto-p">“Sferex Agentliyi ən yaxşı rəqəmsal marketinq xidmətlərini təqdim etməyə gəldikdə inanılmazdır,xüsusilə də, söhbət sosial media menecmentindən gedirsə.”</em></p>
          <div className="wp-block-group is-nowrap is-layout-flex wp-container-48 wp-block-group-is-layout-flex">
            {/* <figure className="wp-block-image size-full is-resized is-style-rounded"><img decoding="async" src="https://dotcompatterns.files.wordpress.com/2022/09/145a9-placeholderimage-square.png" alt="" className="wp-image-3804" width={60} /></figure> */}
            <p><strong>Lamiyə xanım<br /></strong>CEO, Makyaj One</p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
          {/* <div style={{height: '100px'}} aria-hidden="true" className="wp-block-spacer" /> */}
          <p><em className="roboto-p">“Sferex Agentliyi ilə işləmək gözəl təcrübə oldu. Əla <br></br>rəqəmsal marketinq xidmətləri axtaran hər kəsə <br></br>tövsiyə edirəm.”</em></p>
          <div style={{height: '0.02rem'}} aria-hidden="true" className="wp-block-spacer" />

          <div className="wp-block-group is-nowrap is-layout-flex wp-container-50 wp-block-group-is-layout-flex">
            {/* <figure className="wp-block-image size-full is-resized is-style-rounded"><img decoding="async" src="https://dotcompatterns.files.wordpress.com/2022/09/145a9-placeholderimage-square.png" alt="" className="wp-image-3804" width={60} /></figure> */}
            <p><strong>Yusif bəy<br /></strong>CEO, SFD</p>
          </div>
        </div>
      </div>
    </div>



























    <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="wp-block-group alignfull has-border-color is-layout-flow wp-block-group-is-layout-flow" style={{borderColor: '#0b0c0f', borderWidth: '20px'}}>
      <div className="wp-block-media-text alignfull is-stacked-on-mobile has-white-background-color has-text-color has-background" style={{color: '#222222'}}><figure className="wp-block-media-text__media"><img decoding="async" width={1300} height={864} src="https://bluetesting0.files.wordpress.com/2023/04/chjpdmf0zs9zdgf0awmvzmlszxmvd2vic2l0zs8ymdiyltexl2zyymfsbhnfdg9few91x2rhzgr5lwltywdllmpwzw.jpg?w=1024" alt="" className="wp-image-21 size-full" /></figure><div className="wp-block-media-text__content">
          <div data-aos="fade-in" data-aos-anchor-placement="center-bottom" className="wp-block-group has-global-padding is-layout-constrained wp-container-54 wp-block-group-is-layout-constrained" style={{paddingTop: '20px', paddingRight: '0px', paddingBottom: '20px', paddingLeft: '0px'}}>
            <h2 className="wp-block-heading has-text-align-center" id="more-than-words" style={{fontSize: 'clamp(37.5px, 2.344rem + ((1vw - 7.68px) * 1.502), 50px)', fontStyle: 'normal', fontWeight: 600}}>Sözlərdən daha artıq</h2>
            <p className="roboto-p">Bizim reklam agentliyimiz zərif və güclü idman avtomobilinə bənzəyir, brendinizin böyüməsini sürətləndirmək və rəqabəti tozda buraxmaq üçün nəzərdə tutulub. </p>
            <p className="roboto-p">Mütəxəssis marketinq strategiyalarının incə tənzimlənmiş mühərriki və kreativ reklam konseptlərinin dinamik şassisi ilə biz marketinq səylərini artırmaq istəyən bizneslər üçün uğura aparan həyəcanverici yol təklif edirik.</p>
            <div className="wp-block-jetpack-recurring-payments"><div className="wp-block-jetpack-button aligncenter is-style-outline wp-block-button" style={{maxWidth: '100%'}}><a className="wp-block-button__link is-style-outline has-text-color no-border-radius btn" style={{color: '#222222', width: '50%', maxWidth: '100%'}} data-id-attr="recurring-payments-id" id="recurring-payments-id" href="http://forms.gle/e9Lt1SJHMa61GE7B7" target="_blank" role="button" rel="noopener noreferrer"><strong className="txt">Qeydiyyatdan Keç</strong></a></div></div>
          </div>
        </div></div>
    </div>
    <footer className="wp-block-template-part">
      <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style={{paddingTop: 'var(--wp--preset--spacing--80)'}}>
        <div className="wp-block-group alignfull is-content-justification-space-between is-nowrap is-layout-flex wp-container-57 wp-block-group-is-layout-flex" style={{paddingTop: 'var(--wp--preset--spacing--60)', paddingBottom: 'var(--wp--preset--spacing--60)'}}>
          <div className="wp-block-group is-nowrap is-layout-flex wp-container-56 wp-block-group-is-layout-flex" style={{paddingRight: 'var(--wp--preset--spacing--50)', paddingLeft: 'var(--wp--preset--spacing--50)'}}>
            <h1 className="wp-block-site-title"><a href="https://sfferex.web.app" target="_self" rel="home" aria-current="page">Sferex</a></h1>
            <p className="has-x-small-font-size"><a href="https://www.instagram.com/sferexagency">Instagram</a> <p>sferexagency@gmail.com</p></p>
          </div>
          <p className="has-text-align-right has-x-small-font-size"><a href="https://sfferex.web.app" rel="nofollow">Built by Sferex Agency</a></p>
        </div>
      </div>
    </footer></div>
  

  
  <link crossOrigin="anonymous" rel="stylesheet" id="screen-css-0-2" href="https://s0.wp.com/wp-content/blog-plugins/launch-banner/style.css?m=1671120003h&cssminify=yes" type="text/css" media="screen" />
  <noscript>&lt;img src="https://pixel.wp.com/b.gif?v=noscript" style="height:1px;width:1px;overflow:hidden;position:absolute;bottom:1px;" alt="" /&gt;</noscript>
</div>

        </>
    )
}