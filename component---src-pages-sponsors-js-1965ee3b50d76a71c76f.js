(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    GxIa: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return u;
        });
      var n = a("q1tI"),
        r = a.n(n),
        o = a("Bl7J"),
        i = a("vOnD");
      var l = i.a.div.withConfig({
          displayName: "Card__CardWrap",
          componentId: "bdeyg0-0"
        })([
          "box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;height:100%!important;"
        ]),
        c = i.a.h1.withConfig({
          displayName: "Card__CardHeader",
          componentId: "bdeyg0-1"
        })(["font-weight:bold;text-align:center;line-height:20px!important;"]),
        p = i.a.i.withConfig({
          displayName: "Card__CardIcon",
          componentId: "bdeyg0-2"
        })(["color:", ";"], function(e) {
          return e.iconColor || "black";
        }),
        s = i.a.div.withConfig({
          displayName: "Card__CardContent",
          componentId: "bdeyg0-3"
        })(["padding:40px 1em 1em 1em;"]),
        m = (function(e) {
          var t, a;
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            (a = e),
            ((t = n).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            (n.prototype.render = function() {
              return r.a.createElement(
                l,
                null,
                r.a.createElement(
                  "section",
                  { className: "main style2 special" },
                  r.a.createElement(c, null, this.props.title),
                  r.a.createElement(
                    c,
                    null,
                    r.a.createElement(p, {
                      iconColor: this.props.iconColor,
                      className: this.props.icon
                    })
                  )
                ),
                r.a.createElement(
                  s,
                  null,
                  r.a.createElement("div", {
                    dangerouslySetInnerHTML: { __html: this.props.content }
                  })
                )
              );
            }),
            n
          );
        })(r.a.Component);
      var d = (function(e) {
          var t, a;
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            (a = e),
            ((t = n).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            (n.prototype.render = function() {
              var e = this.props.data.sponsorsOffers.nodes.map(function(e) {
                return r.a.createElement(
                  "div",
                  { className: "col-6" },
                  r.a.createElement(m, {
                    icon: e.frontmatter.icon,
                    iconColor: e.frontmatter.iconColor,
                    title: e.frontmatter.title,
                    content: e.html
                  })
                );
              });
              return r.a.createElement(
                o.a,
                { displayHeader: "false" },
                r.a.createElement(
                  "div",
                  { className: "grid-wrapper" },
                  r.a.createElement(
                    "div",
                    { className: "col-12" },
                    r.a.createElement(
                      "section",
                      { className: "main style1" },
                      r.a.createElement(
                        "header",
                        { className: "major" },
                        r.a.createElement(
                          "h2",
                          null,
                          this.props.data.sponsorsPage.childMarkdownRemark
                            .frontmatter.title
                        )
                      ),
                      r.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: this.props.data.sponsorsPage
                            .childMarkdownRemark.html
                        }
                      })
                    )
                  ),
                  e,
                  r.a.createElement("br", null)
                )
              );
            }),
            n
          );
        })(r.a.Component),
        u = ((t.default = d), "749414036");
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-1965ee3b50d76a71c76f.js.map
