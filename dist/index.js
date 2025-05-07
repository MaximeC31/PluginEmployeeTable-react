import React, { useState } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var EmployeeTable = function EmployeeTable(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data;
  var _useState = useState(10),
    _useState2 = _slicedToArray(_useState, 2),
    rows = _useState2[0],
    setRows = _useState2[1];
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var handleRowsChange = function handleRowsChange(e) {
    setRows(Number(e.target.value));
    setCurrentPage(1);
  };
  var filteredEmployees = data === null || data === void 0 ? void 0 : data.filter(function (employee) {
    var searchString = searchValue.toLowerCase();
    return Object.values(employee).some(function (value) {
      return String(value).toLowerCase().includes(searchString);
    });
  });
  var totalPages = Math.ceil(((filteredEmployees === null || filteredEmployees === void 0 ? void 0 : filteredEmployees.length) || 0) / rows);
  var startIndex = (currentPage - 1) * rows;
  var endIndex = startIndex + rows;
  var displayedEmployees = (filteredEmployees === null || filteredEmployees === void 0 ? void 0 : filteredEmployees.slice(startIndex, endIndex)) || [];
  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  var handleNextPage = function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "employee__table-wrapper",
    id: "employee-table_wrapper"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "employee__title"
  }, "Current Employees"), /*#__PURE__*/React.createElement("div", {
    className: "employee__table-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "employee__length",
    id: "employee-table_length"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "employee-table_length",
    className: "employee__length-label"
  }, "Show", /*#__PURE__*/React.createElement("select", {
    name: "employee-table_length",
    "aria-controls": "employee-table",
    className: "employee__length-select",
    value: rows,
    onChange: handleRowsChange
  }, /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "100"
  }, "100")), "entries")), /*#__PURE__*/React.createElement("div", {
    className: "employee__filter",
    id: "employee-table_filter"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "employee-table_filter",
    className: "employee__filter-label"
  }, "Search:", /*#__PURE__*/React.createElement("input", {
    type: "search",
    "aria-controls": "employee-table",
    className: "employee__filter-input",
    value: searchValue,
    onChange: function onChange(e) {
      setSearchValue(e.target.value);
      setCurrentPage(1);
    }
  })))), /*#__PURE__*/React.createElement("table", {
    id: "employee-table",
    className: "employee__table display dataTable no-footer",
    role: "grid",
    "aria-describedby": "employee-table_info"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "employee__table-head"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "employee__table-row"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "First Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "Last Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "Start Date"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "Department"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "Date of Birth"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "Street"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "City"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "State"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "employee__table-header-cell"
  }, "Zip Code"))), /*#__PURE__*/React.createElement("tbody", {
    className: "employee__table-body"
  }, displayedEmployees.map(function (employee, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: index,
      className: "employee__table-row"
    }, /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.firstName), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.lastName), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.startDate), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.department), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.dateOfBirth), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.street), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.city), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.state), /*#__PURE__*/React.createElement("td", {
      className: "employee__table-cell"
    }, employee.zipCode));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "employee__info",
    id: "employee-table_info",
    role: "status",
    "aria-live": "polite"
  }, "Showing ", displayedEmployees.length, " of ", (filteredEmployees === null || filteredEmployees === void 0 ? void 0 : filteredEmployees.length) || 0, " entries"), /*#__PURE__*/React.createElement("div", {
    className: "employee__paginate paging_simple_numbers",
    id: "employee-table_paginate"
  }, /*#__PURE__*/React.createElement("button", {
    className: "paginate_button previous employee__paginate-button employee__paginate-button--previous",
    "aria-controls": "employee-table",
    onClick: handlePreviousPage,
    disabled: currentPage === 1
  }, "Previous"), /*#__PURE__*/React.createElement("span", {
    className: "employee__paginate-pages"
  }, /*#__PURE__*/React.createElement("button", {
    className: "paginate_button current employee__paginate-button employee__paginate-button--current",
    "aria-controls": "employee-table"
  }, currentPage)), /*#__PURE__*/React.createElement("button", {
    className: "paginate_button next employee__paginate-button employee__paginate-button--next",
    "aria-controls": "employee-table",
    onClick: handleNextPage,
    disabled: currentPage === totalPages
  }, "Next")));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root{--spacing-3:0.75rem;--spacing-6:1.5rem;--spacing-8:2rem;--border-width:1px;--color-text:#1f2937;--color-background:#fff;--color-border:#e5e7eb;--font-size-sm:0.875rem;--font-size-2xl:1.5rem;--font-size-3xl:1.875rem}.employee__table-wrapper{overflow-x:auto;padding:var(--spacing-8) 0}.employee__title{margin-bottom:var(--spacing-6)}.employee__table-header{align-items:center;display:flex;justify-content:space-between}.employee__filter,.employee__length{display:inline-block;margin-bottom:var(--spacing-6);margin-right:var(--spacing-6)}.employee__filter-label,.employee__length-label{align-items:center;display:flex;gap:var(--spacing-3)}.employee__table{border:var(--border-width) solid var(--color-text);border-collapse:collapse;width:100%}.employee__table-head{background:var(--color-text);color:var(--color-background)}tr.employee__table-row:not(:last-child){border-bottom:var(--border-width) solid var(--color-border)}.employee__table td,.employee__table th{padding:var(--spacing-3);text-align:left}.employee__info{font-size:var(--font-size-sm);margin-top:var(--spacing-6)}.employee__paginate{display:flex;gap:var(--spacing-3);justify-content:flex-end;margin-top:var(--spacing-6)}.paginate_button{background:var(--color-text);color:var(--color-background)}.paginate_button:disabled{cursor:not-allowed;opacity:.25}@media (max-width:768px){.employee__filter,.employee__length{display:block}.employee__title{font-size:var(--font-size-3xl)}}@media (max-width:425px){.employee__title{font-size:var(--font-size-2xl)}}";
styleInject(css_248z);

export { EmployeeTable };
//# sourceMappingURL=index.js.map
