var React = require("react");
var PropTypes = require("prop-types");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: ` // inline javascript `
            }}
          />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string
};

module.exports = Layout;
