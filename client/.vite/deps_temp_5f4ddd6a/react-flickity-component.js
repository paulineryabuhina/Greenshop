import {
  require_prop_types
} from "./chunk-NOHTQ6LC.js";
import {
  require_react_dom
} from "./chunk-FBRNPY62.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  require_ev_emitter
} from "./chunk-HEC2MSDA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/imagesloaded/imagesloaded.js
var require_imagesloaded = __commonJS({
  "node_modules/imagesloaded/imagesloaded.js"(exports, module) {
    (function(window2, factory) {
      "use strict";
      if (typeof define == "function" && define.amd) {
        define([
          "ev-emitter/ev-emitter"
        ], function(EvEmitter) {
          return factory(window2, EvEmitter);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(
          window2,
          require_ev_emitter()
        );
      } else {
        window2.imagesLoaded = factory(
          window2,
          window2.EvEmitter
        );
      }
    })(
      typeof window !== "undefined" ? window : exports,
      // --------------------------  factory -------------------------- //
      function factory(window2, EvEmitter) {
        "use strict";
        var $ = window2.jQuery;
        var console = window2.console;
        function extend(a2, b) {
          for (var prop in b) {
            a2[prop] = b[prop];
          }
          return a2;
        }
        var arraySlice = Array.prototype.slice;
        function makeArray(obj) {
          if (Array.isArray(obj)) {
            return obj;
          }
          var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
          if (isArrayLike) {
            return arraySlice.call(obj);
          }
          return [obj];
        }
        function ImagesLoaded(elem, options, onAlways) {
          if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options, onAlways);
          }
          var queryElem = elem;
          if (typeof elem == "string") {
            queryElem = document.querySelectorAll(elem);
          }
          if (!queryElem) {
            console.error("Bad element for imagesLoaded " + (queryElem || elem));
            return;
          }
          this.elements = makeArray(queryElem);
          this.options = extend({}, this.options);
          if (typeof options == "function") {
            onAlways = options;
          } else {
            extend(this.options, options);
          }
          if (onAlways) {
            this.on("always", onAlways);
          }
          this.getImages();
          if ($) {
            this.jqDeferred = new $.Deferred();
          }
          setTimeout(this.check.bind(this));
        }
        ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
        ImagesLoaded.prototype.options = {};
        ImagesLoaded.prototype.getImages = function() {
          this.images = [];
          this.elements.forEach(this.addElementImages, this);
        };
        ImagesLoaded.prototype.addElementImages = function(elem) {
          if (elem.nodeName == "IMG") {
            this.addImage(elem);
          }
          if (this.options.background === true) {
            this.addElementBackgroundImages(elem);
          }
          var nodeType = elem.nodeType;
          if (!nodeType || !elementNodeTypes[nodeType]) {
            return;
          }
          var childImgs = elem.querySelectorAll("img");
          for (var i = 0; i < childImgs.length; i++) {
            var img = childImgs[i];
            this.addImage(img);
          }
          if (typeof this.options.background == "string") {
            var children = elem.querySelectorAll(this.options.background);
            for (i = 0; i < children.length; i++) {
              var child = children[i];
              this.addElementBackgroundImages(child);
            }
          }
        };
        var elementNodeTypes = {
          1: true,
          9: true,
          11: true
        };
        ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
          var style = getComputedStyle(elem);
          if (!style) {
            return;
          }
          var reURL = /url\((['"])?(.*?)\1\)/gi;
          var matches = reURL.exec(style.backgroundImage);
          while (matches !== null) {
            var url = matches && matches[2];
            if (url) {
              this.addBackground(url, elem);
            }
            matches = reURL.exec(style.backgroundImage);
          }
        };
        ImagesLoaded.prototype.addImage = function(img) {
          var loadingImage = new LoadingImage(img);
          this.images.push(loadingImage);
        };
        ImagesLoaded.prototype.addBackground = function(url, elem) {
          var background = new Background(url, elem);
          this.images.push(background);
        };
        ImagesLoaded.prototype.check = function() {
          var _this = this;
          this.progressedCount = 0;
          this.hasAnyBroken = false;
          if (!this.images.length) {
            this.complete();
            return;
          }
          function onProgress(image, elem, message) {
            setTimeout(function() {
              _this.progress(image, elem, message);
            });
          }
          this.images.forEach(function(loadingImage) {
            loadingImage.once("progress", onProgress);
            loadingImage.check();
          });
        };
        ImagesLoaded.prototype.progress = function(image, elem, message) {
          this.progressedCount++;
          this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
          this.emitEvent("progress", [this, image, elem]);
          if (this.jqDeferred && this.jqDeferred.notify) {
            this.jqDeferred.notify(this, image);
          }
          if (this.progressedCount == this.images.length) {
            this.complete();
          }
          if (this.options.debug && console) {
            console.log("progress: " + message, image, elem);
          }
        };
        ImagesLoaded.prototype.complete = function() {
          var eventName = this.hasAnyBroken ? "fail" : "done";
          this.isComplete = true;
          this.emitEvent(eventName, [this]);
          this.emitEvent("always", [this]);
          if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[jqMethod](this);
          }
        };
        function LoadingImage(img) {
          this.img = img;
        }
        LoadingImage.prototype = Object.create(EvEmitter.prototype);
        LoadingImage.prototype.check = function() {
          var isComplete = this.getIsImageComplete();
          if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
          }
          this.proxyImage = new Image();
          this.proxyImage.addEventListener("load", this);
          this.proxyImage.addEventListener("error", this);
          this.img.addEventListener("load", this);
          this.img.addEventListener("error", this);
          this.proxyImage.src = this.img.src;
        };
        LoadingImage.prototype.getIsImageComplete = function() {
          return this.img.complete && this.img.naturalWidth;
        };
        LoadingImage.prototype.confirm = function(isLoaded, message) {
          this.isLoaded = isLoaded;
          this.emitEvent("progress", [this, this.img, message]);
        };
        LoadingImage.prototype.handleEvent = function(event) {
          var method = "on" + event.type;
          if (this[method]) {
            this[method](event);
          }
        };
        LoadingImage.prototype.onload = function() {
          this.confirm(true, "onload");
          this.unbindEvents();
        };
        LoadingImage.prototype.onerror = function() {
          this.confirm(false, "onerror");
          this.unbindEvents();
        };
        LoadingImage.prototype.unbindEvents = function() {
          this.proxyImage.removeEventListener("load", this);
          this.proxyImage.removeEventListener("error", this);
          this.img.removeEventListener("load", this);
          this.img.removeEventListener("error", this);
        };
        function Background(url, element) {
          this.url = url;
          this.element = element;
          this.img = new Image();
        }
        Background.prototype = Object.create(LoadingImage.prototype);
        Background.prototype.check = function() {
          this.img.addEventListener("load", this);
          this.img.addEventListener("error", this);
          this.img.src = this.url;
          var isComplete = this.getIsImageComplete();
          if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            this.unbindEvents();
          }
        };
        Background.prototype.unbindEvents = function() {
          this.img.removeEventListener("load", this);
          this.img.removeEventListener("error", this);
        };
        Background.prototype.confirm = function(isLoaded, message) {
          this.isLoaded = isLoaded;
          this.emitEvent("progress", [this, this.element, message]);
        };
        ImagesLoaded.makeJQueryPlugin = function(jQuery) {
          jQuery = jQuery || window2.jQuery;
          if (!jQuery) {
            return;
          }
          $ = jQuery;
          $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
          };
        };
        ImagesLoaded.makeJQueryPlugin();
        return ImagesLoaded;
      }
    );
  }
});

