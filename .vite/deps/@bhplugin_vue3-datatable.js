import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useSlots,
  vModelCheckbox,
  vModelSelect,
  vModelText,
  vShow,
  watch,
  withDirectives,
  withModifiers
} from "./chunk-RP2GRUF3.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@bhplugin/vue3-datatable/dist/vue3-datatable.js
var Ke = { class: "bh-filter-menu bh-absolute bh-z-[1] bh-bg-white bh-shadow-md bh-rounded-md bh-top-full bh-right-0 bh-w-32 bh-mt-1" };
var Je = ["onClick"];
var We = defineComponent({
  __name: "column-filter",
  props: ["column", "columnFilterLang"],
  emits: ["close", "filterChange"],
  setup(w, { emit: C }) {
    const t = w;
    onBeforeUnmount(() => {
      document.removeEventListener("click", l);
    }), onMounted(() => {
      document.addEventListener("click", l);
    });
    const l = () => {
      C("close");
    }, b = (S) => {
      t.column.condition = S, S === "" && (t.column.value = ""), C("filterChange", t.column);
    };
    return (S, o) => {
      var h, T, f, X, A, Z, $, L, I, B, N, j, R, J, P, ee, te, k, M;
      return openBlock(), createElementBlock("div", Ke, [
        createBaseVNode("div", {
          class: "bh-text-[13px] bh-font-normal bh-rounded bh-overflow-hidden",
          onClick: withModifiers(l, ["stop"])
        }, [
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass({ active: t.column.condition === "" }),
            onClick: o[0] || (o[0] = (_) => b(""))
          }, toDisplayString((h = t.columnFilterLang && t.columnFilterLang.no_filter) != null ? h : "No filter"), 3),
          t.column.type === "string" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "contain" }),
              onClick: o[1] || (o[1] = (_) => b("contain"))
            }, toDisplayString((T = t.columnFilterLang && t.columnFilterLang.contain) != null ? T : "Contain"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "not_contain" }),
              onClick: o[2] || (o[2] = (_) => b("not_contain"))
            }, toDisplayString((f = t.columnFilterLang && t.columnFilterLang.not_contain) != null ? f : "Not contain"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "equal" }),
              onClick: o[3] || (o[3] = (_) => b("equal"))
            }, toDisplayString((X = t.columnFilterLang && t.columnFilterLang.equal) != null ? X : "Equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "not_equal" }),
              onClick: o[4] || (o[4] = (_) => b("not_equal"))
            }, toDisplayString((A = t.columnFilterLang && t.columnFilterLang.not_equal) != null ? A : "Not equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "start_with" }),
              onClick: o[5] || (o[5] = (_) => b("start_with"))
            }, toDisplayString((Z = t.columnFilterLang && t.columnFilterLang.start_with) != null ? Z : "Starts with"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "end_with" }),
              onClick: o[6] || (o[6] = (_) => b("end_with"))
            }, toDisplayString(($ = t.columnFilterLang && t.columnFilterLang.end_with) != null ? $ : "Ends with"), 3)
          ], 64)) : t.column.type === "number" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "equal" }),
              onClick: o[7] || (o[7] = (_) => b("equal"))
            }, toDisplayString((L = t.columnFilterLang && t.columnFilterLang.equal) != null ? L : "Equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "not_equal" }),
              onClick: o[8] || (o[8] = (_) => b("not_equal"))
            }, toDisplayString((I = t.columnFilterLang && t.columnFilterLang.not_equal) != null ? I : "Not equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "greater_than" }),
              onClick: o[9] || (o[9] = (_) => b("greater_than"))
            }, toDisplayString((B = t.columnFilterLang && t.columnFilterLang.greater_than) != null ? B : "Greater than"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "greater_than_equal" }),
              onClick: o[10] || (o[10] = (_) => b("greater_than_equal"))
            }, toDisplayString((N = t.columnFilterLang && t.columnFilterLang.greater_than_equal) != null ? N : "Greater than or equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "less_than" }),
              onClick: o[11] || (o[11] = (_) => b("less_than"))
            }, toDisplayString((j = t.columnFilterLang && t.columnFilterLang.less_than) != null ? j : "Less than"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "less_than_equal" }),
              onClick: o[12] || (o[12] = (_) => b("less_than_equal"))
            }, toDisplayString((R = t.columnFilterLang && t.columnFilterLang.less_than_equal) != null ? R : "Less than or equal"), 3)
          ], 64)) : t.column.type === "date" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "equal" }),
              onClick: o[13] || (o[13] = (_) => b("equal"))
            }, toDisplayString((J = t.columnFilterLang && t.columnFilterLang.equal) != null ? J : "Equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "not_equal" }),
              onClick: o[14] || (o[14] = (_) => b("not_equal"))
            }, toDisplayString((P = t.columnFilterLang && t.columnFilterLang.not_equal) != null ? P : "Not equal"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "greater_than" }),
              onClick: o[15] || (o[15] = (_) => b("greater_than"))
            }, toDisplayString((ee = t.columnFilterLang && t.columnFilterLang.greater_than) != null ? ee : "Greater than"), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass({ active: t.column.condition === "less_than" }),
              onClick: o[16] || (o[16] = (_) => b("less_than"))
            }, toDisplayString((te = t.columnFilterLang && t.columnFilterLang.less_than) != null ? te : "Less than"), 3)
          ], 64)) : createCommentVNode("", true),
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass({ active: t.column.condition === "is_null" }),
            onClick: o[17] || (o[17] = (_) => b("is_null"))
          }, toDisplayString((k = t.columnFilterLang && t.columnFilterLang.is_null) != null ? k : "Is null"), 3),
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass({ active: t.column.condition === "is_not_null" }),
            onClick: o[18] || (o[18] = (_) => b("is_not_null"))
          }, toDisplayString((M = t.columnFilterLang && t.columnFilterLang.is_not_null) != null ? M : "Not null"), 3)
        ], 8, Je)
      ]);
    };
  }
});
var oe = (w, C) => {
  const t = w.__vccOpts || w;
  for (const [l, b] of C)
    t[l] = b;
  return t;
};
var Ye = {};
var Qe = {
  version: "1.1",
  viewBox: "0 0 17 12",
  xmlns: "http://www.w3.org/2000/svg"
};
var Xe = createBaseVNode("g", {
  fill: "none",
  "fill-rule": "evenodd"
}, [
  createBaseVNode("g", {
    transform: "translate(-9 -11)",
    fill: "currentColor",
    "fill-rule": "nonzero"
  }, [
    createBaseVNode("path", { d: "m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" })
  ])
], -1);
var Ze = [
  Xe
];
function je(w, C) {
  return openBlock(), createElementBlock("svg", Qe, Ze);
}
var Se = oe(Ye, [["render", je]]);
var et = {};
var tt = {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  stroke: "currentColor",
  "stroke-width": "3",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "css-i6dzq1"
};
var lt = createBaseVNode("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}, null, -1);
var nt = [
  lt
];
function ot(w, C) {
  return openBlock(), createElementBlock("svg", tt, nt);
}
var at = oe(et, [["render", ot]]);
var it = {};
var st = {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  stroke: "currentColor",
  "stroke-width": "1.5",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "css-i6dzq1"
};
var rt = createBaseVNode("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }, null, -1);
var ut = [
  rt
];
function ct(w, C) {
  return openBlock(), createElementBlock("svg", st, ut);
}
var ht = oe(it, [["render", ct]]);
var dt = { key: "hdrrow" };
var vt = { class: "bh-checkbox" };
var ft = ["onClick"];
var gt = {
  width: "16",
  height: "16",
  viewBox: "0 0 14 14",
  fill: "none"
};
var pt = {
  key: 0,
  class: "bh-filter bh-relative"
};
var bt = ["onUpdate:modelValue"];
var mt = ["onUpdate:modelValue"];
var _t = ["onUpdate:modelValue"];
var yt = ["onUpdate:modelValue"];
var Ct = createBaseVNode("option", { value: void 0 }, "All", -1);
var kt = createBaseVNode("option", { value: true }, "True", -1);
var wt = createBaseVNode("option", { value: false }, "False", -1);
var Ft = [
  Ct,
  kt,
  wt
];
var Lt = ["onClick"];
var Ce = defineComponent({
  __name: "column-header",
  props: ["all", "currentSortColumn", "currentSortDirection", "isOpenFilter", "isFooter", "checkAll", "columnFilterLang"],
  emits: ["selectAll", "sortChange", "filterChange", "toggleFilterMenu"],
  setup(w, { emit: C }) {
    const t = w, l = ref(null);
    return watch(() => t.checkAll, () => {
      l.value && (l.value.indeterminate = t.checkAll !== 0 ? !t.checkAll : false, l.value.checked = t.checkAll);
    }), (S, o) => (openBlock(), createElementBlock("tr", dt, [
      t.all.hasCheckbox ? (openBlock(), createElementBlock("th", {
        key: "chkall",
        class: normalizeClass(["bh-w-px", {
          "bh-sticky bh-bg-blue-light bh-z-[1]": t.all.stickyHeader || t.all.stickyFirstColumn,
          "bh-top-0": t.all.stickyHeader,
          "bh-left-0": t.all.stickyFirstColumn
        }])
      }, [
        createBaseVNode("div", vt, [
          createBaseVNode("input", {
            ref_key: "selectedAll",
            ref: l,
            type: "checkbox",
            onClick: o[0] || (o[0] = withModifiers((h) => C("selectAll", h.target.checked), ["stop"]))
          }, null, 512),
          createBaseVNode("div", null, [
            createVNode(Se, { class: "check" }),
            createVNode(at, { class: "intermediate" })
          ])
        ])
      ], 2)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(t.all.columns, (h, T) => (openBlock(), createElementBlock(Fragment, null, [
        h.hide ? createCommentVNode("", true) : (openBlock(), createElementBlock("th", {
          key: h.field,
          class: normalizeClass(["bh-select-none bh-z-[1]", [
            t.all.sortable && h.sort ? "bh-cursor-pointer" : "",
            T === 0 && t.all.stickyFirstColumn ? "bh-sticky bh-left-0 bh-bg-blue-light" : "",
            t.all.hasCheckbox && T === 0 && t.all.stickyFirstColumn ? "bh-left-[52px]" : ""
          ]]),
          style: normalizeStyle({
            width: h.width,
            "min-width": h.minWidth,
            "max-width": h.maxWidth
          })
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["bh-flex bh-items-center", [h.headerClass ? h.headerClass : ""]]),
            onClick: (f) => t.all.sortable && h.sort && C("sortChange", h.field)
          }, [
            createTextVNode(toDisplayString(h.title) + " ", 1),
            t.all.sortable && h.sort ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["bh-ml-3 bh-sort bh-flex bh-items-center", [t.currentSortColumn, t.currentSortDirection]])
            }, [
              (openBlock(), createElementBlock("svg", gt, [
                createBaseVNode("polygon", {
                  points: "3.11,6.25 10.89,6.25 7,1.75 ",
                  fill: "currentColor",
                  class: normalizeClass(["bh-text-black/20", [w.currentSortColumn === h.field && w.currentSortDirection === "asc" ? "!bh-text-primary" : ""]])
                }, null, 2),
                createBaseVNode("polygon", {
                  points: "7,12.25 10.89,7.75 3.11,7.75 ",
                  fill: "currentColor",
                  class: normalizeClass(["bh-text-black/20", [w.currentSortColumn === h.field && w.currentSortDirection === "desc" ? "!bh-text-primary" : ""]])
                }, null, 2)
              ]))
            ], 2)) : createCommentVNode("", true)
          ], 10, ft),
          t.all.columnFilter && !t.isFooter ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            h.filter ? (openBlock(), createElementBlock("div", pt, [
              h.type === "string" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                "onUpdate:modelValue": (f) => h.value = f,
                type: "text",
                class: "bh-form-control",
                onKeyup: o[1] || (o[1] = (f) => C("filterChange"))
              }, null, 40, bt)), [
                [
                  vModelText,
                  h.value,
                  void 0,
                  { trim: true }
                ]
              ]) : createCommentVNode("", true),
              h.type === "number" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                "onUpdate:modelValue": (f) => h.value = f,
                type: "number",
                class: "bh-form-control",
                onKeyup: o[2] || (o[2] = (f) => C("filterChange"))
              }, null, 40, mt)), [
                [
                  vModelText,
                  h.value,
                  void 0,
                  {
                    number: true,
                    trim: true
                  }
                ]
              ]) : h.type === "date" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 2,
                "onUpdate:modelValue": (f) => h.value = f,
                type: "date",
                class: "bh-form-control",
                onChange: o[3] || (o[3] = (f) => C("filterChange"))
              }, null, 40, _t)), [
                [vModelText, h.value]
              ]) : h.type === "bool" ? withDirectives((openBlock(), createElementBlock("select", {
                key: 3,
                "onUpdate:modelValue": (f) => h.value = f,
                class: "bh-form-control",
                onChange: o[4] || (o[4] = (f) => C("filterChange")),
                onClick: o[5] || (o[5] = (f) => t.isOpenFilter = null)
              }, Ft, 40, yt)), [
                [vModelSelect, h.value]
              ]) : createCommentVNode("", true),
              h.type !== "bool" ? (openBlock(), createElementBlock("button", {
                key: 4,
                type: "button",
                onClick: withModifiers((f) => C("toggleFilterMenu", h), ["stop"])
              }, [
                createVNode(ht, { class: "bh-w-4" })
              ], 8, Lt)) : createCommentVNode("", true),
              withDirectives(createVNode(We, {
                column: h,
                type: h.type,
                columnFilterLang: t.columnFilterLang,
                onClose: o[6] || (o[6] = (f) => C("toggleFilterMenu", null)),
                onFilterChange: o[7] || (o[7] = (f) => C("filterChange"))
              }, null, 8, ["column", "type", "columnFilterLang"]), [
                [vShow, t.isOpenFilter === h.field]
              ])
            ])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 6))
      ], 64))), 256))
    ]));
  }
});
var St = {};
var $t = {
  width: "84",
  height: "84",
  viewBox: "0 0 24 24",
  class: "bh-loader bh-text-primary"
};
var xt = createStaticVNode('<circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>', 3);
var qt = [
  xt
];
function Mt(w, C) {
  return openBlock(), createElementBlock("svg", $t, qt);
}
var zt = oe(St, [["render", Mt]]);
var At = { class: "bh-datatable bh-antialiased bh-relative bh-text-black bh-text-sm bh-font-normal" };
var Bt = ["onClick"];
var Nt = { class: "bh-checkbox" };
var Rt = ["value"];
var Dt = ["innerHTML"];
var Pt = { key: 1 };
var Ht = ["colspan"];
var Ot = ["colspan"];
var Tt = createBaseVNode("div", { class: "bh-skeleton-box bh-h-8" }, null, -1);
var Vt = [
  Tt
];
var Ut = {
  key: 0,
  class: "bh-absolute bh-inset-0 bh-bg-blue-light/50 bh-grid bh-place-content-center"
};
var Et = { class: "bh-flex bh-items-center bh-flex-wrap bh-flex-col sm:bh-flex-row bh-gap-4" };
var It = { class: "bh-pagination-info bh-flex bh-items-center" };
var Gt = { class: "bh-mr-2" };
var Kt = ["value"];
var Jt = { class: "bh-pagination-number sm:bh-ml-auto bh-inline-flex bh-items-center bh-space-x-1" };
var Wt = ["innerHTML"];
var Yt = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
};
var Qt = createBaseVNode("g", {
  fill: "currentColor",
  "fill-rule": "evenodd"
}, [
  createBaseVNode("path", { d: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" }),
  createBaseVNode("path", { d: "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" })
], -1);
var Xt = [
  Qt
];
var Zt = ["innerHTML"];
var jt = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
};
var el = createBaseVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
}, null, -1);
var tl = [
  el
];
var ll = ["onClick"];
var nl = ["innerHTML"];
var ol = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
};
var al = createBaseVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"
}, null, -1);
var il = [
  al
];
var sl = ["innerHTML"];
var rl = {
  key: 1,
  "aria-hidden": "true",
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
};
var ul = createBaseVNode("g", {
  fill: "currentColor",
  "fill-rule": "evenodd"
}, [
  createBaseVNode("path", { d: "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8L3.646 2.354a.5.5 0 0 1 0-.708z" }),
  createBaseVNode("path", { d: "M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8L7.646 2.354a.5.5 0 0 1 0-.708z" })
], -1);
var cl = [
  ul
];
var gl = defineComponent({
  __name: "custom-table",
  props: {
    loading: { type: Boolean, default: false },
    isServerMode: { type: Boolean, default: false },
    skin: { default: "bh-table-striped bh-table-hover" },
    totalRows: { default: 0 },
    rows: { default: () => [] },
    columns: { default: () => [] },
    hasCheckbox: { type: Boolean, default: false },
    search: { default: "" },
    columnChooser: { type: Boolean, default: false },
    page: { default: 1 },
    pageSize: { default: 10 },
    pageSizeOptions: { default: () => [10, 20, 30, 50, 100] },
    showPageSize: { type: Boolean, default: true },
    rowClass: { default: [] },
    cellClass: { default: [] },
    sortable: { type: Boolean, default: false },
    sortColumn: { default: "id" },
    sortDirection: { default: "asc" },
    columnFilter: { type: Boolean, default: false },
    columnFilterLang: { default: null },
    pagination: { type: Boolean, default: true },
    showNumbers: { type: Boolean, default: true },
    showNumbersCount: { default: 5 },
    showFirstPage: { type: Boolean, default: true },
    showLastPage: { type: Boolean, default: true },
    firstArrow: { default: "" },
    lastArrow: { default: "" },
    nextArrow: { default: "" },
    previousArrow: { default: "" },
    paginationInfo: { default: "Showing {0} to {1} of {2} entries" },
    noDataContent: { default: "No data available" },
    stickyHeader: { type: Boolean, default: false },
    height: { default: "500px" },
    stickyFirstColumn: { type: Boolean, default: false },
    cloneHeaderInFooter: { type: Boolean, default: false },
    selectRowOnClick: { type: Boolean, default: false }
  },
  emits: ["change", "sortChange", "searchChange", "pageChange", "pageSizeChange", "rowSelect", "filterChange", "rowClick", "rowDBClick"],
  setup(w, { expose: C, emit: t }) {
    var pe, be;
    const l = w, b = useSlots();
    for (const e of l.columns || []) {
      const a = ((pe = e.type) == null ? void 0 : pe.toLowerCase()) || "string";
      e.type = a, e.isUnique = e.isUnique !== void 0 ? e.isUnique : false, e.hide = e.hide !== void 0 ? e.hide : false, e.filter = e.filter !== void 0 ? e.filter : true, e.search = e.search !== void 0 ? e.search : true, e.sort = e.sort !== void 0 ? e.sort : true, e.html = e.html !== void 0 ? e.html : false, e.condition = !a || a === "string" ? "contain" : "equal";
    }
    const S = ref([]), o = ref(l.page), h = ref(l.pagination ? l.pageSize : (be = l.rows) == null ? void 0 : be.length), T = l.pageSize, f = ref(l.sortColumn), X = l.sortColumn, A = ref(l.sortDirection), Z = l.sortDirection, $ = ref(l.totalRows), L = ref([]), I = ref(null), B = ref(l.loading), N = ref(l.search), j = JSON.parse(JSON.stringify(l.columns)), R = ref(null), J = ref(null);
    let P = ref(0);
    const ee = ref(230);
    onMounted(() => {
      H();
    }), C({
      reset() {
        Ne();
      },
      getSelectedRows() {
        return Re();
      },
      getColumnFilters() {
        return De();
      },
      clearSelectedRows() {
        return Pe();
      },
      selectRow(e) {
        fe(e);
      },
      unselectRow(e) {
        ge(e);
      },
      isRowSelected(e) {
        return ne(e);
      },
      getFilteredRows() {
        return ue();
      }
    });
    const te = (e, ...a) => e.replace(/{(\d+)}/g, (s, g) => typeof a[g] < "u" ? a[g] : s), k = computed(() => {
      const e = l.columns.find((a) => a.isUnique);
      return (e == null ? void 0 : e.field) || null;
    }), M = computed(() => {
      const e = h.value < 1 ? 1 : Math.ceil($.value / h.value);
      return Math.max(e || 0, 1);
    }), _ = computed(() => (o.value - 1) * h.value + 1), re = computed(() => {
      const e = o.value * h.value;
      return $.value >= e ? e : $.value;
    }), $e = computed(() => {
      let e, a;
      return typeof l.showNumbersCount < "u" && l.showNumbersCount < M.value ? (e = Math.max(o.value - Math.floor(l.showNumbersCount / 2), 1), a = e + l.showNumbersCount - 1, a > M.value && (a = M.value, e = a - l.showNumbersCount + 1)) : (e = 1, a = M.value), Array.from(Array(a + 1 - e).keys()).map((F) => e + F);
    }), ue = () => {
      var F, W, me;
      let e = l.rows || [];
      if (!l.isServerMode) {
        if ((F = l.columns) == null || F.forEach((n) => {
          n.filter && (n.value !== void 0 && n.value !== null && n.value !== "" || n.condition === "is_null" || n.condition == "is_not_null") && (n.type === "string" ? (n.value && !n.condition && (n.condition = "contain"), n.condition === "contain" ? e = e.filter((r) => {
            var m;
            return (m = v(r, n.field)) == null ? void 0 : m.toString().toLowerCase().includes(n.value.toLowerCase());
          }) : n.condition === "not_contain" ? e = e.filter((r) => {
            var m;
            return !((m = v(r, n.field)) != null && m.toString().toLowerCase().includes(n.value.toLowerCase()));
          }) : n.condition === "equal" ? e = e.filter((r) => {
            var m;
            return ((m = v(r, n.field)) == null ? void 0 : m.toString().toLowerCase()) === n.value.toLowerCase();
          }) : n.condition === "not_equal" ? e = e.filter((r) => {
            var m;
            return ((m = v(r, n.field)) == null ? void 0 : m.toString().toLowerCase()) !== n.value.toLowerCase();
          }) : n.condition == "start_with" ? e = e.filter((r) => {
            var m;
            return ((m = v(r, n.field)) == null ? void 0 : m.toString().toLowerCase().indexOf(n.value.toLowerCase())) === 0;
          }) : n.condition == "end_with" && (e = e.filter((r) => {
            var m;
            return ((m = v(r, n.field)) == null ? void 0 : m.toString().toLowerCase().substr(n.value.length * -1)) === n.value.toLowerCase();
          }))) : n.type === "number" ? (n.value && !n.condition && (n.condition = "equal"), n.condition === "equal" ? e = e.filter((r) => v(r, n.field) && parseFloat(v(r, n.field)) === parseFloat(n.value)) : n.condition === "not_equal" ? e = e.filter((r) => v(r, n.field) && parseFloat(v(r, n.field)) !== parseFloat(n.value)) : n.condition === "greater_than" ? e = e.filter((r) => v(r, n.field) && parseFloat(v(r, n.field)) > parseFloat(n.value)) : n.condition === "greater_than_equal" ? e = e.filter((r) => v(r, n.field) && parseFloat(v(r, n.field)) >= parseFloat(n.value)) : n.condition === "less_than" ? e = e.filter((r) => v(r, n.field) && parseFloat(v(r, n.field)) < parseFloat(n.value)) : n.condition === "less_than_equal" && (e = e.filter((r) => v(r, n.field) && parseFloat(v(r, n.field)) <= parseFloat(n.value)))) : n.type === "date" ? (n.value && !n.condition && (n.condition = "equal"), n.condition === "equal" ? e = e.filter((r) => v(r, n.field) && le(v(r, n.field)) === n.value) : n.condition === "not_equal" ? e = e.filter((r) => v(r, n.field) && le(v(r, n.field)) !== n.value) : n.condition === "greater_than" ? e = e.filter((r) => v(r, n.field) && le(v(r, n.field)) > n.value) : n.condition === "less_than" && (e = e.filter((r) => v(r, n.field) && le(v(r, n.field)) < n.value))) : n.type === "bool" && (e = e.filter((r) => v(r, n.field) === n.value)), n.condition === "is_null" ? (e = e.filter((r) => v(r, n.field) == null || v(r, n.field) == ""), n.value = "") : n.condition === "is_not_null" && (n.value = "", e = e.filter((r) => v(r, n.field))));
        }), N.value && (e == null ? void 0 : e.length)) {
          let n = [];
          const r = (l.columns || []).filter((m) => m.search && !m.hide).map((m) => m.field);
          for (var a = 0; a < (e == null ? void 0 : e.length); a++)
            for (var s = 0; s < r.length; s++)
              if ((W = v(e[a], r[s])) != null && W.toString().toLowerCase().includes(N.value.toLowerCase())) {
                n.push(e[a]);
                break;
              }
          e = n;
        }
        var g = new Intl.Collator(void 0, {
          numeric: ((me = l.columns.find((n) => n.field == f.value)) == null ? void 0 : me.type) === "number",
          sensitivity: "base"
        });
        const He = A.value === "desc" ? -1 : 1;
        e.sort((n, r) => {
          var _e, ye;
          const m = (_e = f.value) == null ? void 0 : _e.split(".").reduce((V, ae) => V == null ? void 0 : V[ae], n), Oe = (ye = f.value) == null ? void 0 : ye.split(".").reduce((V, ae) => V == null ? void 0 : V[ae], r);
          return g.compare(m, Oe) * He;
        });
      }
      return e;
    }, H = () => {
      let e = [], a = ue();
      l.isServerMode ? ($.value = l.totalRows || 0, e = a) : ($.value = (a == null ? void 0 : a.length) || 0, e = a.slice(_.value - 1, re.value)), S.value = e || [];
    };
    watch(
      () => l.loading,
      () => {
        B.value = l.loading;
      }
    );
    const ce = (e) => {
      e ? R.value === e.field ? R.value = null : R.value = e.field : R.value = null;
    }, xe = () => {
      if (o.value == 1)
        return false;
      o.value--;
    }, qe = (e) => {
      o.value = e;
    }, Me = () => {
      if (o.value >= M.value)
        return false;
      o.value++;
    };
    watch(() => o.value, () => {
      D(false), l.isServerMode ? G("page") : (H(), t("pageChange", o.value));
    }), watch(() => l.rows, () => {
      l.isServerMode || (o.value = 1), D(false), H();
    }), watch(() => h.value, () => {
      D(false), l.isServerMode ? o.value === 1 ? G("pagesize", true) : o.value = 1 : (o.value = 1, H(), t("pageSizeChange", h.value));
    });
    const he = (e) => {
      let a = "asc";
      e == f.value && A.value === "asc" && (a = "desc");
      let s = (o.value - 1) * h.value, g = h.value;
      f.value = e, A.value = a, D(false), H(), l.isServerMode ? G("sort") : t("sortChange", { offset: s, limit: g, field: e, direction: a });
    }, de = (e) => {
      I.value = e.length && S.value.length && e.length === S.value.length;
      const a = S.value.filter((s, g) => L.value.includes(k.value ? s[k.value] : g));
      t("rowSelect", a);
    };
    watch(() => L.value, de);
    const D = (e) => {
      e ? L.value = S.value.map((a, s) => k.value ? a[k.value] : s) : L.value = [];
    }, ve = () => {
      D(false), l.isServerMode ? o.value === 1 ? G("filter", true) : o.value = 1 : (o.value = 1, H(), t("filterChange", l.columns));
    }, ze = () => {
      D(false), l.isServerMode ? o.value === 1 ? G("search", true) : o.value = 1 : (o.value = 1, H(), t("searchChange", N.value));
    };
    watch(
      () => l.search,
      () => {
        N.value = l.search, ze();
      }
    );
    const v = (e, a) => a == null ? void 0 : a.split(".").reduce((s, g) => s == null ? void 0 : s[g], e), le = (e) => {
      try {
        if (!e)
          return "";
        const a = new Date(e), s = a.getDate(), g = a.getMonth() + 1;
        return a.getFullYear() + "-" + (g > 9 ? g : "0" + g) + "-" + (s > 9 ? s : "0" + s);
      } catch {
      }
      return "";
    }, Ae = (e, a) => {
      P.value++, P.value === 1 ? J.value = setTimeout(() => {
        P.value = 0, l.selectRowOnClick && (ne(a) ? ge(a) : fe(a), de(L.value)), t("rowClick", e);
      }, ee.value) : P.value === 2 && (clearTimeout(J.value), P.value = 0, t("rowDBClick", e));
    }, G = (e, a = false) => {
      if (l.isServerMode) {
        Be();
        const s = {
          current_page: a ? 1 : o.value,
          pagesize: h.value,
          offset: (o.value - 1) * h.value,
          sort_column: f.value,
          sort_direction: A.value,
          search: N.value,
          column_filters: l.columns,
          change_type: e
        };
        t("change", s);
      }
    }, Be = () => {
      for (let e = 0; e < l.columns.length; e++) {
        let a = l.columns[e];
        a.filter && (a.value !== void 0 && a.value !== null && a.value !== "" || a.condition === "is_null" || a.condition === "is_not_null") && (a.type === "string" && a.value && !a.condition && (a.condition = "contain"), a.type === "number" && a.value && !a.condition && (a.condition = "equal"), a.type === "date" && a.value && !a.condition && (a.condition = "equal"));
      }
    }, Ne = () => {
      D(false);
      for (let e = 0; e < l.columns.length; e++)
        l.columns[e] = j[e];
      N.value = "", h.value = T, f.value = X, A.value = Z, l.isServerMode ? o.value === 1 ? G("reset", true) : o.value = 1 : (o.value = 1, H());
    }, Re = () => S.value.filter((a, s) => L.value.includes(k.value ? a[k.value] : s)), De = () => l.columns, Pe = () => {
      L.value = [];
    }, fe = (e) => {
      if (!ne(e)) {
        const a = S.value.find((s, g) => g === e);
        L.value.push(k.value ? a[k.value] : e);
      }
    }, ge = (e) => {
      if (ne(e)) {
        const a = S.value.find((s, g) => g === e);
        L.value = L.value.filter((s) => s !== (k.value ? a[k.value] : e));
      }
    }, ne = (e) => {
      const a = S.value.find((s, g) => g === e);
      return a ? L.value.includes(k.value ? a[k.value] : e) : false;
    };
    return (e, a) => (openBlock(), createElementBlock("div", At, [
      createBaseVNode("div", {
        class: normalizeClass(["bh-table-responsive", { "bh-min-h-[300px]": B.value }]),
        style: normalizeStyle({ height: l.stickyHeader && l.height })
      }, [
        createBaseVNode("table", {
          class: normalizeClass([l.skin])
        }, [
          createBaseVNode("thead", {
            class: normalizeClass({ "bh-sticky bh-top-0 bh-z-10": l.stickyHeader })
          }, [
            createVNode(Ce, {
              all: l,
              currentSortColumn: f.value,
              currentSortDirection: A.value,
              isOpenFilter: R.value,
              checkAll: I.value,
              columnFilterLang: l.columnFilterLang,
              onSelectAll: D,
              onSortChange: he,
              onFilterChange: ve,
              onToggleFilterMenu: ce
            }, null, 8, ["currentSortColumn", "currentSortDirection", "isOpenFilter", "checkAll", "columnFilterLang"])
          ], 2),
          createBaseVNode("tbody", null, [
            $.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(S.value, (s, g) => (openBlock(), createElementBlock("tr", {
              key: s[unref(k)] ? s[unref(k)] : g,
              class: normalizeClass([typeof l.rowClass == "function" ? w.rowClass(s) : l.rowClass, l.selectRowOnClick ? "bh-cursor-pointer" : ""]),
              onClick: withModifiers((F) => Ae(s, g), ["prevent"])
            }, [
              l.hasCheckbox ? (openBlock(), createElementBlock("td", {
                key: 0,
                class: normalizeClass({
                  "bh-sticky bh-left-0 bh-bg-blue-light": l.stickyFirstColumn
                })
              }, [
                createBaseVNode("div", Nt, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": a[0] || (a[0] = (F) => L.value = F),
                    type: "checkbox",
                    value: s[unref(k)] ? s[unref(k)] : g,
                    onClick: a[1] || (a[1] = withModifiers(() => {
                    }, ["stop"]))
                  }, null, 8, Rt), [
                    [vModelCheckbox, L.value]
                  ]),
                  createBaseVNode("div", null, [
                    createVNode(Se, { class: "check" })
                  ])
                ])
              ], 2)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(l.columns, (F, W) => (openBlock(), createElementBlock(Fragment, null, [
                F.hide ? createCommentVNode("", true) : (openBlock(), createElementBlock("td", {
                  key: F.field,
                  class: normalizeClass([
                    typeof l.cellClass == "function" ? w.cellClass(s) : l.cellClass,
                    W === 0 && l.stickyFirstColumn ? "bh-sticky bh-left-0 bh-bg-blue-light" : "",
                    l.hasCheckbox && W === 0 && l.stickyFirstColumn ? "bh-left-[52px]" : "",
                    F.cellClass ? F.cellClass : ""
                  ])
                }, [
                  unref(b)[F.field] ? renderSlot(e.$slots, F.field, {
                    key: 0,
                    value: s
                  }) : F.cellRenderer ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    innerHTML: F.cellRenderer(s)
                  }, null, 8, Dt)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    createTextVNode(toDisplayString(v(s, F.field)), 1)
                  ], 64))
                ], 2))
              ], 64))), 256))
            ], 10, Bt))), 128)) : createCommentVNode("", true),
            !$.value && !B.value ? (openBlock(), createElementBlock("tr", Pt, [
              createBaseVNode("td", {
                colspan: l.columns.length + 1
              }, toDisplayString(l.noDataContent), 9, Ht)
            ])) : createCommentVNode("", true),
            !$.value && B.value ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(l.pageSize, (s) => (openBlock(), createElementBlock("tr", {
              key: s,
              class: "!bh-bg-white bh-h-11 !bh-border-transparent"
            }, [
              createBaseVNode("td", {
                colspan: l.columns.length + 1,
                class: "!bh-p-0 !bh-border-transparent"
              }, Vt, 8, Ot)
            ]))), 128)) : createCommentVNode("", true)
          ]),
          l.cloneHeaderInFooter ? (openBlock(), createElementBlock("tfoot", {
            key: 0,
            class: normalizeClass({ "bh-sticky bh-bottom-0": l.stickyHeader })
          }, [
            createVNode(Ce, {
              all: l,
              currentSortColumn: f.value,
              currentSortDirection: A.value,
              isOpenFilter: R.value,
              isFooter: true,
              checkAll: I.value,
              onSelectAll: D,
              onSortChange: he,
              onFilterChange: ve,
              onToggleFilterMenu: ce
            }, null, 8, ["currentSortColumn", "currentSortDirection", "isOpenFilter", "checkAll"])
          ], 2)) : createCommentVNode("", true)
        ], 2),
        $.value && B.value ? (openBlock(), createElementBlock("div", Ut, [
          createVNode(zt)
        ])) : createCommentVNode("", true)
      ], 6),
      l.pagination && $.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["bh-pagination bh-py-5", { "bh-pointer-events-none": B.value }])
      }, [
        createBaseVNode("div", Et, [
          createBaseVNode("div", It, [
            createBaseVNode("span", Gt, toDisplayString(te(l.paginationInfo, $.value ? unref(_) : 0, unref(re), $.value)), 1),
            l.showPageSize ? withDirectives((openBlock(), createElementBlock("select", {
              key: 0,
              "onUpdate:modelValue": a[2] || (a[2] = (s) => h.value = s),
              class: "bh-pagesize"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(l.pageSizeOptions, (s) => (openBlock(), createElementBlock("option", {
                value: s,
                key: s
              }, toDisplayString(s), 9, Kt))), 128))
            ], 512)), [
              [vModelSelect, h.value]
            ]) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", Jt, [
            l.showFirstPage ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: normalizeClass(["bh-page-item first-page", { disabled: o.value <= 1 }]),
              onClick: a[3] || (a[3] = (s) => o.value = 1)
            }, [
              l.firstArrow ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: l.firstArrow
              }, null, 8, Wt)) : (openBlock(), createElementBlock("svg", Yt, Xt))
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass(["bh-page-item previous-page", { disabled: o.value <= 1 }]),
              onClick: xe
            }, [
              l.previousArrow ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: l.previousArrow
              }, null, 8, Zt)) : (openBlock(), createElementBlock("svg", jt, tl))
            ], 2),
            l.showNumbers ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref($e), (s) => (openBlock(), createElementBlock("button", {
              key: s,
              type: "button",
              class: normalizeClass(["bh-page-item", {
                disabled: o.value === s,
                "bh-active": s === o.value
              }]),
              onClick: (g) => qe(s)
            }, toDisplayString(s), 11, ll))), 128)) : createCommentVNode("", true),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass(["bh-page-item next-page", { disabled: o.value >= unref(M) }]),
              onClick: Me
            }, [
              l.nextArrow ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: l.nextArrow
              }, null, 8, nl)) : (openBlock(), createElementBlock("svg", ol, il))
            ], 2),
            l.showLastPage ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              class: normalizeClass(["bh-page-item last-page", { disabled: o.value >= unref(M) }]),
              onClick: a[4] || (a[4] = (s) => o.value = unref(M))
            }, [
              l.lastArrow ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: l.lastArrow
              }, null, 8, sl)) : (openBlock(), createElementBlock("svg", rl, cl))
            ], 2)) : createCommentVNode("", true)
          ])
        ])
      ], 2)) : createCommentVNode("", true)
    ]));
  }
});
export {
  gl as default
};
//# sourceMappingURL=@bhplugin_vue3-datatable.js.map