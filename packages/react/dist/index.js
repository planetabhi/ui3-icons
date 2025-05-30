import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/absolute.tsx
var Absolute = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 7a1 1 0 0 1 1-1h2.5a.5.5 0 1 1 0 1H7v2.5a.5.5 0 0 1-1 0zm12 0a1 1 0 0 0-1-1h-2.5a.5.5 0 1 0 0 1H17v2.5a.5.5 0 1 0 1 0zM7 18a1 1 0 0 1-1-1v-2.5a.5.5 0 0 1 1 0V17h2.5a.5.5 0 0 1 0 1zm11-1a1 1 0 0 1-1 1h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1 0h4v4h-4z", "clip-rule": "evenodd" })
    ]
  }
);
var absolute_default = Absolute;
var Actions = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.207 3.793a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414zM4.5 7.5l3 3 3-3-3-3zm12 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M19 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.5 13a.5.5 0 0 1 .5.5V16h2.5a.5.5 0 0 1 0 1H17v2.5a.5.5 0 0 1-1 0V17h-2.5a.5.5 0 1 1 0-1H16v-2.5a.5.5 0 0 1 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11 15a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2zm-6 0a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", "clip-rule": "evenodd" })
    ]
  }
);
var actions_default = Actions;
var ActualSize = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 9.5a.5.5 0 0 0-.724-.447l-1 .5a.5.5 0 1 0 .448.894l.276-.138V14H8a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5zm6 0a.5.5 0 0 0-.724-.447l-1 .5a.5.5 0 1 0 .448.894l.276-.138V14H14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5zm-3 1a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M12 13a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var actual_size_default = ActualSize;
var AddHorizontal = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.5 6A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h2a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 9.5 6zm2 1h-2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m5-1A1.5 1.5 0 0 0 13 7.5v2a1.5 1.5 0 0 0 1.5 1.5h2A1.5 1.5 0 0 0 18 9.5v-2A1.5 1.5 0 0 0 16.5 6zm2 1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 13.5a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16z" })
    ]
  }
);
var add_horizontal_default = AddHorizontal;
var AddVertical = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7.5A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5v2a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 9.5zm1 2v-2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m-1 5A1.5 1.5 0 0 1 7.5 13h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 9.5 18h-2A1.5 1.5 0 0 1 6 16.5zm1 2v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.5 16a.5.5 0 0 1 0-1H15v-1.5a.5.5 0 0 1 1 0V15h1.5a.5.5 0 0 1 0 1H16v1.5a.5.5 0 0 1-1 0V16z" })
    ]
  }
);
var add_vertical_default = AddVertical;
var AddWrap = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7.5A1.5 1.5 0 0 1 7.5 6h2A1.5 1.5 0 0 1 11 7.5v2A1.5 1.5 0 0 1 9.5 11h-2A1.5 1.5 0 0 1 6 9.5zM7.5 7h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m5.5.5A1.5 1.5 0 0 1 14.5 6h2A1.5 1.5 0 0 1 18 7.5v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 13 9.5zm1.5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m-7 6A1.5 1.5 0 0 0 6 14.5v2A1.5 1.5 0 0 0 7.5 18h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 9.5 13zm2 1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 13.5a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16z" })
    ]
  }
);
var add_wrap_default = AddWrap;
var Adjust = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 4.5a.5.5 0 0 1 1 0V12l-.002.05a2.5 2.5 0 0 1 0 4.9L8 17v2.5a.5.5 0 0 1-1 0V17l.002-.05a2.5 2.5 0 0 1 0-4.9L7 12zm2 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 5a.5.5 0 0 0 1 0V12l-.002-.05a2.5 2.5 0 0 0 0-4.9L17 7V4.5a.5.5 0 1 0-1 0V7q0 .025.003.05a2.5 2.5 0 0 0 0 4.9L16 12zm2-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0", "clip-rule": "evenodd" })
    ]
  }
);
var adjust_default = Adjust;
var Ai = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m4.7 4.7.315-1.26c.126-.505.844-.505.97 0L6.3 4.7l1.26.315c.505.126.505.844 0 .97L6.3 6.3l-.315 1.26c-.126.505-.844.505-.97 0L4.7 6.3l-1.26-.315c-.505-.126-.505-.844 0-.97z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m9.191 9.191 1.117-3.908c.486-1.702 2.898-1.702 3.384 0l1.117 3.908 3.908 1.117c1.702.486 1.702 2.898 0 3.384L14.81 14.81l-1.117 3.908c-.486 1.702-2.898 1.702-3.384 0L9.19 14.81l-3.908-1.117c-1.702-.486-1.702-2.898 0-3.384zm.809.81 1.27-4.443c.21-.735 1.25-.735 1.46 0L14 10l4.442 1.27c.735.21.735 1.25 0 1.46L14 14l-1.27 4.442c-.21.735-1.25.735-1.46 0L10 14l-4.442-1.27c-.735-.21-.735-1.25 0-1.46z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18.015 16.44 17.7 17.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0l.315-1.26 1.26-.315c.505-.126.505-.844 0-.97L19.3 17.7l-.315-1.26c-.126-.505-.844-.505-.97 0" })
    ]
  }
);
var ai_default = Ai;
var AlignBottomAlt = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 6.75A.75.75 0 0 0 9.25 6h-.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75zm5 4a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M17.5 18a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1z" })
    ]
  }
);
var align_bottom_alt_default = AlignBottomAlt;
var AlignBottomGroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M5 6.25C5 5.56 5.56 5 6.25 5h10.5c.69 0 1.25.56 1.25 1.25v8.25a.5.5 0 0 1-1 0V6.25a.25.25 0 0 0-.25-.25H6.25a.25.25 0 0 0-.25.25v8.25a.5.5 0 0 1-1 0z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.25 7a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 8.75 7zm5 4a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75zM18 17.5a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 .5-.5" })
    ]
  }
);
var align_bottom_group_default = AlignBottomGroup;
var AlignBottom = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m14.854 13.854-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L11 15.293V7.5a.5.5 0 0 1 1 0v7.793l2.146-2.147a.5.5 0 0 1 .708.708M5.5 19a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1z" })
    ]
  }
);
var align_bottom_default = AlignBottom;
var AlignCenter = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 15a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" })
    ]
  }
);
var align_center_default = AlignCenter;
var AlignHorizontalCenterGroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 18a.5.5 0 0 0 .5-.5V15h2.25a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75H13v-3h4.25a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75H13V5.5a.5.5 0 0 0-1 0V8H7.75a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H12v3H9.75a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H12v2.5a.5.5 0 0 0 .5.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M9.5 18a.5.5 0 0 0 0-1H6.25a.25.25 0 0 1-.25-.25V6.25A.25.25 0 0 1 6.25 6H9.5a.5.5 0 0 0 0-1H6.25C5.56 5 5 5.56 5 6.25v10.5c0 .69.56 1.25 1.25 1.25zm6-13a.5.5 0 0 0 0 1h3.25a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H15.5a.5.5 0 0 0 0 1h3.25c.69 0 1.25-.56 1.25-1.25V6.25C20 5.56 19.44 5 18.75 5z" })
    ]
  }
);
var align_horizontal_center_group_default = AlignHorizontalCenterGroup;
var AlignHorizontalCenter = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.25 10a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75zm-2 5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M13 17.5a.5.5 0 0 1-1 0V15h1zm0-4.5v-3h-1v3zm0-7.5V8h-1V5.5a.5.5 0 0 1 1 0" })
    ]
  }
);
var align_horizontal_center_default = AlignHorizontalCenter;
var AlignJustified = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z" })
    ]
  }
);
var align_justified_default = AlignJustified;
var AlignLeftAlt = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.25 10a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75zm-4 5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M6 17.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0z" })
    ]
  }
);
var align_left_alt_default = AlignLeftAlt;
var AlignLeftGroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.5 18a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5M18 9.25a.75.75 0 0 1-.75.75h-8.5A.75.75 0 0 1 8 9.25v-.5A.75.75 0 0 1 8.75 8h8.5a.75.75 0 0 1 .75.75zm-4 5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M8 5.5a.5.5 0 0 1 .5-.5h10.25c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H8.5a.5.5 0 0 1 0-1h10.25a.25.25 0 0 0 .25-.25V6.25a.25.25 0 0 0-.25-.25H8.5a.5.5 0 0 1-.5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var align_left_group_default = AlignLeftGroup;
var AlignLeft = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 3.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" })
    ]
  }
);
var align_left_default = AlignLeft;
var AlignMiddle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m11.854 9.854 2-2a.5.5 0 0 0-.708-.708L12 8.293V4.5a.5.5 0 0 0-1 0v3.793L9.854 7.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0m0 3.292 2 2a.5.5 0 0 1-.708.708L12 14.707V18.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0M5.5 11a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z" })
    ]
  }
);
var align_middle_default = AlignMiddle;
var AlignRightAlt = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 9.25c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75zM10.75 15a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M18 17.5a.5.5 0 0 0 1 0v-12a.5.5 0 0 0-1 0z" })
    ]
  }
);
var align_right_alt_default = AlignRightAlt;
var AlignRightGroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18.5 18a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 1 0v12a.5.5 0 0 1-.5.5M6 9.25c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75zm4 5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M16 17.5a.5.5 0 0 1-.5.5H5.25C4.56 18 4 17.44 4 16.75V6.25C4 5.56 4.56 5 5.25 5H15.5a.5.5 0 0 1 0 1H5.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25H15.5a.5.5 0 0 1 .5.5", "clip-rule": "evenodd" })
    ]
  }
);
var align_right_group_default = AlignRightGroup;
var AlignRight = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M19 7.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 .5-.5m0 4a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m-.5 3.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" })
    ]
  }
);
var align_right_default = AlignRight;
var AlignTopAlt = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 17.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 8.75 8h.5a.75.75 0 0 1 .75.75zm5-4a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M17.5 6a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1z" })
    ]
  }
);
var align_top_alt_default = AlignTopAlt;
var AlignTopGroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18 5.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5M9.25 16a.75.75 0 0 0 .75-.75v-6.5A.75.75 0 0 0 9.25 8h-.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75zm5-4a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M18 16.75c0 .69-.56 1.25-1.25 1.25H6.25C5.56 18 5 17.44 5 16.75V8.5a.5.5 0 0 1 1 0v8.25c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V8.5a.5.5 0 0 1 1 0z", "clip-rule": "evenodd" })
    ]
  }
);
var align_top_group_default = AlignTopGroup;
var AlignTop = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.5 5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm6.354 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L11 8.707V16.5a.5.5 0 0 0 1 0V8.707l2.146 2.147a.5.5 0 0 0 .708-.708z" })
    ]
  }
);
var align_top_default = AlignTop;
var AlignVerticalCenterGroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18 11.5a.5.5 0 0 0-.5-.5H15V9.75a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75V11h-3V7.75A.75.75 0 0 0 9.25 7h-.5a.75.75 0 0 0-.75.75V11H5.5a.5.5 0 0 0 0 1H8v3.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V12h3v1.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V12h2.5a.5.5 0 0 0 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M6.25 5C5.56 5 5 5.56 5 6.25V8.5a.5.5 0 0 0 1 0V6.25A.25.25 0 0 1 6.25 6h10.5a.25.25 0 0 1 .25.25V8.5a.5.5 0 0 0 1 0V6.25C18 5.56 17.44 5 16.75 5zm10.5 13c.69 0 1.25-.56 1.25-1.25V14.5a.5.5 0 0 0-1 0v2.25a.25.25 0 0 1-.25.25H6.25a.25.25 0 0 1-.25-.25V14.5a.5.5 0 0 0-1 0v2.25c0 .69.56 1.25 1.25 1.25z" })
    ]
  }
);
var align_vertical_center_group_default = AlignVerticalCenterGroup;
var AlignVerticalCenter = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 6.75A.75.75 0 0 0 9.25 6h-.5a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75zm5 2a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M17.5 11a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1z" })
    ]
  }
);
var align_vertical_center_default = AlignVerticalCenter;
var Animate = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-4 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm4 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M21 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-1 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0", "clip-rule": "evenodd" })
    ]
  }
);
var animate_default = Animate;
var Annotate = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.293 15.707a1 1 0 0 1-.274-.903l.5-2.5a1 1 0 0 1 .274-.51l8.146-8.147a1.5 1.5 0 0 1 2.122 0l-.707.707a.5.5 0 0 0-.708 0l-1.042 1.042 2 2 1.042-1.042a.5.5 0 0 0 0-.707l-1.293-1.293.708-.707 1.293 1.293a1.5 1.5 0 0 1 0 2.121l-8.147 8.147a1 1 0 0 1-.511.273l-2.5.5a1 1 0 0 1-.903-.274M9.5 12.5l6.397-6.396 2 2L11.5 14.5 9 15z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18 12.45V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5.55a.5.5 0 0 0 0-1H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5.55a.5.5 0 1 0-1 0" })
    ]
  }
);
var annotate_default = Annotate;
var Arc = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 12a5 5 0 0 1 5-5 .5.5 0 0 0 0-1 6 6 0 1 0 6 6 .5.5 0 0 0-1 0 5 5 0 0 1-10 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 12A2.5 2.5 0 0 1 12 9.5a.5.5 0 0 0 0-1 3.5 3.5 0 1 0 3.5 3.5.5.5 0 0 0-1 0 2.5 2.5 0 0 1-5 0" })
    ]
  }
);
var arc_default = Arc;
var ArrowDownward = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 7a.5.5 0 0 0-.5.5v6.789l-2.388-2.4a.5.5 0 0 0-.709.706l3.243 3.258a.5.5 0 0 0 .708 0l3.243-3.258a.5.5 0 0 0-.709-.705L13 14.289V7.5a.5.5 0 0 0-.5-.5" })
    ]
  }
);
var arrow_downward_default = ArrowDownward;
var ArrowRight = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.146 7.146a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.707-.708L16.293 12H6.5a.5.5 0 0 1 0-1h9.793l-3.147-3.146a.5.5 0 0 1 0-.708" })
    ]
  }
);
var arrow_right_default = ArrowRight;
var Arrow = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 4.5A.5.5 0 0 1 13 4h6.5a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.707L4.854 19.854a.5.5 0 0 1-.708-.708L18.293 5H13a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var arrow_default = Arrow;
var Attention = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.65 9.36a.605.605 0 1 0-1.21 0l.078 3.488a.526.526 0 0 0 1.052 0zm-1.105 5.793a.7.7 0 0 0 .499.204.67.67 0 0 0 .348-.092.73.73 0 0 0 .256-.256.66.66 0 0 0 .1-.355.66.66 0 0 0-.212-.492.68.68 0 0 0-.492-.205.7.7 0 0 0-.499.205.67.67 0 0 0-.204.492q0 .294.204.499" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", "clip-rule": "evenodd" })
    ]
  }
);
var attention_default = Attention;
var Audio = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m4.944 11.932 1.237-.177a2.25 2.25 0 0 1 2.548 1.93l.504 3.777a2.242 2.242 0 0 1-4.442.613l-.787-5.513-.017-.132C3.427 7.954 6.918 4 11.43 4h1.14c4.512 0 8.002 3.954 7.443 8.43l-.018.14-.786 5.505a2.242 2.242 0 0 1-4.442-.613l.504-3.777a2.25 2.25 0 0 1 2.548-1.93l1.237.177C19.31 8.209 16.354 5 12.57 5h-1.14c-3.784 0-6.74 3.209-6.486 6.932m13.99.992-.715 5.01a1.242 1.242 0 0 1-2.46-.34l.503-3.777a1.25 1.25 0 0 1 1.416-1.072zm-13.868 0 .715 5.01a1.242 1.242 0 0 0 2.46-.34l-.503-3.777a1.25 1.25 0 0 0-1.416-1.072z", "clip-rule": "evenodd" })
    ]
  }
);
var audio_default = Audio;
var Author = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.402 15.49a.5.5 0 0 0 .587-.387l.002-.008.015-.053q.022-.077.088-.221c.089-.19.245-.453.51-.717C7.122 13.584 8.114 13 10 13c.513 0 .96.043 1.348.117l.827-.828C11.577 12.11 10.86 12 10 12c-2.114 0-3.372.665-4.103 1.396-.36.36-.58.724-.71 1.002a3 3 0 0 0-.173.485l-.003.011v.006c-.001 0-.001.002.49.1l-.491-.098a.5.5 0 0 0 .392.588" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13 19a1 1 0 0 0 .707-.293l5-5a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0-.293.707V18a1 1 0 0 0 1 1zm0-1 5-5-1.5-1.5-5 5V18z", "clip-rule": "evenodd" })
    ]
  }
);
var author_default = Author;
var AutoRename = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H14v12h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H13V6h-1.5a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18 9.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 19 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5zM6 11a.5.5 0 0 0-1 0v3.5A1.5 1.5 0 0 0 6.5 16h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 1-.5-.5zm2.015-4.56L7.7 7.7l-1.26.315c-.505.126-.505.844 0 .97L7.7 9.3l.315 1.26c.126.505.844.505.97 0L9.3 9.3l1.26-.315c.505-.126.505-.844 0-.97L9.3 7.7l-.315-1.26c-.126-.505-.844-.505-.97 0" })
    ]
  }
);
var auto_rename_default = AutoRename;
var Back = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.854 7.146a.5.5 0 0 1 0 .708L6.707 10H15.5a3.5 3.5 0 1 1 0 7h-1a.5.5 0 1 1 0-1h1a2.5 2.5 0 0 0 0-5H6.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0" })
    ]
  }
);
var back_default = Back;
var BackgroundBlur = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6.75-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-8.25 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.25 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-5.25 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6.75-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm10 1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var background_blur_default = BackgroundBlur;
var Backward = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15.293 7.293A1 1 0 0 1 17 8v8a1 1 0 0 1-1.707.707L12 13.414V16a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 12 8v2.586zM12 12l4-4v8zm-1 4V8l-4 4z", "clip-rule": "evenodd" })
    ]
  }
);
var backward_default = Backward;
var BlendFill = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M16 13a4 4 0 1 1-8 0c0-2.17 2.093-5.388 3.251-7.001a.913.913 0 0 1 1.498 0c1.158 1.613 3.251 4.83 3.251 7" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 17a4 4 0 0 0 4-4c0-2.17-2.093-5.388-3.251-7.001a.913.913 0 0 0-1.498 0C10.093 7.612 8 10.829 8 12.999a4 4 0 0 0 4 4m0-1a3 3 0 0 0 3-3c0-.827-.42-1.99-1.078-3.246C13.308 8.58 12.56 7.456 12 6.67c-.56.785-1.309 1.91-1.922 3.083C9.42 11.01 9 12.174 9 13a3 3 0 0 0 3 3", "clip-rule": "evenodd" })
    ]
  }
);
var blend_fill_default = BlendFill;
var Blend = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 17a4 4 0 0 0 4-4c0-2.17-2.093-5.387-3.251-7a.913.913 0 0 0-1.498 0C10.093 7.612 8 10.83 8 13a4 4 0 0 0 4 4m0-1a3 3 0 0 0 3-3c0-.826-.42-1.989-1.078-3.246C13.308 8.581 12.56 7.457 12 6.672c-.56.785-1.309 1.909-1.922 3.082C9.42 11.011 9 12.174 9 13a3 3 0 0 0 3 3", "clip-rule": "evenodd" })
    ]
  }
);
var blend_default = Blend;
var Bold = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 8a2 2 0 0 1 2-2h2.75a3.25 3.25 0 0 1 2.418 5.422A3.5 3.5 0 0 1 13.5 18H10a2 2 0 0 1-2-2zm6.5 1.25A1.75 1.75 0 0 1 12.75 11H9.5V8a.5.5 0 0 1 .5-.5h2.75c.966 0 1.75.784 1.75 1.75m-5 3.25V16a.5.5 0 0 0 .5.5h3.5a2 2 0 1 0 0-4z", "clip-rule": "evenodd" })
    ]
  }
);
var bold_default = Bold;
var BooleanExclude = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M5 5h9v5h-4v4H5zm5 9h4v-4h5v9h-9z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 15a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-4zm5 0v4h9v-9h-4v4a1 1 0 0 1-1 1zm0-1v-4h4v4zm-1 0H5V5h9v4h-4a1 1 0 0 0-1 1z", "clip-rule": "evenodd" })
    ]
  }
);
var boolean_exclude_default = BooleanExclude;
var BooleanIntersect = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M14 10v4h-4v-4z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 15a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-4zm5 0v4h9v-9h-4v4a1 1 0 0 1-1 1zm0-1v-4h4v4zm-1 0H5V5h9v4h-4a1 1 0 0 0-1 1z", "clip-rule": "evenodd" })
    ]
  }
);
var boolean_intersect_default = BooleanIntersect;
var BooleanSubtract = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M10 14v5h9v-9h-5v4z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 15h4v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1m5 4v-4h4a1 1 0 0 0 1-1v-4h4v9zm4-5V5H5v9z", "clip-rule": "evenodd" })
    ]
  }
);
var boolean_subtract_default = BooleanSubtract;
var BooleanUnion = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M14 5H5v9h5v5h9v-9h-5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4 5v9a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m6 9v5h9v-9h-5V5H5v9z", "clip-rule": "evenodd" })
    ]
  }
);
var boolean_union_default = BooleanUnion;
var Boolean = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 15H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zM5 5h9v4h-4a1 1 0 0 0-1 1v4H5zm10 5h4v9h-9v-4h4a1 1 0 0 0 1-1zm-1 0v4h-4v-4z", "clip-rule": "evenodd" })
    ]
  }
);
var boolean_default = Boolean;
var BorderExtraLarge = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm1 0v6h12V9z", "clip-rule": "evenodd" })
    ]
  }
);
var border_extra_large_default = BorderExtraLarge;
var BorderLarge = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm1 0v4h12v-4z", "clip-rule": "evenodd" })
    ]
  }
);
var border_large_default = BorderLarge;
var BorderMedium = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 11a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm1 0v2h12v-2z", "clip-rule": "evenodd" })
    ]
  }
);
var border_medium_default = BorderMedium;
var Branch = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 7.5a.5.5 0 0 1 .5-.5h2a3.5 3.5 0 0 1 3.5 3.5v2a2.5 2.5 0 0 0 2.5 2.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L17.293 16H13.5a3.5 3.5 0 0 1-3.5-3.5v-2A2.5 2.5 0 0 0 7.5 8h-2a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var branch_default = Branch;
var BulbOff = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 10a1 1 0 0 1 1-1 .5.5 0 0 0 0-1 2 2 0 0 0-2 2 .5.5 0 0 0 1 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.233 14.978c.17-.194.29-.426.35-.668.115-.468.329-.94.593-1.517l.015-.032c.23-.502.5-1.089.668-1.707A4.004 4.004 0 0 0 12 6a4 4 0 0 0-3.86 5.054c.17.618.439 1.205.669 1.707l.015.033c.264.576.477 1.048.593 1.516.06.242.18.474.35.668-.167.213-.267.48-.267.772v1a1.75 1.75 0 0 0 1.5 1.732v.018a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.518 1.75 1.75 0 0 0 1.5-1.732v-1c0-.291-.1-.56-.267-.772m-3.483.522a.25.25 0 0 0-.25.25v1c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1a.25.25 0 0 0-.25-.25zm2.342-1c.251 0 .46-.186.52-.43.142-.575.399-1.134.655-1.694.24-.523.48-1.047.628-1.585q.104-.379.105-.791a3 3 0 1 0-5.895.791c.147.538.387 1.062.628 1.585.256.56.513 1.119.655 1.694.06.244.269.43.52.43z", "clip-rule": "evenodd" })
    ]
  }
);
var bulb_off_default = BulbOff;
var BulbOn = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 10a1 1 0 0 1 1-1 .5.5 0 0 0 0-1 2 2 0 0 0-2 2 .5.5 0 0 0 1 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9.767 14.978a1.6 1.6 0 0 1-.35-.668c-.116-.468-.329-.94-.593-1.517l-.015-.032c-.23-.502-.5-1.089-.668-1.707A4.004 4.004 0 0 1 12 6a4 4 0 0 1 3.86 5.054c-.17.618-.439 1.205-.669 1.707l-.015.033c-.264.576-.478 1.048-.593 1.516-.06.242-.18.474-.35.668.167.213.267.48.267.772v1a1.75 1.75 0 0 1-1.5 1.732v.018a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.018a1.75 1.75 0 0 1-1.5-1.732v-1c0-.291.1-.56.267-.772m3.845-.908a.55.55 0 0 1-.52.43h-2.184a.55.55 0 0 1-.52-.43c-.142-.575-.399-1.134-.655-1.694-.24-.523-.48-1.047-.628-1.585A3.003 3.003 0 0 1 12 7a3 3 0 0 1 2.895 3.791c-.147.538-.387 1.062-.628 1.585-.256.56-.513 1.119-.655 1.694M10.75 15.5a.25.25 0 0 0-.25.25v1c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1a.25.25 0 0 0-.25-.25z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm12 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-11.562-3a.5.5 0 0 1 .683-.183l.866.5a.5.5 0 1 1-.5.866l-.866-.5a.5.5 0 0 1-.183-.683m10.392 6a.5.5 0 0 1 .683-.183l.866.5a.5.5 0 1 1-.5.866l-.866-.5a.5.5 0 0 1-.183-.683m-10.209.317a.5.5 0 0 0 .5.866l.866-.5a.5.5 0 0 0-.5-.866zm10.392-6a.5.5 0 0 0 .5.866l.866-.5a.5.5 0 1 0-.5-.866z" })
    ]
  }
);
var bulb_on_default = BulbOn;
var CameraOff = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.854 6.854a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708zM13.5 7c.401 0 .78.094 1.116.262l-.776.777A1.5 1.5 0 0 0 13.5 8h-6A1.5 1.5 0 0 0 6 9.5v5c0 .383.144.733.38.998l-.707.708A2.5 2.5 0 0 1 5 14.5v-5A2.5 2.5 0 0 1 7.5 7z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.5 16h-3.379l-1 1H13.5a2.5 2.5 0 0 0 2.5-2.5v-.586l1.293 1.293A1 1 0 0 0 19 14.5v-5a1 1 0 0 0-1.532-.847L15 11.121V14.5a1.5 1.5 0 0 1-1.5 1.5m2.5-3.5 2 2v-5l-2 2z", "clip-rule": "evenodd" })
    ]
  }
);
var camera_off_default = CameraOff;
var Camera = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16 13.914v.586a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 5 14.5v-5A2.5 2.5 0 0 1 7.5 7h6A2.5 2.5 0 0 1 16 9.5v.586l1.293-1.293A1 1 0 0 1 19 9.5v5a1 1 0 0 1-1.707.707zM7.5 8h6A1.5 1.5 0 0 1 15 9.5v5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 14.5v-5A1.5 1.5 0 0 1 7.5 8m8.5 4.5 2 2v-5l-2 2z", "clip-rule": "evenodd" })
    ]
  }
);
var camera_default = Camera;
var Captioning = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 15a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-3.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm2.5 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M7.5 13a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var captioning_default = Captioning;
var Change = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.862 8.824a5 5 0 0 0-8.838 2.69.5.5 0 1 1-.996-.096A6 6 0 0 1 17 8.683V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H16a5 5 0 0 0-.138-.176m1.661 3.212a.5.5 0 0 1 .449.546A6 6 0 0 1 7 15.317V17.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1H8q.067.09.138.176a5 5 0 0 0 8.838-2.691.5.5 0 0 1 .547-.45" })
    ]
  }
);
var change_default = Change;
var CheckLarge = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.765 7.076a.5.5 0 0 1 .159.69l-5 8a.5.5 0 0 1-.824.034l-3-4a.5.5 0 1 1 .8-.6l2.563 3.417 4.613-7.382a.5.5 0 0 1 .689-.159" })
    ]
  }
);
var check_large_default = CheckLarge;
var Check = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.252 8.568a.5.5 0 0 1 .18.684l-3.5 6a.5.5 0 0 1-.816.068l-2.5-3a.5.5 0 0 1 .768-.64l2.043 2.452 3.141-5.384a.5.5 0 0 1 .684-.18" })
    ]
  }
);
var check_default = Check;
var Checkmark = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.929 9.757a.5.5 0 1 0-.858-.514l-2.593 4.322-1.562-2.342a.5.5 0 1 0-.832.554l2 3a.5.5 0 0 0 .845-.02z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", "clip-rule": "evenodd" })
    ]
  }
);
var checkmark_default = Checkmark;
var ChevronDownLarge = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.646 10.146a.5.5 0 0 1 .708 0L12 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708" })
    ]
  }
);
var chevron_down_large_default = ChevronDownLarge;
var ChevronDown = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.646 11.146a.5.5 0 0 1 .708 0L12 12.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708" })
    ]
  }
);
var chevron_down_default = ChevronDown;
var ChevronRightLarge = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.146 16.354a.5.5 0 0 1 0-.708L13.793 12l-3.647-3.646a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0" })
    ]
  }
);
var chevron_right_large_default = ChevronRightLarge;
var ChevronRight = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.146 9.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.793 12l-1.647-1.646a.5.5 0 0 1 0-.708" })
    ]
  }
);
var chevron_right_default = ChevronRight;
var ChevronUp = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.646 10.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 11.207l-1.646 1.647a.5.5 0 0 1-.708-.708z" })
    ]
  }
);
var chevron_up_default = ChevronUp;
var Clipboard = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m1 0h4v1h-4zM9 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1 1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var clipboard_default = Clipboard;
var Close = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.354 6.646a.5.5 0 0 1 0 .708L12.707 12l4.647 4.646a.5.5 0 0 1-.708.708L12 12.707l-4.646 4.647a.5.5 0 0 1-.708-.708L11.293 12 6.646 7.354a.5.5 0 0 1 .708-.707L12 11.293l4.646-4.647a.5.5 0 0 1 .708 0" })
    ]
  }
);
var close_default = Close;
var CodeBlock = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.354 4.146a.5.5 0 0 1 0 .708L5.207 7l2.147 2.146a.5.5 0 1 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14 4.5a.5.5 0 0 1 .5-.5H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6.5a.5.5 0 0 1 1 0V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3.5a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.646 4.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L11.793 7z" })
    ]
  }
);
var code_block_default = CodeBlock;
var CodeSnippet = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.646 7.146a.5.5 0 1 1 .708.708L5.207 12l4.147 4.146a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708zm6.708 0a.5.5 0 0 0-.708.708L18.793 12l-4.147 4.146a.5.5 0 0 0 .708.708l4.5-4.5a.5.5 0 0 0 0-.708z" })
    ]
  }
);
var code_snippet_default = CodeSnippet;
var CollapseLayers = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM6 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm6.646.146 2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L15.5 15.207l-1.646 1.647a.5.5 0 0 1-.708-.708m2.708-6.292a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L15.5 8.793l1.646-1.647a.5.5 0 0 1 .708.708z" })
    ]
  }
);
var collapse_layers_default = CollapseLayers;
var Collapse = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.146 6.146a.5.5 0 0 1 .708.708L14.707 10H17.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793zM6.854 17.854a.5.5 0 0 1-.708-.708L9.293 14H6.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793z" })
    ]
  }
);
var collapse_default = Collapse;
var Color = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4.134 3.5a1 1 0 1 0-1.732-1 1 1 0 0 0 1.732 1m7.634.366a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732M7.134 15.5a1 1 0 1 0 1.732-1 1 1 0 0 0-1.732 1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18.364 5.636a8.96 8.96 0 0 1 2.535 5.016C21.206 12.688 19.4 14 17.73 14H15.5a1.5 1.5 0 0 0-1.5 1.5v2.231c0 1.67-1.312 3.475-3.348 3.168a9 9 0 1 1 7.712-15.263m1.546 5.165c.188 1.246-.918 2.199-2.179 2.199H15.5a2.5 2.5 0 0 0-2.5 2.5v2.231c0 1.26-.953 2.367-2.2 2.18a8 8 0 1 1 9.11-9.11", "clip-rule": "evenodd" })
    ]
  }
);
var color_default = Color;
var Command = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4 7a3 3 0 0 1 6 0v2h4V7a3 3 0 1 1 3 3h-2v4h2a3 3 0 1 1-3 3v-2h-4v2a3 3 0 1 1-3-3h2v-4H7a3 3 0 0 1-3-3m5 2V7a2 2 0 1 0-2 2zm0 6H7a2 2 0 1 0 2 2zm1-1h4v-4h-4zm5 1v2a2 2 0 1 0 2-2zm0-6h2a2 2 0 1 0-2-2z", "clip-rule": "evenodd" })
    ]
  }
);
var command_default = Command;
var Comment = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 4a8 8 0 0 0-8 8v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20H12a8 8 0 1 0 0-16M7.2 19H12a7 7 0 1 0-7-7v4.8c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C6.25 19 6.623 19 7.2 19", "clip-rule": "evenodd" })
    ]
  }
);
var comment_default = Comment;
var Community = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17.981 11a6.5 6.5 0 1 0 0 1H18v-1zm-6.063 5.759c-.237.222-.38.241-.418.241-.039 0-.181-.02-.418-.241-.235-.22-.497-.58-.742-1.094-.44-.92-.768-2.204-.83-3.665h3.98c-.062 1.46-.39 2.745-.83 3.665-.245.513-.507.875-.742 1.094M13.49 11H9.51c.062-1.46.39-2.745.83-3.665.245-.513.507-.875.742-1.094.237-.222.38-.241.418-.241.039 0 .181.02.418.241.235.22.497.58.742 1.094.44.92.768 2.204.83 3.665m1 1c-.075 1.937-.583 3.636-1.274 4.727A5.5 5.5 0 0 0 16.978 12zm2.488-1H14.49c-.075-1.937-.583-3.636-1.274-4.727A5.5 5.5 0 0 1 16.978 11M8.51 11c.075-1.937.583-3.636 1.274-4.727A5.5 5.5 0 0 0 6.022 11zm-2.488 1a5.5 5.5 0 0 0 3.762 4.727c-.69-1.091-1.199-2.79-1.274-4.727z", "clip-rule": "evenodd" })
    ]
  }
);
var community_default = Community;
var Company = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 18a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2V8.5a.5.5 0 0 1 1 0V10h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM7 6h5v11h-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H7zm6 5v6h5v-6zm-4 6h1v-2H9z", "clip-rule": "evenodd" })
    ]
  }
);
var company_default = Company;
var ComponentSet = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 4.5a.5.5 0 0 1-.5.5H6a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V6a2 2 0 0 1 2-2h.5a.5.5 0 0 1 .5.5m3.75.5a.5.5 0 0 0 0-1H9a.5.5 0 0 0 0 1zM15 5a.5.5 0 0 0 0-1h-1.75a.5.5 0 0 0 0 1zm4 1.5a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 1 1 1zm0 4.25a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0zM19 15a.5.5 0 0 0 1 0v-1.75a.5.5 0 0 0-1 0zm-1.5 4a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1zm-4.25 0a.5.5 0 0 0 0 1H15a.5.5 0 0 0 0-1zM9 19a.5.5 0 0 0 0 1h1.75a.5.5 0 0 0 0-1zm-4-1.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1zm0-4.25a.5.5 0 0 0-1 0V15a.5.5 0 0 0 1 0zM5 9a.5.5 0 0 0-1 0v1.75a.5.5 0 0 0 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.646 10.94 10.207 9.5a.5.5 0 0 1 0-.707l1.44-1.44a.5.5 0 0 1 .707 0l1.439 1.44a.5.5 0 0 1 0 .707l-1.44 1.44a.5.5 0 0 1-.707 0m1.086-1.794L12 9.88l-.732-.733.732-.732zM10.207 14.5l1.44-1.44a.5.5 0 0 1 .707 0l1.439 1.44a.5.5 0 0 1 0 .707l-1.44 1.44a.5.5 0 0 1-.707 0l-1.439-1.44a.5.5 0 0 1 0-.707m1.06.354L12 14.12l.732.733-.732.732zM9.5 10.207l1.44 1.44a.5.5 0 0 1 0 .707L9.5 13.793a.5.5 0 0 1-.707 0l-1.44-1.44a.5.5 0 0 1 0-.707l1.44-1.439a.5.5 0 0 1 .707 0m-.354 2.525L8.414 12l.732-.732.733.732zm3.914-1.086 1.44-1.439a.5.5 0 0 1 .707 0l1.44 1.44a.5.5 0 0 1 0 .707l-1.44 1.439a.5.5 0 0 1-.707 0l-1.44-1.44a.5.5 0 0 1 0-.707m1.794 1.086L14.12 12l.733-.732.732.732z", "clip-rule": "evenodd" })
    ]
  }
);
var component_set_default = ComponentSet;
var Conditional = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 5a.5.5 0 0 1 .5.5V8H15a1.5 1.5 0 0 1 1.5 1.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 0 15 9H9a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 9 8h2.5V5.5A.5.5 0 0 1 12 5m-5.854 9.146a.5.5 0 0 1 .708 0L8 15.293l1.146-1.147a.5.5 0 0 1 .708.708L8.707 16l1.147 1.146a.5.5 0 0 1-.708.708L8 16.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 16l-1.147-1.146a.5.5 0 0 1 0-.708" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0", "clip-rule": "evenodd" })
    ]
  }
);
var conditional_default = Conditional;
var ConstrHoriz = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.5 8.5a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0v-2H7v2a.5.5 0 0 1-1 0V9a.5.5 0 0 1 1 0v2h9V9a.5.5 0 0 1 .5-.5" })
    ]
  }
);
var constr_horiz_default = ConstrHoriz;
var ConstrVert = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.5 6.5A.5.5 0 0 1 9 6h5a.5.5 0 1 1 0 1h-2v9h2a.5.5 0 1 1 0 1H9a.5.5 0 0 1 0-1h2V7H9a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var constr_vert_default = ConstrVert;
var Contrast = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M12 19a6.97 6.97 0 0 0 4.584-1.71L6.709 7.417A7 7 0 0 0 12 19m-4-5a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 14.5A.5.5 0 0 1 8 14h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5M15 8a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-3.416 5.29A7 7 0 0 1 6.71 7.417zm.707-.706L7.416 6.709a7 7 0 0 1 9.874 9.874", "clip-rule": "evenodd" })
    ]
  }
);
var contrast_default = Contrast;
var ConvertToRaster = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 5.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0zm-1 11.68c0 .33-.309.574-.62.466a6.503 6.503 0 0 1 0-12.292c.311-.108.62.136.62.466a.545.545 0 0 1-.368.506 5.502 5.502 0 0 0 0 10.349.545.545 0 0 1 .368.505M13 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H16v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H15v-1.5a.5.5 0 0 1 .5-.5H17V9h-1.5a.5.5 0 0 1-.5-.5V7h-1.5a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var convert_to_raster_default = ConvertToRaster;
var Copy = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.5 6A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15H9v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9H15V7.5A1.5 1.5 0 0 0 13.5 6zm7.5 4v3.5a1.5 1.5 0 0 1-1.5 1.5H10v1.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM7 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5z", "clip-rule": "evenodd" })
    ]
  }
);
var copy_default = Copy;
var Corners = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.88 6c-.403 0-.735 0-1.006.022-.28.023-.54.072-.782.196a2 2 0 0 0-.874.874c-.124.243-.173.501-.196.782C6 8.144 6 8.477 6 8.88v.62a.5.5 0 0 0 1 0v-.6c0-.428 0-.72.019-.944.018-.22.05-.332.09-.41a1 1 0 0 1 .437-.437c.078-.04.19-.072.41-.09C8.18 7 8.472 7 8.9 7h.6a.5.5 0 0 0 0-1zm6.24 0c.403 0 .735 0 1.006.022.281.023.54.072.782.196a2 2 0 0 1 .874.874c.124.243.173.501.196.782.022.27.022.603.022 1.005V9.5a.5.5 0 0 1-1 0v-.6c0-.428 0-.72-.019-.944-.018-.22-.05-.332-.09-.41a1 1 0 0 0-.437-.437c-.078-.04-.19-.072-.41-.09A13 13 0 0 0 15.1 7h-.6a.5.5 0 0 1 0-1zm0 12h-.62a.5.5 0 0 1 0-1h.6c.428 0 .72 0 .944-.019.22-.018.332-.05.41-.09a1 1 0 0 0 .437-.437c.04-.078.072-.19.09-.41.019-.225.019-.516.019-.944v-.6a.5.5 0 0 1 1 0v.62c0 .403 0 .735-.022 1.006-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022M8.88 18c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782A13 13 0 0 1 6 15.12v-.62a.5.5 0 0 1 1 0v.6c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019h.6a.5.5 0 0 1 0 1z" })
    ]
  }
);
var corners_default = Corners;
var CountStar = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 6a.5.5 0 0 0-1 0v4.793l-3.389-3.39a.5.5 0 0 0-.707.708l3.389 3.389H6a.5.5 0 0 0 0 1h4.793l-3.39 3.39a.5.5 0 1 0 .708.706l3.389-3.389V18a.5.5 0 0 0 1 0v-4.793l3.39 3.39a.5.5 0 1 0 .706-.708L13.207 12.5H18a.5.5 0 0 0 0-1h-4.793l3.39-3.39a.5.5 0 1 0-.708-.706L12.5 10.793z" })
    ]
  }
);
var count_star_default = CountStar;
var CreateVariant = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.5 9a.5.5 0 0 1 1 0v2.5H15a.5.5 0 1 1 0 1h-2.5V15a.5.5 0 0 1-1 0v-2.5H9a.5.5 0 0 1 0-1h2.5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m11.116 3.384-7.732 7.732a1.25 1.25 0 0 0 0 1.768l7.732 7.732a1.25 1.25 0 0 0 1.768 0l7.732-7.732a1.25 1.25 0 0 0 0-1.768l-7.732-7.732a1.25 1.25 0 0 0-1.768 0m.707.707-7.732 7.732a.25.25 0 0 0 0 .354l7.732 7.732a.25.25 0 0 0 .354 0l7.732-7.732a.25.25 0 0 0 0-.354l-7.732-7.732a.25.25 0 0 0-.354 0", "clip-rule": "evenodd" })
    ]
  }
);
var create_variant_default = CreateVariant;
var Cut = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.224 15.448a.5.5 0 1 1-.448-.895l4-2a.5.5 0 1 1 .448.894z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 11.441 6.224 8.553a.5.5 0 0 0-.448.894l5.995 2.998.01.005 1.673.836-.25 1.753a2.45 2.45 0 0 0 1.329 2.537l.243.122a2.177 2.177 0 0 0 1.948-3.895l-2.49-1.245-.02-.01L13.117 12l1.095-.547.021-.01 2.49-1.246a2.177 2.177 0 1 0-1.947-3.893l-.244.122a2.45 2.45 0 0 0-1.33 2.537l.251 1.751zm2.194-2.62.203 1.422 1.88-.94a1.177 1.177 0 1 0-1.053-2.105l-.244.122a1.45 1.45 0 0 0-.786 1.501m0 6.36.203-1.423 1.88.94a1.177 1.177 0 1 1-1.053 2.105l-.244-.122a1.45 1.45 0 0 1-.786-1.5", "clip-rule": "evenodd" })
    ]
  }
);
var cut_default = Cut;
var Description = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.5 9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 18h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m6-1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1", "clip-rule": "evenodd" })
    ]
  }
);
var description_default = Description;
var Design = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6.46 4.682A1.438 1.438 0 0 0 4.681 6.46l1.962 6.859a5.615 5.615 0 0 0 6.84 4.288c.08-.02.14.005.169.033l1.217 1.22c.682.684 1.79.684 2.473 0l1.52-1.523a1.754 1.754 0 0 0 0-2.476l-1.24-1.241c-.027-.028-.052-.087-.033-.166q.151-.63.152-1.305a5.62 5.62 0 0 0-4.204-5.444zm-.1 1.012 4.492 4.452a1.5 1.5 0 1 1-.707.707L5.726 6.474l1.89 6.605.003.018a4.615 4.615 0 0 0 5.624 3.539 1.18 1.18 0 0 1 1.118.298l1.216 1.22a.746.746 0 0 0 1.058 0l1.52-1.523a.754.754 0 0 0 0-1.064l-1.24-1.24a1.17 1.17 0 0 1-.298-1.104q.123-.517.125-1.074a4.62 4.62 0 0 0-3.46-4.477l-.013-.003zM11.499 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1", "clip-rule": "evenodd" })
    ]
  }
);
var design_default = Design;
var Desktop = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 7.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H14v1h.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h.5v-1H5.5a.5.5 0 0 1-.5-.5zM6 15V8h12v7zm5 1v1h2v-1z", "clip-rule": "evenodd" })
    ]
  }
);
var desktop_default = Desktop;
var Detach = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.354 6.647a2.62 2.62 0 0 1 0 3.707l-1.5 1.5a.5.5 0 1 1-.707-.707l1.5-1.5a1.621 1.621 0 0 0-2.293-2.293l-1.5 1.5a.5.5 0 1 1-.707-.707l1.5-1.5a2.62 2.62 0 0 1 3.707 0M6.647 17.354a2.62 2.62 0 0 1 0-3.707l1.5-1.5a.5.5 0 1 1 .707.707l-1.5 1.5a1.621 1.621 0 0 0 2.293 2.293l1.5-1.5a.5.5 0 0 1 .707.707l-1.5 1.5a2.62 2.62 0 0 1-3.707 0M9.5 6a.5.5 0 0 1 .5.5V8a.5.5 0 1 1-1 0V6.5a.5.5 0 0 1 .5-.5m-3 3a.5.5 0 1 0 0 1H8a.5.5 0 1 0 0-1zm8 9a.5.5 0 0 1-.5-.5V16a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5m3-3a.5.5 0 1 0 0-1H16a.5.5 0 0 0 0 1z" })
    ]
  }
);
var detach_default = Detach;
var DevBrackets = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.646 8.146a.5.5 0 0 0 0 .708L16.793 12l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0m-3.292 0a.5.5 0 0 0-.708 0l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L7.207 12l3.147-3.146a.5.5 0 0 0 0-.708" })
    ]
  }
);
var dev_brackets_default = DevBrackets;
var Dev = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.447 8.224a.5.5 0 1 0-.894-.447l-4 8a.5.5 0 1 0 .894.447zm1.723 8.152a.5.5 0 0 0 .706-.047l3.5-4a.5.5 0 0 0 0-.658l-3.5-4a.5.5 0 0 0-.752.658L19.336 12l-3.212 3.67a.5.5 0 0 0 .047.706M7.83 7.624a.5.5 0 0 0-.706.047l-3.5 4a.5.5 0 0 0 0 .658l3.5 4a.5.5 0 1 0 .752-.658L4.664 12l3.212-3.672a.5.5 0 0 0-.047-.705" })
    ]
  }
);
var dev_default = Dev;
var DocPlus = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.05 10a.5.5 0 0 1 .5.5v2.05h1.95a.5.5 0 0 1 0 1h-1.95v1.95a.5.5 0 0 1-1 0v-1.95H9.5a.5.5 0 0 1 0-1h2.05V10.5a.5.5 0 0 1 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.345a1.5 1.5 0 0 1 1.056.435l4.156 4.125A1.5 1.5 0 0 1 19 8.625V19a2 2 0 0 1-2 2M7 20h10a1 1 0 0 0 1-1V9h-3a2 2 0 0 1-2-2V4H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1m7-15.554L17.58 8H15a1 1 0 0 1-1-1z", "clip-rule": "evenodd" })
    ]
  }
);
var doc_plus_default = DocPlus;
var DockToSide = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6.172c0 2.227-2.693 3.342-4.268 1.767L10 10.707V14a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-3.293l4.732 4.732c.945.945 2.561.276 2.561-1.06V7.5A1.5 1.5 0 0 0 16.5 6h-9A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h5a.5.5 0 0 1 0 1h-5A2.5 2.5 0 0 1 5 16.5z" })
    ]
  }
);
var dock_to_side_default = DockToSide;
var Duplicate = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14 12a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16.5 9H15V7.5A1.5 1.5 0 0 0 13.5 6h-6A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15H9v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9m-9-2h6a.5.5 0 0 1 .5.5V9h-3.5A1.5 1.5 0 0 0 9 10.5V14H7.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5m3 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z", "clip-rule": "evenodd" })
    ]
  }
);
var duplicate_default = Duplicate;
var EditMode = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 15.05A2.5 2.5 0 1 1 15.05 18h-6.1A2.5 2.5 0 1 1 6 15.05v-6.1A2.5 2.5 0 1 1 8.95 6h6.1A2.5 2.5 0 1 1 18 8.95zM6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m.5.95A2.5 2.5 0 0 0 8.95 7h6.1c.199.98.97 1.751 1.95 1.95v6.1c-.98.199-1.751.97-1.95 1.95h-6.1A2.5 2.5 0 0 0 7 15.05zM17.5 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3", "clip-rule": "evenodd" })
    ]
  }
);
var edit_mode_default = EditMode;
var EditObject = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2q-.135 0-.259-.034l-2.035 2.036A8 8 0 0 1 16.5 8.5c1.58 0 3.053.458 4.293 1.248.13.084.207.23.207.384 0 .398-.475.626-.814.416A6.97 6.97 0 0 0 16.5 9.5a7 7 0 0 0-3.117.73l-.003.002q.119.364.12.768a2.5 2.5 0 0 1-3.268 2.38l-.001.003A7 7 0 0 0 9.5 16.5c0 1.353.384 2.616 1.048 3.686.21.339-.018.814-.416.814a.45.45 0 0 1-.384-.207A7.96 7.96 0 0 1 8.5 16.5c0-.983.177-1.925.502-2.795l-2.036 2.036A1 1 0 0 1 7 16v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2q.135 0 .259.034l2.655-2.655a2.5 2.5 0 0 1 3.464-3.465l2.656-2.655a1 1 0 0 1-.034-.26zm1 0h2v2h-2zm-5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 16H4v2h2z", "clip-rule": "evenodd" })
    ]
  }
);
var edit_object_default = EditObject;
var EditText = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.96 8.303a.5.5 0 0 0-.92 0l-3 7a.5.5 0 0 0 .92.394L11.687 14h3.626l.727 1.697a.5.5 0 0 0 .92-.394zm-.46 1.466L14.885 13h-2.77z", "clip-rule": "evenodd" })
    ]
  }
);
var edit_text_default = EditText;
var Effects = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.106 5.553A1 1 0 0 1 11 5h4a1 1 0 0 1 .857 1.515L13.768 10H16a1 1 0 0 1 .707 1.707l-7 7a1 1 0 0 1-1.635-1.078L9.523 14H7.5a1 1 0 0 1-.894-1.447zM11 13l-2 5 7-7h-4l3-5h-4l-3.5 7z", "clip-rule": "evenodd" })
    ]
  }
);
var effects_default = Effects;
var Ellipse = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16", "clip-rule": "evenodd" })
    ]
  }
);
var ellipse_default = Ellipse;
var EmbedCode = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.854 10.146a.5.5 0 0 1 0 .708L9.707 12l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0m2.292.708a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708L14.293 12z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8 1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var embed_code_default = EmbedCode;
var Emoji = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.837 13a.5.5 0 0 0-.452.714 4 4 0 0 0 7.23 0 .5.5 0 0 0-.452-.714zM12 15a3 3 0 0 1-2.236-1h4.472c-.55.614-1.348 1-2.236 1", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", "clip-rule": "evenodd" })
    ]
  }
);
var emoji_default = Emoji;
var Enhance = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18.015 5.44 17.7 6.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L19.3 8.3l1.26-.315c.505-.126.505-.844 0-.97L19.3 6.7l-.315-1.26c-.126-.505-.844-.505-.97 0M14.5 7a.5.5 0 0 1 0 1h-8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 15.5v-7A1.5 1.5 0 0 1 6.5 7z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.5 9.5a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0v-2h2v2a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-1 0v2h-2z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.5 9.5A.5.5 0 0 1 13 9h1.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H13a.5.5 0 0 1-.5-.5zm1 4.5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1z", "clip-rule": "evenodd" })
    ]
  }
);
var enhance_default = Enhance;
var Expand = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m17 7.707-3.146 3.147a.5.5 0 0 1-.708-.708L16.293 7H13.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0zm-6.854 5.439a.5.5 0 0 1 .708.708L7.707 17H10.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793z" })
    ]
  }
);
var expand_default = Expand;
var Export = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 5a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708l2.146 2.147V5.5A.5.5 0 0 1 12 5M6.5 15a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-1a.5.5 0 0 1 .5-.5" })
    ]
  }
);
var export_default = Export;
var Exposure = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M11.5 7.025a5 5 0 0 0 0 9.95z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 4a.5.5 0 0 1 .5.5v1.52a5.97 5.97 0 0 1 3.375 1.399l.014-.015 1.06-1.06a.5.5 0 1 1 .708.706l-1.061 1.06-.015.015A5.97 5.97 0 0 1 17.98 11.5h1.52a.5.5 0 0 1 0 1h-1.52a5.97 5.97 0 0 1-1.399 3.375l.015.014 1.06 1.06a.5.5 0 0 1-.706.708l-1.061-1.06-.014-.016a5.97 5.97 0 0 1-3.376 1.399v1.52a.5.5 0 0 1-1 0V18l.001-.02a5.97 5.97 0 0 1-3.375-1.399l-.014.015-1.061 1.06a.5.5 0 0 1-.707-.706l1.06-1.06.016-.015A5.97 5.97 0 0 1 6.02 12.5H4.5a.5.5 0 0 1 0-1h1.52a5.97 5.97 0 0 1 1.4-3.375l-.015-.014-1.061-1.06a.5.5 0 1 1 .707-.708l1.06 1.06.015.016A5.97 5.97 0 0 1 11.5 6.02V4.5A.5.5 0 0 1 12 4m-5 8a5 5 0 0 1 4.5-4.975v9.95A5 5 0 0 1 7 12m5.5 4.975a5 5 0 0 0 0-9.95z", "clip-rule": "evenodd" })
    ]
  }
);
var exposure_default = Exposure;
var ExtendImage = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.015 4.44 16.7 5.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.3 1.2a.5.5 0 0 0 1 0l.3-1.2 1.26-.315c.505-.126.505-.844 0-.97L18.3 5.7l-.315-1.26c-.126-.505-.844-.505-.97 0M8 6.5a.5.5 0 0 0-.5-.5A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 1-.5-.5v-1.293l3-3 1.146 1.146a.5.5 0 0 0 .708-.707l-1.5-1.5a.5.5 0 0 0-.708 0L7 13.793V7.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5m3 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m3 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m3.5 5.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 1 1 1 0v1a.5.5 0 0 1-.5.5m0 3a.5.5 0 0 1-.5-.5v-1a.5.5 0 1 1 1 0v1a.5.5 0 0 1-.5.5M16 17.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 1 1 1 0 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.646 14.146a.5.5 0 0 0 0 .707l1 1a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708 0m1.798-2.995C14.329 11.037 14.162 11 14 11a1 1 0 0 1-1-1c0-.162-.037-.33-.151-.444l-.05-.049c-.264-.265-.713-.201-.773.169a2 2 0 0 0 2.298 2.298c.37-.06.434-.509.169-.774zm-.889-2.303c.115.115.283.152.445.152a1 1 0 0 1 1 1c0 .162.037.33.152.445l.048.048c.265.265.713.202.774-.168Q16 10.166 16 10a2 2 0 0 0-2.325-1.974c-.37.06-.433.509-.168.774z" })
    ]
  }
);
var extend_image_default = ExtendImage;
var Eye = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 12c0-1.25 2.333-5 7-5s7 3.75 7 5-2.333 5-7 5-7-3.75-7-5m1 0c0-.066.054-.358.313-.825a5.9 5.9 0 0 1 1.12-1.414C8.443 8.816 9.956 8 12 8s3.558.816 4.566 1.76c.508.477.88.98 1.121 1.415.258.467.313.76.313.825 0 .066-.055.358-.313.825-.24.435-.613.938-1.12 1.414C15.557 15.184 14.044 16 12 16s-3.558-.816-4.566-1.76a5.9 5.9 0 0 1-1.121-1.415C6.055 12.358 6 12.065 6 12", "clip-rule": "evenodd" })
    ]
  }
);
var eye_default = Eye;
var Eyedropper = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15.897 3.896a2.975 2.975 0 1 1 4.207 4.208l-2.933 2.933a1.85 1.85 0 0 1-.272 2.271l-.09.09a1.85 1.85 0 0 1-2.617 0l-.192-.19-7.354 7.352a1.5 1.5 0 0 1-1.06.439H3.5a.5.5 0 0 1-.5-.5v-2.086c0-.398.158-.78.44-1.06L10.792 10l-.192-.192a1.85 1.85 0 0 1 0-2.616l.09-.09a1.85 1.85 0 0 1 2.272-.273zm3.5.708a1.975 1.975 0 0 0-2.793 0L13 8.207l-.399-.399a.85.85 0 0 0-1.202 0l-.09.09a.85.85 0 0 0 0 1.203l3.59 3.59a.85.85 0 0 0 1.202 0l.09-.09a.85.85 0 0 0 0-1.202L15.794 11l3.604-3.604a1.975 1.975 0 0 0 0-2.792M11.5 10.707 4.146 18.06a.5.5 0 0 0-.146.353V20h1.586a.5.5 0 0 0 .353-.146l7.354-7.354z", "clip-rule": "evenodd" })
    ]
  }
);
var eyedropper_default = Eyedropper;
var Figjam = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4.008 5.124a1 1 0 0 1 1.116-1.116l4 .5a1 1 0 0 1 .583.285l9.793 9.793a2 2 0 0 1 0 2.828L17.414 19.5a2 2 0 0 1-2.828 0L4.793 9.707a1 1 0 0 1-.285-.583zm12.7 13.669 2.085-2.086a1 1 0 0 0 0-1.414l-8.44-8.44-3.5 3.5 8.44 8.44a1 1 0 0 0 1.414 0M6.145 9.646l3.5-3.5L9 5.5 5 5l.5 4z", "clip-rule": "evenodd" })
    ]
  }
);
var figjam_default = Figjam;
var FillGradientLinear = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.083 10.375a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.87a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.834.87a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m-.625-2.615a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25m.625-3.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m-5.292.875a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75m.875 5.365a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0m-.875-2.365a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75M16 10.375a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5 3.623a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8 1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var fill_gradient_linear_default = FillGradientLinear;
var FillImage = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zm10-9H8a1 1 0 0 0-1 1v5.668l2.521-2.522a.5.5 0 0 1 .708 0l5.85 5.85A1 1 0 0 0 17 16V8a1 1 0 0 0-1-1M8 17h6.668l-4.793-4.793L7 15.082V16a1 1 0 0 0 1 1", "clip-rule": "evenodd" })
    ]
  }
);
var fill_image_default = FillImage;
var FillMixed = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2 2 2 0 0 0 2 2 2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2 2 2 0 0 0-2-2 2 2 0 0 0-2-2zm4 1H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m4 4v3a2 2 0 0 1-2 2h-3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-6 4a1 1 0 0 1-1-1h3a2 2 0 0 0 2-2V9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z", "clip-rule": "evenodd" })
    ]
  }
);
var fill_mixed_default = FillMixed;
var FillScreen = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1zm7 0a.5.5 0 0 0 0 1H16v1.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5zM8 13.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H8zm9 0a.5.5 0 0 0-1 0V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var fill_screen_default = FillScreen;
var FillSolid = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M9 9h6v6H9z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM9 15V9h6v6z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var fill_solid_default = FillSolid;
var Fill = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 8.75A.75.75 0 0 1 8.75 8h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75zM9 15V9h6v6z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var fill_default = Fill;
var Filter = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 12a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm.5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M8.5 9a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4.1 12a7.9 7.9 0 1 1 15.8 0 7.9 7.9 0 0 1-15.8 0m7.9 6.9a6.9 6.9 0 1 1 0-13.8 6.9 6.9 0 0 1 0 13.8", "clip-rule": "evenodd" })
    ]
  }
);
var filter_default = Filter;
var FirstDraft = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 4a2 2 0 0 1 2 2v8a.5.5 0 0 1-1 0V9h-9v10h4a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 2v2H5V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M5 18V9h4v10H6a1 1 0 0 1-1-1", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M19.015 16.44 18.5 18.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L20.5 18.5l-.515-2.06c-.126-.505-.844-.505-.97 0" })
    ]
  }
);
var first_draft_default = FirstDraft;
var FitHeight = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.146 10.354a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 .708.708l.646-.647v4.586l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V9.707z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var fit_height_default = FitHeight;
var FitScreen = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.354 8.146a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l.146-.147V11.5H8.707l.147-.146a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 0 .708l1 1a.5.5 0 0 0 .708-.708l-.147-.146H11.5v1.793l-.146-.147a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0-.708-.708l-.146.147V12.5h2.793l-.147.146a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708l-1-1a.5.5 0 0 0-.708.708l.147.146H12.5V9.707l.146.147a.5.5 0 0 0 .708-.708z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var fit_screen_default = FitScreen;
var FitWidth = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.354 10.854a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-.647-.646h6.586l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708l.647.646H8.707z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zM6.5 7h11a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var fit_width_default = FitWidth;
var Flatten = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 3.5a.5.5 0 0 0-1 0v6.793L8.854 7.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L12.5 10.293zM4 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m1 3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var flatten_default = Flatten;
var FlipHorizontal = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 9.104a.75.75 0 0 1 1.28-.53L10 11.292a1 1 0 0 1 0 1.414l-2.72 2.72a.75.75 0 0 1-1.28-.53zm1 .603v4.586L9.293 12zm11-.603a.75.75 0 0 0-1.28-.53L14 11.292a1 1 0 0 0 0 1.414l2.72 2.72a.75.75 0 0 0 1.28-.53zm-1 .603v4.586L14.707 12z", "clip-rule": "evenodd" })
    ]
  }
);
var flip_horizontal_default = FlipHorizontal;
var FlipVertical = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.5 12.5a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.896 18a.75.75 0 0 0 .53-1.28L12.708 14a1 1 0 0 0-1.414 0l-2.72 2.72a.75.75 0 0 0 .53 1.28zm-.603-1H9.707L12 14.707zm.603-11a.75.75 0 0 1 .53 1.28L12.708 10a1 1 0 0 1-1.414 0l-2.72-2.72A.75.75 0 0 1 9.103 6zm-.603 1H9.707L12 9.293z", "clip-rule": "evenodd" })
    ]
  }
);
var flip_vertical_default = FlipVertical;
var Folder = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7a1 1 0 0 1 1-1h3.882a1 1 0 0 1 .894.553L12.5 8h4A1.5 1.5 0 0 1 18 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 15.5zm1 0h3.882l.5 1H7zm0 2v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z", "clip-rule": "evenodd" })
    ]
  }
);
var folder_default = Folder;
var FontSize = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5.757 16h1.015l.805-2.266h3.235L11.616 16h1.016L9.694 8h-1zm4.75-3.125-1.282-3.61h-.062l-1.281 3.61zM13.63 16h.985l.421-1.255h1.914L17.372 16h.984l-1.795-5.09h-1.138zm3.071-1.996-.689-2.05h-.04l-.688 2.05z", "clip-rule": "evenodd" })
    ]
  }
);
var font_size_default = FontSize;
var Forward = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.707 7.293A1 1 0 0 0 7 8v8a1 1 0 0 0 1.707.707L12 13.414V16a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414l-4-4A1 1 0 0 0 12 8v2.586zM12 12 8 8v8zm1 4V8l4 4z", "clip-rule": "evenodd" })
    ]
  }
);
var forward_default = Forward;
var Frame = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 4.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M4 7.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 9a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 4.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0z" })
    ]
  }
);
var frame_default = Frame;
var GenerateImage = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.015 4.44 16.7 5.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.504.844.504.97 0L18.3 7.3l1.26-.315c.505-.126.505-.844 0-.97L18.3 5.7l-.315-1.26c-.126-.505-.844-.505-.97 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7.5A1.5 1.5 0 0 1 7.5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 0-.5.5v6.293l2.646-2.646a.5.5 0 0 1 .708 0L16.207 17h.293a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 1 1 0v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5zm1 9v-1.293l3-3L14.793 17H7.5a.5.5 0 0 1-.5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var generate_image_default = GenerateImage;
var GoParent = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.285 5.089a.5.5 0 0 0-.57 0l-6.5 4.5a.5.5 0 0 0 .028.84l2.5 1.5a.5.5 0 1 0 .514-.858L6.422 9.97 12 6.108l5.578 3.862-1.835 1.101a.5.5 0 1 0 .514.858l2.5-1.5a.5.5 0 0 0 .028-.84z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m15.354 14.146-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708l2.146-2.147V18.5a.5.5 0 0 0 1 0v-5.793l2.146 2.147a.5.5 0 0 0 .708-.708" })
    ]
  }
);
var go_parent_default = GoParent;
var GoTo = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.5 6a.5.5 0 1 0 0 1h2.793l-4.647 4.646a.5.5 0 0 0 .707.708L17 7.707V10.5a.5.5 0 1 0 1 0V7a1 1 0 0 0-1-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.854 7.146a.5.5 0 0 1 0 .708L6.707 12 12 17.293l4.146-4.147a.5.5 0 0 1 .707.708L12.708 18a1 1 0 0 1-1.414 0L6 12.707a1 1 0 0 1 0-1.414l4.146-4.147a.5.5 0 0 1 .707 0" })
    ]
  }
);
var go_to_default = GoTo;
var GradientAngular = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M7 17h10V7H7zm5-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.5-1.041a3 3 0 1 0-1 0V12a.5.5 0 0 1 1 0z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm8 1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var gradient_angular_default = GradientAngular;
var GradientDiamond = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm.464 5.293a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l2.829-2.829a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 0 0-1.414 0z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.464 12.707a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 0 1-1.414 0zM9.172 12 12 9.172 14.828 12 12 14.828z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var gradient_diamond_default = GradientDiamond;
var GradientLinear = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M8 7h3.5v10H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6.5-1H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5zm-1 0H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5z", "clip-rule": "evenodd" })
    ]
  }
);
var gradient_linear_default = GradientLinear;
var GradientRadial = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M17 17H7V7h10zm-5.02-9H12a4 4 0 0 1 .026 8H12a4 4 0 0 1-.02-8", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var gradient_radial_default = GradientRadial;
var GridColumn = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.5 6a.5.5 0 0 1 .5.5V7h3.5v-.5a.5.5 0 0 1 1 0V7H16v-.5a.5.5 0 0 1 1 0V7h.5a.5.5 0 0 1 0 1H17v8h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V17h-3.5v.5a.5.5 0 0 1-1 0V17H8v.5a.5.5 0 0 1-1 0V17h-.5a.5.5 0 0 1 0-1H7V8h-.5a.5.5 0 0 1 0-1H7v-.5a.5.5 0 0 1 .5-.5M8 16h3.5V8H8zm4.5 0H16V8h-3.5z", "clip-rule": "evenodd" })
    ]
  }
);
var grid_column_default = GridColumn;
var GridDotted = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm10 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm9.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6.5 16a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm9.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM11.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-.5 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" })
    ]
  }
);
var grid_dotted_default = GridDotted;
var GridRow = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.5 6a.5.5 0 0 1 .5.5V7h8v-.5a.5.5 0 0 1 1 0V7h.5a.5.5 0 0 1 0 1H17v3.5h.5a.5.5 0 0 1 0 1H17V16h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V17H8v.5a.5.5 0 0 1-1 0V17h-.5a.5.5 0 0 1 0-1H7v-3.5h-.5a.5.5 0 0 1 0-1H7V8h-.5a.5.5 0 0 1 0-1H7v-.5a.5.5 0 0 1 .5-.5M8 16h8v-3.5H8zm0-4.5V8h8v3.5z", "clip-rule": "evenodd" })
    ]
  }
);
var grid_row_default = GridRow;
var GridView = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0h3v3H7zm-1 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0h3v3H7zm7-8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm3 1h-3v3h3zm-4 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm1 0h3v3h-3z", "clip-rule": "evenodd" })
    ]
  }
);
var grid_view_default = GridView;
var Grid = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 6.5a.5.5 0 0 0-1 0V7h-.5a.5.5 0 0 0 0 1H7v3.5h-.5a.5.5 0 0 0 0 1H7V16h-.5a.5.5 0 0 0 0 1H7v.5a.5.5 0 0 0 1 0V17h3.5v.5a.5.5 0 0 0 1 0V17H16v.5a.5.5 0 0 0 1 0V17h.5a.5.5 0 0 0 0-1H17v-3.5h.5a.5.5 0 0 0 0-1H17V8h.5a.5.5 0 0 0 0-1H17v-.5a.5.5 0 0 0-1 0V7h-3.5v-.5a.5.5 0 0 0-1 0V7H8zm8 9.5v-3.5h-3.5V16zm-4.5 0v-3.5H8V16zM8 11.5V8h3.5v3.5zm4.5 0V8H16v3.5z", "clip-rule": "evenodd" })
    ]
  }
);
var grid_default = Grid;
var Group = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 7.5A1.5 1.5 0 0 1 7.5 6a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5.5.5 0 0 1-1 0m3-1a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m3.5 0A.5.5 0 0 1 13 6h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5m3.5 0a.5.5 0 0 1 .5-.5A1.5 1.5 0 0 1 18 7.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5M6.5 9a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5m-11 3.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V13a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V13a.5.5 0 0 1 .5-.5M6.5 16a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 6 16.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5M9 17.5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m3.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var group_default = Group;
var H1 = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V12h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V11H7zm11 6a.5.5 0 0 0-.777-.416l-1.5 1a.5.5 0 1 0 .554.832l.723-.482V17.5a.5.5 0 0 0 1 0z" })
    ]
  }
);
var h1_default = H1;
var H2 = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V12h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V11H7zm9.034 10.952c0 .303.245.548.548.548h2.97a.448.448 0 0 0 0-.896H17.48v-.04l.997-1.038q.562-.555.873-.945.314-.39.438-.711t.124-.653q0-.497-.245-.885a1.7 1.7 0 0 0-.684-.61A2.24 2.24 0 0 0 17.96 12a2.2 2.2 0 0 0-1.017.228 1.71 1.71 0 0 0-.888 1.13c-.064.268.168.495.444.495.275 0 .479-.236.595-.485l.019-.039q.12-.22.333-.338a1 1 0 0 1 .5-.121q.278 0 .495.11a.83.83 0 0 1 .341.312.9.9 0 0 1 .125.48q0 .245-.096.462t-.288.448-.48.529l-1.85 1.854a.55.55 0 0 0-.16.387" })
    ]
  }
);
var h2_default = H2;
var Hand = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 6a2 2 0 0 1 3.112-1.662 2 2 0 0 1 3.775-.002A2 2 0 0 1 16.997 6v.27A2 2 0 0 1 20 8v.5h.01v4.863q0 .144-.02.284a7.773 7.773 0 0 1-7.753 7.216q-.266 0-.516-.012c-3.682-.167-6.256-3.449-8.113-6.633-.565-.969-1.11-2.043-.316-2.812.793-.77 1.898-.505 2.705.25L7 12.604zm5.997 2.62H13V10a.5.5 0 0 0 1 0V5.923A1 1 0 0 1 15.997 6v2.62H16V10a.5.5 0 0 0 1 0V8a1 1 0 1 1 2 0v.62h.01v4.743q0 .074-.01.143l-.007.07a6.773 6.773 0 0 1-6.756 6.287q-.243 0-.47-.01c-1.535-.07-2.885-.786-4.107-1.92-1.23-1.141-2.28-2.66-3.188-4.219-.289-.495-.486-.88-.555-1.193a.6.6 0 0 1-.016-.263c.007-.029.022-.071.087-.135a.57.57 0 0 1 .517-.173c.224.03.518.165.807.434l.001.002 1 .945A1 1 0 0 0 8 12.604V6a1 1 0 0 1 2 0v4a.5.5 0 0 0 1 0V5a1 1 0 1 1 2 0v.89l-.003.11z", "clip-rule": "evenodd" })
    ]
  }
);
var hand_default = Hand;
var Hash = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.498 9.55a.5.5 0 1 0-.995-.1l-.056.55H9.5a.5.5 0 0 0 0 1h.848l-.2 2H9.5a.5.5 0 0 0 0 1h.547l-.045.45a.5.5 0 0 0 .995.1l.056-.55h1.494l-.045.45a.5.5 0 0 0 .995.1l.056-.55h.947a.5.5 0 0 0 0-1h-.848l.2-2h.648a.5.5 0 0 0 0-1h-.547l.045-.45a.5.5 0 1 0-.995-.1l-.056.55h-1.494zM11.153 13l.2-2h1.495l-.2 2z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM7 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z", "clip-rule": "evenodd" })
    ]
  }
);
var hash_default = Hash;
var HeightFill = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.854 14.146a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.707L11 16.293V7.707L8.854 9.854a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L12 7.707v8.586l2.146-2.147a.5.5 0 0 1 .708 0" })
    ]
  }
);
var height_fill_default = HeightFill;
var HeightHug = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.708L11.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0m0 9.708a.5.5 0 0 1-.708 0L11.5 14.207l-2.646 2.647a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708" })
    ]
  }
);
var height_hug_default = HeightHug;
var HeightMax = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.5 5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm0 13a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm4.646-10.854a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L12 8.707v6.586l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L11 15.293V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708z" })
    ]
  }
);
var height_max_default = HeightMax;
var HeightMin = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m11.854 10.854 2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-1 0v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0m0 3.292 2 2a.5.5 0 0 1-.708.708L12 15.707V19.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0M5.5 12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z" })
    ]
  }
);
var height_min_default = HeightMin;
var Help = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 10a2 2 0 1 1 4 0c0 .635-.293 1.024-.762 1.254-.774.379-1.738 1.108-1.738 2.246v.5a.5.5 0 0 0 1 0v-.5c0-.519.463-.998 1.178-1.348C14.47 11.764 15 11.038 15 10a3 3 0 1 0-6 0 .5.5 0 0 0 1 0m2 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" })
    ]
  }
);
var help_default = Help;
var Hidden = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.5 9c.276 0 .533.223.641.477q.065.153.172.348c.24.435.613.938 1.121 1.414C8.442 12.184 9.954 13 12 13s3.558-.816 4.566-1.76c.508-.477.88-.98 1.121-1.415q.107-.195.171-.348c.11-.254.366-.477.642-.477s.495.225.417.49c-.202.682-.77 1.65-1.705 2.515l1.142 1.141a.5.5 0 0 1-.708.708l-1.217-1.218a7.4 7.4 0 0 1-1.89.958l.446 1.785a.5.5 0 0 1-.97.242l-.443-1.77A8 8 0 0 1 12 14a8 8 0 0 1-1.572-.15l-.443 1.771a.5.5 0 0 1-.97-.242l.446-1.785a7.4 7.4 0 0 1-1.89-.958l-1.217 1.218a.5.5 0 0 1-.708-.708l1.142-1.142c-.935-.864-1.503-1.832-1.705-2.514-.078-.265.14-.49.417-.49" })
    ]
  }
);
var hidden_default = Hidden;
var Highlights = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M7 12a5 5 0 0 0 4 4.9V7.1A5 5 0 0 0 7 12" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.998 19.938a8.001 8.001 0 0 0 0-15.876C11.45 3.993 11 4.448 11 5v1.083a6.002 6.002 0 0 0 0 11.834V19c0 .552.45 1.007.998.938M18 12a7 7 0 0 1-6 6.93V5.07c3.392.485 6 3.404 6 6.93m-7 4.9a5.002 5.002 0 0 1 0-9.8z", "clip-rule": "evenodd" })
    ]
  }
);
var highlights_default = Highlights;
var History = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8 9a5 5 0 1 1-.975 3.499.54.54 0 0 0-.525-.5.47.47 0 0 0-.48.5A6 6 0 1 0 7 8.683V6.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 9a.5.5 0 0 1 .5.5v2.293l1.354 1.353a.5.5 0 0 1-.707.707l-1.5-1.5A.5.5 0 0 1 11.5 12V9.5A.5.5 0 0 1 12 9" })
    ]
  }
);
var history_default = History;
var Home = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 .35-.76l7-6a1 1 0 0 1 1.3 0l7 6A1 1 0 0 1 20 10v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6h-4zm-5 0v-9l7-6 7 6v9h-4v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6z", "clip-rule": "evenodd" })
    ]
  }
);
var home_default = Home;
var Image = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM18 5H6a1 1 0 0 0-1 1v8.293l3.646-3.647a.5.5 0 0 1 .708 0L17.707 19H18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 19h10.293L9 11.707l-4 4V18a1 1 0 0 0 1 1", "clip-rule": "evenodd" })
    ]
  }
);
var image_default = Image;
var Images = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16.5 18h-7A1.5 1.5 0 0 1 8 16.5V16h-.5A1.5 1.5 0 0 1 6 14.5v-7A1.5 1.5 0 0 1 7.5 6h7A1.5 1.5 0 0 1 16 7.5V8h.5A1.5 1.5 0 0 1 18 9.5v7a1.5 1.5 0 0 1-1.5 1.5m-2-11h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H8V9.5A1.5 1.5 0 0 1 9.5 8H15v-.5a.5.5 0 0 0-.5-.5M9 16.5v-1.293l2-2L14.793 17H9.5a.5.5 0 0 1-.5-.5m2.354-4.354L16.207 17h.293a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v4.293l1.646-1.647a.5.5 0 0 1 .708 0", "clip-rule": "evenodd" })
    ]
  }
);
var images_default = Images;
var Import = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5a.5.5 0 0 0-1 0V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17 6a5.5 5.5 0 0 0-5.5 5.5v1.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L12.5 13.293V11.5A4.5 4.5 0 0 1 17 7h.5a.5.5 0 0 0 0-1z" })
    ]
  }
);
var import_default = Import;
var InDevelopment = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5.146 4.146a.5.5 0 0 1 .631-.062l3 2a.5.5 0 0 1 .077.77l-.647.646 2.732 2.732 1.197-1.196a4 4 0 0 1 4.482-4.988 1 1 0 0 1 .553 1.695L16 6.914V8h1.086l1.171-1.171a1 1 0 0 1 1.695.553Q20 7.686 20 8a4 4 0 0 1-5.036 3.864L14.83 12l4.585 4.586a2 2 0 0 1-2.828 2.828L12 14.828l-4.586 4.586a2 2 0 1 1-2.828-2.828l5.646-5.647L7.5 8.207l-.646.647a.5.5 0 0 1-.77-.077l-2-3a.5.5 0 0 1 .062-.63zm7.561 9.975 4.586 4.586a1 1 0 1 0 1.414-1.414l-4.586-4.586zM5.564 5.143l-.42.42 1.434 2.152 1.137-1.137zM13 8a3 3 0 0 1 3.464-2.964L15 6.5V9h2.5l1.464-1.464a3 3 0 0 1-.187 1.601 3 3 0 0 1-4.07 1.57l-8 8a1 1 0 0 1-1.414-1.414l8-8A3 3 0 0 1 13 8", "clip-rule": "evenodd" })
    ]
  }
);
var in_development_default = InDevelopment;
var Info = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.75 9.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.25 2.25a.5.5 0 0 0-1 0V15a.5.5 0 0 0 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12", "clip-rule": "evenodd" })
    ]
  }
);
var info_default = Info;
var Insert = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 8.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0", "clip-rule": "evenodd" })
    ]
  }
);
var insert_default = Insert;
var Inspect = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 6.5A1.5 1.5 0 0 1 6.5 5h10A1.5 1.5 0 0 1 18 6.5v5a.5.5 0 0 0 1 0v-5A2.5 2.5 0 0 0 16.5 4h-10A2.5 2.5 0 0 0 4 6.5v10A2.5 2.5 0 0 0 6.5 19h5a.5.5 0 0 0 0-1h-5A1.5 1.5 0 0 1 5 16.5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M20.294 16.099a1 1 0 0 0 .072-1.887l-8-3.143a1 1 0 0 0-1.297 1.297l3.143 8a1 1 0 0 0 1.887-.072l.987-3.208zm-4.008.187L15.143 20 12 12l8 3.143z", "clip-rule": "evenodd" })
    ]
  }
);
var inspect_default = Inspect;
var InstanceSwap = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V7h2.5a.5.5 0 0 0 0-1zm8 0a.5.5 0 0 0 0 1H17v2.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5zM7 14.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7zm11 0a.5.5 0 0 0-1 0V17h-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.354 8.646a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708zM12 14.293 9.707 12 12 9.707 14.293 12z", "clip-rule": "evenodd" })
    ]
  }
);
var instance_swap_default = InstanceSwap;
var Instance = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m11.116 5.884-5.232 5.232a1.25 1.25 0 0 0 0 1.768l5.232 5.232a1.25 1.25 0 0 0 1.768 0l5.232-5.232a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0m.707.707-5.232 5.232a.25.25 0 0 0 0 .354l5.232 5.232a.25.25 0 0 0 .354 0l5.232-5.232a.25.25 0 0 0 0-.354l-5.232-5.232a.25.25 0 0 0-.354 0", "clip-rule": "evenodd" })
    ]
  }
);
var instance_default = Instance;
var Interclick = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.321 5.533a.5.5 0 0 1 .653.27l.777 1.875c.102.246-.039.524-.285.627s-.537.002-.639-.244l-.776-1.875a.5.5 0 0 1 .27-.653M8.06 9.827l-1.874-.776a.5.5 0 1 0-.383.923l1.875.777c.246.102.524-.039.626-.285.103-.245.003-.537-.243-.639m-.383 3.422-1.875.776a.5.5 0 1 0 .383.924l1.875-.776c.246-.102.346-.394.243-.64-.102-.245-.38-.386-.626-.284m2.149 2.69-.777 1.875a.5.5 0 0 0 .924.383l.777-1.875c.102-.246-.04-.524-.285-.627s-.537-.002-.639.244m6.495-5.189 1.874-.776a.5.5 0 0 0-.382-.923l-1.875.776c-.246.102-.346.394-.244.64.102.245.381.386.627.284M14.173 8.06l.776-1.874a.5.5 0 1 0-.924-.383l-.776 1.875c-.102.246.039.524.284.626.246.103.538.003.64-.243" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.351 11.064a1 1 0 0 0-1.287 1.287l2.25 6a1 1 0 0 0 1.906-.108l.605-2.418 2.418-.605a1 1 0 0 0 .108-1.906zM15 15l-.75 3L12 12l6 2.25z", "clip-rule": "evenodd" })
    ]
  }
);
var interclick_default = Interclick;
var Interdefault = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 0 1-9.874 4.581l8.455-8.455A5.98 5.98 0 0 1 18 12M7.418 15.874l8.456-8.456a6 6 0 0 0-8.456 8.456", "clip-rule": "evenodd" })
    ]
  }
);
var interdefault_default = Interdefault;
var Interdrag = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17 9.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h1.793l-2.147 2.146a.5.5 0 0 0 .708.708L17 7.707zm-10 5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7.707l2.147-2.146a.5.5 0 0 0-.708-.708L7 16.293zm3-8a.5.5 0 0 1-.5.5H7.707l2.147 2.146a.5.5 0 0 1-.708.708L7 7.707V9.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.351 11.064a1 1 0 0 0-1.287 1.287l2.25 6a1 1 0 0 0 1.906-.108l.605-2.418 2.418-.605a1 1 0 0 0 .108-1.906zM15 15l-.75 3L12 12l6 2.25z", "clip-rule": "evenodd" })
    ]
  }
);
var interdrag_default = Interdrag;
var Interenter = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 6A1.5 1.5 0 0 0 6 7.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-1 0v1A1.5 1.5 0 0 0 7.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 6z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.646 9.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H9.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646a.5.5 0 0 1 0-.708" })
    ]
  }
);
var interenter_default = Interenter;
var Interhover = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9.5 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 8c0-.534.284-.988.674-1.343s.929-.652 1.55-.891C8.471 11.286 10.16 11 12 11s3.529.286 4.776.766c.621.239 1.159.536 1.55.891.39.355.674.809.674 1.343v2c0 .535-.284.988-.674 1.343s-.929.652-1.55.891C15.529 18.714 13.84 19 12 19s-3.529-.286-4.776-.766c-.621-.239-1.159-.536-1.55-.891C5.284 16.988 5 16.535 5 16zm1 1.603V16c0 .156.08.36.347.603s.682.485 1.236.698C8.69 17.726 10.25 18 12 18s3.311-.274 4.417-.699c.554-.213.969-.455 1.236-.698S18 16.156 18 16v-.397c-.344.243-.76.453-1.224.631-1.247.48-2.936.766-4.776.766s-3.529-.286-4.776-.766A5.7 5.7 0 0 1 6 15.603M6 14c0 .156.08.36.347.603s.682.485 1.236.698C8.69 15.726 10.25 16 12 16s3.311-.274 4.417-.699c.554-.213.969-.455 1.236-.698S18 14.156 18 14s-.08-.36-.347-.603-.682-.485-1.236-.698C15.31 12.274 13.75 12 12 12s-3.311.274-4.417.699c-.554.213-.969.455-1.236.698S6 13.844 6 14", "clip-rule": "evenodd" })
    ]
  }
);
var interhover_default = Interhover;
var Interkey = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.5 5A1.5 1.5 0 0 0 9 6.5V9H6.5A1.5 1.5 0 0 0 5 10.5v3A1.5 1.5 0 0 0 6.5 15H9v2.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V15h2.5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 17.5 9H15V6.5A1.5 1.5 0 0 0 13.5 5zM10 6.5V10H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H10v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H14V6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5", "clip-rule": "evenodd" })
    ]
  }
);
var interkey_default = Interkey;
var Interleave = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.5 6A1.5 1.5 0 0 1 18 7.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.646 9.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l1.647-1.646H9.5a.5.5 0 0 1 0-1h3.793l-1.647-1.646a.5.5 0 0 1 0-.708" })
    ]
  }
);
var interleave_default = Interleave;
var IntermouseDown = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.321 5.532a.5.5 0 0 1 .653.27l.777 1.876c.102.245-.04.524-.285.626s-.537.002-.639-.244L9.05 6.186a.5.5 0 0 1 .271-.654M8.06 9.827 6.187 9.05a.5.5 0 0 0-.383.924l1.875.777c.246.101.524-.04.626-.285.102-.246.003-.537-.243-.64m8.26.924 1.874-.776a.5.5 0 1 0-.383-.924l-1.874.777c-.246.101-.346.393-.244.639s.38.386.627.285M14.173 8.06l.776-1.874a.5.5 0 1 0-.924-.383l-.776 1.875c-.102.245.039.524.284.626.246.102.538.002.64-.244m.681 5.294a.5.5 0 0 0-.708-.708L12.5 14.293V10.5a.5.5 0 0 0-1 0v3.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.56 13.686c-.278-.098-.56.121-.605.413a.5.5 0 0 0 .322.548l.14.052c.554.213.969.455 1.236.698S18 15.844 18 16s-.08.36-.347.603-.682.485-1.236.698C15.31 17.726 13.75 18 12 18s-3.311-.274-4.417-.7c-.554-.212-.969-.454-1.236-.697S6 16.156 6 16s.08-.36.347-.603.682-.485 1.236-.698l.14-.052a.5.5 0 0 0 .322-.548c-.044-.292-.327-.511-.605-.413l-.216.08c-.621.239-1.159.536-1.55.89-.39.356-.674.81-.674 1.344s.284.987.674 1.343c.391.355.929.652 1.55.891C8.471 18.714 10.16 19 12 19s3.529-.286 4.776-.766c.621-.239 1.159-.536 1.55-.891.39-.356.674-.809.674-1.343 0-.535-.284-.988-.674-1.343s-.929-.652-1.55-.892z" })
    ]
  }
);
var intermouse_down_default = IntermouseDown;
var IntermouseUp = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.321 5.532a.5.5 0 0 1 .653.27l.777 1.876c.102.245-.04.524-.285.626s-.537.002-.639-.244L9.05 6.186a.5.5 0 0 1 .271-.654M8.06 9.827 6.187 9.05a.5.5 0 0 0-.383.924l1.875.777c.246.101.524-.04.626-.285.102-.246.003-.537-.243-.64m8.26.924 1.874-.776a.5.5 0 1 0-.383-.924l-1.874.777c-.246.101-.346.393-.244.639s.38.386.627.285M14.173 8.06l.776-1.874a.5.5 0 1 0-.924-.383l-.776 1.875c-.102.245.039.524.284.626.246.102.538.002.64-.244m-5.027 4.586a.5.5 0 0 0 .707.708l1.647-1.647V15.5a.5.5 0 1 0 1 0v-3.793l1.646 1.647a.5.5 0 0 0 .707-.708l-2.5-2.5a.5.5 0 0 0-.707 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.56 13.686c-.278-.098-.56.121-.605.413a.5.5 0 0 0 .322.548l.14.052c.554.213.969.455 1.236.698S18 15.844 18 16s-.08.36-.347.603-.682.485-1.236.698C15.31 17.726 13.75 18 12 18s-3.311-.274-4.417-.7c-.554-.212-.969-.454-1.236-.697S6 16.156 6 16s.08-.36.347-.603.682-.485 1.236-.698l.14-.052a.5.5 0 0 0 .322-.548c-.044-.292-.327-.511-.605-.413l-.216.08c-.621.239-1.159.536-1.55.89-.39.356-.674.81-.674 1.344s.284.987.674 1.343c.391.355.929.652 1.55.891C8.471 18.714 10.16 19 12 19s3.529-.286 4.776-.766c.621-.239 1.159-.536 1.55-.891.39-.356.674-.809.674-1.343 0-.535-.284-.988-.674-1.343s-.929-.652-1.55-.892z" })
    ]
  }
);
var intermouse_up_default = IntermouseUp;
var Interpress = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-1.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.955 11.1c.044-.292.327-.512.605-.414l.216.08c.621.239 1.159.536 1.55.891.39.355.674.809.674 1.343s-.284.988-.674 1.343-.929.652-1.55.892C15.529 15.714 13.84 16 12 16s-3.529-.286-4.776-.765c-.621-.24-1.159-.537-1.55-.892C5.284 13.988 5 13.534 5 13s.284-.988.674-1.343.929-.652 1.55-.891l.216-.08c.278-.098.56.122.605.413a.5.5 0 0 1-.322.548l-.14.052c-.554.213-.969.455-1.236.698S6 12.844 6 13s.08.36.347.603.682.485 1.236.698C8.69 14.726 10.25 15 12 15s3.311-.274 4.417-.699c.554-.213.969-.455 1.236-.698S18 13.156 18 13s-.08-.36-.347-.603-.682-.485-1.236-.698l-.14-.052a.5.5 0 0 1-.322-.548" })
    ]
  }
);
var interpress_default = Interpress;
var Itc = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2.083L11.6 17h1.9a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2.083L12.4 7h-1.9a.5.5 0 0 1-.5-.5" })
    ]
  }
);
var itc_default = Itc;
var Key = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.5 14a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2.086a1 1 0 0 1 .293-.707l4.799-4.799a4.5 4.5 0 1 1 3.408 3.48zm-2.32-3.265-.109-.527a3.5 3.5 0 1 1 2.65 2.706l-1.221-.278V14h-2v2h-2v2H6v-2.086z", "clip-rule": "evenodd" })
    ]
  }
);
var key_default = Key;
var Keyboard = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-1h2v2H8zm5 2h-2V8h2zm4 0h1V9a1 1 0 0 0-1-1zm-1 0V8h-2v2zM6 9a1 1 0 0 1 1-1v2H6zm6 4v-2h2v2zm3 0v-2h3v2zm-7-2H6v2h2zm1 0v2h2v-2zm-3 3v1a1 1 0 0 0 1 1h1v-2zm10 2h1a1 1 0 0 0 1-1v-1h-2zm-7-2h6v2H9z", "clip-rule": "evenodd" })
    ]
  }
);
var keyboard_default = Keyboard;
var Landscape = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm12 1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var landscape_default = Landscape;
var Language = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9 5.5a.5.5 0 0 1 1 0V7h3.5a.5.5 0 0 1 0 1h-1.282l-.054.16c-.503 1.488-1.086 2.54-2.03 3.708l1.527 1.907a.5.5 0 1 1-.781.625l-1.407-1.758c-.689.77-1.54 1.63-2.62 2.711a.5.5 0 1 1-.707-.706c1.146-1.148 2.013-2.028 2.693-2.798L7.21 9.812a.5.5 0 0 1 .781-.624l1.504 1.879c.773-.986 1.248-1.869 1.668-3.067H5.5a.5.5 0 0 1 0-1H9z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.039 11.308A.5.5 0 0 1 14.5 11h.5a.5.5 0 0 1 .461.308l2.5 6a.5.5 0 1 1-.922.384L16.333 16h-3.166l-.706 1.692a.5.5 0 1 1-.922-.384zM15.917 15l-1.167-2.8-1.167 2.8z", "clip-rule": "evenodd" })
    ]
  }
);
var language_default = Language;
var LayerBlurMedium = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 3.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M7.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3-5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.75 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.5 17a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
    ]
  }
);
var layer_blur_medium_default = LayerBlurMedium;
var LayerBlur = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m3 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 15.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M9.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m4-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.5-.75a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-.5 3.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M18 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" })
    ]
  }
);
var layer_blur_default = LayerBlur;
var LeadingTrim = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 8a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm10 .5a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.133 14.422a.49.49 0 0 0 .468-.338l.292-.88h1.885l.291.88a.493.493 0 1 0 .935-.318l-1.344-3.85a.872.872 0 0 0-1.647 0l-1.346 3.85a.493.493 0 0 0 .466.656m2.386-1.998-.656-1.982a.028.028 0 0 0-.053 0l-.657 1.982zm3.088 3.376q.355.134.852.134.528 0 .94-.162t.646-.485q.237-.322.236-.813V11.08a.476.476 0 0 0-.476-.476h-.157a.32.32 0 0 0-.319.318v.29a.03.03 0 0 1-.029.028.03.03 0 0 1-.026-.016 1.4 1.4 0 0 0-.19-.29 1.1 1.1 0 0 0-.349-.268 1.2 1.2 0 0 0-.547-.112q-.432 0-.788.222a1.54 1.54 0 0 0-.566.656q-.21.435-.21 1.071 0 .627.21 1.042.208.412.564.619.355.204.79.204.318 0 .535-.095.219-.097.353-.241.129-.137.198-.275a.027.027 0 0 1 .052.012v.686q0 .41-.24.586a1 1 0 0 1-.607.18q-.256 0-.427-.07a.75.75 0 0 1-.271-.174c-.11-.112-.261-.198-.415-.168l-.114.022c-.27.053-.443.335-.266.547q.025.03.051.058.215.23.57.363m1.332-2.307a.8.8 0 0 1-.465.134.8.8 0 0 1-.477-.14.9.9 0 0 1-.29-.392 1.6 1.6 0 0 1-.1-.597q0-.338.097-.599a.9.9 0 0 1 .29-.412.76.76 0 0 1 .48-.152q.276 0 .467.144a.9.9 0 0 1 .291.408q.1.261.1.611 0 .354-.102.607a.84.84 0 0 1-.291.388", "clip-rule": "evenodd" })
    ]
  }
);
var leading_trim_default = LeadingTrim;
var Library = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.965 6.584a4 4 0 0 1 .535.422c.14-.13.318-.277.535-.422.638-.425 1.608-.834 2.965-.834s2.327.409 2.965.834c.317.211.548.424.703.588a3 3 0 0 1 .226.268l.014.02.005.008.002.003s.001.002-.415.279l.416-.277A.5.5 0 0 1 19 7.75v9a.5.5 0 0 1-.888.316l-.002-.003.39-.313-.39.313-.022-.024a2 2 0 0 0-.114-.11 3 3 0 0 0-.53-.367C16.955 16.29 16.163 16 15 16s-1.954.29-2.445.562c-.246.137-.42.272-.529.368a2 2 0 0 0-.136.133l-.002.003a.5.5 0 0 1-.776 0l-.002-.003-.022-.024a2 2 0 0 0-.114-.11 3 3 0 0 0-.53-.367C9.955 16.29 9.163 16 8 16s-1.954.29-2.445.562c-.246.137-.42.272-.529.368a2 2 0 0 0-.136.133l-.002.003A.5.5 0 0 1 4 16.75v-9a.5.5 0 0 1 .084-.277l.416.277-.416-.277v-.001l.001-.002.002-.002.005-.007.014-.02.049-.064c.04-.052.1-.123.177-.205.155-.164.386-.377.703-.588C5.673 6.159 6.643 5.75 8 5.75s2.327.409 2.965.834M5 15.727V7.924l.059-.065c.11-.117.285-.28.53-.443C6.078 7.091 6.858 6.75 8 6.75s1.923.341 2.41.666a3 3 0 0 1 .595.513L11 8v7.727l-.07-.04C10.296 15.336 9.338 15 8 15s-2.296.335-2.93.688zm7 0 .07-.04C12.704 15.336 13.662 15 15 15s2.296.335 2.93.688l.07.04V7.923l-.059-.065a3 3 0 0 0-.53-.443c-.488-.325-1.268-.666-2.411-.666s-1.923.341-2.41.666a3 3 0 0 0-.595.513L12 8z", "clip-rule": "evenodd" })
    ]
  }
);
var library_default = Library;
var LineHeight = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 13a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.564 16H9.58l.804-2.266h3.236L14.424 16h1.016l-2.938-8h-1zm4.75-3.125-1.28-3.61h-.063l-1.282 3.61z", "clip-rule": "evenodd" })
    ]
  }
);
var line_height_default = LineHeight;
var Line = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M19.854 4.146a.5.5 0 0 1 0 .708l-15 15a.5.5 0 0 1-.708-.708l15-15a.5.5 0 0 1 .708 0" })
    ]
  }
);
var line_default = Line;
var LinkBroken = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 8a2 2 0 1 1 4 0v1.5a.5.5 0 0 0 1 0V8a3 3 0 1 0-6 0v1.5a.5.5 0 0 0 1 0zm0 8a2 2 0 1 0 4 0v-1.5a.5.5 0 0 1 1 0V16a3 3 0 0 1-6 0v-1.5a.5.5 0 0 1 1 0zm-3.796-2.448a.5.5 0 0 1 .354-.612l.966-.259a.5.5 0 0 1 .259.966l-.966.259a.5.5 0 0 1-.613-.354m9.66-2.588a.5.5 0 0 1 .353-.612l.966-.259a.5.5 0 0 1 .259.966l-.966.259a.5.5 0 0 1-.612-.354m-9.047-.871a.5.5 0 1 0-.259.966l.966.259a.5.5 0 1 0 .259-.966zm9.659 2.588a.5.5 0 1 0-.259.966l.966.259a.5.5 0 1 0 .259-.966z" })
    ]
  }
);
var link_broken_default = LinkBroken;
var LinkConnected = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10 8a2 2 0 1 1 4 0v1.5a.5.5 0 0 0 1 0V8a3 3 0 1 0-6 0v1.5a.5.5 0 0 0 1 0zm0 8a2 2 0 1 0 4 0v-1.5a.5.5 0 0 1 1 0V16a3 3 0 1 1-6 0v-1.5a.5.5 0 0 1 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 10a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z" })
    ]
  }
);
var link_connected_default = LinkConnected;
var Link = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18.854 10.853a4.035 4.035 0 1 0-5.708-5.707l-2.5 2.5a.5.5 0 1 0 .707.707l2.5-2.5a3.036 3.036 0 0 1 4.293 4.293l-2.5 2.5a.5.5 0 0 0 .707.707zM5.146 13.146a4.036 4.036 0 1 0 5.708 5.708l2.5-2.5a.5.5 0 0 0-.708-.708l-2.5 2.5a3.035 3.035 0 1 1-4.292-4.292l2.5-2.5a.5.5 0 1 0-.708-.708z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.854 9.854a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 .708.708z" })
    ]
  }
);
var link_default = Link;
var Linked = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.086 12.586a2 2 0 1 1 2.828 2.828.5.5 0 0 0 .707.707 3 3 0 0 0-4.242-4.242.5.5 0 0 0 .707.707m-2.5 2.5a.5.5 0 0 0-.707-.707 3 3 0 0 0 4.242 4.242.5.5 0 0 0-.707-.707 2 2 0 1 1-2.828-2.828" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.854 13.646a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708 0" })
    ]
  }
);
var linked_default = Linked;
var ListHorizontal = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.75 18a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 6.75 5h.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75zm5 0a.75.75 0 0 1-.75-.75V5.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75zm4.25-.75c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V5.75a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75z" })
    ]
  }
);
var list_horizontal_default = ListHorizontal;
var ListView = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4.5-.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 10a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0-5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2" })
    ]
  }
);
var list_view_default = ListView;
var Loading = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.333 7.011a6 6 0 0 0-2.834-.99A.534.534 0 0 1 12 5.5c0-.276.224-.502.5-.482A7 7 0 1 1 5.018 12.5.473.473 0 0 1 5.5 12c.276 0 .498.224.52.5a6 6 0 1 0 9.313-5.489" })
    ]
  }
);
var loading_default = Loading;
var LockLocked = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 10V8a4 4 0 1 1 8 0v2h.125C17.16 10 18 10.84 18 11.875v5.25C18 18.16 17.16 19 16.125 19h-8.25A1.875 1.875 0 0 1 6 17.125v-5.25C6 10.839 6.84 10 7.875 10zm1-2a3 3 0 1 1 6 0v2H9zm-2 3.875c0-.483.392-.875.875-.875h8.25c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-.875.875h-8.25A.875.875 0 0 1 7 17.125z", "clip-rule": "evenodd" })
    ]
  }
);
var lock_locked_default = LockLocked;
var LockOpen = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 7a3 3 0 1 1 6 0v.5a.5.5 0 0 0 1 0V7a4 4 0 0 0-8 0v3h-.125C6.839 10 6 10.84 6 11.875v5.25C6 18.16 6.84 19 7.875 19h8.25C17.16 19 18 18.16 18 17.125v-5.25C18 10.839 17.16 10 16.125 10H9zm-2 4.875c0-.483.392-.875.875-.875h8.25c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-.875.875h-8.25A.875.875 0 0 1 7 17.125z", "clip-rule": "evenodd" })
    ]
  }
);
var lock_open_default = LockOpen;
var Lock = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { stroke: "#000", d: "M9 11.5h6.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" })
    ]
  }
);
var lock_default = Lock;
var LoopOff = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.854 6.854a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708zm-8.708-.708a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9H9a3 3 0 0 0-2.143 5.1.5.5 0 0 1-.714.7A4 4 0 0 1 9 8h1.293L9.146 6.854a.5.5 0 0 1 0-.708m8.004 3.047a.5.5 0 0 1 .707.008A4 4 0 0 1 15 16h-1.293l1.147 1.145a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 15H15a3 3 0 0 0 2.143-5.1.5.5 0 0 1 .007-.707" })
    ]
  }
);
var loop_off_default = LoopOff;
var Loop = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.854 6.146a.5.5 0 1 0-.708.708L10.293 8H9a4 4 0 1 0 0 8h.5a.5.5 0 0 0 0-1H9a3 3 0 1 1 0-6h1.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708zM14.5 8a.5.5 0 0 0 0 1h.5a3 3 0 1 1 0 6h-1.293l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L13.707 16H15a4 4 0 0 0 0-8z" })
    ]
  }
);
var loop_default = Loop;
var MagicNoodle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m20.854 6.854-3 3a.5.5 0 0 1-.708-.708L19.293 7H15.5A2.5 2.5 0 0 0 13 9.5v5A3.5 3.5 0 0 1 9.5 18h-.55a2.5 2.5 0 1 1 0-1h.55a2.5 2.5 0 0 0 2.5-2.5v-5A3.5 3.5 0 0 1 15.5 6h3.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708M8 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m16.7 16.7.315-1.26c.126-.505.844-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.315 1.26c-.126.505-.844.505-.97 0L16.7 18.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM6.015 3.44 5.5 5.5l-2.06.515c-.505.126-.505.844 0 .97L5.5 7.5l.515 2.06c.126.505.844.505.97 0L7.5 7.5l2.06-.515c.505-.126.505-.844 0-.97L7.5 5.5l-.515-2.06c-.126-.505-.844-.505-.97 0" })
    ]
  }
);
var magic_noodle_default = MagicNoodle;
var Mail = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18.12 6A1.88 1.88 0 0 1 20 7.88v8.24A1.88 1.88 0 0 1 18.12 18H5.88A1.88 1.88 0 0 1 4 16.12V7.88A1.88 1.88 0 0 1 5.88 6zM19 8.7v-.82a.88.88 0 0 0-.88-.88H5.88a.88.88 0 0 0-.88.88v.82l7 3.733zm0 1.133-7 3.734-7-3.734v6.287c0 .486.394.88.88.88h12.24a.88.88 0 0 0 .88-.88z", "clip-rule": "evenodd" })
    ]
  }
);
var mail_default = Mail;
var Mask = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 16a6 6 0 0 1-6-6h-.5a.5.5 0 0 1 0-1h.583A6.002 6.002 0 0 1 20 10a6 6 0 0 1-5 5.917v.583a.5.5 0 0 1-1 0zm0-5v4a5 5 0 0 1-5-5h4a1 1 0 0 1 1 1m0-6a5 5 0 0 0-4.9 4H13a2 2 0 0 1 2 2v3.9A5.002 5.002 0 0 0 14 5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.5 10a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0A1.5 1.5 0 0 1 5.5 9a.5.5 0 0 1 0 1m-1 8a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 4 18.5a.5.5 0 0 1 .5-.5m10 0a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5M5 12.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm0 3a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM7.5 19a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" })
    ]
  }
);
var mask_default = Mask;
var Matching = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm0 1h3v3H7z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 13a1 1 0 0 0-1 1v.5a.5.5 0 0 0 1 0V14h.5a.5.5 0 0 0 0-1zm2.5 0a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V14a1 1 0 0 0-1-1zM7 16.5a.5.5 0 0 0-1 0v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7zm4 0a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1zm2-2.5a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0zm3-.5a.5.5 0 0 1 .5-.5h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1-.5-.5M13.5 16a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H14a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5M14 6a1 1 0 0 0-1 1v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 0-1zm2.5 0a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V7a1 1 0 0 0-1-1zM14 9.5a.5.5 0 0 0-1 0v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H14zm4 0a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1z" })
    ]
  }
);
var matching_default = Matching;
var Mention = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 6a6 6 0 1 0 0 12 .5.5 0 0 1 0 1 7 7 0 1 1 7-7v.5a2.5 2.5 0 0 1-4.62 1.326A3 3 0 1 1 14 9.764V9.5a.5.5 0 0 1 1 0v3a1.5 1.5 0 0 0 3 0V12a6 6 0 0 0-6-6m2 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0", "clip-rule": "evenodd" })
    ]
  }
);
var mention_default = Mention;
var MicMute = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14 6v1.879l1-1V6a3 3 0 1 0-6 0v5c0 .54.143 1.048.393 1.486l.748-.748A2 2 0 0 1 10 11V6a2 2 0 1 1 4 0m.998 5.124-2.874 2.874a3 3 0 0 0 2.874-2.874M7 11.167c0 1.048.334 2.019.901 2.81l-.715.716A5.8 5.8 0 0 1 6 11.167V11a.5.5 0 0 1 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m10.352 15.769-.777.778a5.8 5.8 0 0 0 1.925.444V20h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-3.01a5.833 5.833 0 0 0 5.5-5.823V11a.5.5 0 0 0-1 0v.167A4.833 4.833 0 0 1 12.167 16h-.334a4.8 4.8 0 0 1-1.48-.231m9.501-10.915a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708z" })
    ]
  }
);
var mic_mute_default = MicMute;
var Minus = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 12a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 6 12" })
    ]
  }
);
var minus_default = Minus;
var MissingFont = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6.618 15.282h1.265l.542-1.614h2.46l.543 1.614h1.265l-2.307-6.545H8.922zm3.947-2.566-.886-2.637h-.05l-.885 2.637z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.408 13.275v.083h1.064v-.083q.003-.338.08-.569.08-.232.243-.406.165-.173.425-.332a2.4 2.4 0 0 0 .508-.4q.214-.224.33-.511a1.7 1.7 0 0 0 .117-.652q0-.54-.262-.933a1.7 1.7 0 0 0-.725-.61 2.5 2.5 0 0 0-1.074-.215q-.56 0-1.023.205-.46.204-.741.613-.279.41-.294 1.017h1.138q.016-.3.146-.496a.84.84 0 0 1 .336-.294q.204-.099.432-.099.246 0 .444.102.2.104.32.288.117.186.118.438a.9.9 0 0 1-.09.406q-.09.18-.246.326a2.2 2.2 0 0 1-.348.265q-.284.175-.483.387a1.4 1.4 0 0 0-.307.55q-.105.342-.108.92m.06 1.873a.68.68 0 0 0 .496.204q.192 0 .348-.092a.74.74 0 0 0 .256-.256.66.66 0 0 0 .099-.355.66.66 0 0 0-.211-.492.68.68 0 0 0-.492-.204.68.68 0 0 0-.496.204.67.67 0 0 0-.207.492q0 .294.207.499" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var missing_font_default = MissingFont;
var Mobile = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 16.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1-9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm4 1h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var mobile_default = Mobile;
var Moon = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17.304 14.808c.315-.595-.41-1.13-1.063-.963a5 5 0 0 1-6.086-6.086c.167-.653-.368-1.379-.962-1.063a6 6 0 1 0 8.111 8.112M15 15a6 6 0 0 0 1.07-.095A5 5 0 1 1 9.095 7.93 6 6 0 0 0 15 15", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 7.5a.5.5 0 0 0-1 0V8h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V9h.5a.5.5 0 0 0 0-1H16z" })
    ]
  }
);
var moon_default = Moon;
var More = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" })
    ]
  }
);
var more_default = More;
var Move = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M20.999 11.183a2 2 0 0 1-1.41 1.836l-5.024 1.546-1.546 5.023a2 2 0 0 1-3.773.143l-5.107-13A2 2 0 0 1 6.73 4.138l13 5.108A2 2 0 0 1 21 11.183m-7.235 2.581-1.701 5.53a1 1 0 0 1-1.887.072l-5.107-13a1 1 0 0 1 1.297-1.297l13 5.107a1 1 0 0 1-.072 1.887z", "clip-rule": "evenodd" })
    ]
  }
);
var move_default = Move;
var MultiEdit = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 6v2h2a2 2 0 0 1 2 2v4.432l2.351.882a1 1 0 0 1-.108 1.906l-2.418.605-.605 2.418a1 1 0 0 1-1.906.108L14.432 18H10a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2M6 5h6a1 1 0 0 1 1 1v2h-3a2 2 0 0 0-2 2v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m8.057 12-.993-2.649a1 1 0 0 1 1.287-1.287l2.649.993V10a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM17 17l-.75 3L14 14l6 2.25z", "clip-rule": "evenodd" })
    ]
  }
);
var multi_edit_default = MultiEdit;
var NavigateBack = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.854 7.146a.5.5 0 0 1 0 .708L9.707 12l4.147 4.146a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5a.5.5 0 0 1 .708 0" })
    ]
  }
);
var navigate_back_default = NavigateBack;
var NavigateForward = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.146 16.854a.5.5 0 0 1 0-.708L14.293 12l-4.147-4.146a.5.5 0 0 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0" })
    ]
  }
);
var navigate_forward_default = NavigateForward;
var NewBranch = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L9 7.707V17a6 6 0 0 0 6-6V7.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L16 7.707V11a7 7 0 0 1-7 7h-.5a.5.5 0 0 1-.5-.5V7.707L6.854 8.854a.5.5 0 1 1-.708-.708z" })
    ]
  }
);
var new_branch_default = NewBranch;
var NewTab = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17 16.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 6.5a.5.5 0 0 0 .5.5h3.793l-4.147 4.146a.5.5 0 0 0 .708.708L17 7.707V11.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5" })
    ]
  }
);
var new_tab_default = NewTab;
var Next = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.146 7.147a.5.5 0 0 0 0 .708L17.293 10H8.5a3.5 3.5 0 1 0 0 7h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h8.793l-2.147 2.146a.5.5 0 0 0 .708.707l3-3a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.708 0" })
    ]
  }
);
var next_default = Next;
var NoTrim = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.5 7.5A.5.5 0 0 1 6 7h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m0 10A.5.5 0 0 1 6 17h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.133 14.422a.49.49 0 0 0 .468-.338l.292-.88h1.885l.291.88a.493.493 0 1 0 .935-.318l-1.344-3.85a.872.872 0 0 0-1.647 0l-1.346 3.85a.493.493 0 0 0 .466.656m2.386-1.998-.656-1.982a.028.028 0 0 0-.053 0l-.657 1.982zm3.088 3.376q.355.134.852.134.528 0 .94-.162t.646-.485q.237-.322.236-.813V11.08a.476.476 0 0 0-.476-.476h-.157a.32.32 0 0 0-.319.318v.29a.03.03 0 0 1-.029.028.03.03 0 0 1-.026-.016 1.4 1.4 0 0 0-.19-.29 1.1 1.1 0 0 0-.349-.268 1.2 1.2 0 0 0-.547-.112q-.432 0-.788.222a1.54 1.54 0 0 0-.566.656q-.21.435-.21 1.071 0 .627.21 1.042.208.412.564.619.355.204.79.204.318 0 .535-.095.219-.097.353-.241.129-.137.198-.275a.027.027 0 0 1 .052.012v.686q0 .41-.24.586a1 1 0 0 1-.607.18q-.256 0-.427-.07a.75.75 0 0 1-.271-.174c-.11-.112-.261-.198-.415-.168l-.114.022c-.27.053-.443.335-.266.547q.025.03.051.058.215.23.57.363m1.332-2.307a.8.8 0 0 1-.465.134.8.8 0 0 1-.477-.14.9.9 0 0 1-.29-.392 1.6 1.6 0 0 1-.1-.597q0-.338.097-.599a.9.9 0 0 1 .29-.412.76.76 0 0 1 .48-.152q.276 0 .467.144a.9.9 0 0 1 .291.408q.1.261.1.611 0 .354-.102.607a.84.84 0 0 1-.291.388", "clip-rule": "evenodd" })
    ]
  }
);
var no_trim_default = NoTrim;
var Noodle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m20.854 6.854-3 3a.5.5 0 0 1-.708-.708L19.293 7H15.5A2.5 2.5 0 0 0 13 9.5v5A3.5 3.5 0 0 1 9.5 18h-.55a2.5 2.5 0 1 1 0-1h.55a2.5 2.5 0 0 0 2.5-2.5v-5A3.5 3.5 0 0 1 15.5 6h3.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708M8 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0", "clip-rule": "evenodd" })
    ]
  }
);
var noodle_default = Noodle;
var Notes = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.5 11a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 16H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM5 6h10a1 1 0 0 1 1 1v1H9a2 2 0 0 0-2 2v5H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m4 3h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var notes_default = Notes;
var NotificationBell = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.992 6.124Q13 6.064 13 6a1 1 0 1 0-1.992.124A4 4 0 0 0 8 10v1.172a5.83 5.83 0 0 1-1.707 4.12A1 1 0 0 0 7 17h3a2 2 0 1 0 4 0h3a1 1 0 0 0 .707-1.707A5.83 5.83 0 0 1 16 11.172V10a4 4 0 0 0-3.008-3.876M12 18a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1m5-2a6.83 6.83 0 0 1-2-4.828V10a3 3 0 1 0-6 0v1.172A6.83 6.83 0 0 1 7 16z", "clip-rule": "evenodd" })
    ]
  }
);
var notification_bell_default = NotificationBell;
var NumberList = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 7a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6A.5.5 0 0 1 11 7M6 7a.5.5 0 0 1 .5-.5h1A.5.5 0 0 1 8 7v3.5a.5.5 0 1 1-1 0v-3h-.5A.5.5 0 0 1 6 7m0 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.276.447L7 16.31v.191h1.5a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 17v-1a.5.5 0 0 1 .276-.447L8 14.69V14H6.5a.5.5 0 0 1-.5-.5m5.5 3a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1zm0-5a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1z" })
    ]
  }
);
var number_list_default = NumberList;
var Number = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.51 15.65a.523.523 0 1 1-.985-.351l2.377-6.535a.83.83 0 0 1 1.56 0l2.374 6.535a.523.523 0 1 1-.985.35L8.723 9.57a.043.043 0 0 0-.081 0zm.162-2.238c0-.251.204-.456.456-.456h3.1a.456.456 0 1 1 0 .912h-3.1a.456.456 0 0 1-.456-.456M13.692 16a.55.55 0 0 1-.4-.926l2.453-2.611q.436-.472.718-.821.285-.35.426-.665.14-.315.14-.665 0-.399-.19-.688a1.26 1.26 0 0 0-.516-.452 1.65 1.65 0 0 0-.734-.16q-.433 0-.756.179-.319.179-.494.498a1.3 1.3 0 0 0-.107.255c-.08.266-.293.497-.571.497s-.51-.228-.458-.5q.075-.393.274-.72.319-.525.877-.817a2.7 2.7 0 0 1 1.262-.292q.71 0 1.254.292.543.29.85.783.309.495.309 1.106 0 .433-.16.847-.156.41-.543.916-.389.5-1.08 1.22l-1.633 1.731a.044.044 0 0 0 .032.074h3.053a.46.46 0 0 1 0 .919z" })
    ]
  }
);
var number_default = Number;
var Offline = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.354 10.146a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708L12 13.207l1.646 1.647a.5.5 0 0 0 .708-.708L12.707 12.5l1.647-1.646a.5.5 0 0 0-.708-.708L12 11.793z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M3 13a5 5 0 0 0 4.5 4.975V18H17a4 4 0 0 0 .987-7.877A5.5 5.5 0 0 0 7.591 8.016 5 5 0 0 0 3 13m4.798 4-.2-.02a4 4 0 0 1 .074-7.967l.558-.045.253-.5a4.5 4.5 0 0 1 8.506 1.722l.05.724.702.178A3.002 3.002 0 0 1 17 17z", "clip-rule": "evenodd" })
    ]
  }
);
var offline_default = Offline;
var Opacity = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M13.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11 13.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M9.5 15a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var opacity_default = Opacity;
var OpenSession = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.212 12.687a2.5 2.5 0 1 0-2.424 0A4 4 0 0 0 8 16.5a.5.5 0 0 0 1 0 3 3 0 1 1 6 0 .5.5 0 0 0 1 0 4 4 0 0 0-2.788-3.813M12 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.5 5H17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.5v-.5A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5zM7 6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm6.5-1v-.5A.5.5 0 0 0 13 4h-2a.5.5 0 0 0-.5.5V5z", "clip-rule": "evenodd" })
    ]
  }
);
var open_session_default = OpenSession;
var Outline = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m7.7 10.2.315-1.26c.126-.505.844-.505.97 0L9.3 10.2l1.26.315c.505.126.505.844 0 .97L9.3 11.8l-.315 1.26c-.126.505-.844.505-.97 0L7.7 11.8l-1.26-.315c-.505-.126-.505-.844 0-.97zM12.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.982l.945 2.31a.5.5 0 0 1-.926.38l-1.1-2.69H8.063l-1.1 2.69a.5.5 0 1 1-.926-.379L6.982 17H5a2 2 0 0 1-2-2zm2-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var outline_default = Outline;
var OverflowClip = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M6 11a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v.5a.5.5 0 0 1-1 0zm3-.5a.5.5 0 0 1 .5-.5h.5v1h-.5a.5.5 0 0 1-.5-.5M6.5 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m6.5 1.5V14h1v.5a.5.5 0 0 1-1 0M6.5 16a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5m7 0a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5M9 17.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16.5 6a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1H17v5h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V14h-5v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0V7h5v-.5a.5.5 0 0 1 .5-.5M11 8v2h2a1 1 0 0 1 1 1v2h2V8zm0 3v2h2v-2z", "clip-rule": "evenodd" })
    ]
  }
);
var overflow_clip_default = OverflowClip;
var OverflowDisplay = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M16.5 6a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1H17v5h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V14h-2v-1h2V8h-5v2h-1V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0V7h5v-.5a.5.5 0 0 1 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M13 13h-2v-2h-1v2h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V14h2z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 0v6h6v-6z", "clip-rule": "evenodd" })
    ]
  }
);
var overflow_display_default = OverflowDisplay;
var OverlayBottom = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M6 14h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8H7V6a1 1 0 0 1 1-1m9 10v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3z", "clip-rule": "evenodd" })
    ]
  }
);
var overlay_bottom_default = OverlayBottom;
var OverlayCenter = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", "fill-rule": "evenodd", d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm8 1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 10h-4v4h4zM8 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm2 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z", "clip-rule": "evenodd" })
    ]
  }
);
var overlay_center_default = OverlayCenter;
var OverlayClose = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.121 10.586a.5.5 0 0 0-.707-.707L12 11.293l-1.414-1.414a.5.5 0 1 0-.707.707L11.293 12l-1.414 1.414a.5.5 0 0 0 .707.707L12 12.707l1.414 1.414a.5.5 0 1 0 .707-.707L12.707 12z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var overlay_close_default = OverlayClose;
var OverlayLeft = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M6 6a2 2 0 0 1 2-2h4v16H8a2 2 0 0 1-2-2z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4zm-1 0H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3z", "clip-rule": "evenodd" })
    ]
  }
);
var overlay_left_default = OverlayLeft;
var OverlayOpen = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.5 13.5a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17 8v3.535A4 4 0 1 1 11.535 17H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2M8 7h7a1 1 0 0 1 1 1v3.126A4 4 0 0 0 11.126 16H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m8 5.17a3 3 0 0 1 1 .594 3 3 0 1 1-1-.593", "clip-rule": "evenodd" })
    ]
  }
);
var overlay_open_default = OverlayOpen;
var OverlaySwap = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 6.5a.5.5 0 0 1 .5-.5H9a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1H6.5a.5.5 0 0 1-.5-.5m4.5 7.5a.5.5 0 0 1 .5.5V16a2 2 0 0 1-2 2H6.5a.5.5 0 0 1 0-1H9a1 1 0 0 0 1-1v-1.5a.5.5 0 0 1 .5-.5M18 6.5a.5.5 0 0 0-.5-.5H15a2 2 0 0 0-2 2v1.5a.5.5 0 1 0 1 0V8a1 1 0 0 1 1-1h2.5a.5.5 0 0 0 .5-.5M13.5 14a.5.5 0 0 0-.5.5V16a2 2 0 0 0 2 2h2.5a.5.5 0 0 0 0-1H15a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.354 10.854a.5.5 0 0 0-.707-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .707-.708l-.647-.646h8.586l-.646.646a.5.5 0 0 0 .707.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.707.708l.646.646H7.707z" })
    ]
  }
);
var overlay_swap_default = OverlaySwap;
var PaddingAll = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 1v2h-2v-2z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 1v8H8V8z", "clip-rule": "evenodd" })
    ]
  }
);
var padding_all_default = PaddingAll;
var PaddingHorizontal = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm8.5-.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 11a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-1 2v-2h-2v2z", "clip-rule": "evenodd" })
    ]
  }
);
var padding_horizontal_default = PaddingHorizontal;
var PaddingSides = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8 9.5a.5.5 0 1 0-1 0v5a.5.5 0 1 0 1 0zm9 0a.5.5 0 1 0-1 0v5a.5.5 0 1 0 1 0zm-8-2a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z" })
    ]
  }
);
var padding_sides_default = PaddingSides;
var PaddingVertical = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 16a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM7 7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm2 1h-2v2h2z", "clip-rule": "evenodd" })
    ]
  }
);
var padding_vertical_default = PaddingVertical;
var Page = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8 20h8a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-4.414-4.414A1 1 0 0 0 12.586 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2m9-2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4v3.5a1.5 1.5 0 0 0 1.5 1.5H17zm-.414-9L13 5.414V8.5a.5.5 0 0 0 .5.5z", "clip-rule": "evenodd" })
    ]
  }
);
var page_default = Page;
var PagesMore = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2M6 19h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1", "clip-rule": "evenodd" })
    ]
  }
);
var pages_more_default = PagesMore;
var PagesNew = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 10a.5.5 0 0 1 .5.5v2h2a.5.5 0 1 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M20 16a2 2 0 0 1-2 2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM6 19h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1", "clip-rule": "evenodd" })
    ]
  }
);
var pages_new_default = PagesNew;
var Pages = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m-2 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1", "clip-rule": "evenodd" })
    ]
  }
);
var pages_default = Pages;
var Paint = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.207 3.293a1 1 0 0 0-1.414 0L9.397 5.689 7.353 3.646a.5.5 0 1 0-.708.708L8.69 6.396 4.207 10.88a3 3 0 0 0 0 4.242l4.672 4.672a3 3 0 0 0 4.242 0l7.586-7.586a1 1 0 0 0 0-1.414zm-3.81 3.81-4.483 4.483a2 2 0 0 0 0 2.828l4.672 4.672a2 2 0 0 0 2.828 0L20 11.5 12.5 4l-2.396 2.396 2.75 2.75a1.5 1.5 0 1 1-.707.707zM14 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M19 21a2 2 0 0 0 2-2c0-1.108-1.09-2.488-1.661-3.134a.448.448 0 0 0-.678 0C18.091 16.512 17 17.892 17 19a2 2 0 0 0 2 2m0-1a1 1 0 0 0 1-1c0-.27-.15-.694-.47-1.22a8 8 0 0 0-.53-.758 8 8 0 0 0-.53.758c-.32.526-.47.95-.47 1.22a1 1 0 0 0 1 1", "clip-rule": "evenodd" })
    ]
  }
);
var paint_default = Paint;
var Password = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var password_default = Password;
var Pause = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4 6a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h2.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m7.5 1a2 2 0 0 1 2-2H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2zm2-1H18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var pause_default = Pause;
var Pen = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m19.31 14.623 1.397 1.398a1 1 0 0 1 0 1.414l-3.272 3.272a1 1 0 0 1-1.414 0l-1.397-1.397c-1.974.62-4.156.157-6.124-1.81-2.184-2.184-3.573-8.343-4.167-11.532A1.39 1.39 0 0 1 5.97 4.333c3.187.594 9.347 1.983 11.53 4.167 1.967 1.967 2.43 4.149 1.81 6.123m-1.136.279.182-.578c.496-1.581.17-3.384-1.563-5.117-.43-.431-1.11-.87-1.999-1.294-.877-.42-1.904-.8-2.982-1.139-2.027-.636-4.174-1.105-5.734-1.403l4.906 4.906a2 2 0 1 1-.707.707L5.372 6.079c.297 1.56.766 3.706 1.402 5.732.696 2.213 1.532 4.08 2.433 4.982 1.734 1.734 3.537 2.059 5.118 1.563l.578-.182L16.728 20 20 16.728zm-5.467-2.195a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414", "clip-rule": "evenodd" })
    ]
  }
);
var pen_default = Pen;
var Pencil = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M3.008 4.124a1 1 0 0 1 1.116-1.116l4 .5a1 1 0 0 1 .583.285L20.5 15.586a2 2 0 0 1 0 2.828L18.414 20.5a2 2 0 0 1-2.828 0L3.793 8.707a1 1 0 0 1-.285-.583zM4 4l.5 4 9.146 9.146 3.5-3.5L8 4.5zm13.854 10.353-3.5 3.5 1.939 1.94a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414z", "clip-rule": "evenodd" })
    ]
  }
);
var pencil_default = Pencil;
var PendingInvite = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 0q-.263 0-.524.011a.5.5 0 0 0 .043 1 11 11 0 0 1 .962 0 .5.5 0 0 0 .043-1A12 12 0 0 0 12 0m2.598.282a.5.5 0 1 0-.216.977q.473.104.927.247a.5.5 0 0 0 .3-.954 12 12 0 0 0-1.011-.27m-4.98.977a.5.5 0 0 0-.216-.977q-.514.114-1.011.27a.5.5 0 1 0 .3.954q.455-.143.927-.247m7.924.095a.5.5 0 1 0-.462.887q.426.222.83.48a.5.5 0 1 0 .539-.843 12 12 0 0 0-.907-.524M6.92 2.24a.5.5 0 1 0-.462-.886q-.466.243-.907.524a.5.5 0 1 0 .538.843q.405-.258.831-.48m13.187.912a.5.5 0 0 0-.676.737q.354.324.68.679a.5.5 0 0 0 .736-.676 12 12 0 0 0-.74-.74M4.569 3.89a.5.5 0 1 0-.676-.737q-.386.354-.74.74a.5.5 0 1 0 .737.676q.324-.354.679-.68m17.553 1.662a.5.5 0 0 0-.843.538q.258.405.48.831a.5.5 0 1 0 .887-.462q-.243-.466-.524-.907M2.721 6.09a.5.5 0 1 0-.843-.539q-.28.44-.524.907a.5.5 0 1 0 .887.462q.222-.426.48-.83m20.727 2.3a.5.5 0 1 0-.954.301q.143.455.247.927a.5.5 0 0 0 .977-.216q-.114-.514-.27-1.011m-21.942.3a.5.5 0 1 0-.954-.3q-.156.496-.27 1.011a.5.5 0 1 0 .977.216q.104-.472.247-.927M1.01 11.52a.5.5 0 0 0-.999-.044 12 12 0 0 0 0 1.048.5.5 0 0 0 1-.043 11 11 0 0 1 0-.962m22.978-.043a.5.5 0 0 0-1 .043 11 11 0 0 1 0 .962.5.5 0 1 0 1 .043 12 12 0 0 0 0-1.048m-.271 3.122a.5.5 0 1 0-.977-.216q-.104.473-.247.927a.5.5 0 0 0 .954.3q.156-.496.27-1.011m-22.459-.216a.5.5 0 0 0-.977.216q.114.514.27 1.011a.5.5 0 0 0 .954-.3 11 11 0 0 1-.247-.927m21.387 3.16a.5.5 0 1 0-.887-.462q-.222.426-.48.83a.5.5 0 0 0 .843.539q.28-.44.524-.907M2.24 17.08a.5.5 0 1 0-.886.462q.243.465.524.907a.5.5 0 0 0 .843-.538 11 11 0 0 1-.48-.831m18.606 3.027a.5.5 0 0 0-.737-.676q-.325.354-.679.68a.5.5 0 0 0 .676.736q.386-.354.74-.74M3.89 19.431a.5.5 0 0 0-.737.676q.354.386.74.74a.5.5 0 0 0 .676-.737 11 11 0 0 1-.68-.679m14.56 2.691a.5.5 0 0 0-.538-.843q-.405.258-.831.48a.5.5 0 1 0 .462.887q.465-.243.907-.524M6.09 21.279a.5.5 0 0 0-.539.843q.44.28.907.524a.5.5 0 1 0 .462-.887 11 11 0 0 1-.83-.48m9.52 2.169a.5.5 0 1 0-.301-.954q-.455.143-.927.247a.5.5 0 0 0 .216.977q.514-.114 1.011-.27m-6.918-.954a.5.5 0 0 0-.3.954q.496.156 1.011.27a.5.5 0 1 0 .216-.977q-.472-.104-.927-.247m2.829.496a.5.5 0 1 0-.044.999 12 12 0 0 0 1.048 0 .5.5 0 0 0-.043-1 11 11 0 0 1-.962 0m-.041-17.955a4 4 0 0 1 1.044 0 .5.5 0 0 1-.13.991 3 3 0 0 0-.784 0 .5.5 0 1 1-.13-.991m-1.212.884a.5.5 0 0 1-.092.701q-.314.242-.554.555a.5.5 0 0 1-.793-.61 4 4 0 0 1 .738-.738.5.5 0 0 1 .7.092m3.469 0a.5.5 0 0 1 .701-.092c.277.213.526.461.738.738a.5.5 0 0 1-.793.61 3 3 0 0 0-.554-.555.5.5 0 0 1-.092-.7m1.672 2.128a.5.5 0 0 1 .56.43 4 4 0 0 1 0 1.045.5.5 0 1 1-.991-.13 3 3 0 0 0 0-.785.5.5 0 0 1 .43-.56m-6.811 0a.5.5 0 0 1 .431.56 3 3 0 0 0 0 .785.5.5 0 1 1-.991.13 4 4 0 0 1 0-1.044.5.5 0 0 1 .56-.431m.324 2.687a.5.5 0 0 1 .702.092q.241.313.554.554a.5.5 0 1 1-.61.793 4 4 0 0 1-.737-.738.5.5 0 0 1 .091-.701m6.164 0a.5.5 0 0 1 .091.701 4 4 0 0 1-.738.738.5.5 0 0 1-.609-.793q.314-.241.554-.554a.5.5 0 0 1 .702-.092m-2.129 1.672a.5.5 0 0 1-.431.56 4 4 0 0 1-1.044 0 .5.5 0 1 1 .13-.992 3 3 0 0 0 .784 0 .5.5 0 0 1 .561.431m.859 1.834a7 7 0 0 0-.596-.133.5.5 0 0 0-.175.985 6 6 0 0 1 1.012.271.5.5 0 0 0 .341-.94 7 7 0 0 0-.582-.183m-2.854.851a.5.5 0 1 0-.174-.985 7 7 0 0 0-1.179.317.5.5 0 1 0 .343.94q.491-.18 1.01-.272m5.542.547a.5.5 0 1 0-.643.766 6 6 0 0 1 .74.74.5.5 0 1 0 .766-.642q-.391-.467-.862-.864m-8.358.767a.5.5 0 0 0-.643-.767q-.467.391-.863.863a.5.5 0 1 0 .765.643 6 6 0 0 1 .74-.739" })
    ]
  }
);
var pending_invite_default = PendingInvite;
var People = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.5 13a2.5 2.5 0 0 0-2.5 2.5c0-.686-.153-1.336-.428-1.918A3.5 3.5 0 0 1 19 15.5v2a.5.5 0 1 1-1 0v-2a2.5 2.5 0 0 0-2.5-2.5m-7 0A2.5 2.5 0 0 0 6 15.5v2a.5.5 0 0 1-1 0v-2a3.5 3.5 0 1 1 7 0v2a.5.5 0 1 1-1 0v-2A2.5 2.5 0 0 0 8.5 13" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0", "clip-rule": "evenodd" })
    ]
  }
);
var people_default = People;
var Phone = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6.727 5.687c-1.637 1.638-1.876 4.09-.513 5.781.799.99 1.76 2.09 2.857 3.189a40 40 0 0 0 3.189 2.857c1.69 1.363 4.143 1.124 5.78-.513a.315.315 0 0 0 0-.446l-2.006-2.006a.59.59 0 0 0-.76-.063 3 3 0 0 1-3.865-.32l-1.847-1.847a3 3 0 0 1-.32-3.865.59.59 0 0 0-.063-.76L7.173 5.687a.315.315 0 0 0-.446 0M6.02 4.98a1.315 1.315 0 0 1 1.86 0l2.006 2.007c.55.55.622 1.416.17 2.049a2 2 0 0 0 .213 2.576l1.847 1.847a2 2 0 0 0 2.576.213 1.59 1.59 0 0 1 2.05.17l2.006 2.006a1.315 1.315 0 0 1 0 1.86c-1.947 1.947-4.973 2.313-7.116.584a41 41 0 0 1-3.268-2.928 41 41 0 0 1-2.928-3.268C3.707 9.953 4.073 6.927 6.02 4.98", "clip-rule": "evenodd" })
    ]
  }
);
var phone_default = Phone;
var Placeholder = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M8.674 4.24c.127.22.397.309.636.223q.605-.216 1.25-.334a.53.53 0 0 0 .44-.512.48.48 0 0 0-.557-.483 9 9 0 0 0-1.528.409.48.48 0 0 0-.24.696M6.82 5.904a.53.53 0 0 0 .123-.663.48.48 0 0 0-.724-.139 9 9 0 0 0-1.117 1.117.48.48 0 0 0 .14.724c.22.127.498.07.662-.124q.42-.494.915-.915M4.463 9.31a.53.53 0 0 0-.224-.636.48.48 0 0 0-.696.241 9 9 0 0 0-.409 1.528.48.48 0 0 0 .483.557c.254 0 .467-.19.512-.44q.118-.645.334-1.25m-.342-1.664.16-.278a9 9 0 0 0-.16.278m13.975 9.534a.53.53 0 0 1 .663-.123.48.48 0 0 1 .14.724q-.511.607-1.118 1.117a.48.48 0 0 1-.724-.14.53.53 0 0 1 .124-.662q.494-.42.915-.915m1.618-.543a9 9 0 0 0 .168-.29zm.743-1.553a.48.48 0 0 1-.696.24.53.53 0 0 1-.224-.635 8 8 0 0 0 .334-1.25.53.53 0 0 1 .512-.44c.3 0 .534.261.483.557a9 9 0 0 1-.409 1.528M7.368 4.282l.279-.16a9 9 0 0 0-.28.16m7.323 15.255a.526.526 0 0 1 .636.224.48.48 0 0 1-.241.696 9 9 0 0 1-1.528.409.48.48 0 0 1-.557-.483c0-.254.19-.467.44-.512a8 8 0 0 0 1.25-.334m1.657.345q.147-.081.291-.168zM4.13 13.44a.53.53 0 0 0-.513-.44.48.48 0 0 0-.483.557q.14.79.409 1.528a.48.48 0 0 0 .696.24.53.53 0 0 0 .224-.635 8 8 0 0 1-.334-1.25m-.009 2.91q.08.144.163.285zM11 20.383a.48.48 0 0 1-.557.483 9 9 0 0 1-1.528-.409.48.48 0 0 1-.24-.697.53.53 0 0 1 .636-.223q.604.216 1.25.334c.25.045.439.258.439.512m-3.352-.503a9 9 0 0 1-.281-.163zm-2.406-2.823a.48.48 0 0 0-.14.724q.51.607 1.117 1.117a.48.48 0 0 0 .724-.14.53.53 0 0 0-.124-.662 8 8 0 0 1-.915-.915.53.53 0 0 0-.662-.124M18.759 6.943a.53.53 0 0 1-.663-.124 8 8 0 0 0-.915-.915.53.53 0 0 1-.124-.663.48.48 0 0 1 .724-.139q.607.51 1.117 1.117a.48.48 0 0 1-.14.724m-2.409-2.825.288.167a9 9 0 0 0-.288-.167M13 3.617c0-.3.261-.534.557-.483q.79.14 1.528.409a.48.48 0 0 1 .24.696.53.53 0 0 1-.635.224 8 8 0 0 0-1.25-.334.53.53 0 0 1-.44-.512M20.383 11a.53.53 0 0 1-.512-.44 8 8 0 0 0-.334-1.25.53.53 0 0 1 .224-.636.48.48 0 0 1 .696.241q.27.738.409 1.528a.48.48 0 0 1-.483.557m-.503-3.35a9 9 0 0 0-.164-.286z" })
    ]
  }
);
var placeholder_default = Placeholder;
var PlayPause = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 7.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.624 7.279C6.492 6.547 5 7.359 5 8.706v6.588c0 1.348 1.492 2.16 2.624 1.427l5.09-3.294a1.7 1.7 0 0 0 0-2.854zM6 8.706a.7.7 0 0 1 1.08-.588l5.091 3.294a.7.7 0 0 1 0 1.176l-5.09 3.294A.7.7 0 0 1 6 15.294z", "clip-rule": "evenodd" })
    ]
  }
);
var play_pause_default = PlayPause;
var PlayRectangle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.53 11.054a1 1 0 0 0-1.53.848v3.196a1 1 0 0 0 1.53.848l2.557-1.598a1 1 0 0 0 0-1.696zm-.53.848 2.557 1.598L13 15.098z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 8h-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2M5 6h10a1 1 0 0 1 1 1v1H9a2 2 0 0 0-2 2v5H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m14 3H9a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var play_rectangle_default = PlayRectangle;
var Play = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18.058 13.696a2 2 0 0 0 .004-3.404L9.9 5.242C8.634 4.457 7 5.368 7 6.856V17.1c0 1.486 1.63 2.397 2.896 1.618zm-8.686 4.17 8.162-5.022a1 1 0 0 0 .002-1.702l-8.162-5.05A.9.9 0 0 0 8 6.857V17.1a.9.9 0 0 0 1.372.766", "clip-rule": "evenodd" })
    ]
  }
);
var play_default = Play;
var Plugin = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 3a2.5 2.5 0 0 1 2.22 3.647l-.081.145c-.056.092-.09.158-.113.208H17a1 1 0 0 1 1 1v1.88a1 1 0 0 1-1.334.943 1.25 1.25 0 1 0-.416 2.427q.209 0 .416-.074a1 1 0 0 1 1.334.942V16a1 1 0 0 1-1 1h-2.974c.023.05.057.116.113.208l.082.145a2.5 2.5 0 1 1-4.36-.145l.078-.137.035-.071H7a1 1 0 0 1-1-1v-1.882a1 1 0 0 1 1.334-.942q.207.074.416.074l.128-.007a1.25 1.25 0 0 0 1.115-1.115L9 12a1.25 1.25 0 0 0-1.122-1.243l-.128-.007q-.159 0-.313.042l-.103.031A1 1 0 0 1 6 9.881V8a1 1 0 0 1 1-1h2.974q-.014-.031-.035-.071l-.078-.137A2.5 2.5 0 0 1 12 3m0 1a1.5 1.5 0 0 0-1.284 2.273c.147.243.284.505.284.789V8H7v1.88a2.25 2.25 0 1 1 .75 4.37c-.263 0-.515-.049-.75-.132V16h4v.939c0 .283-.137.545-.284.788a1.5 1.5 0 1 0 2.568 0c-.147-.243-.284-.505-.284-.788V16h4v-1.882a2.2 2.2 0 0 1-.75.132A2.25 2.25 0 1 1 17 9.88V8h-4v-.938c0-.284.137-.546.284-.789A1.5 1.5 0 0 0 12 4", "clip-rule": "evenodd" })
    ]
  }
);
var plugin_default = Plugin;
var Plus = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 6a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 12 6" })
    ]
  }
);
var plus_default = Plus;
var Polygon = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.65 3.625a.75.75 0 0 0-1.3 0l-8.227 14.25A.75.75 0 0 0 3.773 19h16.454a.75.75 0 0 0 .65-1.125zM12 4.5 4.206 18h15.588z", "clip-rule": "evenodd" })
    ]
  }
);
var polygon_default = Polygon;
var Portrait = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm6 1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var portrait_default = Portrait;
var PreviewPrototype = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m14.69 12.44-3.277-2.049a1.25 1.25 0 0 0-1.913 1.06v4.098a1.25 1.25 0 0 0 1.912 1.06l3.279-2.049a1.25 1.25 0 0 0 0-2.12m-.53 1.272a.25.25 0 0 0 0-.424l-3.277-2.049a.25.25 0 0 0-.383.212v4.098a.25.25 0 0 0 .383.212z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4zM16 5H8v2h8zm1 0v2h2V5.5a.5.5 0 0 0-.5-.5zM5.5 5H7v2H5V5.5a.5.5 0 0 1 .5-.5M19 8H5v10.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5z", "clip-rule": "evenodd" })
    ]
  }
);
var preview_prototype_default = PreviewPrototype;
var Progress = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12", "clip-rule": "evenodd" })
    ]
  }
);
var progress_default = Progress;
var Props = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.207 10a.5.5 0 0 0 .353-.146l3.263-3.263a.25.25 0 0 1 .354 0l5.232 5.232a.25.25 0 0 1 0 .354l-5.232 5.232a.25.25 0 0 1-.354 0l-3.262-3.263a.5.5 0 0 0-.707.708l3.262 3.262a1.25 1.25 0 0 0 1.768 0l5.232-5.232a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0L7.853 9.146a.5.5 0 0 0 .354.854" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 12a2 2 0 0 1-3.937.5H6a.5.5 0 0 1 0-1h4.063A2 2 0 0 1 14 12m-3 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0", "clip-rule": "evenodd" })
    ]
  }
);
var props_default = Props;
var Prototyping = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.418 18.628a8 8 0 1 1 5.21-5.21l1.723.646a1 1 0 0 1-.108 1.906l-3.418.855-.855 3.418a1 1 0 0 1-1.906.108zm-.352-.938a7 7 0 1 1 4.624-4.624l-1.878-.704A5.005 5.005 0 0 0 11 6a5 5 0 1 0 1.362 9.812zm-1.057-2.818a4 4 0 1 1 2.863-2.863l-1.894-.71q.021-.146.022-.299a2 2 0 1 0-1.701 1.978zM12 11a1 1 0 0 0-1 1 1 1 0 1 1 1-1m4 5-1 4-3-8 8 3z", "clip-rule": "evenodd" })
    ]
  }
);
var prototyping_default = Prototyping;
var Public = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0m-6.535 5.738c-.233.23-.389.262-.465.262s-.232-.032-.465-.262c-.238-.234-.498-.623-.737-1.182-.434-1.013-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.044-.79 4.056-.24.56-.5.948-.737 1.182m1.527-6.238h-3.984c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182.233-.23.389-.262.465-.262s.232.032.465.262c.238.234.498.623.737 1.182.434 1.012.738 2.433.79 4.056m1 1c-.065 2.176-.558 4.078-1.282 5.253a6.005 6.005 0 0 0 4.27-5.253zm2.988-1a6.005 6.005 0 0 0-4.27-5.253c.724 1.175 1.217 3.077 1.282 5.253zm-8.972 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 0 0 6.02 11.5zm-2.987 1a6.005 6.005 0 0 0 4.27 5.253c-.725-1.175-1.218-3.077-1.283-5.253z", "clip-rule": "evenodd" })
    ]
  }
);
var public_default = Public;
var Published = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11 15.444c-.265-.791-.449-1.805-.49-2.944h1.636a4.5 4.5 0 0 1 1.29-1H10.51c.05-1.349.298-2.523.646-3.358.196-.47.404-.786.584-.969a.8.8 0 0 1 .198-.154C11.977 7 11.995 7 12 7s.024 0 .063.02c.043.02.11.065.198.153.18.183.388.498.584.969.345.83.593 1.994.645 3.33q.465-.232.983-.354c-.097-1.578-.45-2.956-.953-3.883a5.01 5.01 0 0 1 3.422 4.001c.376.127.73.302 1.053.518a6 6 0 1 0-6.24 6.241A4.5 4.5 0 0 1 11 15.444m-.52-8.209c-.544 1.002-.912 2.528-.971 4.265H7.025c.2-2.01 1.59-3.67 3.455-4.265m0 9.53A5 5 0 0 1 7.025 12.5h2.484c.06 1.736.427 3.263.971 4.265", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.947 14.724a.5.5 0 1 0-.894-.448l-.69 1.38-.51-.51a.5.5 0 0 0-.707.708l1 1a.5.5 0 0 0 .801-.13z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15.5 19a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5", "clip-rule": "evenodd" })
    ]
  }
);
var published_default = Published;
var PushTo = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m6.591 11.823 5.232-5.232a.25.25 0 0 1 .354 0l5.232 5.232a.25.25 0 0 1 0 .354l-2.763 2.762a.5.5 0 0 0 .707.707l2.763-2.762a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0l-5.232 5.232a1.25 1.25 0 0 0 0 1.768l2.762 2.762a.5.5 0 1 0 .708-.707L6.59 12.177a.25.25 0 0 1 0-.354" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.496 13.938q.004.03.004.062v4a.5.5 0 0 1-1 0v-4q0-.032.004-.062a2 2 0 1 1 .992 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0", "clip-rule": "evenodd" })
    ]
  }
);
var push_to_default = PushTo;
var Qwand = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M20 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M17.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.5 16a.5.5 0 0 1 .5.5V18h1.5a.5.5 0 0 1 0 1H18v1.5a.5.5 0 0 1-1 0V19h-1.5a.5.5 0 0 1 0-1H17v-1.5a.5.5 0 0 1 .5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.83 5.26 7.713 9.17 3.787 10.3c-1.702.491-1.695 2.906.01 3.386l3.917 1.103 1.116 3.906c.486 1.702 2.898 1.702 3.384 0l1.117-3.908 3.908-1.117c1.702-.486 1.702-2.898 0-3.384l-3.908-1.117-1.117-3.908c-.486-1.702-2.898-1.702-3.384 0m-4.761 7.464c-.737-.208-.74-1.25-.005-1.462l4.458-1.284 1.27-4.443c.21-.735 1.25-.735 1.46 0l1.27 4.443 4.442 1.269c.735.21.735 1.252 0 1.462l-4.442 1.269-1.27 4.442c-.21.735-1.25.735-1.46 0l-1.27-4.442z", "clip-rule": "evenodd" })
    ]
  }
);
var qwand_default = Qwand;
var Recent = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 8.5a.5.5 0 0 0-1 0V12a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L12.5 11.793z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m6-7a6 6 0 1 1-12 0 6 6 0 0 1 12 0", "clip-rule": "evenodd" })
    ]
  }
);
var recent_default = Recent;
var ReleaseNotes = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.854 8.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708 0m0 5.708a.5.5 0 0 0-.708-.708L11.5 14.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.5 5A1.5 1.5 0 0 0 7 6.5v11A1.5 1.5 0 0 0 8.5 19h7a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 5zm7 1h-7a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var release_notes_default = ReleaseNotes;
var RemoveBackground = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.015 4.44 16.7 5.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L18.3 7.3l1.26-.315c.505-.126.505-.844 0-.97L18.3 5.7l-.315-1.26c-.126-.505-.844-.505-.97 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.354 11.146a.5.5 0 0 0-.708 0L7 13.793V12.5a.5.5 0 0 0-1 0v4A1.5 1.5 0 0 0 7.5 18h9a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5h-.293zM7 16.5v-1.293l3-3L14.793 17H7.5a.5.5 0 0 1-.5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.5 7a.5.5 0 0 0-.5.5.5.5 0 0 1-1 0A1.5 1.5 0 0 1 7.5 6a.5.5 0 0 1 0 1M9 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M6.5 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m11 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m0 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-4.146-4.354a.5.5 0 0 0-.708.708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708L14.707 10l.647-.646a.5.5 0 0 0-.708-.708L14 9.293z" })
    ]
  }
);
var remove_background_default = RemoveBackground;
var Rename = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.5 5a.5.5 0 0 0 0 1H13v12h-1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H14V6h1.5a.5.5 0 0 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.5 9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 1 0 1h-5A1.5 1.5 0 0 1 5 14.5v-5A1.5 1.5 0 0 1 6.5 8h5a.5.5 0 0 1 0 1zm11 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 17.5 8h-2a.5.5 0 0 0 0 1z" })
    ]
  }
);
var rename_default = Rename;
var ReplaceContent = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm8 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm-8 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm11.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-4.8-.3.315-1.26c.126-.505.844-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.315 1.26c-.126.505-.844.505-.97 0L11.7 14.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM6 16.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m4 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0" })
    ]
  }
);
var replace_content_default = ReplaceContent;
var ReplaceText = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M3.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V6h3v7h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H8V6h3v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13 10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm0 1h7v1h-3v6h-1v-6h-3z", "clip-rule": "evenodd" })
    ]
  }
);
var replace_text_default = ReplaceText;
var Reset = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M3.103 10.19a1.5 1.5 0 0 0 0 2.121l4.043 4.044.02.018 2.285 2.285a4.42 4.42 0 0 0 7.196-1.41C17.88 14.288 15.715 11 12.5 11h-2.293l2.147-2.146a.5.5 0 0 0-.708-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .708-.707L10.207 12H12.5c2.494 0 4.186 2.554 3.224 4.862q-.162.387-.412.722a3.42 3.42 0 0 1-5.154.366l-4.304-4.304-.02-.018-2.024-2.025a.5.5 0 0 1 0-.707l7.586-7.586a.5.5 0 0 1 .707 0l7.586 7.586a.5.5 0 0 1 0 .707l-.851.852a.5.5 0 1 0 .707.707l.851-.852a1.5 1.5 0 0 0 0-2.121L12.81 2.604a1.5 1.5 0 0 0-2.121 0z" })
    ]
  }
);
var reset_default = Reset;
var ResizeAlt = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.854 6.146a.5.5 0 1 0-.708.708L8.293 9H6.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.793zM9 15.707l-2.146 2.147a.5.5 0 0 1-.708-.708L8.293 15H6.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0zm8.854-9.561a.5.5 0 0 0-.708 0L15 8.293V6.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-1.793l2.147-2.146a.5.5 0 0 0 0-.708M15 15.707l2.146 2.147a.5.5 0 0 0 .708-.708L15.707 15H17.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0z" })
    ]
  }
);
var resize_alt_default = ResizeAlt;
var Resize = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.146 8.146a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707-.708L16.293 12H7.707l2.146 2.147a.5.5 0 1 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .707.707L7.707 11h8.586l-2.147-2.146a.5.5 0 0 1 0-.708" })
    ]
  }
);
var resize_default = Resize;
var Resolve = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.432 9.252a.5.5 0 1 0-.864-.504l-3.14 5.384-2.044-2.452a.5.5 0 0 0-.768.64l2.5 3a.5.5 0 0 0 .816-.068z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19.9 12a7.9 7.9 0 1 1-15.8 0 7.9 7.9 0 0 1 15.8 0m-1 0a6.9 6.9 0 1 1-13.8 0 6.9 6.9 0 0 1 13.8 0", "clip-rule": "evenodd" })
    ]
  }
);
var resolve_default = Resolve;
var Responsive = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.146 11.354a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l.647-.646zm-6.292-.708a.5.5 0 0 1 0 .708L8.207 12l.647.646a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708l1-1a.5.5 0 0 1 .708 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17.5 6A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5v-9A1.5 1.5 0 0 1 6.5 6zM14 7h3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H14zm-1 0h-2v10h2zm-3 0H6.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H10z", "clip-rule": "evenodd" })
    ]
  }
);
var responsive_default = Responsive;
var Restart = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.854 5.854a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L6.707 9H14a4 4 0 1 1-3.748 5.4.56.56 0 0 0-.516-.377c-.326 0-.57.3-.464.608A5.002 5.002 0 0 0 19 13a5 5 0 0 0-4.998-5H6.707z" })
    ]
  }
);
var restart_default = Restart;
var Return = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.354 5.646a.5.5 0 0 1 0 .708L7.707 9H11.5c3.576 0 6.5 2.924 6.5 6.5v2a.5.5 0 1 1-1 0v-2c0-3.024-2.476-5.5-5.5-5.5H7.707l2.647 2.646a.5.5 0 0 1-.708.707l-3.5-3.5a.5.5 0 0 1 0-.707l3.5-3.5a.5.5 0 0 1 .708 0" })
    ]
  }
);
var return_default = Return;
var Rewrite = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m6.953 5.91-.315 1.26-1.26.314c-.504.126-.504.844 0 .97l1.26.315.315 1.26c.127.505.844.505.97 0l.315-1.26 1.26-.315c.505-.126.505-.844 0-.97l-1.26-.315-.314-1.26c-.127-.504-.844-.504-.97 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.793 6a1 1 0 0 1 1.414 0L18 7.791a1 1 0 0 1 0 1.415l-8.5 8.5a1 1 0 0 1-.707.293H7a1 1 0 0 1-1-1v-1.793a1 1 0 0 1 .293-.708zm-.586 2L16 9.791 17.293 8.5 15.5 6.707zm1.086 2.5L13.5 8.707l-6.5 6.5V17h1.793z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m15.839 15.87.28-1.12c.083-.333.556-.333.64 0l.28 1.12 1.119.28c.333.082.333.556 0 .64l-1.12.28-.28 1.119c-.083.333-.556.333-.64 0l-.28-1.12-1.119-.28c-.333-.083-.333-.557 0-.64z" })
    ]
  }
);
var rewrite_default = Rewrite;
var Rotate180 = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8 11a4 4 0 1 1 8 0v1.5a.5.5 0 0 0 1 0V11a5 5 0 1 0-10 0v.293l-1.146-1.147a.5.5 0 0 0-.708.707l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.707L8 11.293z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.147 17.854 12 12.707l-5.146 5.147a.5.5 0 1 1-.708-.708l5.324-5.323a.75.75 0 0 1 1.06 0l5.324 5.323a.5.5 0 0 1-.707.707" })
    ]
  }
);
var rotate_180_default = Rotate180;
var RotateCcw = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13.768 6.475a2.5 2.5 0 0 0-3.536 0L8.707 8H10a.5.5 0 1 1 0 1H7.5a.5.5 0 0 1-.5-.5V6a.5.5 0 1 1 1 0v1.293l1.525-1.525a3.5 3.5 0 0 1 4.95 0l2.378 2.378a.5.5 0 1 1-.707.708z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.94 9.646a1.5 1.5 0 0 1 2.12 0l3.293 3.293a1.5 1.5 0 0 1 0 2.122l-3.293 3.293a1.5 1.5 0 0 1-2.12 0L7.645 15.06a1.5 1.5 0 0 1 0-2.122zm1.413.708a.5.5 0 0 0-.707 0l-3.293 3.293a.5.5 0 0 0 0 .707l3.293 3.293a.5.5 0 0 0 .707 0l3.293-3.293a.5.5 0 0 0 0-.707z", "clip-rule": "evenodd" })
    ]
  }
);
var rotate_ccw_default = RotateCcw;
var Rotate = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M10.233 6.475a2.5 2.5 0 0 1 3.535 0L15.293 8H14a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V6a.5.5 0 1 0-1 0v1.293l-1.525-1.525a3.5 3.5 0 0 0-4.95 0L7.147 8.146a.5.5 0 0 0 .707.708z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M13.06 9.646a1.5 1.5 0 0 0-2.12 0L7.647 12.94a1.5 1.5 0 0 0 0 2.122l3.293 3.293a1.5 1.5 0 0 0 2.12 0l3.294-3.293a1.5 1.5 0 0 0 0-2.122zm-1.413.708a.5.5 0 0 1 .707 0l3.293 3.293a.5.5 0 0 1 0 .707l-3.293 3.293a.5.5 0 0 1-.707 0l-3.293-3.293a.5.5 0 0 1 0-.707z", "clip-rule": "evenodd" })
    ]
  }
);
var rotate_default = Rotate;
var Rotation = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 8.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1H13a4 4 0 0 0-4-4zM9 12v3h3a3 3 0 0 0-3-3", "clip-rule": "evenodd" })
    ]
  }
);
var rotation_default = Rotation;
var Saturation = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M13.977 13.544A4.5 4.5 0 0 0 12 10.258a4.5 4.5 0 0 0-1.977 3.286A4.5 4.5 0 0 0 12 14c.71 0 1.38-.164 1.977-.457" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 18.9a5.5 5.5 0 0 0 5.499-9.512 5.5 5.5 0 0 0-10.998 0A5.5 5.5 0 0 0 12 18.9M7.546 8.857A5.5 5.5 0 0 1 9.5 8.5c.9 0 1.75.216 2.5.6.75-.384 1.6-.6 2.5-.6.688 0 1.347.126 1.954.357a4.501 4.501 0 0 0-8.908 0m3.455.9a5.5 5.5 0 0 0-1.9 3.185 4.5 4.5 0 0 1-1.578-2.986A4.5 4.5 0 0 1 9.5 9.5c.526 0 1.031.09 1.5.256m.999.5a4.5 4.5 0 0 1 1.977 3.287A4.5 4.5 0 0 1 12 14a4.5 4.5 0 0 1-1.977-.457A4.5 4.5 0 0 1 12 10.259m2.898 2.685A5.5 5.5 0 0 0 13 9.756c.47-.166.975-.256 1.501-.256.71 0 1.38.164 1.977.456a4.5 4.5 0 0 1-1.579 2.986m-.944 1.7A5.5 5.5 0 0 1 12 15a5.5 5.5 0 0 1-1.954-.357 4.5 4.5 0 0 0 1.954 3.1 4.5 4.5 0 0 0 1.954-3.1M13 18.245a5.49 5.49 0 0 0 2-4.133 5.5 5.5 0 0 0 2.4-3.553 4.5 4.5 0 0 1-4.4 7.686m-1.998 0a4.5 4.5 0 0 1-4.4-7.686 5.5 5.5 0 0 0 2.4 3.553 5.49 5.49 0 0 0 2 4.133", "clip-rule": "evenodd" })
    ]
  }
);
var saturation_default = Saturation;
var Save = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15.293 20.793c.63.63 1.707.184 1.707-.707V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v15.086c0 .89 1.077 1.337 1.707.707L12 17.5zM12 16.086l4 4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v15.086z", "clip-rule": "evenodd" })
    ]
  }
);
var save_default = Save;
var ScreenShare = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v2a.5.5 0 0 0 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V9.707l-6.146 6.147a.5.5 0 0 1-.708-.708L14.293 9H11.5a.5.5 0 0 1-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M4 11.5A1.5 1.5 0 0 1 5.5 10h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 18.5z" })
    ]
  }
);
var screen_share_default = ScreenShare;
var Scroll = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14 7a2 2 0 0 1-1.504 1.938q.004.03.004.062v1h1a.5.5 0 0 1 0 1h-1v5.975a5 5 0 0 0 3.955-2.703.5.5 0 1 1 .89.456A6 6 0 0 1 12.5 17.98v.52a.5.5 0 0 1-1 0v-.52a6 6 0 0 1-4.845-3.252.5.5 0 0 1 .89-.456 5 5 0 0 0 3.955 2.703V11h-1a.5.5 0 0 1 0-1h1V9q0-.032.004-.062A2 2 0 1 1 14 7m-2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2", "clip-rule": "evenodd" })
    ]
  }
);
var scroll_default = Scroll;
var Search = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.73 15.436a6.5 6.5 0 1 1 .707-.707l4.417 4.418a.5.5 0 0 1-.708.707zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0", "clip-rule": "evenodd" })
    ]
  }
);
var search_default = Search;
var Section = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6q0-.104.01-.204A2 2 0 0 1 6 4zm-5 1h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8h7a1 1 0 0 0 1-1zm-1 0H6a1 1 0 0 0-1 1v3h7z", "clip-rule": "evenodd" })
    ]
  }
);
var section_default = Section;
var Select = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12", "clip-rule": "evenodd" })
    ]
  }
);
var select_default = Select;
var SendBackward = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17 16.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5m-1.5.5a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1zm-3.646-3.146a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v3.293l1.146-1.147a.5.5 0 0 1 .708.708zM16 7.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5", "clip-rule": "evenodd" })
    ]
  }
);
var send_backward_default = SendBackward;
var SendForward = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 7.5A1.5 1.5 0 0 1 7.5 6h8a1.5 1.5 0 0 1 0 3h-8A1.5 1.5 0 0 1 6 7.5M7.5 7a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm3.646 3.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 11.707V15h3.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3H11v-3.293l-1.146 1.147a.5.5 0 0 1-.708-.708zM7 16.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var send_forward_default = SendForward;
var SendToBack = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.854 17.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 16.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v7.293l1.146-1.147a.5.5 0 0 1 .708.708zM15.5 8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16 11.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 0-3h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 1 .5.5M7.5 13h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0 0 3" })
    ]
  }
);
var send_to_back_default = SendToBack;
var SendToFront = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 7.707V15h3.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3H11V7.707L9.854 8.854a.5.5 0 1 1-.708-.708zM7.5 16a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0 0 3h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1-.5-.5m8.5-1.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 0-3" })
    ]
  }
);
var send_to_front_default = SendToFront;
var Send = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.646 5.646a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-3.646 3.647a.5.5 0 0 1-.708-.708z" })
    ]
  }
);
var send_default = Send;
var Settings = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17.288 6.044a2 2 0 0 1-1.788-.106 2 2 0 0 1-.986-1.495c-.07-.576-.495-1.253-1.297-1.361a9 9 0 0 0-2.434 0c-.802.108-1.228.785-1.297 1.36A2 2 0 0 1 8.5 5.939a2 2 0 0 1-1.787.106c-.533-.227-1.33-.197-1.826.44a9 9 0 0 0-1.22 2.111c-.307.749.067 1.456.53 1.803.49.367.803.948.803 1.602s-.313 1.235-.802 1.602c-.464.347-.838 1.054-.531 1.803.311.761.724 1.47 1.22 2.11.496.638 1.293.668 1.826.44a2 2 0 0 1 1.787.107c.567.327.913.889.986 1.495.07.576.495 1.253 1.297 1.361a9 9 0 0 0 2.434 0c.802-.108 1.228-.785 1.297-1.36.073-.607.42-1.169.986-1.496a2 2 0 0 1 1.788-.106c.532.227 1.33.197 1.825-.44.496-.64.909-1.35 1.22-2.111.307-.749-.067-1.456-.53-1.803A2 2 0 0 1 19 12c0-.654.313-1.235.802-1.602.464-.347.838-1.054.532-1.803a9 9 0 0 0-1.221-2.11c-.495-.638-1.293-.668-1.825-.44M13.52 4.563c.11.905.628 1.75 1.479 2.24a2.99 2.99 0 0 0 2.68.161c.224-.096.493-.058.643.134.442.57.808 1.2 1.085 1.876.092.226-.01.478-.206.624A3 3 0 0 0 18 12c0 .983.472 1.855 1.203 2.402.195.146.297.398.205.624a8 8 0 0 1-1.085 1.876c-.15.192-.419.23-.643.134a3 3 0 0 0-2.68.16 3 3 0 0 0-1.479 2.241c-.03.243-.196.458-.438.49a8 8 0 0 1-2.166 0c-.242-.032-.409-.247-.438-.49A3 3 0 0 0 9 17.197a3 3 0 0 0-2.68-.161c-.224.096-.493.058-.643-.134a8 8 0 0 1-1.085-1.876c-.092-.226.01-.478.206-.624A3 3 0 0 0 6 12c0-.983-.472-1.855-1.202-2.402-.196-.146-.298-.398-.206-.624a8 8 0 0 1 1.085-1.876c.15-.192.419-.23.643-.134.839.358 1.83.33 2.68-.16a3 3 0 0 0 1.479-2.241c.03-.243.196-.458.438-.49a8 8 0 0 1 2.166 0c.242.032.409.247.438.49", "clip-rule": "evenodd" })
    ]
  }
);
var settings_default = Settings;
var Shadows = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M12 18.93a7.002 7.002 0 0 1 0-13.86z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.002 19.938a8.001 8.001 0 0 1 0-15.876c.548-.069.998.386.998.938v1.083a6.002 6.002 0 0 1 0 11.834V19c0 .552-.45 1.007-.998.938M6 12a7 7 0 0 0 6 6.93V5.07A7 7 0 0 0 6 12m7 4.9a5.002 5.002 0 0 0 0-9.8z", "clip-rule": "evenodd" })
    ]
  }
);
var shadows_default = Shadows;
var ShapeText = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V10h1.5v4H11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-4H14v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var shape_text_default = ShapeText;
var Shapes = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M3 9c0 1.521.566 2.91 1.5 3.968a6 6 0 0 0 4 2.011.47.47 0 0 0 .5-.479.536.536 0 0 0-.49-.524H8.5a5 5 0 0 1-3.218-1.632A5 5 0 1 1 13.975 8.5l.001.008.013.073A.536.536 0 0 0 14.5 9a.47.47 0 0 0 .48-.5 6 6 0 0 0-2.012-4A6 6 0 0 0 3 9" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2zm2-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var shapes_default = Shapes;
var Shorten = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5.553 15.224a.5.5 0 0 0 .67.223l4-2a.5.5 0 1 0-.447-.894l-4 2a.5.5 0 0 0-.223.67" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6.224 8.553 12 11.441l1.454-.727-.25-1.751a2.45 2.45 0 0 1 1.33-2.537l.243-.122a2.177 2.177 0 1 1 1.947 3.893l-2.49 1.245-.02.01-1.096.548 1.095.548.021.01 2.49 1.245a2.177 2.177 0 0 1-1.948 3.895l-.243-.122a2.45 2.45 0 0 1-1.33-2.537l.251-1.753-7.678-3.838a.5.5 0 0 1 .448-.895m8.173 1.69-.203-1.422a1.45 1.45 0 0 1 .786-1.5l.244-.123a1.177 1.177 0 0 1 1.053 2.105zm0 3.515-.203 1.422a1.45 1.45 0 0 0 .786 1.501l.244.122a1.177 1.177 0 0 0 1.052-2.106z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.68 15.38 9.4 16.5l-1.12.28c-.333.082-.333.556 0 .64l1.12.28.28 1.119c.083.333.557.333.64 0l.28-1.12 1.12-.28c.333-.083.333-.557 0-.64l-1.12-.28-.28-1.12c-.083-.332-.557-.332-.64 0" })
    ]
  }
);
var shorten_default = Shorten;
var Shuffle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m17.291 16-1.145 1.146a.5.5 0 0 0 .708.707l2-2a.5.5 0 0 0 0-.707l-2-2a.5.5 0 0 0-.708.707L17.292 15h-1.348a3.5 3.5 0 0 1-2.751-1.337l-.036-.045-.632.81A4.5 4.5 0 0 0 15.945 16zM9.975 9.574a4.5 4.5 0 0 0-3.42-1.575H5.5A.5.5 0 0 0 5.5 9h1.056a3.5 3.5 0 0 1 2.752 1.338l.035.045zm7.317-1.575-1.146-1.146a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 1 1-.708-.707L17.292 9h-1.348a3.5 3.5 0 0 0-2.752 1.337l-3.097 3.943A4.5 4.5 0 0 1 6.555 16H5.5a.5.5 0 0 1 0-1.001h1.056a3.5 3.5 0 0 0 2.752-1.337l3.097-3.943a4.5 4.5 0 0 1 3.54-1.72z" })
    ]
  }
);
var shuffle_default = Shuffle;
var Size = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 5a.5.5 0 0 1 .5.5V6h7v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V7h-7v.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M8 9.5a.5.5 0 0 1-.5.5H7v7h.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1H6v-7h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m8 0a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5.5.5 0 0 0 1 0A1.5 1.5 0 0 0 16.5 9a.5.5 0 0 0-.5.5m-1 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5m0 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m1 0a.5.5 0 0 0 .5.5 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 0-1 0 .5.5 0 0 1-.5.5.5.5 0 0 0-.5.5m2-3a.5.5 0 0 1-1 0v-2a.5.5 0 1 1 1 0zm-8-4a.5.5 0 0 1-1 0A1.5 1.5 0 0 1 10.5 9a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5m-1 6a.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5.5.5 0 1 1 0 1A1.5 1.5 0 0 1 9 16.5m.5-1.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 0 1-.5.5" })
    ]
  }
);
var size_default = Size;
var Slice = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m11.994 16.71 8.138-8.353a2.28 2.28 0 0 0-3.244-3.202l-5.739 5.739-8.497 8.247A.5.5 0 0 0 3 20h5.5a3.5 3.5 0 0 0 3.494-3.29m7.41-10.848c-.499-.5-1.309-.5-1.809 0L12 11.457v3.813l7.416-7.611a1.28 1.28 0 0 0-.011-1.797M11 12.432 4.233 19H8.5a2.5 2.5 0 0 0 2.5-2.5z", "clip-rule": "evenodd" })
    ]
  }
);
var slice_default = Slice;
var SlideGrid = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M3 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m8 1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m0 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm4 1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var slide_grid_default = SlideGrid;
var Slide = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.53 8.054a1 1 0 0 0-1.53.848v3.196a1 1 0 0 0 1.53.848l2.557-1.598a1 1 0 0 0 0-1.696zm-.53.848 2.557 1.598L11 12.098z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1.868l-1.301 2.254a.5.5 0 1 0 .866.5L8.023 17h7.954l1.59 2.754a.5.5 0 0 0 .866-.5L17.132 17H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm14 1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var slide_default = Slide;
var Slides = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1.982l.945 2.31a.5.5 0 0 1-.926.38l-1.1-2.69H8.063l-1.1 2.69a.5.5 0 1 1-.926-.379L6.982 17H5a2 2 0 0 1-2-2zm2-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var slides_default = Slides;
var SmCaps = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.847 15.495a.523.523 0 1 1-.984-.352l2.376-6.534a.83.83 0 0 1 1.56 0l2.374 6.534a.523.523 0 1 1-.985.351L9.06 9.414a.043.043 0 0 0-.08 0zm.162-2.238c0-.252.205-.456.456-.456h3.101a.456.456 0 1 1 0 .912h-3.1a.456.456 0 0 1-.457-.456m10.426-1.277c-.234 0-.43-.158-.551-.359l-.036-.056a1.24 1.24 0 0 0-.687-.507 1.6 1.6 0 0 0-.479-.07q-.463 0-.825.233a1.56 1.56 0 0 0-.571.684q-.205.45-.205 1.1t.205 1.103q.208.451.573.686.366.233.848.233.438 0 .759-.169.324-.171.498-.485.174-.304.178-.718c0-.011.01-.02.02-.018.022.004.02.036-.002.036h-1.227a.12.12 0 0 1-.12-.12v-.272c0-.217.175-.392.391-.392h1.226c.372 0 .673.301.673.673q0 .729-.31 1.258a2.1 2.1 0 0 1-.85.817q-.54.285-1.242.285-.778 0-1.368-.352a2.4 2.4 0 0 1-.92-1.008q-.33-.654-.33-1.551 0-.684.195-1.225.194-.54.543-.916a2.3 2.3 0 0 1 .822-.576q.471-.2 1.028-.2.468 0 .872.139.405.136.72.387a2.1 2.1 0 0 1 .615.768c.139.296-.116.592-.443.592" })
    ]
  }
);
var sm_caps_default = SmCaps;
var Sort = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5zM5.5 5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.015 13.44 15.5 15.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L17.5 15.5l-.515-2.06c-.126-.505-.844-.505-.97 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5.5 13A1.5 1.5 0 0 0 4 14.5v4A1.5 1.5 0 0 0 5.5 20h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 9.5 13zm4 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M13 5.5A1.5 1.5 0 0 1 14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5zm1.5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var sort_default = Sort;
var SoundOffToggle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14 7.879V6a1 1 0 0 0-1.707-.707L9.586 8H6.5A1.5 1.5 0 0 0 5 9.5v5a1.5 1.5 0 0 0 .974 1.405L6.879 15H6.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H10l3-3v2.879zm0 4.242-1 1V18l-2.44-2.44-.706.708 2.439 2.44A1 1 0 0 0 14 18zm3.854-5.975a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.707l11-11a.5.5 0 0 1 .708 0m-2.354 4.53v-.056l.681-.68A3 3 0 0 1 15.5 14.6v-1.277c.311-.352.5-.816.5-1.323s-.189-.97-.5-1.323" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18 12a4 4 0 0 0-1.112-2.767l.708-.707a5.002 5.002 0 0 1-2.096 8.246V15.71A4 4 0 0 0 18 12" })
    ]
  }
);
var sound_off_toggle_default = SoundOffToggle;
var SoundOff = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15 6v.879l-1 1v-1.88L11 9H7.5a.5.5 0 0 0-.5.5v5c0 .107.034.206.091.288l-.71.71A1.5 1.5 0 0 1 6 14.5v-5A1.5 1.5 0 0 1 7.5 8h3.085l2.708-2.707A1 1 0 0 1 15 6m-1 6.121 1-1V18a1 1 0 0 1-1.707.707L10.586 16h-.465l.94-.94L14 18zm3.854-5.267a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 1 0 .708.707z" })
    ]
  }
);
var sound_off_default = SoundOff;
var SoundOn = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M12.293 5.293 9.586 8H6.5A1.5 1.5 0 0 0 5 9.5v5A1.5 1.5 0 0 0 6.5 16h3.086l2.707 2.707A1 1 0 0 0 14 18V6a1 1 0 0 0-1.707-.707M10 15l3 3V6l-3 3H6.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M19 12a5 5 0 0 1-3.5 4.771V15.71a4.001 4.001 0 0 0 0-7.418V7.229A5 5 0 0 1 19 12" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17 12a3 3 0 0 1-1.5 2.599v-1.276c.311-.353.5-.816.5-1.323s-.189-.97-.5-1.323V9.401a3 3 0 0 1 1.5 2.6" })
    ]
  }
);
var sound_on_default = SoundOn;
var Spotlight = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.724 5.053a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223m3.131 1.093a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0m-6.5 6.5a.5.5 0 0 1 0 .707l-.5.5a.5.5 0 0 1-.708-.707l.5-.5a.5.5 0 0 1 .708 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M11.646 6.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.196.121l-2.888.963-2.71 2.71a1.5 1.5 0 0 1-2.12 0L5.853 16.56a1.5 1.5 0 0 1 0-2.122l2.709-2.71.963-2.887a.5.5 0 0 1 .12-.196zm-1.428 3.28 3.856 3.855-2.232.745a.5.5 0 0 0-.196.12L8.854 17.44a.5.5 0 0 1-.708 0l-1.585-1.585a.5.5 0 0 1 0-.708l2.793-2.793a.5.5 0 0 0 .12-.195zM15 13.293 16.293 12 12 7.707 10.707 9z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M18.947 9.276a.5.5 0 0 1-.223.671l-1 .5a.5.5 0 1 1-.448-.894l1-.5a.5.5 0 0 1 .671.223" })
    ]
  }
);
var spotlight_default = Spotlight;
var Spread = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-2.464-4.536A1 1 0 1 0 16.95 7.05a1 1 0 0 0-1.414 1.414m0 8.486a1 1 0 1 1 1.414-1.415 1 1 0 0 1-1.414 1.414M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.05 3.95a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.413m0-8.484A1 1 0 1 1 8.466 7.05 1 1 0 0 1 7.05 8.465" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0", "clip-rule": "evenodd" })
    ]
  }
);
var spread_default = Spread;
var Square = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var square_default = Square;
var Stack = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 14a1 1 0 0 1 .486-.858L8.389 12l-1.903-1.142a1 1 0 0 1 0-1.715L10.97 6.45a2 2 0 0 1 2.058 0l4.486 2.692a1 1 0 0 1 0 1.714L15.61 12l1.904 1.142a1 1 0 0 1 0 1.715l-4.486 2.692a2 2 0 0 1-2.058 0l-4.485-2.692A1 1 0 0 1 6 14m11-4-4.485-2.691a1 1 0 0 0-1.03 0L7 10l4.486 2.691a1 1 0 0 0 1.028 0zm-2.361 2.583L17 14l-4.485 2.691a1 1 0 0 1-1.03 0L7 14l2.361-1.417 1.61.966a2 2 0 0 0 2.058 0z", "clip-rule": "evenodd" })
    ]
  }
);
var stack_default = Stack;
var Star = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 9H3.16c-.976 0-1.373 1.256-.574 1.818l4.83 3.397-1.928 5.81c-.307.924.755 1.697 1.54 1.121L12 17.5l4.972 3.646c.785.576 1.847-.197 1.54-1.122l-1.928-5.81 4.83-3.396c.8-.562.402-1.818-.575-1.818H15l-2.051-6.154c-.304-.912-1.594-.912-1.898 0zm5.28 1L12 3.162 9.72 10H3.16l5.44 3.824-2.163 6.516L12 16.26l5.563 4.08-2.163-6.516L20.84 10z", "clip-rule": "evenodd" })
    ]
  }
);
var star_default = Star;
var Sticky = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M18.5 4h-13A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h8.072a2 2 0 0 0 1.414-.586l4.428-4.428A2 2 0 0 0 20 13.572V5.5A1.5 1.5 0 0 0 18.5 4m-13 1h13a.5.5 0 0 1 .5.5V13h-5.5a.5.5 0 0 0-.5.5V19H5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5M14 18.904a1 1 0 0 0 .279-.197l4.428-4.428a1 1 0 0 0 .197-.279H14z", "clip-rule": "evenodd" })
    ]
  }
);
var sticky_default = Sticky;
var Stop = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1", "clip-rule": "evenodd" })
    ]
  }
);
var stop_default = Stop;
var StrikeThrough = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15.02 8.343a2.33 2.33 0 0 0-.876-1.224q-.863-.646-2.18-.646-.92 0-1.63.313-.702.309-1.099.85a2.04 2.04 0 0 0-.396 1.237q0 .492.217.874.217.375.588.653.378.276.844.474.473.196.972.338l1.05.288h5.99a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h3.935a4.4 4.4 0 0 1-.84-.602q-.843-.781-.843-1.982 0-1.01.563-1.779.563-.77 1.521-1.2.96-.437 2.154-.437 1.215 0 2.141.437.934.43 1.477 1.188.378.518.518 1.134c.07.31-.19.577-.507.577-.286 0-.518-.22-.6-.493m.817 5.157a.27.27 0 0 1 .239.137q.306.555.306 1.317 0 1.01-.543 1.816-.543.801-1.553 1.268-1.01.462-2.41.462-1.323 0-2.295-.419-.971-.425-1.534-1.175a3.2 3.2 0 0 1-.534-1.135c-.082-.325.188-.613.523-.613.3 0 .54.232.626.519q.129.43.414.767.449.524 1.17.8.73.27 1.63.271.997 0 1.764-.32.773-.326 1.215-.905a2.16 2.16 0 0 0 .44-1.348q0-.646-.344-1.09c-.101-.132-.016-.352.15-.352z" })
    ]
  }
);
var strike_through_default = StrikeThrough;
var Styles = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M8.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M13 15.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m1 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M8.5 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3", "clip-rule": "evenodd" })
    ]
  }
);
var styles_default = Styles;
var Subscript = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.672 13.413c0-.252.204-.457.456-.457h3.1a.456.456 0 1 1 0 .912h-3.1a.456.456 0 0 1-.456-.456", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7.51 15.65a.523.523 0 1 1-.985-.351l2.377-6.535a.83.83 0 0 1 1.56 0l2.374 6.535a.523.523 0 1 1-.985.351L9.723 9.57a.043.043 0 0 0-.081 0z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.324 17.338a.436.436 0 0 1-.287-.765l1.64-1.432q.259-.228.433-.406.176-.179.266-.346a.76.76 0 0 0 .091-.365.61.61 0 0 0-.258-.52 1 1 0 0 0-.63-.194q-.4 0-.643.209a.7.7 0 0 0-.133.152c-.127.196-.3.403-.534.403s-.432-.194-.367-.419q.11-.378.434-.641.494-.403 1.258-.403.513 0 .896.182.388.183.605.502.216.315.216.714 0 .315-.13.585-.125.27-.394.555-.27.28-.696.635l-.926.798a.023.023 0 0 0 .015.041h1.896a.357.357 0 0 1 0 .715z" })
    ]
  }
);
var subscript_default = Subscript;
var Summarize = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M6.015 3.44 5.7 4.7l-1.26.315c-.505.126-.505.844 0 .97L5.7 6.3l.315 1.26c.126.505.844.505.97 0L7.3 6.3l1.26-.315c.505-.126.505-.844 0-.97L7.3 4.7l-.315-1.26c-.126-.505-.844-.505-.97 0m0 12L5.7 16.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L7.3 18.3l1.26-.315c.505-.126.505-.844 0-.97L7.3 16.7l-.315-1.26c-.126-.505-.844-.505-.97 0M5.7 10.7l.315-1.26c.126-.505.844-.505.97 0L7.3 10.7l1.26.315c.505.126.505.844 0 .97L7.3 12.3l-.315 1.26c-.126.505-.844.505-.97 0L5.7 12.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM10.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" })
    ]
  }
);
var summarize_default = Summarize;
var Sun = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 12 5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.757 7.05a.5.5 0 1 0-.707.707l.707.707a.5.5 0 0 0 .707-.707zM19 12a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-2.05-4.243a.5.5 0 1 0-.707-.707l-.707.707a.5.5 0 0 0 .707.707zM12 17a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.242-1.464a.5.5 0 1 0-.707.707l.707.707a.5.5 0 1 0 .707-.707zM7 12a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m1.465 4.243a.5.5 0 1 0-.707-.707l-.707.707a.5.5 0 0 0 .707.707z" })
    ]
  }
);
var sun_default = Sun;
var Superscript = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.51 15.65a.523.523 0 1 1-.985-.351l2.377-6.535a.83.83 0 0 1 1.56 0l2.374 6.535a.523.523 0 1 1-.985.351L9.722 9.57a.043.043 0 0 0-.08 0zm.162-2.238c0-.251.204-.456.456-.456h3.1a.456.456 0 0 1 0 .912h-3.1a.456.456 0 0 1-.456-.456m6.652-1.302a.436.436 0 0 1-.287-.766l1.64-1.431q.259-.228.433-.407.175-.178.266-.345a.76.76 0 0 0 .091-.365.61.61 0 0 0-.258-.52q-.255-.195-.63-.195-.4 0-.643.21a.7.7 0 0 0-.133.151c-.127.197-.3.403-.534.403s-.432-.194-.367-.418q.11-.378.434-.642.494-.402 1.257-.403.513 0 .897.183.388.181.604.501.217.316.217.715 0 .315-.13.585-.125.27-.395.555-.27.281-.695.634l-.927.799a.023.023 0 0 0 .016.04h1.895a.357.357 0 1 1 0 .715z" })
    ]
  }
);
var superscript_default = Superscript;
var Swap = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.354 6.354a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L6.707 9H18.5a.5.5 0 0 0 0-1H6.707zm7.292 7a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L17.293 16H5.5a.5.5 0 0 1 0-1h11.793z" })
    ]
  }
);
var swap_default = Swap;
var Swatch = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a3 3 0 0 1 6 0v7c0 .768-.289 1.47-.764 2H16a2 2 0 1 0 0-4h-.757l-3.597 3.596q-.133.135-.28.248A3 3 0 0 0 12 15v-.171l3.89-3.89a2 2 0 0 0-2.83-2.828L12 9.171V8q0-.118-.009-.233l.363-.363a3 3 0 1 1 4.242 4.243l-.362.362a3 3 0 0 1-.234 5.99H9.032L9 18a3 3 0 0 1-3-3zm5 0v7a2 2 0 1 1-4 0V8a2 2 0 1 1 4 0", "clip-rule": "evenodd" })
    ]
  }
);
var swatch_default = Swatch;
var Tablet = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 7.5A1.5 1.5 0 0 1 8.5 6h7A1.5 1.5 0 0 1 17 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 16.5zM8.5 7h7a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5", "clip-rule": "evenodd" })
    ]
  }
);
var tablet_default = Tablet;
var Temperature = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M13 11h-2v3.208a2.5 2.5 0 1 0 2 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10 6a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0zm2-1a1 1 0 0 0-1 1v4h2V6a1 1 0 0 0-1-1m-1 6h2v3.19l.25.144A2.499 2.499 0 0 1 12 19a2.5 2.5 0 0 1-1.25-4.666l.25-.144z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.5 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM16 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" })
    ]
  }
);
var temperature_default = Temperature;
var TextCaps = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.476 10.525H18.6c-.245-1.417-1.456-2.397-3.025-2.397-1.882 0-3.256 1.417-3.256 3.74 0 2.3 1.335 3.73 3.306 3.73 1.764 0 3.025-1.156 3.025-2.992v-.828h-2.858v.906h1.796c-.024 1.172-.799 1.914-1.963 1.914-1.282 0-2.216-.97-2.216-2.738 0-1.761.94-2.73 2.173-2.73.966 0 1.621.532 1.894 1.395" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m6.412 15.5.668-1.925h2.84l.665 1.925h1.165L9.133 8.227H7.865L5.248 15.5zm.988-2.848 1.072-3.104h.057L9.6 12.652z", "clip-rule": "evenodd" })
    ]
  }
);
var text_caps_default = TextCaps;
var TextLibrary = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m11 15.727.07-.04a5.5 5.5 0 0 1 1.93-.62v1.011a4.4 4.4 0 0 0-1.445.484c-.246.137-.42.272-.529.368a2 2 0 0 0-.136.133l-.002.003a.5.5 0 0 1-.776 0l-.002-.003-.022-.024a2 2 0 0 0-.114-.11 3 3 0 0 0-.53-.367C8.955 16.29 8.163 16 7 16s-1.954.29-2.445.562c-.246.137-.42.272-.529.368a2 2 0 0 0-.136.133l-.002.003A.5.5 0 0 1 3 16.75v-9a.5.5 0 0 1 .084-.277l.416.277-.416-.277v-.001l.001-.002.002-.002.005-.007.014-.02.049-.064c.04-.052.1-.123.177-.205.155-.164.386-.377.703-.588C4.673 6.159 5.643 5.75 7 5.75s2.327.409 2.965.834a4 4 0 0 1 .535.422c.14-.13.318-.277.535-.422.638-.425 1.608-.834 2.965-.834s2.327.409 2.965.834c.317.211.548.424.703.588a3 3 0 0 1 .226.268l.014.02.005.008.002.003s.001.002-.415.279l.416-.277A.5.5 0 0 1 18 7.75V10h-1V7.924l-.059-.065a3 3 0 0 0-.53-.443c-.488-.325-1.268-.666-2.411-.666s-1.923.341-2.41.666a3 3 0 0 0-.59.508zm-7 0V7.924l.059-.065c.11-.117.285-.28.53-.443C5.078 7.091 5.858 6.75 7 6.75s1.923.341 2.41.666a3 3 0 0 1 .59.508v7.803l-.07-.04C9.296 15.336 8.338 15 7 15s-2.296.335-2.93.688z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M14.5 12a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V13h2v5h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H18v-5h2v.5a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.5-.5z" })
    ]
  }
);
var text_library_default = TextLibrary;
var Text = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M4 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V5h-6.5v14H15a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1h2.5V5H5v2.5a.5.5 0 0 1-1 0z" })
    ]
  }
);
var text_default = Text;
var ThumbDown = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9.8 14.249c.178.102.36.24.536.415.47.47.664.986.664 1.336a2 2 0 0 0 4 0q-.001-.512-.098-1a5.6 5.6 0 0 0-.297-1h2.175a2 2 0 0 0 1.909-2.597L17.635 8.03a2.5 2.5 0 0 0-2.74-1.73l-4.976.712A1.5 1.5 0 0 0 8.5 6h-1A1.5 1.5 0 0 0 6 7.5v6A1.5 1.5 0 0 0 7.5 15h1a1.5 1.5 0 0 0 1.3-.751m.2-1.02V8.01l5.036-.72a1.5 1.5 0 0 1 1.644 1.038l1.054 3.374A1 1 0 0 1 16.78 13h-3.651l.548 1.371c.206.516.323 1.064.323 1.629a1 1 0 1 1-2 0c0-.672-.344-1.43-.957-2.043A3.5 3.5 0 0 0 10 13.23m-1 .27a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z", "clip-rule": "evenodd" })
    ]
  }
);
var thumb_down_default = ThumbDown;
var ThumbUp = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9.8 9.752c.178-.103.36-.24.536-.416.47-.47.664-.986.664-1.336a2 2 0 1 1 4 0q-.001.513-.098 1a5.6 5.6 0 0 1-.297 1h2.175a2 2 0 0 1 1.909 2.597l-1.055 3.373a2.5 2.5 0 0 1-2.74 1.73l-4.975-.712A1.5 1.5 0 0 1 8.5 18h-1A1.5 1.5 0 0 1 6 16.5v-6A1.5 1.5 0 0 1 7.5 9h1a1.5 1.5 0 0 1 1.3.752m.2 1.019v5.219l5.036.72a1.5 1.5 0 0 0 1.644-1.038l1.054-3.374A1 1 0 0 0 16.78 11h-3.652l.548-1.371A4.4 4.4 0 0 0 14 8a1 1 0 1 0-2 0c0 .672-.345 1.43-.957 2.043A3.5 3.5 0 0 1 10 10.77m-1-.27a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5z", "clip-rule": "evenodd" })
    ]
  }
);
var thumb_up_default = ThumbUp;
var Time = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.5 8.5a.5.5 0 0 0-1 0V12a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L12.5 11.793z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", "clip-rule": "evenodd" })
    ]
  }
);
var time_default = Time;
var Tint = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m12 5 .74-.673a1 1 0 0 0-1.48 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M16.883 13c-.564-2.591-3.028-5.795-4.225-7.235C12.258 5.285 12 5 12 5l.74-.673.002.002.003.004.013.014.045.05.166.19a35 35 0 0 1 2.354 3.033c.643.932 1.302 1.999 1.802 3.075.494 1.06.875 2.217.875 3.305a6 6 0 0 1-12 0c0-1.088.381-2.244.875-3.305.5-1.076 1.159-2.143 1.802-3.075a35 35 0 0 1 2.52-3.222l.045-.051.013-.014.003-.004.002-.002L12 5s-.258.284-.658.765C10.145 7.205 7.681 10.409 7.117 13zM17 14H7a5 5 0 0 0 10 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-opacity": ".3", d: "M12 19a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5" })
    ]
  }
);
var tint_default = Tint;
var Toggle = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M7 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5 12a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-5-5m5-4h4a4 4 0 0 1 0 8h-4a4 4 0 0 1 0-8", "clip-rule": "evenodd" })
    ]
  }
);
var toggle_default = Toggle;
var Translate = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 5a.5.5 0 0 0-.5.5V7H5.5a.5.5 0 0 0 0 1h5.662c-.42 1.198-.895 2.08-1.668 3.067L7.99 9.187a.5.5 0 1 0-.78.625l1.63 2.037c-.68.77-1.548 1.65-2.694 2.798a.5.5 0 1 0 .708.706c1.08-1.081 1.93-1.941 2.62-2.711L10.88 14.4a.5.5 0 0 0 .78-.625l-1.526-1.907c.944-1.168 1.527-2.22 2.03-3.708l.054-.16H13.5a.5.5 0 0 0 0-1H10V5.5a.5.5 0 0 0-.5-.5" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.5 11a.5.5 0 0 0-.461.308l-2.5 6a.5.5 0 1 0 .922.384L13.167 16h3.166l.706 1.692a.5.5 0 1 0 .922-.384l-2.5-6A.5.5 0 0 0 15 11zm.25 1.2 1.167 2.8h-2.334z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M17.015 6.44 16.7 7.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L18.3 9.3l1.26-.315c.505-.126.505-.844 0-.97L18.3 7.7l-.315-1.26c-.126-.505-.844-.505-.97 0" })
    ]
  }
);
var translate_default = Translate;
var Trash = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 11.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2.5a1.5 1.5 0 0 1 .463 2.927l-.841 9.254A2 2 0 0 1 15.13 20H8.87a2 2 0 0 1-1.992-1.819l-.841-9.254A1.5 1.5 0 0 1 6.5 6zm1 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm7.494 2h.01a.5.5 0 0 0-.004-1h-11a.5.5 0 0 0-.004 1zm-.541 1H7.048l.826 9.09a1 1 0 0 0 .996.91h6.26a1 1 0 0 0 .996-.91z", "clip-rule": "evenodd" })
    ]
  }
);
var trash_default = Trash;
var Truncate = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M5.702 15.273a.49.49 0 0 0 .462-.327l.583-1.665h2.89l.584 1.664a.489.489 0 1 0 .92-.328L8.923 8.511a.776.776 0 0 0-1.458 0l-2.222 6.106a.49.49 0 0 0 .46.656m3.638-2.845L8.232 9.263a.04.04 0 0 0-.076 0l-1.11 3.165z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.933 15.337a.65.65 0 0 1-.476-.2.65.65 0 0 1-.199-.475.65.65 0 0 1 .2-.476.65.65 0 0 1 .475-.199.65.65 0 0 1 .476.2.65.65 0 0 1 .199.475q0 .18-.093.337a.7.7 0 0 1-.245.245.63.63 0 0 1-.337.093m2.217-.199a.65.65 0 0 0 .476.199q.188 0 .337-.093a.7.7 0 0 0 .245-.245.65.65 0 0 0 .093-.337.65.65 0 0 0-.2-.476.65.65 0 0 0-.475-.199.65.65 0 0 0-.476.2.65.65 0 0 0-.199.475.65.65 0 0 0 .199.476m2.693 0a.65.65 0 0 0 .476.199q.189 0 .338-.093a.7.7 0 0 0 .245-.245.65.65 0 0 0 .092-.337.65.65 0 0 0-.199-.476.65.65 0 0 0-.476-.199.65.65 0 0 0-.476.2.65.65 0 0 0-.198.475.65.65 0 0 0 .198.476" })
    ]
  }
);
var truncate_default = Truncate;
var UiKit = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M14.5 5A1.5 1.5 0 0 0 13 6.5v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 19 9.5v-3A1.5 1.5 0 0 0 17.5 5zm3 1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6.382 12.5a1.5 1.5 0 0 1-.382-1v-3A1.5 1.5 0 0 1 7.5 7h3A1.5 1.5 0 0 1 12 8.5v3c0 .231-.052.45-.146.646A1.5 1.5 0 0 1 12.5 12h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3c-.384 0-.735-.144-1-.382a1.5 1.5 0 0 1-1 .382h-3A1.5 1.5 0 0 1 6 16.5v-3c0-.384.144-.735.382-1M7.5 8h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m4.5 5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5m-1 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z", "clip-rule": "evenodd" })
    ]
  }
);
var ui_kit_default = UiKit;
var UnderlineDashed = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9 17a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1zm4 0a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1zm4 0a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1zM15.5 6a.5.5 0 0 1 .5.5V11a4 4 0 0 1-8 0V6.5a.5.5 0 0 1 1 0V11a3 3 0 0 0 6 0V6.5a.5.5 0 0 1 .5-.5" })
    ]
  }
);
var underline_dashed_default = UnderlineDashed;
var UnderlineDotted = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M15.5 6a.5.5 0 0 1 .5.5V11a4 4 0 0 1-8 0V6.5a.5.5 0 0 1 1 0V11a3 3 0 0 0 6 0V6.5a.5.5 0 0 1 .5-.5" })
    ]
  }
);
var underline_dotted_default = UnderlineDotted;
var UnderlineWave = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.94 16.854a1.5 1.5 0 0 1 2.12 0l.586.586a.5.5 0 0 0 .707 0l.587-.586a1.5 1.5 0 0 1 .569-.357c.26-.09.491.141.491.418v.106c0 .217-.2.387-.354.54l-.585.586a1.5 1.5 0 0 1-2.121 0l-.586-.586a.5.5 0 0 0-.707 0l-.587.586a1.5 1.5 0 0 1-2.12 0l-.586-.586a.5.5 0 0 0-.708 0l-.585.586a1.5 1.5 0 0 1-.57.356c-.26.09-.49-.14-.491-.417v-.107c0-.217.2-.386.354-.54l.585-.585a1.5 1.5 0 0 1 2.121 0l.586.586a.5.5 0 0 0 .707 0zM15.5 6a.5.5 0 0 1 .5.5V11a4 4 0 0 1-8 0V6.5a.5.5 0 0 1 1 0V11a3 3 0 0 0 6 0V6.5a.5.5 0 0 1 .5-.5" })
    ]
  }
);
var underline_wave_default = UnderlineWave;
var Underline = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9 6.5a.5.5 0 0 0-1 0V11a4 4 0 0 0 8 0V6.5a.5.5 0 0 0-1 0V11a3 3 0 0 1-6 0zM17.5 18a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1z" })
    ]
  }
);
var underline_default = Underline;
var Ungroup = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m6.854 17.854 11-11a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708M7.5 6A1.5 1.5 0 0 0 6 7.5a.5.5 0 0 0 1 0 .5.5 0 0 1 .5-.5.5.5 0 0 0 0-1m2 0a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1zm5 0H13a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1M7 11V9.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0m11 0V9.5a.5.5 0 0 0-1 0V11a.5.5 0 0 0 1 0M7 14.5V13a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0m11 0V13a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0M16.5 18a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 0-1 0 .5.5 0 0 1-.5.5.5.5 0 0 0 0 1M11 17H9.5a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1m3.5 0H13a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1" })
    ]
  }
);
var ungroup_default = Ungroup;
var UnsavedChanges = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m17.039 10.914-.05-.724a4.5 4.5 0 0 0-8.505-1.72l-.253.5-.558.044A4 4 0 0 0 8 17h2a.5.5 0 0 1 0 1H8a5 5 0 0 1-.409-9.984 5.5 5.5 0 0 1 10.396 2.106A4.002 4.002 0 0 1 17 18h-3a.5.5 0 0 1 0-1h3a3 3 0 0 0 .741-5.908z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.354 11.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708l1.646-1.647V19a.5.5 0 0 0 1 0v-6.293l1.646 1.647a.5.5 0 0 0 .708-.708z" })
    ]
  }
);
var unsaved_changes_default = UnsavedChanges;
var UpdateText = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 4.5a7.5 7.5 0 0 0-7.484 7A.527.527 0 0 1 4 12a.48.48 0 0 1-.486-.5A8.5 8.5 0 0 1 19 7.177V5.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.845A7.5 7.5 0 0 0 12 4.5M7.5 16H5.655a7.5 7.5 0 0 0 13.829-3.5c.018-.275.24-.5.516-.5s.502.224.485.5A8.5 8.5 0 0 1 5 16.823V18.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V10h1.5v4H11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-4H14v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z" })
    ]
  }
);
var update_text_default = UpdateText;
var Updates = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.023 11.526A5 5 0 0 1 16 9h-2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v2.183A6 6 0 0 0 6.027 11.43a.5.5 0 1 0 .996.096m10.95 1.044a.5.5 0 0 0-.996-.095A5 5 0 0 1 8 15h2a.5.5 0 0 0 0-1H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-2.183a6 6 0 0 0 10.973-2.748" })
    ]
  }
);
var updates_default = Updates;
var Variable = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.992 5.588a2 2 0 0 1 2.016 0l4 2.333A2 2 0 0 1 18 9.65v4.702a2 2 0 0 1-.992 1.728l-4 2.333a2 2 0 0 1-2.016 0l-4-2.333A2 2 0 0 1 6 14.35v-4.7a2 2 0 0 1 .992-1.728zm1.512.864 4 2.333a1 1 0 0 1 .496.864v4.702a1 1 0 0 1-.496.864l-4 2.333a1 1 0 0 1-1.008 0l-4-2.333A1 1 0 0 1 7 14.351V9.65a1 1 0 0 1 .496-.864l4-2.333a1 1 0 0 1 1.008 0", "clip-rule": "evenodd" })
    ]
  }
);
var variable_default = Variable;
var Variant = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m11.116 5.884-5.232 5.232a1.25 1.25 0 0 0 0 1.768l5.232 5.232a1.25 1.25 0 0 0 1.768 0l5.232-5.232a1.25 1.25 0 0 0 0-1.768l-5.232-5.232a1.25 1.25 0 0 0-1.768 0m.707.707-5.232 5.232a.25.25 0 0 0 0 .354l5.232 5.232a.25.25 0 0 0 .354 0l5.232-5.232a.25.25 0 0 0 0-.354l-5.232-5.232a.25.25 0 0 0-.354 0", "clip-rule": "evenodd" })
    ]
  }
);
var variant_default = Variant;
var VectorBend = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M17.5 9a2.5 2.5 0 1 0-2.45-3H14a8 8 0 0 0-8 8v1.05a2.5 2.5 0 1 0 1 0V14a7 7 0 0 1 7-7h1.05a2.5 2.5 0 0 0 2.45 2m0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-11 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", "clip-rule": "evenodd" })
    ]
  }
);
var vector_bend_default = VectorBend;
var VersionCurrent = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", "clip-rule": "evenodd" })
    ]
  }
);
var version_current_default = VersionCurrent;
var VersionMerged = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.646 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12.5 7.707v3.824A4 4 0 0 1 16 15.5v2a.5.5 0 0 1-1 0v-2a3 3 0 1 0-6 0v2a.5.5 0 0 1-1 0v-2a4 4 0 0 1 3.5-3.97V7.708l-1.146 1.147a.5.5 0 0 1-.708-.708z" })
    ]
  }
);
var version_merged_default = VersionMerged;
var Video = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m10.625 15.03 3.75-2.164a1 1 0 0 0 0-1.732l-3.75-2.166a1 1 0 0 0-1.5.867v4.33a1 1 0 0 0 1.5.866m-.5-5.195L13.875 12l-3.75 2.165z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", "clip-rule": "evenodd" })
    ]
  }
);
var video_default = Video;
var VisualSearch = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M5 14.5a.5.5 0 0 0-1 0V17a3 3 0 0 0 3 3h2.5a.5.5 0 0 0 0-1H7a2 2 0 0 1-2-2zM14.5 4a.5.5 0 0 0 0 1H17a2 2 0 0 1 2 2v2.5a.5.5 0 0 0 1 0V7a3 3 0 0 0-3-3z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9.596 10.303a3.5 3.5 0 1 1 .707-.707l1.55 1.55a.5.5 0 0 1-.707.708zM10 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M16.015 13.44 15.5 15.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L17.5 15.5l-.515-2.06c-.126-.505-.844-.505-.97 0" })
    ]
  }
);
var visual_search_default = VisualSearch;
var Wand = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.5 4a.5.5 0 0 0-.5.5V9H4.5a.5.5 0 0 0 0 1H9v4.5a.5.5 0 0 0 1 0V10h4.5a.5.5 0 0 0 0-1H10V4.5a.5.5 0 0 0-.5-.5M15 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12.854 12.146a.5.5 0 0 0-.708.708l7 7a.5.5 0 0 0 .708-.708z" })
    ]
  }
);
var wand_default = Wand;
var Warning = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M12 8.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5m.75 6.253a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "m10.257 6.06-5.04 8.96C4.467 16.352 5.43 18 6.96 18h10.08c1.53 0 2.493-1.647 1.743-2.98l-5.04-8.96c-.764-1.36-2.722-1.36-3.486 0m.871.49-5.04 8.96A1 1 0 0 0 6.96 17h10.08a1 1 0 0 0 .872-1.49l-5.04-8.96a1 1 0 0 0-1.744 0", "clip-rule": "evenodd" })
    ]
  }
);
var warning_default = Warning;
var Widget = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M15.793 3.707a1 1 0 0 1 1.414 0l3.086 3.087a1 1 0 0 1 0 1.414l-3.086 3.085a1 1 0 0 1-1.414 0l-3.086-3.085a1 1 0 0 1 0-1.414zm.707.708L19.586 7.5 16.5 10.586l-3.086-3.085zm-12.268.317A2.5 2.5 0 0 1 7.5 4.5a2.5 2.5 0 0 1 3.268 3.768l-2.56 2.56a1 1 0 0 1-1.415 0l-2.56-2.56a2.5 2.5 0 0 1 0-3.536m3.707.707a1.5 1.5 0 0 1 2.122 2.122L7.5 10.12 4.94 7.56a1.5 1.5 0 1 1 2.12-2.122l.44.44zM20 16.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M5 13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm5 1H5v5h5z", "clip-rule": "evenodd" })
    ]
  }
);
var widget_default = Widget;
var WidthFill = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M9.354 8.146a.5.5 0 0 1 0 .708L7.207 11h9.586l-2.146-2.146a.5.5 0 0 1 .707-.708l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L16.793 12H7.207l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0" })
    ]
  }
);
var width_fill_default = WidthFill;
var WidthHug = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M7.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 1 1-.708-.707L9.793 11.5 7.146 8.854a.5.5 0 0 1 0-.708m9.708 0a.5.5 0 0 1 0 .708L14.207 11.5l2.647 2.646a.5.5 0 0 1-.708.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .708 0" })
    ]
  }
);
var width_hug_default = WidthHug;
var WidthMax = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M19 6.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0zm-13 0a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0zm10.854 4.646a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L15.293 12H8.707l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L8.707 11h6.586l-1.647-1.646a.5.5 0 0 1 .708-.708z" })
    ]
  }
);
var width_max_default = WidthMax;
var WidthMin = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "m14.146 11.854 2 2a.5.5 0 0 0 .708-.708L15.707 12H19.5a.5.5 0 0 0 0-1h-3.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708m-3.292 0-2 2a.5.5 0 0 1-.708-.708L9.293 12H5.5a.5.5 0 0 1 0-1h3.793L8.146 9.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708M13 5.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0z" })
    ]
  }
);
var width_min_default = WidthMin;
var Wrap = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M15 7a2 2 0 1 1 0 4H9.711l2.4-2.388a.5.5 0 0 0-.706-.709l-3.258 3.243a.5.5 0 0 0 0 .708l3.258 3.243a.5.5 0 0 0 .705-.709L9.711 12H15a3 3 0 1 0 0-6h-.5a.5.5 0 0 0 0 1z" })
    ]
  }
);
var wrap_default = Wrap;
var Write = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M9.28 13.017c-.394 1.016.61 2.014 1.625 1.615l1.688-.666a1.5 1.5 0 0 0 .51-.335l4.45-4.45a1.5 1.5 0 0 0 0-2.12l-.707-.708a1.5 1.5 0 0 0-2.122 0l-4.447 4.448a1.5 1.5 0 0 0-.338.518zm1.258.684a.25.25 0 0 1-.325-.323l.659-1.698a.5.5 0 0 1 .112-.172l3.387-3.387 1.414 1.414-3.389 3.389a.5.5 0 0 1-.17.111zm5.954-4.873-1.414-1.414.354-.354a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .708z", "clip-rule": "evenodd" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11.5 6a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6z" })
    ]
  }
);
var write_default = Write;
var ZoomIn = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M11 8.5a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 1 0 1 0V11h1.5a.5.5 0 1 0 0-1H11z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.5 16a5.48 5.48 0 0 0 3.544-1.294.5.5 0 0 0 .103.148l3 3a.5.5 0 0 0 .707-.707l-3-3a.5.5 0 0 0-.148-.103A5.5 5.5 0 1 0 10.5 16m0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9", "clip-rule": "evenodd" })
    ]
  }
);
var zoom_in_default = ZoomIn;
var ZoomNo = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 1 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.5 16a5.48 5.48 0 0 0 3.544-1.294.5.5 0 0 0 .103.148l3 3a.5.5 0 0 0 .707-.707l-3-3a.5.5 0 0 0-.148-.103A5.5 5.5 0 1 0 10.5 16m0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9", "clip-rule": "evenodd" })
    ]
  }
);
var zoom_no_default = ZoomNo;
var ZoomOut = ({
  size = 24,
  color = "currentColor",
  title,
  ...props
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? "false" : "true",
    ...props,
    children: [
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx("path", { fill: "#000", d: "M8.5 10a.5.5 0 0 0 0 1h4a.5.5 0 1 0 0-1z" }),
      /* @__PURE__ */ jsx("path", { fill: "#000", "fill-rule": "evenodd", d: "M10.5 16a5.48 5.48 0 0 0 3.544-1.294.5.5 0 0 0 .103.148l3 3a.5.5 0 0 0 .707-.707l-3-3a.5.5 0 0 0-.148-.103A5.5 5.5 0 1 0 10.5 16m0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9", "clip-rule": "evenodd" })
    ]
  }
);
var zoom_out_default = ZoomOut;

