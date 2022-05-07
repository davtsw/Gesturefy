var ui = {
  line: [
    {
      confele: "color",
      dom: "input",
      type: "color"
    },
    {
      confele: "width",
      dom: "input",
      type: "range",
      range: {
        min: 1,
        max: 48,
        step: 1
      }
    },
    {
      confele: "opacity",
      dom: "input",
      type: "range",
      range: {
        min: 1,
        max: 100,
        step: 1
      }
    }
  ],
  direct: [
    {
      confele: "color",
      dom: "input",
      type: "color"
    },
    {
      confele: "width",
      dom: "input",
      type: "range",
      range: {
        min: 12,
        max: 48,
        step: 1
      }
    },
    {
      confele: "opacity",
      dom: "input",
      type: "range",
      range: {
        min: 1,
        max: 100,
        step: 1
      }
    },
    {
      confele: "style",
      dom: "select",
      select: ["follow", "center", "top", "ui_bottom", "left", "right", "leftbottom", "lefttop", "righttop", "hover"]
    }
  ],
  tip: [
    {
      confele: "color",
      dom: "input",
      type: "color"
    },
    {
      confele: "bgcolor",
      dom: "input",
      type: "color"
    },
    {
      confele: "width",
      dom: "input",
      type: "range",
      range: {
        min: 12,
        max: 48,
        step: 1
      }
    },
    {
      confele: "opacity",
      dom: "input",
      type: "range",
      range: {
        min: 1,
        max: 100,
        step: 1
      }
    },
    {
      confele: "style",
      dom: "select",
      select: ["follow", "center", "top", "ui_bottom", "left", "right", "leftbottom", "lefttop", "righttop", "hover"]

    },
    {
      confele: "withdir",
      dom: "input",
      type: "checkbox"
    }
  ],
  note: [
    {
      confele: "color",
      dom: "input",
      type: "color"
    },
    {
      confele: "width",
      dom: "input",
      type: "range",
      range: {
        min: 12,
        max: 48,
        step: 1
      }
    },
    {
      confele: "opacity",
      dom: "input",
      type: "range",
      range: {
        min: 1,
        max: 100,
        step: 1
      }
    },
    {
      confele: "style",
      dom: "select",
      select: ["follow", "center", "top", "ui_bottom", "left", "right", "leftbottom", "lefttop", "righttop", "hover"]
    }
  ],
  allaction: [
    {
      confele: "color",
      dom: "input",
      type: "color"
    },
    {
      confele: "bgcolor",
      dom: "input",
      type: "color"
    },
    {
      confele: "width",
      dom: "input",
      type: "range",
      range: {
        min: 12,
        max: 48,
        step: 1
      }
    },
    {
      confele: "opacity",
      dom: "input",
      type: "range",
      range: {
        min: 1,
        max: 100,
        step: 1
      }
    },
    {
      confele: "style",
      dom: "select",
      select: ["follow", "center", "top", "ui_bottom", "left", "right", "leftbottom", "lefttop", "righttop", "hover"]
    }
  ]
}
var menuModel = {
  fn: ["general", "mges", "sdrg", "drg", "rges", "wges", "pop", "icon", "ctm", "touch", "dca", "ksa"],
  main: ["fnswitch", "general", "mges", "sdrg", "drg", "rges", "wges", "pop", "icon", "ctm", "touch", "dca", "ksa", "about"],
  fnswitch: ["setting"],
  general: ["setting",/*"fnswitch",*/"searchmgr", "scriptmgr", "linux", "per", "conf"],
  mges: ["setting", "ui", "gesmgr"],
  sdrg: ["setting", "tsdrg", "lsdrg", "isdrg"],
  drg: ["setting", "ui", "tdrg", "ldrg", "idrg"],
  rges: ["action"],
  wges: ["action"],
  pop: ["setting", "action"],
  icon: ["setting", "action"],
  ctm: ["setting", "action"],
  sfn: ["settings"],
  apps: ["settings"],
  touch: ["setting", "ui", "action"],
  dca: ["setting", "action"],
  ksa: ["setting", "action"],
  about: ["about", "donatedev", "moreext", "translate", "thanks",/*"help",*/"changelog"]
}
