(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    GxIa: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return u;
        });
      var r = n("q1tI"),
        a = n.n(r),
        o = n("Bl7J"),
        i = n("vOnD");
      var c = i.a.div.withConfig({
          displayName: "Card__CardWrap",
          componentId: "bdeyg0-0"
        })([
          "box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;padding:0.2em 1em 0em 1em;"
        ]),
        p = i.a.h1.withConfig({
          displayName: "Card__CardHeader",
          componentId: "bdeyg0-1"
        })(["font-weight:bold;text-align:center;"]),
        l = i.a.i.withConfig({
          displayName: "Card__CardIcon",
          componentId: "bdeyg0-2"
        })(["color:", ";"], function(e) {
          return e.iconColor || "black";
        }),
        s = i.a.div.withConfig({
          displayName: "Card__CardContent",
          componentId: "bdeyg0-3"
        })([""]),
        d = (function(e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function() {
              return a.a.createElement(
                c,
                null,
                a.a.createElement(
                  p,
                  null,
                  a.a.createElement(l, {
                    iconColor: this.props.iconColor,
                    className: this.props.icon
                  }),
                  " ",
                  this.props.title
                ),
                a.a.createElement(
                  s,
                  null,
                  a.a.createElement("div", {
                    dangerouslySetInnerHTML: { __html: this.props.content }
                  })
                )
              );
            }),
            r
          );
        })(a.a.Component);
      var m = (function(e) {
          var t, n;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.prototype.render = function() {
              var e = this.props.data.sponsorsOffers.nodes.map(function(e) {
                return a.a.createElement(
                  "div",
                  { className: "col-6" },
                  a.a.createElement(d, {
                    icon: e.frontmatter.icon,
                    iconColor: e.frontmatter.iconColor,
                    title: e.frontmatter.title,
                    content: e.html
                  })
                );
              });
              return a.a.createElement(
                o.a,
                { displayHeader: "false" },
                a.a.createElement(
                  "div",
                  { className: "grid-wrapper" },
                  a.a.createElement(
                    "div",
                    { className: "col-12" },
                    a.a.createElement(
                      "section",
                      { id: "one", className: "main style1" },
                      a.a.createElement(
                        "header",
                        { className: "major" },
                        a.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.title
                        )
                      ),
                      a.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: this.props.data.sponsorsPage
                            .childMarkdownRemark.html
                        }
                      })
                    )
                  ),
                  e
                )
              );
            }),
            r
          );
        })(a.a.Component),
        u = ((t.default = m), "749414036");
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-edfd2e1e15fb94a75336.js.map