// node_modules/react-flickity-component/dist/react-flickity-component.es.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_imagesloaded = __toESM(require_imagesloaded());
var import_prop_types = __toESM(require_prop_types());
var u = !!(typeof window < "u" && window.document && window.document.createElement);
var r = class extends import_react.Component {
  constructor(e) {
    super(e), this.state = {
      flickityReady: false,
      flickityCreated: false,
      cellCount: 0
    }, this.carousel = null, this.flkty = null;
  }
  static getDerivedStateFromProps(e, t) {
    const i = import_react.default.Children.count(e.children);
    return i !== t.cellCount ? { flickityReady: false, cellCount: i } : null;
  }
  componentDidUpdate(e, t) {
    if (!this.flkty)
      return;
    const {
      children: i,
      options: { draggable: l, initialIndex: n },
      reloadOnUpdate: c,
      disableImagesLoaded: d
    } = this.props, { flickityReady: f } = this.state;
    if (c || !t.flickityReady && f) {
      const p = this.flkty.isActive;
      this.flkty.deactivate(), this.flkty.selectedIndex = n || 0, this.flkty.options.draggable = l === void 0 ? i ? i.length > 1 : false : l, p && this.flkty.activate(), !d && this.carousel && (0, import_imagesloaded.default)(this.carousel, () => {
        this.flkty.reloadCells();
      });
    } else
      this.flkty.reloadCells();
  }
  async componentDidMount() {
    if (!u || !this.carousel)
      return null;
    const e = (await import("./js-2C44C6LR.js")).default, { flickityRef: t, options: i } = this.props;
    this.flkty = new e(this.carousel, i), t && t(this.flkty), this.props.static ? this.setReady() : this.setState({ flickityCreated: true });
  }
  setReady() {
    if (this.state.flickityReady)
      return;
    const e = () => this.setState({ flickityReady: true });
    this.props.disableImagesLoaded ? e() : (0, import_imagesloaded.default)(this.carousel, e);
  }
  renderPortal() {
    if (!this.carousel)
      return null;
    const e = this.carousel.querySelector(".flickity-slider");
    if (e) {
      const t = (0, import_react_dom.createPortal)(this.props.children, e);
      return setTimeout(() => this.setReady(), 0), t;
    }
  }
  render() {
    return import_react.default.createElement(
      this.props.elementType,
      {
        className: this.props.className,
        ref: (e) => {
          this.carousel = e;
        }
      },
      this.props.static ? this.props.children : this.renderPortal()
    );
  }
};
r.propTypes = {
  children: import_prop_types.default.array,
  className: import_prop_types.default.string,
  disableImagesLoaded: import_prop_types.default.bool,
  elementType: import_prop_types.default.string,
  flickityRef: import_prop_types.default.func,
  options: import_prop_types.default.object,
  reloadOnUpdate: import_prop_types.default.bool,
  static: import_prop_types.default.bool
};
r.defaultProps = {
  className: "",
  disableImagesLoaded: false,
  elementType: "div",
  options: {},
  reloadOnUpdate: false,
  static: false
};
export {
  r as default
};
/*! Bundled license information:

imagesloaded/imagesloaded.js:
  (*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   *)
*/
//# sourceMappingURL=react-flickity-component.js.map
