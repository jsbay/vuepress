import {
  PasswordModal_default,
  useGlobalEcrypt
} from "./chunk-K7G5BKLX.js";
import "./chunk-R44WPQYS.js";
import "./chunk-WZA7ZXHW.js";
import "./chunk-QK56XPVB.js";
import "./chunk-JDJQ3254.js";
import "./chunk-TCC3WPER.js";
import "./chunk-SDZGBJLI.js";
import {
  defineComponent,
  h
} from "./chunk-IU5U32L3.js";
import "./chunk-BGOVVDTY.js";
import "./chunk-YACYAO4R.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-KKNQZGBY.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/GloablEncrypt.js
var GloablEncrypt_default = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    return () => {
      var _a;
      return isGlobalEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateGlobalToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_GloablEncrypt__js
var theme_hope_modules_encrypt_components_GloablEncrypt_js_default = GloablEncrypt_default;
export {
  theme_hope_modules_encrypt_components_GloablEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_GloablEncrypt__js.js.map