export { absolute_default as Absolute, actions_default as Actions, actual_size_default as ActualSize, add_horizontal_default as AddHorizontal, add_vertical_default as AddVertical, add_wrap_default as AddWrap, adjust_default as Adjust, ai_default as Ai, align_bottom_default as AlignBottom, align_bottom_alt_default as AlignBottomAlt, align_bottom_group_default as AlignBottomGroup, align_center_default as AlignCenter, align_horizontal_center_default as AlignHorizontalCenter, align_horizontal_center_group_default as AlignHorizontalCenterGroup, align_justified_default as AlignJustified, align_left_default as AlignLeft, align_left_alt_default as AlignLeftAlt, align_left_group_default as AlignLeftGroup, align_middle_default as AlignMiddle, align_right_default as AlignRight, align_right_alt_default as AlignRightAlt, align_right_group_default as AlignRightGroup, align_top_default as AlignTop, align_top_alt_default as AlignTopAlt, align_top_group_default as AlignTopGroup, align_vertical_center_default as AlignVerticalCenter, align_vertical_center_group_default as AlignVerticalCenterGroup, animate_default as Animate, annotate_default as Annotate, arc_default as Arc, arrow_default as Arrow, arrow_downward_default as ArrowDownward, arrow_right_default as ArrowRight, attention_default as Attention, audio_default as Audio, author_default as Author, auto_rename_default as AutoRename, back_default as Back, background_blur_default as BackgroundBlur, backward_default as Backward, blend_default as Blend, blend_fill_default as BlendFill, bold_default as Bold, boolean_default as Boolean, boolean_exclude_default as BooleanExclude, boolean_intersect_default as BooleanIntersect, boolean_subtract_default as BooleanSubtract, boolean_union_default as BooleanUnion, border_extra_large_default as BorderExtraLarge, border_large_default as BorderLarge, border_medium_default as BorderMedium, branch_default as Branch, bulb_off_default as BulbOff, bulb_on_default as BulbOn, camera_default as Camera, camera_off_default as CameraOff, captioning_default as Captioning, change_default as Change, check_default as Check, check_large_default as CheckLarge, checkmark_default as Checkmark, chevron_down_default as ChevronDown, chevron_down_large_default as ChevronDownLarge, chevron_right_default as ChevronRight, chevron_right_large_default as ChevronRightLarge, chevron_up_default as ChevronUp, clipboard_default as Clipboard, close_default as Close, code_block_default as CodeBlock, code_snippet_default as CodeSnippet, collapse_default as Collapse, collapse_layers_default as CollapseLayers, color_default as Color, command_default as Command, comment_default as Comment, community_default as Community, company_default as Company, component_set_default as ComponentSet, conditional_default as Conditional, constr_horiz_default as ConstrHoriz, constr_vert_default as ConstrVert, contrast_default as Contrast, convert_to_raster_default as ConvertToRaster, copy_default as Copy, corners_default as Corners, count_star_default as CountStar, create_variant_default as CreateVariant, cut_default as Cut, description_default as Description, design_default as Design, desktop_default as Desktop, detach_default as Detach, dev_default as Dev, dev_brackets_default as DevBrackets, doc_plus_default as DocPlus, dock_to_side_default as DockToSide, duplicate_default as Duplicate, edit_mode_default as EditMode, edit_object_default as EditObject, edit_text_default as EditText, effects_default as Effects, ellipse_default as Ellipse, embed_code_default as EmbedCode, emoji_default as Emoji, enhance_default as Enhance, expand_default as Expand, export_default as Export, exposure_default as Exposure, extend_image_default as ExtendImage, eye_default as Eye, eyedropper_default as Eyedropper, figjam_default as Figjam, fill_default as Fill, fill_gradient_linear_default as FillGradientLinear, fill_image_default as FillImage, fill_mixed_default as FillMixed, fill_screen_default as FillScreen, fill_solid_default as FillSolid, filter_default as Filter, first_draft_default as FirstDraft, fit_height_default as FitHeight, fit_screen_default as FitScreen, fit_width_default as FitWidth, flatten_default as Flatten, flip_horizontal_default as FlipHorizontal, flip_vertical_default as FlipVertical, folder_default as Folder, font_size_default as FontSize, forward_default as Forward, frame_default as Frame, generate_image_default as GenerateImage, go_parent_default as GoParent, go_to_default as GoTo, gradient_angular_default as GradientAngular, gradient_diamond_default as GradientDiamond, gradient_linear_default as GradientLinear, gradient_radial_default as GradientRadial, grid_default as Grid, grid_column_default as GridColumn, grid_dotted_default as GridDotted, grid_row_default as GridRow, grid_view_default as GridView, group_default as Group, h1_default as H1, h2_default as H2, hand_default as Hand, hash_default as Hash, height_fill_default as HeightFill, height_hug_default as HeightHug, height_max_default as HeightMax, height_min_default as HeightMin, help_default as Help, hidden_default as Hidden, highlights_default as Highlights, history_default as History, home_default as Home, image_default as Image, images_default as Images, import_default as Import, in_development_default as InDevelopment, info_default as Info, insert_default as Insert, inspect_default as Inspect, instance_default as Instance, instance_swap_default as InstanceSwap, interclick_default as Interclick, interdefault_default as Interdefault, interdrag_default as Interdrag, interenter_default as Interenter, interhover_default as Interhover, interkey_default as Interkey, interleave_default as Interleave, intermouse_down_default as IntermouseDown, intermouse_up_default as IntermouseUp, interpress_default as Interpress, itc_default as Itc, key_default as Key, keyboard_default as Keyboard, landscape_default as Landscape, language_default as Language, layer_blur_default as LayerBlur, layer_blur_medium_default as LayerBlurMedium, leading_trim_default as LeadingTrim, library_default as Library, line_default as Line, line_height_default as LineHeight, link_default as Link, link_broken_default as LinkBroken, link_connected_default as LinkConnected, linked_default as Linked, list_horizontal_default as ListHorizontal, list_view_default as ListView, loading_default as Loading, lock_default as Lock, lock_locked_default as LockLocked, lock_open_default as LockOpen, loop_default as Loop, loop_off_default as LoopOff, magic_noodle_default as MagicNoodle, mail_default as Mail, mask_default as Mask, matching_default as Matching, mention_default as Mention, mic_mute_default as MicMute, minus_default as Minus, missing_font_default as MissingFont, mobile_default as Mobile, moon_default as Moon, more_default as More, move_default as Move, multi_edit_default as MultiEdit, navigate_back_default as NavigateBack, navigate_forward_default as NavigateForward, new_branch_default as NewBranch, new_tab_default as NewTab, next_default as Next, no_trim_default as NoTrim, noodle_default as Noodle, notes_default as Notes, notification_bell_default as NotificationBell, number_default as Number, number_list_default as NumberList, offline_default as Offline, opacity_default as Opacity, open_session_default as OpenSession, outline_default as Outline, overflow_clip_default as OverflowClip, overflow_display_default as OverflowDisplay, overlay_bottom_default as OverlayBottom, overlay_center_default as OverlayCenter, overlay_close_default as OverlayClose, overlay_left_default as OverlayLeft, overlay_open_default as OverlayOpen, overlay_swap_default as OverlaySwap, padding_all_default as PaddingAll, padding_horizontal_default as PaddingHorizontal, padding_sides_default as PaddingSides, padding_vertical_default as PaddingVertical, page_default as Page, pages_default as Pages, pages_more_default as PagesMore, pages_new_default as PagesNew, paint_default as Paint, password_default as Password, pause_default as Pause, pen_default as Pen, pencil_default as Pencil, pending_invite_default as PendingInvite, people_default as People, phone_default as Phone, placeholder_default as Placeholder, play_default as Play, play_pause_default as PlayPause, play_rectangle_default as PlayRectangle, plugin_default as Plugin, plus_default as Plus, polygon_default as Polygon, portrait_default as Portrait, preview_prototype_default as PreviewPrototype, progress_default as Progress, props_default as Props, prototyping_default as Prototyping, public_default as Public, published_default as Published, push_to_default as PushTo, qwand_default as Qwand, recent_default as Recent, release_notes_default as ReleaseNotes, remove_background_default as RemoveBackground, rename_default as Rename, replace_content_default as ReplaceContent, replace_text_default as ReplaceText, reset_default as Reset, resize_default as Resize, resize_alt_default as ResizeAlt, resolve_default as Resolve, responsive_default as Responsive, restart_default as Restart, return_default as Return, rewrite_default as Rewrite, rotate_default as Rotate, rotate_180_default as Rotate180, rotate_ccw_default as RotateCcw, rotation_default as Rotation, saturation_default as Saturation, save_default as Save, screen_share_default as ScreenShare, scroll_default as Scroll, search_default as Search, section_default as Section, select_default as Select, send_default as Send, send_backward_default as SendBackward, send_forward_default as SendForward, send_to_back_default as SendToBack, send_to_front_default as SendToFront, settings_default as Settings, shadows_default as Shadows, shape_text_default as ShapeText, shapes_default as Shapes, shorten_default as Shorten, shuffle_default as Shuffle, size_default as Size, slice_default as Slice, slide_default as Slide, slide_grid_default as SlideGrid, slides_default as Slides, sm_caps_default as SmCaps, sort_default as Sort, sound_off_default as SoundOff, sound_off_toggle_default as SoundOffToggle, sound_on_default as SoundOn, spotlight_default as Spotlight, spread_default as Spread, square_default as Square, stack_default as Stack, star_default as Star, sticky_default as Sticky, stop_default as Stop, strike_through_default as StrikeThrough, styles_default as Styles, subscript_default as Subscript, summarize_default as Summarize, sun_default as Sun, superscript_default as Superscript, swap_default as Swap, swatch_default as Swatch, tablet_default as Tablet, temperature_default as Temperature, text_default as Text, text_caps_default as TextCaps, text_library_default as TextLibrary, thumb_down_default as ThumbDown, thumb_up_default as ThumbUp, time_default as Time, tint_default as Tint, toggle_default as Toggle, translate_default as Translate, trash_default as Trash, truncate_default as Truncate, ui_kit_default as UiKit, underline_default as Underline, underline_dashed_default as UnderlineDashed, underline_dotted_default as UnderlineDotted, underline_wave_default as UnderlineWave, ungroup_default as Ungroup, unsaved_changes_default as UnsavedChanges, update_text_default as UpdateText, updates_default as Updates, variable_default as Variable, variant_default as Variant, vector_bend_default as VectorBend, version_current_default as VersionCurrent, version_merged_default as VersionMerged, video_default as Video, visual_search_default as VisualSearch, wand_default as Wand, warning_default as Warning, widget_default as Widget, width_fill_default as WidthFill, width_hug_default as WidthHug, width_max_default as WidthMax, width_min_default as WidthMin, wrap_default as Wrap, write_default as Write, zoom_in_default as ZoomIn, zoom_no_default as ZoomNo, zoom_out_default as ZoomOut };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map