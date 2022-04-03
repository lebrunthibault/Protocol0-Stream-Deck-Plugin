var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function() {
  "use strict";
  class Action {
    constructor(name, func) {
      this.context = "";
      this.name = name;
      this.actionFunction = func;
      $SD.on(`com.thibault.p0.${name}.willAppear`, (event) => this.onWillAppear(event));
      $SD.on(`com.thibault.p0.${name}.keyUp`, (event) => this.onKeyUp(event));
    }
    toString() {
      return `name: "${this.name}", context: "${this.context}"`;
    }
    onWillAppear(event) {
      this.context = event.context;
    }
    onKeyUp(_) {
      this.actionFunction();
    }
  }
  class ActionDisplay {
    constructor(context) {
      this.context = context;
    }
    setTitle(title) {
      $SD.api.setTitle(this.context, title);
    }
    setImage(image) {
      $SD.api.setImage(this.context, image);
    }
  }
  const Icons = {
    disabled: "data:image/png;base64,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",
    playPause: "data:image/png;base64,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",
    addDevice: "data:image/png;base64,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",
    newTrack: "data:image/png;base64,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"
  };
  const snakeCaseToSpaceCase = (str) => str.replace(/_/g, " ");
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
  }
  const toStreamDeckTitle = (str) => toTitleCase(snakeCaseToSpaceCase(str)).split(" ").join("\n");
  class DynamicAction extends Action {
    constructor(event, name, icon, actionFunction) {
      super(name, actionFunction);
      this.enabled = true;
      this.dynamicParameter = "";
      this.icon = icon;
      this.actionFunction = actionFunction;
      this.context = event.context;
      this.display = new ActionDisplay(event.context);
      this.index = event.payload.coordinates.row * 5 + event.payload.coordinates.column;
      this.disable();
    }
    onWillAppear(_) {
    }
    setParameter(dynamicParameter) {
      console.log(`setting parameter for ${this}`);
      this.dynamicParameter = dynamicParameter;
      this.display.setTitle(toStreamDeckTitle(dynamicParameter));
      this.enable();
    }
    onKeyUp(sdEvent) {
      if (this.context != sdEvent.context) {
        return;
      }
      if (this.enabled) {
        this.actionFunction(this.dynamicParameter);
      } else {
        console.log(`action inactive: ${this}`);
      }
    }
    enable() {
      this.enabled = true;
      this.display.setImage(this.icon);
    }
    disable() {
      this.enabled = false;
      this.display.setTitle("");
      this.display.setImage(Icons.disabled);
    }
  }
  class ActionRepository {
    constructor(db) {
      this.db = db;
    }
    save(action) {
      this.db.actions.push(action);
      console.log(`saved action ${action}`);
    }
    getActionsByClass(cls) {
      return this.db.actions.filter((a) => a instanceof cls);
    }
    getDynamicActionByName(name) {
      return this.getActionsByClass(DynamicAction).filter((a) => a.name === name).sort((a, b) => a.index - b.index);
    }
    getActionByContext(context) {
      return this.db.actions.find((a) => a.context === context);
    }
  }
  const p0_host = "127.0.0.1:8000";
  const Config = {
    P0_WS_URL: `ws://${p0_host}/song_state`,
    P0_API_URL: `http://${p0_host}`,
    INDEX_ACTION: "toggle-track"
  };
  const API = {
    playPause() {
      fetch(`${Config.P0_API_URL}/play_pause`).then(() => null);
    },
    toggleDrums() {
      fetch(`${Config.P0_API_URL}/toggle_drums`).then(() => null);
    },
    toggleTrack(name) {
      fetch(`${Config.P0_API_URL}/toggle_track/${name}`).then(() => null);
    },
    loadDrumTrack(name) {
      fetch(`${Config.P0_API_URL}/load_drum_track/${name}`).then(() => null);
    },
    loadDevice(name) {
      fetch(`${Config.P0_API_URL}/load_device/${name}`).then(() => null);
    }
  };
  class RegistryEntry {
    constructor(eventClass) {
      this.subscribers = /* @__PURE__ */ new Set();
      this.eventClass = eventClass;
    }
    toString() {
      return `eventClass: ${this.eventClass}, subscribers: ${this.subscribers}`;
    }
  }
  class Registry {
    constructor() {
      this.entries = [];
    }
    toString() {
      return this.entries;
    }
    register(eventClass, func) {
      let registry_entry = this.entries.find((entry) => entry.eventClass === eventClass);
      if (!registry_entry) {
        registry_entry = new RegistryEntry(eventClass);
        this.entries.push(registry_entry);
      }
      registry_entry.subscribers.add(func);
    }
    getSubscribers(eventClass) {
      const registry_entry = this.entries.find((entry) => eventClass === entry.eventClass);
      if (!registry_entry) {
        console.warn(`event emitted without subscriber: ${eventClass}`);
        console.warn(this);
        return [];
      }
      return Array.from(registry_entry.subscribers);
    }
  }
  const registry = new Registry();
  class EventBus {
    static subscribe(eventClass, func) {
      console.log(`subscribing ${eventClass.name}: func: ${func}`);
      registry.register(eventClass, func);
    }
    static emit(event) {
      console.log("emitting event " + event.constructor.name);
      const subscribers = registry.getSubscribers(event.constructor);
      for (const subscriber of subscribers) {
        subscriber(event);
      }
    }
  }
  class ActionGroupAppearedEvent {
  }
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal$1 = freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function("return this")();
  var root$1 = root;
  var Symbol$1 = root$1.Symbol;
  var Symbol$2 = Symbol$1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty = objectProto$1.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var now = function() {
    return root$1.Date.now();
  };
  var now$1 = now;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  class ActionGroup {
    constructor(actionRepository, groupName, icon, updateEvent, actionFunc) {
      this.parametersItems = [];
      this.actionRepository = actionRepository;
      this.isIndexGroup = groupName === Config.INDEX_ACTION;
      this.groupName = groupName;
      this.icon = icon;
      this.updateEvent = updateEvent;
      this.actionFunc = actionFunc;
      this.emitGroupAppearedEvent = debounce(() => EventBus.emit(new ActionGroupAppearedEvent()), 10, { leading: false });
      console.log(`com.thibault.p0.${groupName}.willAppear`);
      $SD.on(`com.thibault.p0.${groupName}.willAppear`, (event) => this.onWillAppear(event));
      EventBus.subscribe(updateEvent, (event) => this.onUpdateEvent(event));
    }
    get actions() {
      return this.actionRepository.getDynamicActionByName(this.groupName);
    }
    onWillAppear(event) {
      console.log("on will appear");
      console.log(event);
      if (this.actionRepository.getActionByContext(event.context)) {
        return;
      }
      console.log("ok");
      this.actionRepository.save(new DynamicAction(event, this.groupName, this.icon, this.actionFunc));
      if (!this.isIndexGroup) {
        this.emitGroupAppearedEvent();
      }
    }
    onUpdateEvent(event) {
      if (this.actions.length === 0) {
        return;
      }
      if (this.parametersItems === event.items) {
        return;
      }
      this.parametersItems = event.items;
      console.log(this.parametersItems);
      this.actions.forEach((a) => a.disable());
      event.items.slice(0, this.actions.length).forEach((name, i) => {
        this.actions[i].setParameter(name);
      });
    }
  }
  class SongStatePropertyUpdatedEvent {
    constructor(items) {
      this.items = items;
    }
  }
  class DrumCategoriesUpdatedEvent extends SongStatePropertyUpdatedEvent {
  }
  class DrumTrackNamesUpdatedEvent extends SongStatePropertyUpdatedEvent {
  }
  class FavoriteDeviceNamesUpdatedEvent extends SongStatePropertyUpdatedEvent {
  }
  class ActionFactory {
    constructor(actionRepository) {
      this.actionRepository = actionRepository;
    }
    createActions() {
      this.actionRepository.save(new Action("play", API.playPause));
      this.actionRepository.save(new Action("drums", API.toggleDrums));
      new ActionGroup(this.actionRepository, "toggle-track", Icons.playPause, DrumTrackNamesUpdatedEvent, API.toggleTrack);
      new ActionGroup(this.actionRepository, "load-drum-track", Icons.newTrack, DrumCategoriesUpdatedEvent, API.loadDrumTrack);
      new ActionGroup(this.actionRepository, "add-device", Icons.addDevice, FavoriteDeviceNamesUpdatedEvent, API.loadDevice);
    }
  }
  var util;
  (function(util2) {
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
      const filtered = {};
      for (const k of validKeys) {
        filtered[k] = obj[k];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e) {
        return obj[e];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  })(util || (util = {}));
  const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of"
  ]);
  const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  class ZodError extends Error {
    constructor(issues) {
      super();
      this.issues = [];
      this.format = () => {
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(issue.message);
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  if (typeof el === "string") {
                    curr[el] = curr[el] || { _errors: [] };
                  } else if (typeof el === "number") {
                    const errorArray = [];
                    errorArray._errors = [];
                    curr[el] = curr[el] || errorArray;
                  }
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(issue.message);
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      };
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    get errors() {
      return this.issues;
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, null, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  const defaultErrorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === "undefined") {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${issue.keys.map((k) => `'${k}'`).join(", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${issue.options.map((val) => typeof val === "string" ? `'${val}'` : val).join(" | ")}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${issue.options.map((val) => typeof val === "string" ? `'${val}'` : val).join(" | ")}`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (issue.validation !== "regex")
          message = `Invalid ${issue.validation}`;
        else
          message = "Invalid";
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be greater than ${issue.inclusive ? `or equal to ` : ``}${issue.minimum}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be less than ${issue.inclusive ? `or equal to ` : ``}${issue.maximum}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  let overrideErrorMap = defaultErrorMap;
  const setErrorMap = (map) => {
    overrideErrorMap = map;
  };
  const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = __spreadProps(__spreadValues({}, issueData), {
      path: fullPath
    });
    let errorMessage = "";
    const maps = errorMaps.filter((m) => !!m).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return __spreadProps(__spreadValues({}, issueData), {
      path: fullPath,
      message: issueData.message || errorMessage
    });
  };
  const EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        ctx.schemaErrorMap,
        overrideErrorMap,
        defaultErrorMap
      ].filter((x) => !!x)
    });
    ctx.common.issues.push(issue);
  }
  class ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s of results) {
        if (s.status === "aborted")
          return INVALID;
        if (s.status === "dirty")
          status.dirty();
        arrayValue.push(s.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        syncPairs.push({
          key: await pair.key,
          value: await pair.value
        });
      }
      return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (typeof value.value !== "undefined" || pair.alwaysSet) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  }
  const INVALID = Object.freeze({
    status: "aborted"
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x) => x.status === "aborted";
  const isDirty = (x) => x.status === "dirty";
  const isValid = (x) => x.status === "valid";
  const isAsync = (x) => typeof Promise !== void 0 && x instanceof Promise;
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
  })(errorUtil || (errorUtil = {}));
  class ParseInputLazyPath {
    constructor(parent, value, path, key) {
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      return this._path.concat(this._key);
    }
  }
  const handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      const error = new ZodError(ctx.common.issues);
      return { success: false, error };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid" or "required" in conjunction with custom error map.`);
    }
    if (errorMap)
      return { errorMap, description };
    const customMap = (iss, ctx) => {
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      if (typeof ctx.data === "undefined" && required_error)
        return { message: required_error };
      if (params.invalid_type_error)
        return { message: params.invalid_type_error };
      return { message: ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  class ZodType {
    constructor(def) {
      this.spa = this.safeParseAsync;
      this.superRefine = this._refinement;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.default = this.default.bind(this);
      this.describe = this.describe.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
    }
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      var _a;
      const ctx = {
        common: {
          issues: [],
          async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
          typeCache: typeof Map !== "undefined" ? /* @__PURE__ */ new Map() : void 0,
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true,
          typeCache: typeof Map !== "undefined" ? /* @__PURE__ */ new Map() : void 0
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: [], parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue(__spreadValues({
          code: ZodIssueCode.custom
        }, getIssueProperties(val)));
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    optional() {
      return ZodOptional.create(this);
    }
    nullable() {
      return ZodNullable.create(this);
    }
    nullish() {
      return this.optional().nullable();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this);
    }
    or(option) {
      return ZodUnion.create([this, option]);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming);
    }
    transform(transform) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This(__spreadProps(__spreadValues({}, this._def), {
        description
      }));
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  class ZodString extends ZodType {
    constructor() {
      super(...arguments);
      this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), __spreadValues({
        validation,
        code: ZodIssueCode.invalid_string
      }, errorUtil.errToObj(message)));
      this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch (_a) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        }
      }
      return { status: status.value, value: input.data };
    }
    _addCheck(check) {
      return new ZodString(__spreadProps(__spreadValues({}, this._def), {
        checks: [...this._def.checks, check]
      }));
    }
    email(message) {
      return this._addCheck(__spreadValues({ kind: "email" }, errorUtil.errToObj(message)));
    }
    url(message) {
      return this._addCheck(__spreadValues({ kind: "url" }, errorUtil.errToObj(message)));
    }
    uuid(message) {
      return this._addCheck(__spreadValues({ kind: "uuid" }, errorUtil.errToObj(message)));
    }
    cuid(message) {
      return this._addCheck(__spreadValues({ kind: "cuid" }, errorUtil.errToObj(message)));
    }
    regex(regex, message) {
      return this._addCheck(__spreadValues({
        kind: "regex",
        regex
      }, errorUtil.errToObj(message)));
    }
    min(minLength, message) {
      return this._addCheck(__spreadValues({
        kind: "min",
        value: minLength
      }, errorUtil.errToObj(message)));
    }
    max(maxLength, message) {
      return this._addCheck(__spreadValues({
        kind: "max",
        value: maxLength
      }, errorUtil.errToObj(message)));
    }
    length(len, message) {
      return this.min(len, message).max(len, message);
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get minLength() {
      let min = -Infinity;
      this._def.checks.map((ch) => {
        if (ch.kind === "min") {
          if (min === null || ch.value > min) {
            min = ch.value;
          }
        }
      });
      return min;
    }
    get maxLength() {
      let max = null;
      this._def.checks.map((ch) => {
        if (ch.kind === "max") {
          if (max === null || ch.value < max) {
            max = ch.value;
          }
        }
      });
      return max;
    }
  }
  ZodString.create = (params) => {
    return new ZodString(__spreadValues({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString
    }, processCreateParams(params)));
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  class ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodNumber(__spreadProps(__spreadValues({}, this._def), {
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      }));
    }
    _addCheck(check) {
      return new ZodNumber(__spreadProps(__spreadValues({}, this._def), {
        checks: [...this._def.checks, check]
      }));
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int");
    }
  }
  ZodNumber.create = (params) => {
    return new ZodNumber(__spreadValues({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber
    }, processCreateParams(params)));
  };
  class ZodBigInt extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodBigInt.create = (params) => {
    return new ZodBigInt(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodBigInt
    }, processCreateParams(params)));
  };
  class ZodBoolean extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodBoolean.create = (params) => {
    return new ZodBoolean(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodBoolean
    }, processCreateParams(params)));
  };
  class ZodDate extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (isNaN(input.data.getTime())) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      return {
        status: "valid",
        value: new Date(input.data.getTime())
      };
    }
  }
  ZodDate.create = (params) => {
    return new ZodDate(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodDate
    }, processCreateParams(params)));
  };
  class ZodUndefined extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodUndefined.create = (params) => {
    return new ZodUndefined(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodUndefined
    }, processCreateParams(params)));
  };
  class ZodNull extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodNull.create = (params) => {
    return new ZodNull(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodNull
    }, processCreateParams(params)));
  };
  class ZodAny extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodAny.create = (params) => {
    return new ZodAny(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodAny
    }, processCreateParams(params)));
  };
  class ZodUnknown extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodUnknown.create = (params) => {
    return new ZodUnknown(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodUnknown
    }, processCreateParams(params)));
  };
  class ZodNever extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  }
  ZodNever.create = (params) => {
    return new ZodNever(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodNever
    }, processCreateParams(params)));
  };
  class ZodVoid extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodVoid.create = (params) => {
    return new ZodVoid(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodVoid
    }, processCreateParams(params)));
  };
  class ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all(ctx.data.map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = ctx.data.map((item, i) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new ZodArray(__spreadProps(__spreadValues({}, this._def), {
        minLength: { value: minLength, message: errorUtil.toString(message) }
      }));
    }
    max(maxLength, message) {
      return new ZodArray(__spreadProps(__spreadValues({}, this._def), {
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      }));
    }
    length(len, message) {
      return this.min(len, message).max(len, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodArray.create = (schema, params) => {
    return new ZodArray(__spreadValues({
      type: schema,
      minLength: null,
      maxLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray
    }, processCreateParams(params)));
  };
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return __spreadValues(__spreadValues({}, first), second);
    };
  })(objectUtil || (objectUtil = {}));
  const AugmentFactory = (def) => (augmentation) => {
    return new ZodObject(__spreadProps(__spreadValues({}, def), {
      shape: () => __spreadValues(__spreadValues({}, def.shape()), augmentation)
    }));
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject(__spreadProps(__spreadValues({}, schema._def), {
        shape: () => newShape
      }));
    } else if (schema instanceof ZodArray) {
      return ZodArray.create(deepPartialify(schema.element));
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  class ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = AugmentFactory(this._def);
      this.extend = AugmentFactory(this._def);
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      return this._cached = { shape, keys };
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const dataKeys = util.objectKeys(ctx.data);
      const extraKeys = dataKeys.filter((k) => !shapeKeys.includes(k));
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip")
          ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            syncPairs.push({
              key,
              value: await pair.value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new ZodObject(__spreadValues(__spreadProps(__spreadValues({}, this._def), {
        unknownKeys: "strict"
      }), message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}));
    }
    strip() {
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        unknownKeys: "strip"
      }));
    }
    passthrough() {
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        unknownKeys: "passthrough"
      }));
    }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    merge(merging) {
      const merged = new ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    catchall(index) {
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        catchall: index
      }));
    }
    pick(mask) {
      const shape = {};
      util.objectKeys(mask).map((key) => {
        shape[key] = this.shape[key];
      });
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        shape: () => shape
      }));
    }
    omit(mask) {
      const shape = {};
      util.objectKeys(this.shape).map((key) => {
        if (util.objectKeys(mask).indexOf(key) === -1) {
          shape[key] = this.shape[key];
        }
      });
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        shape: () => shape
      }));
    }
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      if (mask) {
        util.objectKeys(this.shape).map((key) => {
          if (util.objectKeys(mask).indexOf(key) === -1) {
            newShape[key] = this.shape[key];
          } else {
            newShape[key] = this.shape[key].optional();
          }
        });
        return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
          shape: () => newShape
        }));
      } else {
        for (const key in this.shape) {
          const fieldSchema = this.shape[key];
          newShape[key] = fieldSchema.optional();
        }
      }
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        shape: () => newShape
      }));
    }
    required() {
      const newShape = {};
      for (const key in this.shape) {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
      return new ZodObject(__spreadProps(__spreadValues({}, this._def), {
        shape: () => newShape
      }));
    }
  }
  ZodObject.create = (shape, params) => {
    return new ZodObject(__spreadValues({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject(__spreadValues({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject(__spreadValues({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
  };
  class ZodUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = __spreadProps(__spreadValues({}, ctx), {
            common: __spreadProps(__spreadValues({}, ctx.common), {
              issues: []
            }),
            parent: null
          });
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = __spreadProps(__spreadValues({}, ctx), {
            common: __spreadProps(__spreadValues({}, ctx.common), {
              issues: []
            }),
            parent: null
          });
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  ZodUnion.create = (types, params) => {
    return new ZodUnion(__spreadValues({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion
    }, processCreateParams(params)));
  };
  class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.options.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: this.validDiscriminatorValues,
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get validDiscriminatorValues() {
      return Array.from(this.options.keys());
    }
    get options() {
      return this._def.options;
    }
    static create(discriminator, types, params) {
      const options = /* @__PURE__ */ new Map();
      try {
        types.forEach((type) => {
          const discriminatorValue = type.shape[discriminator].value;
          options.set(discriminatorValue, type);
        });
      } catch (e) {
        throw new Error("The discriminator value could not be extracted from all the provided schemas");
      }
      if (options.size !== types.length) {
        throw new Error("Some of the discriminator values are not unique");
      }
      return new ZodDiscriminatedUnion(__spreadValues({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options
      }, processCreateParams(params)));
    }
  }
  function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
      return { valid: true, data: a };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b);
      const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = __spreadValues(__spreadValues({}, a), b);
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a.length !== b.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
      return { valid: true, data: a };
    } else {
      return { valid: false };
    }
  }
  class ZodIntersection extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  }
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection(__spreadValues({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection
    }, processCreateParams(params)));
  };
  class ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          type: "array"
        });
        status.dirty();
      }
      const items = ctx.data.map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x) => !!x);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new ZodTuple(__spreadProps(__spreadValues({}, this._def), {
        rest
      }));
    }
  }
  ZodTuple.create = (schemas, params) => {
    return new ZodTuple(__spreadValues({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null
    }, processCreateParams(params)));
  };
  class ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new ZodRecord(__spreadValues({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord
        }, processCreateParams(third)));
      }
      return new ZodRecord(__spreadValues({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord
      }, processCreateParams(second)));
    }
  }
  class ZodMap extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  }
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap(__spreadValues({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap
    }, processCreateParams(params)));
  };
  class ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new ZodSet(__spreadProps(__spreadValues({}, this._def), {
        minSize: { value: minSize, message: errorUtil.toString(message) }
      }));
    }
    max(maxSize, message) {
      return new ZodSet(__spreadProps(__spreadValues({}, this._def), {
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      }));
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodSet.create = (valueType, params) => {
    return new ZodSet(__spreadValues({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet
    }, processCreateParams(params)));
  };
  class ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideErrorMap,
            defaultErrorMap
          ].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideErrorMap,
            defaultErrorMap
          ].filter((x) => !!x),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        return OK(async (...args) => {
          const error = new ZodError([]);
          const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
            error.addIssue(makeArgsIssue(args, e));
            throw error;
          });
          const result = await fn(...parsedArgs);
          const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        return OK((...args) => {
          const parsedArgs = this._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = fn(...parsedArgs.data);
          const parsedReturns = this._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new ZodFunction(__spreadProps(__spreadValues({}, this._def), {
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      }));
    }
    returns(returnType) {
      return new ZodFunction(__spreadProps(__spreadValues({}, this._def), {
        returns: returnType
      }));
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
  }
  ZodFunction.create = (args, returns, params) => {
    return new ZodFunction(__spreadValues({
      args: args ? args.rest(ZodUnknown.create()) : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction
    }, processCreateParams(params)));
  };
  class ZodLazy extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  }
  ZodLazy.create = (getter, params) => {
    return new ZodLazy(__spreadValues({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy
    }, processCreateParams(params)));
  };
  class ZodLiteral extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: getParsedType(this._def.value),
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  }
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral(__spreadValues({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral
    }, processCreateParams(params)));
  };
  function createZodEnum(values) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum
    });
  }
  class ZodEnum extends ZodType {
    _parse(input) {
      if (this._def.values.indexOf(input.data) === -1) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_enum_value,
          options: this._def.values
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
  }
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      if (nativeEnumValues.indexOf(input.data) === -1) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_enum_value,
          options: util.objectValues(nativeEnumValues)
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum(__spreadValues({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum
    }, processCreateParams(params)));
  };
  class ZodPromise extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  }
  ZodPromise.create = (schema, params) => {
    return new ZodPromise(__spreadValues({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise
    }, processCreateParams(params)));
  };
  class ZodEffects extends ZodType {
    innerType() {
      return this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data);
        if (ctx.common.async) {
          return Promise.resolve(processed).then((processed2) => {
            return this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
          });
        } else {
          return this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      if (effect.type === "refinement") {
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return base;
          const result = effect.transform(base.value);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return OK(result);
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return base;
            return Promise.resolve(effect.transform(base.value)).then(OK);
          });
        }
      }
      util.assertNever(effect);
    }
  }
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects(__spreadValues({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect
    }, processCreateParams(params)));
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects(__spreadValues({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects
    }, processCreateParams(params)));
  };
  class ZodOptional extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodOptional.create = (type, params) => {
    return new ZodOptional(__spreadValues({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional
    }, processCreateParams(params)));
  };
  class ZodNullable extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodNullable.create = (type, params) => {
    return new ZodNullable(__spreadValues({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable
    }, processCreateParams(params)));
  };
  class ZodDefault extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  ZodDefault.create = (type, params) => {
    return new ZodOptional(__spreadValues({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional
    }, processCreateParams(params)));
  };
  class ZodNaN extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  }
  ZodNaN.create = (params) => {
    return new ZodNaN(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodNaN
    }, processCreateParams(params)));
  };
  const custom = (check, params) => {
    if (check)
      return ZodAny.create().refine(check, params);
    return ZodAny.create();
  };
  const late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  const stringType = ZodString.create;
  const numberType = ZodNumber.create;
  const nanType = ZodNaN.create;
  const bigIntType = ZodBigInt.create;
  const booleanType = ZodBoolean.create;
  const dateType = ZodDate.create;
  const undefinedType = ZodUndefined.create;
  const nullType = ZodNull.create;
  const anyType = ZodAny.create;
  const unknownType = ZodUnknown.create;
  const neverType = ZodNever.create;
  const voidType = ZodVoid.create;
  const arrayType = ZodArray.create;
  const objectType = ZodObject.create;
  const strictObjectType = ZodObject.strictCreate;
  const unionType = ZodUnion.create;
  const discriminatedUnionType = ZodDiscriminatedUnion.create;
  const intersectionType = ZodIntersection.create;
  const tupleType = ZodTuple.create;
  const recordType = ZodRecord.create;
  const mapType = ZodMap.create;
  const setType = ZodSet.create;
  const functionType = ZodFunction.create;
  const lazyType = ZodLazy.create;
  const literalType = ZodLiteral.create;
  const enumType = ZodEnum.create;
  const nativeEnumType = ZodNativeEnum.create;
  const promiseType = ZodPromise.create;
  const effectsType = ZodEffects.create;
  const optionalType = ZodOptional.create;
  const nullableType = ZodNullable.create;
  const preprocessType = ZodEffects.createWithPreprocess;
  const ostring = () => stringType().optional();
  const onumber = () => numberType().optional();
  const oboolean = () => booleanType().optional();
  var mod = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ZodParsedType,
    getParsedType,
    makeIssue,
    EMPTY_PATH,
    addIssueToContext,
    ParseStatus,
    INVALID,
    DIRTY,
    OK,
    isAborted,
    isDirty,
    isValid,
    isAsync,
    ZodType,
    ZodString,
    ZodNumber,
    ZodBigInt,
    ZodBoolean,
    ZodDate,
    ZodUndefined,
    ZodNull,
    ZodAny,
    ZodUnknown,
    ZodNever,
    ZodVoid,
    ZodArray,
    get objectUtil() {
      return objectUtil;
    },
    ZodObject,
    ZodUnion,
    ZodDiscriminatedUnion,
    ZodIntersection,
    ZodTuple,
    ZodRecord,
    ZodMap,
    ZodSet,
    ZodFunction,
    ZodLazy,
    ZodLiteral,
    ZodEnum,
    ZodNativeEnum,
    ZodPromise,
    ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodNaN,
    custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late,
    get ZodFirstPartyTypeKind() {
      return ZodFirstPartyTypeKind;
    },
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean,
    onumber,
    optional: optionalType,
    ostring,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    ZodIssueCode,
    quotelessJson,
    ZodError,
    defaultErrorMap,
    get overrideErrorMap() {
      return overrideErrorMap;
    },
    setErrorMap
  });
  const SongStateSchema = mod.object({
    drum_track_names: mod.array(mod.string()),
    drum_categories: mod.array(mod.string()),
    favorite_device_names: mod.array(mod.string())
  });
  class ScriptClient {
    constructor() {
      this.songState = null;
      EventBus.subscribe(ActionGroupAppearedEvent, (_) => this.onActionGroupAppearedEvent());
    }
    async connect() {
      console.log("connecting to websocket server");
      try {
        await this._connect();
        console.log("connected to websocket server");
      } catch (e) {
        console.warn(e);
        const delay = 5e3;
        console.warn(`scheduling reconnection in ${delay} ms`);
        setTimeout(async () => await this.connect(), delay);
      }
    }
    async _connect() {
      const p0WebSocket = new WebSocket(Config.P0_WS_URL);
      p0WebSocket.onmessage = (message) => this.onSongState(JSON.parse(message.data));
      p0WebSocket.onclose = (_) => this.connect();
    }
    onSongState(data) {
      console.log("received song state from websocket");
      const songState = SongStateSchema.parse(data);
      console.log(songState);
      if (!songState) {
        return;
      }
      this.songState = songState;
      ScriptClient.emitSongState(this.songState);
    }
    onActionGroupAppearedEvent() {
      console.log("onActionGroupAppearedEvent");
      if (!this.songState) {
        console.warn("cannot emit null songState");
        return;
      }
      ScriptClient.emitSongState(this.songState);
    }
    static emitSongState(songState) {
      EventBus.emit(new DrumTrackNamesUpdatedEvent(songState.drum_track_names));
      EventBus.emit(new DrumCategoriesUpdatedEvent(songState.drum_categories));
      EventBus.emit(new FavoriteDeviceNamesUpdatedEvent(songState.favorite_device_names));
    }
  }
  class DB {
    constructor() {
      this.actions = [];
    }
  }
  class Container {
    constructor() {
      const db = new DB();
      this.actionRepository = new ActionRepository(db);
      this.actionFactory = new ActionFactory(this.actionRepository);
      this.scriptClient = new ScriptClient();
    }
  }
  if (window && window.$SD) {
    $SD.on("connected", async (_) => {
      await initApplication();
    });
  }
  async function initApplication() {
    const container = new Container();
    container.actionFactory.createActions();
    await container.scriptClient.connect();
  }
})();
