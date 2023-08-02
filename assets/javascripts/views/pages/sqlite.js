/*
 * decaffeinate suggestions:
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
//= require views/pages/base

app.views.SqlitePage = class SqlitePage extends app.views.BasePage {
  constructor() {
    super();
    this.init();
    this.refreshElements();
  }

  static initClass() {
    this.events = { click: "onClick" };
  }

  init() {
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    let el, id;
    if (!(id = event.target.getAttribute("data-toggle"))) {
      return;
    }
    if (!(el = this.find(`#${id}`))) {
      return;
    }
    $.stopEvent(event);
    if (el.style.display === "none") {
      el.style.display = "block";
      event.target.textContent = "hide";
    } else {
      el.style.display = "none";
      event.target.textContent = "show";
    }
  }
};
app.views.SqlitePage.initClass();
