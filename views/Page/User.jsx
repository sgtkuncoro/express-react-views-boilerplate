var React = require("react");
var PropTypes = require("prop-types");
var Layout = require("../Layout/Layout");

class User extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
        <p>This is Home Page</p>
      </Layout>
    );
  }
}

User.propTypes = {
  title: PropTypes.string
};

module.exports = User;
