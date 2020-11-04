'use strict';



;define("pandemic/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pandemic/adapters/application", ["exports", "emberfire/adapters/realtime-database"], function (_exports, _realtimeDatabase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _realtimeDatabase.default.extend({});

  _exports.default = _default;
});
;define("pandemic/app", ["exports", "ember-resolver", "ember-load-initializers", "pandemic/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("pandemic/authenticators/firebase", ["exports", "emberfire/authenticators/firebase"], function (_exports, _firebase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("pandemic/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("pandemic/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("pandemic/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("pandemic/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("pandemic/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("pandemic/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("pandemic/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("pandemic/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("pandemic/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("pandemic/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("pandemic/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("pandemic/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("pandemic/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("pandemic/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("pandemic/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("pandemic/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("pandemic/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("pandemic/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("pandemic/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("pandemic/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("pandemic/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("pandemic/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("pandemic/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pandemic/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("pandemic/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pandemic/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("pandemic/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("pandemic/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("pandemic/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("pandemic/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("pandemic/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("pandemic/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("pandemic/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("pandemic/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pandemic/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("pandemic/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pandemic/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("pandemic/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("pandemic/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("pandemic/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("pandemic/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("pandemic/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("pandemic/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("pandemic/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("pandemic/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("pandemic/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("pandemic/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("pandemic/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("pandemic/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("pandemic/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("pandemic/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("pandemic/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("pandemic/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("pandemic/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("pandemic/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("pandemic/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("pandemic/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("pandemic/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pandemic/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("pandemic/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("pandemic/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("pandemic/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("pandemic/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("pandemic/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pandemic/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("pandemic/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("pandemic/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
;define("pandemic/components/role-chooser", ["exports", "@glimmer/component", "pandemic/utils/constants"], function (_exports, _component, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <BsDropdown as |dropdown|>
    <dropdown.button @type="warning" disabled={{@inProgress}}>
      {{#let (get-role-info @currentPlayer.role) as |currentRole|}}
        {{if currentRole currentRole.name 'Choose a Role'}}
      {{/let}}
      <span class="caret"></span>
      <BsTooltip
        @title="If unselected, you'll be randomly assigned a role when the game starts."
        @placement="right"
      />
    </dropdown.button>
    <dropdown.menu as |menu|>
      {{#each this.availableRoles as |role|}}
        <menu.item>
          <button
            type="button"
            class="dropdown-item"
            {{on 'click' (fn @selectItem role.id)}}
          >
            {{role.name}}
          </button>
        </menu.item>
      {{else}}
        <menu.item>
          <button type="button" class="dropdown-item" disabled>
            No available roles
          </button>
        </menu.item>
      {{/each}}
    </dropdown.menu>
  </BsDropdown>
  */
  {"id":"QefgBS/H","block":"{\"symbols\":[\"dropdown\",\"menu\",\"role\",\"currentRole\",\"@selectItem\",\"@inProgress\",\"@currentPlayer\"],\"statements\":[[8,\"bs-dropdown\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,[32,1,[\"button\"]],[[16,\"disabled\",[32,6]]],[[\"@type\"],[\"warning\"]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[32,7,[\"role\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,2],[[32,4],[32,4,[\"name\"]],\"Choose a Role\"],null]],[2,\"\\n\"]],\"parameters\":[4]}]]],[2,\"    \"],[10,\"span\"],[14,0,\"caret\"],[12],[13],[2,\"\\n    \"],[8,\"bs-tooltip\",[],[[\"@title\",\"@placement\"],[\"If unselected, you'll be randomly assigned a role when the game starts.\",\"right\"]],null],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,[32,1,[\"menu\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,6],[[30,[36,5],[[30,[36,5],[[32,0,[\"availableRoles\"]]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[8,[32,2,[\"item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[11,\"button\"],[24,0,\"dropdown-item\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,5],[32,3,[\"id\"]]],null]],null],[12],[2,\"\\n          \"],[1,[32,3,[\"name\"]]],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[2,\"      \"],[8,[32,2,[\"item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"button\"],[14,0,\"dropdown-item\"],[14,\"disabled\",\"\"],[14,4,\"button\"],[12],[2,\"\\n          No available roles\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"]],\"parameters\":[2]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"if\",\"get-role-info\",\"let\",\"-track-array\",\"each\"]}","meta":{"moduleName":"pandemic/components/role-chooser.hbs"}});

  /**
   * @class RoleChooser
   * @extends Glimmer.Component
   */
  class RoleChooser extends _component.default {
    get availableRoles() {
      const usedRoles = this.args.players.map(player => player.role);
      return [..._constants.ROLES].filter(role => !usedRoles.includes(role.id));
    }

    constructor() {
      super(...arguments);
    }

  }

  _exports.default = RoleChooser;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, RoleChooser);
});
;define("pandemic/components/team-info-display", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <BsAccordion as |acc|>
    {{#each @players as |player|}}
      {{#let (get-role-info player.role) as |role|}}
        <acc.item as |aitem|>
          <aitem.title class="team-info-display__name">
            <span>
              {{player.name}}
            </span>
            {{#if player.isTurn}}
              <FaIcon @icon="star" class="turn-indicator text-success" />
              <BsTooltip
                @title="It is this player's turn!"
                @triggerElement=".turn-indicator"
                @placement="right"
              />
            {{/if}}
            <br />
            <span class="small text-secondary">
              {{role.name}}
            </span>
          </aitem.title>
          <aitem.body>
            {{#if role}}
              <p>
                <b>Role Description:</b>
                {{role.description}}
              </p>
            {{/if}}
            <p>
                <b>Hand:</b>
              </p>
          </aitem.body>
        </acc.item>
      {{/let}}
    {{/each}}
  </BsAccordion>
  */
  {"id":"leG4kjSi","block":"{\"symbols\":[\"acc\",\"player\",\"role\",\"aitem\",\"@players\"],\"statements\":[[8,\"bs-accordion\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,5]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,2,[\"role\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,[32,1,[\"item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,4,[\"title\"]],[[24,0,\"team-info-display__name\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[12],[2,\"\\n            \"],[1,[32,2,[\"name\"]]],[2,\"\\n          \"],[13],[2,\"\\n\"],[6,[37,0],[[32,2,[\"isTurn\"]]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"fa-icon\",[[24,0,\"turn-indicator text-success\"]],[[\"@icon\"],[\"star\"]],null],[2,\"\\n            \"],[8,\"bs-tooltip\",[],[[\"@title\",\"@triggerElement\",\"@placement\"],[\"It is this player's turn!\",\".turn-indicator\",\"right\"]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[10,\"br\"],[12],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"small text-secondary\"],[12],[2,\"\\n            \"],[1,[32,3,[\"name\"]]],[2,\"\\n          \"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[8,[32,4,[\"body\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,0],[[32,3]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"p\"],[12],[2,\"\\n              \"],[10,\"b\"],[12],[2,\"Role Description:\"],[13],[2,\"\\n              \"],[1,[32,3,[\"description\"]]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[10,\"p\"],[12],[2,\"\\n              \"],[10,\"b\"],[12],[2,\"Hand:\"],[13],[2,\"\\n            \"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[4]}]]],[2,\"\\n\"]],\"parameters\":[3]}]]]],\"parameters\":[2]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"if\",\"get-role-info\",\"let\",\"-track-array\",\"each\"]}","meta":{"moduleName":"pandemic/components/team-info-display.hbs"}});

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("pandemic/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("pandemic/controllers/game", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let GameController = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, (_class = (_temp = class GameController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "currentPlayerName", void 0);

      _initializerDefineProperty(this, "showGameInfo", _descriptor, this);

      _initializerDefineProperty(this, "showTeamInfo", _descriptor2, this);
    }

    /**
     * @description Whether or not the show the drawer
     * @type {Boolean}
     */
    get showDrawer() {
      return this.showGameInfo || this.showTeamInfo;
    }

    changeName() {
      if (this.currentPlayerName !== this.model.currentPlayer.name) {
        this.model.currentPlayer.name = this.currentPlayerName;
        return this.model.currentPlayer.save();
      }
    }

    changeRole(role) {
      if (role !== this.model.currentPlayer.role && !this.model.game.inProgress) {
        this.model.currentPlayer.role = role;
        return this.model.currentPlayer.save();
      }
    }

    startGame() {
      // TODO: Game setup
      this.model.game.inProgress = true;
      return this.model.game.save();
    }
    /**
     * @description Show game info in the drawer
     */


    openGameInfo() {
      this.showGameInfo = true;
      this.showTeamInfo = false;
    }
    /**
     * @description Show team info in the drawer
     */


    openTeamInfo() {
      this.showTeamInfo = true;
      this.showGameInfo = false;
    }
    /**
     * @description Close the drawer
     */


    closeDrawer() {
      this.showGameInfo = false;
      this.showTeamInfo = false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showGameInfo", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showTeamInfo", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "changeName", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "changeName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeRole", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "changeRole"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "startGame", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "startGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openGameInfo", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "openGameInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openTeamInfo", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "openTeamInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeDrawer", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "closeDrawer"), _class.prototype)), _class));
  _exports.default = GameController;
});
;define("pandemic/controllers/index", ["exports", "pandemic/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let IndexController = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, (_class = (_temp = class IndexController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "joinCode", '');

      _initializerDefineProperty(this, "createErrorMessage", _descriptor, this);

      _initializerDefineProperty(this, "joinErrorMessage", _descriptor2, this);
    }

    /**
     * @description Creates a new game in the DB and initializes game structure
     * @returns {Promise}
     */
    createNewGame() {
      const code = this._generateRandomCode();

      return this.store.queryRecord('game', {
        filter: {
          code
        }
      }).then(() => this.createNewGame()).catch(() => this._initializeNewGame(code));
    }
    /**
     * @description Joins an existing game in the DB if possible
     * @returns {Promise}
     */


    joinGame() {
      this.joinErrorMessage = '';

      if (!this.joinCode) {
        this.joinErrorMessage = 'Please provide a game code';
        return Ember.RSVP.reject(this.joinErrorMessage);
      }

      return this.store.queryRecord('game', {
        filter: {
          code: this.joinCode
        }
      }).then(game => Ember.RSVP.hash({
        game,
        players: game.players
      })).then(({
        game,
        players
      }) => {
        if (game.inProgress) {
          this.joinErrorMessage = `Game ${this.joinCode} is already in progress`;
        } else if (players.length >= _constants.MAX_PLAYERS) {
          this.joinErrorMessage = `Game ${this.joinCode} already has the maximum number of players`;
        }
      }).catch(e => {
        this.joinErrorMessage = `Unexpected error: ${e.message}`;
      }).finally(() => {
        if (this.joinErrorMessage) {
          return Ember.RSVP.reject(this.joinErrorMessage);
        }

        this.transitionToRoute('game', this.joinCode);
      });
    }
    /**
     * @private
     * @description Generates a random code for the new game
     * @param {Number} [length=4] Length of the random code
     * @returns {String}
     */


    _generateRandomCode(length = 4) {
      let code = '';

      for (let i = 0; i < length; i++) {
        code += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
      }

      return code;
    }
    /**
     * @private
     * @description Initializes a new game with the given code
     * @param {String} code
     * @returns {Promise}
     */


    _initializeNewGame(code) {
      this.createErrorMessage = '';
      const promises = [];
      const newGame = this.store.createRecord('game', {
        code,
        infectionDeck: [1, 2, 3],
        infectionDiscard: [],
        playerDeck: [4, 5, 6],
        playerDiscard: []
      });
      promises.push(newGame.save());

      for (let i = 0; i < _constants.NUM_CITIES; i++) {
        const city = this.store.createRecord('city', {
          cardId: i,
          game: newGame
        });
        promises.push(city.save());
      }

      return Ember.RSVP.all(promises).then(() => {
        this.transitionToRoute('game', code);
      }).catch(e => {
        this.createErrorMessage = `Unexpected error: ${e.message}`;
        return Ember.RSVP.reject(this.createErrorMessage);
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "createErrorMessage", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "joinErrorMessage", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "createNewGame", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "createNewGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "joinGame", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "joinGame"), _class.prototype)), _class));
  _exports.default = IndexController;
});
;define("pandemic/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("pandemic/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pandemic/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("pandemic/helpers/app-version", ["exports", "pandemic/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("pandemic/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("pandemic/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("pandemic/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("pandemic/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("pandemic/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("pandemic/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("pandemic/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("pandemic/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("pandemic/helpers/get-role-info", ["exports", "pandemic/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function getRoleInfo([roleId]) {
    return [..._constants.ROLES].find(role => role.id === roleId);
  });

  _exports.default = _default;
});
;define("pandemic/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("pandemic/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("pandemic/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("pandemic/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("pandemic/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("pandemic/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("pandemic/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("pandemic/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("pandemic/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("pandemic/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("pandemic/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("pandemic/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("pandemic/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("pandemic/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("pandemic/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("pandemic/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("pandemic/helpers/set", ["exports", "ember-set-helper/helpers/set"], function (_exports, _set) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _set.default;
    }
  });
});
;define("pandemic/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("pandemic/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("pandemic/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("pandemic/index", [], function () {
  "use strict";
});
;define("pandemic/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "pandemic/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("pandemic/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("pandemic/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("pandemic/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("pandemic/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("pandemic/initializers/emberfire", ["exports", "emberfire/initializers/emberfire"], function (_exports, _emberfire) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberfire.default;
    }
  });
});
;define("pandemic/initializers/export-application-global", ["exports", "pandemic/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("pandemic/initializers/load-bootstrap-config", ["exports", "pandemic/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("pandemic/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("pandemic/models/city", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CityModel = (_dec = (0, _model.attr)('number'), _dec2 = (0, _model.belongsTo)('game'), _dec3 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec4 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec5 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec6 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec7 = (0, _model.attr)('boolean', {
    defaultValue: false
  }), (_class = (_temp = class CityModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "cardId", _descriptor, this);

      _initializerDefineProperty(this, "game", _descriptor2, this);

      _initializerDefineProperty(this, "diseaseCubesBlack", _descriptor3, this);

      _initializerDefineProperty(this, "diseaseCubesBlue", _descriptor4, this);

      _initializerDefineProperty(this, "diseaseCubesRed", _descriptor5, this);

      _initializerDefineProperty(this, "diseaseCubesYellow", _descriptor6, this);

      _initializerDefineProperty(this, "hasResearchStation", _descriptor7, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cardId", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "game", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "diseaseCubesBlack", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "diseaseCubesBlue", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "diseaseCubesRed", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "diseaseCubesYellow", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "hasResearchStation", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CityModel;
});
;define("pandemic/models/game", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const INFECTION_RATES = [2, 2, 2, 3, 3, 4, 4];
  const TOTAL_RESEARCH_STATIONS = 6;
  const TOTAL_DISEASE_CUBES_PER_COLOR = 24;
  let GameModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('boolean', {
    defaultValue: false
  }), _dec3 = (0, _model.hasMany)('player'), _dec4 = (0, _model.hasMany)('city'), _dec5 = (0, _model.attr)('numberArray'), _dec6 = (0, _model.attr)('numberArray'), _dec7 = (0, _model.attr)('numberArray'), _dec8 = (0, _model.attr)('numberArray'), _dec9 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec10 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec11 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec12 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec13 = (0, _model.attr)('number', {
    defaultValue: 0
  }), _dec14 = (0, _model.attr)('number', {
    defaultValue: 0
  }), (_class = (_temp = class GameModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "code", _descriptor, this);

      _initializerDefineProperty(this, "inProgress", _descriptor2, this);

      _initializerDefineProperty(this, "players", _descriptor3, this);

      _initializerDefineProperty(this, "cities", _descriptor4, this);

      _initializerDefineProperty(this, "infectionDeck", _descriptor5, this);

      _initializerDefineProperty(this, "infectionDiscard", _descriptor6, this);

      _initializerDefineProperty(this, "playerDeck", _descriptor7, this);

      _initializerDefineProperty(this, "playerDiscard", _descriptor8, this);

      _initializerDefineProperty(this, "numOutbreaks", _descriptor9, this);

      _initializerDefineProperty(this, "numEpidemics", _descriptor10, this);

      _initializerDefineProperty(this, "cureStatusBlack", _descriptor11, this);

      _initializerDefineProperty(this, "cureStatusBlue", _descriptor12, this);

      _initializerDefineProperty(this, "cureStatusRed", _descriptor13, this);

      _initializerDefineProperty(this, "cureStatusYellow", _descriptor14, this);
    }

    // Infection rate, determined by number of epidemics that have occurred
    get infectionRate() {
      return INFECTION_RATES[this.numEpidemics];
    } // UNCURED: 0, CURED: 1, ERADICATED: 2


    // How many research stations are still available to construct
    get remainingResearchStations() {
      return this.cities ? this.cities.reduce((total, city) => total - (city.hasResearchStation ? 1 : 0), TOTAL_RESEARCH_STATIONS) : TOTAL_RESEARCH_STATIONS;
    }
    /**
     * How many disease cubes are remaining in each color
     */


    get diseaseCubesBlack() {
      return this.cities ? this.cities.reduce((total, city) => total - city.diseaseCubesBlack, TOTAL_DISEASE_CUBES_PER_COLOR) : TOTAL_DISEASE_CUBES_PER_COLOR;
    }

    get diseaseCubesBlue() {
      return this.cities ? this.cities.reduce((total, city) => total - city.diseaseCubesBlue, TOTAL_DISEASE_CUBES_PER_COLOR) : TOTAL_DISEASE_CUBES_PER_COLOR;
    }

    get diseaseCubesRed() {
      return this.cities ? this.cities.reduce((total, city) => total - city.diseaseCubesRed, TOTAL_DISEASE_CUBES_PER_COLOR) : TOTAL_DISEASE_CUBES_PER_COLOR;
    }

    get diseaseCubesYellow() {
      return this.cities ? this.cities.reduce((total, city) => total - city.diseaseCubesYellow, TOTAL_DISEASE_CUBES_PER_COLOR) : TOTAL_DISEASE_CUBES_PER_COLOR;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "code", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "inProgress", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "players", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "cities", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "infectionDeck", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "infectionDiscard", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "playerDeck", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "playerDiscard", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "numOutbreaks", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "numEpidemics", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "cureStatusBlack", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "cureStatusBlue", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "cureStatusRed", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "cureStatusYellow", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = GameModel;
});
;define("pandemic/models/player", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const HAND_LIMIT = 7;
  let PlayerModel = (_dec = (0, _model.belongsTo)('game'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('numberArray'), _dec5 = (0, _model.attr)('boolean', {
    defaultValue: false
  }), (_class = (_temp = class PlayerModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "game", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "role", _descriptor3, this);

      _initializerDefineProperty(this, "hand", _descriptor4, this);

      _initializerDefineProperty(this, "isTurn", _descriptor5, this);
    }

    // Player needs to discard / use cards if over the hand limit
    get overHandLimit() {
      return this.hand ? this.hand.length > HAND_LIMIT : false;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "game", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "role", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "hand", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isTurn", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PlayerModel;
});
;define("pandemic/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("pandemic/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("pandemic/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("pandemic/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("pandemic/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("pandemic/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("pandemic/router", ["exports", "pandemic/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('game', {
      path: '/:code'
    });
    this.route('not-found', {
      path: '/*path'
    });
  });
});
;define("pandemic/routes/game", ["exports", "pandemic/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class GameRoute extends Ember.Route {
    model({
      code
    }) {
      return this.store.queryRecord('game', {
        filter: {
          code
        }
      }).then(game => Ember.RSVP.hash({
        game,
        players: game.players
      })).then(({
        game,
        players
      }) => {
        // if (game.inProgress || players.length >= MAX_PLAYERS) {
        //   this.replaceWith('index');
        // }
        const currentPlayer = this.store.createRecord('player', {
          game,
          name: `Player ${players.length + 1}`,
          hand: []
        });
        return Ember.RSVP.hash({
          game,
          currentPlayer: currentPlayer.save()
        });
      });
    }

  }

  _exports.default = GameRoute;
});
;define("pandemic/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("pandemic/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("pandemic/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("pandemic/services/firebase-app", ["exports", "emberfire/services/firebase-app"], function (_exports, _firebaseApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebaseApp.default;
    }
  });
});
;define("pandemic/services/firebase", ["exports", "emberfire/services/firebase"], function (_exports, _firebase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("pandemic/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("pandemic/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("pandemic/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("pandemic/templates/error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "D4JRsnO+",
    "block": "{\"symbols\":[],\"statements\":[[10,\"p\"],[12],[2,\"An error has occurred.\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pandemic/templates/error.hbs"
    }
  });

  _exports.default = _default;
});
;define("pandemic/templates/game", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "b0SFkZtN",
    "block": "{\"symbols\":[\"city\",\"form\",\"el\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"pandemic-game \",[30,[36,0],[[32,0,[\"showDrawer\"]],\"pandemic-game--pushed\"],null]]]],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"\\n    Stop the Pandemic\\n  \"],[13],[2,\"\\n  \"],[10,\"p\"],[14,0,\"mb-2\"],[12],[2,\"\\n    Your game code is:\\n    \"],[8,\"bs-button\",[[24,0,\"ml-1 text-uppercase\"]],[[\"@type\",\"@size\"],[\"light\",\"sm\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[1,[32,0,[\"model\",\"game\",\"code\"]]],[2,\"\\n      \"],[8,\"bs-popover\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        Share this code with your friends so they can join your game!\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[8,\"bs-form\",[[24,0,\"justify-content-center mb-2\"]],[[\"@formLayout\",\"@model\",\"@onSubmit\"],[\"inline\",[32,0],[32,0,[\"changeName\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,2,[\"element\"]],[[24,0,\"flex-nowrap ml-2\"]],[[\"@controlType\",\"@property\",\"@label\"],[\"text\",\"currentPlayerName\",\"Your name is:\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,3,[\"control\"]],[[24,0,\"ml-2 pr-5\"],[16,2,[32,0,[\"model\",\"currentPlayer\",\"name\"]]],[4,[38,1],[\"focusout\",[32,2,[\"submit\"]]],null]],[[],[]],null],[2,\"\\n\"],[6,[37,0],[[32,2,[\"isSubmitting\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"spinner-grow spinner-grow-sm text-success ml-n4\"],[12],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,0],[[32,2,[\"isSubmitted\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[8,\"fa-icon\",[[24,0,\"text-success ml-n4\"]],[[\"@icon\"],[\"check\"]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,0],[[32,2,[\"isRejected\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"fa-icon\",[[24,0,\"change-name-error text-danger ml-n4\"]],[[\"@icon\"],[\"times\"]],null],[2,\"\\n        \"],[8,\"bs-tooltip\",[],[[\"@title\",\"@triggerElement\"],[\"We encountered an error saving this info. Please try again.\",\".change-name-error\"]],null],[2,\"\\n      \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"    \"]],\"parameters\":[3]}]]],[2,\"\\n  \"]],\"parameters\":[2]}]]],[2,\"\\n\"],[6,[37,0],[[32,0,[\"model\",\"game\",\"inProgress\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[8,\"bs-button\",[],[[\"@type\",\"@onClick\",\"@defaultText\"],[\"dark\",[32,0,[\"startGame\"]],\"Start the Game\"]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[10,\"p\"],[12],[2,\"\\n    cities\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"model\",\"game\",\"cities\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[2,\"\\n        id is\\n        \"],[1,[32,1,[\"cardId\"]]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"pandemic-game__role-chooser\"],[12],[2,\"\\n  \"],[8,\"role-chooser\",[],[[\"@currentPlayer\",\"@players\",\"@inProgress\",\"@selectItem\"],[[32,0,[\"model\",\"currentPlayer\"]],[32,0,[\"model\",\"game\",\"players\"]],[32,0,[\"model\",\"game\",\"inProgress\"]],[32,0,[\"changeRole\"]]]],null],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"pandemic-game__drawer-btns\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"mb-3\"],[12],[2,\"\\n    \"],[8,\"bs-button\",[],[[\"@onClick\",\"@type\",\"@active\",\"@defaultText\"],[[32,0,[\"openTeamInfo\"]],\"info\",[32,0,[\"showTeamInfo\"]],\"Team Info\"]],null],[2,\"\\n    \"],[8,\"bs-button\",[],[[\"@onClick\",\"@type\",\"@active\",\"@defaultText\"],[[32,0,[\"openGameInfo\"]],\"primary\",[32,0,[\"showGameInfo\"]],\"Game Info\"]],null],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,0],[[32,0,[\"showDrawer\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[11,\"button\"],[24,\"aria-label\",\"Close drawer\"],[24,0,\"close-btn rounded-circle\"],[24,4,\"button\"],[4,[38,1],[\"click\",[32,0,[\"closeDrawer\"]]],null],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"],[10,\"div\"],[15,0,[31,[\"pandemic-game__drawer\\n    \",[30,[36,0],[[32,0,[\"showDrawer\"]],\"pandemic-game__drawer--open\"],null],\"\\n     bg-light\"]]],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"px-4\"],[12],[2,\"\\n\"],[6,[37,0],[[32,0,[\"showTeamInfo\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[8,\"team-info-display\",[],[[\"@players\"],[[32,0,[\"model\",\"game\",\"players\"]]]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,0],[[32,0,[\"showGameInfo\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      Game info\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"    \"],[10,\"div\"],[14,1,\"map_container\"],[12],[2,\"\\n      \"],[10,\"svg\"],[14,1,\"map\"],[14,\"width\",\"100%\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,1,\"map_container\"],[12],[2,\"\\n  \"],[10,\"svg\"],[14,1,\"map\"],[14,\"width\",\"100%\"],[12],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"on\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "pandemic/templates/game.hbs"
    }
  });

  _exports.default = _default;
});
;define("pandemic/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wnq/mh2/",
    "block": "{\"symbols\":[\"form\",\"el\",\"button\"],\"statements\":[[10,\"div\"],[14,0,\"pandemic-start\"],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"\\n    Stop the Pandemic\\n  \"],[13],[2,\"\\n  \"],[10,\"p\"],[14,0,\"mb-5\"],[12],[2,\"\\n    Play Pandemic with your friends online!\\n  \"],[13],[2,\"\\n  \"],[8,\"bs-button\",[],[[\"@onClick\",\"@type\",\"@defaultText\",\"@rejectedText\"],[[32,0,[\"createNewGame\"]],\"primary\",\"New Game\",\"Oops! Try Again\"]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,0],[[32,3,[\"isPending\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"spinner-grow spinner-grow-sm\"],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"]],\"parameters\":[3]}]]],[2,\"\\n\"],[6,[37,0],[[32,0,[\"createErrorMessage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[14,0,\"font-weight-light text-danger\"],[12],[2,\"\\n      \"],[1,[32,0,[\"createErrorMessage\"]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[10,\"p\"],[14,0,\"my-1\"],[12],[2,\"\\n    or\\n  \"],[13],[2,\"\\n  \"],[8,\"bs-form\",[[24,0,\"justify-content-center\"]],[[\"@formLayout\",\"@model\",\"@onSubmit\"],[\"inline\",[32,0],[32,0,[\"joinGame\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"element\"]],[],[[\"@controlType\",\"@property\",\"@invisibleLabel\"],[\"text\",\"joinCode\",\"Join code\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[8,[32,2,[\"control\"]],[[24,0,\"mr-2\"],[24,\"placeholder\",\"Code (e.g. ABCD)\"]],[[],[]],null],[2,\"\\n    \"]],\"parameters\":[2]}]]],[2,\"\\n    \"],[8,[32,1,[\"submitButton\"]],[],[[\"@type\"],[[30,[36,0],[[32,1,[\"isRejected\"]],\"danger\",\"primary\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n      Join Game\\n\"],[6,[37,0],[[32,1,[\"isSubmitting\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"spinner-grow spinner-grow-sm\"],[12],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"parameters\":[]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[6,[37,0],[[32,0,[\"joinErrorMessage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[14,0,\"font-weight-light text-danger\"],[12],[2,\"\\n      \"],[1,[32,0,[\"joinErrorMessage\"]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"if\"]}",
    "meta": {
      "moduleName": "pandemic/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("pandemic/templates/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tLNDu/cK",
    "block": "{\"symbols\":[],\"statements\":[[10,\"p\"],[12],[2,\"Oops, the page you're looking for is not available.\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "pandemic/templates/not-found.hbs"
    }
  });

  _exports.default = _default;
});
;define("pandemic/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("pandemic/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("pandemic/transforms/number-array", ["exports", "@ember-data/serializer/transform"], function (_exports, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class NumberArrayTransform extends _transform.default {
    deserialize(serialized) {
      return serialized;
    }

    serialize(deserialized) {
      return deserialized;
    }

  }

  _exports.default = NumberArrayTransform;
});
;define("pandemic/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("pandemic/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("pandemic/utils/constants", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MAX_PLAYERS = _exports.ROLES = _exports.ROLE_DESCRIPTIONS = _exports.ROLE_NAMES = _exports.PLAYERCARDS = _exports.NUM_CITIES = _exports.CITIES = void 0;
  const CITIES = [{
    name: 'Atlanta',
    color: 'blue',
    connections: [2, 4, 12],
    pos: [10.5, 20.2]
  }, {
    name: 'Beijing',
    color: 'red',
    connections: [13, 14, 15],
    pos: [30.6, 15.2]
  }];
  _exports.CITIES = CITIES;
  const NUM_CITIES = CITIES.length;
  _exports.NUM_CITIES = NUM_CITIES;
  const non_city_player_cards = [{
    name: 'Epidemic',
    is_city: false
  }, {
    name: 'Helicopter',
    is_city: false
  }];

  function city_to_card(city) {
    let card = {};
    card.name = city.name;
    card.isCity = true;
    return card;
  }

  const PLAYERCARDS = CITIES.map(city_to_card).concat(non_city_player_cards);
  _exports.PLAYERCARDS = PLAYERCARDS;
  const ROLE_NAMES = ['Walking Jesus', // Medic
  'Quarantine Queen', // Quarantine Specialist
  'Plan B Planner', // Contingency Planner
  "Gotta Collect 'Em All", // Scientist
  'Dealer', // Researcher
  'Puppet Master', // Dispatcher
  'Bob the Builder' // Operations Expert
  ];
  _exports.ROLE_NAMES = ROLE_NAMES;
  const ROLE_DESCRIPTIONS = ['"WJ" removes all cubes, not 1, of the same color when doing the Treat Disease action. If a disease has been cured, they automatically remove all cubes of that color from a city, simply by entering it or being there. This does not take an action. The automatic removal also occurs when being moved by the "Puppet Master" or by Airlift. They also prevent placing disease cubes (and outbreaks) of cured diseases in their location.', // Medic
  '"QQ" prevents both outbreaks and the placement of disease cubes in the city they are in and all cities connected to that city. They do not affect cubes placed during setup.', // Quarantine Specialist
  '"PBP" may, as an action, take an Event card from anywhere in the Player Discard Pile. Only 1 special Event card can be possessed at a time. It does not count against their hand limit. When "PBP" plays the special Event card, it is removed from the game (instead of discarded).', // Contingency Planner
  '"GCEM" needs only 4 (not 5) City cards of the same disease color to Discover a Cure for that disease.', // Scientist
  'When doing the Share Knowledge action, "Dealer" may give any City card from their hand to another player in the same city as them, without this card having to match the location city. The transfer must be from their hand to the other player\'s hand, but it can occur on either player\'s turn.', // Researcher
  "\"PM\" may, as an action, either (1) move any pawn, if its owner agrees, to any city containing another pawn, or (2) move another player's pawn, if its owner agrees, as if it were their own. When moving a player's pawn as if it were their own, they must discard cards for Direct and Charter Flights from their own hand. A card discarded for a Charter Flight must match the city the pawn is moving from. They can only move other players' pawns (not direct them to do other actions, such as Treat Disease).", // Dispatcher
  '"BB" may, as an action, either (1) build a research station in their current city without discarding (or using) a City card, or (2) once per turn, move from a research station to any city by discarding any City card.' // Operations Expert
  ];
  _exports.ROLE_DESCRIPTIONS = ROLE_DESCRIPTIONS;
  const ROLES = ROLE_NAMES.map((name, idx) => {
    return {
      name,
      id: idx,
      description: ROLE_DESCRIPTIONS[idx]
    };
  });
  _exports.ROLES = ROLES;
  const MAX_PLAYERS = 4;
  _exports.MAX_PLAYERS = MAX_PLAYERS;
});
;

;define('pandemic/config/environment', [], function() {
  var prefix = 'pandemic';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("pandemic/app")["default"].create({"name":"pandemic","version":"0.0.0+43b5f75d"});
          }
        
//# sourceMappingURL=pandemic.map
