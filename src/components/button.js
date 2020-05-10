const createReactClass = require("create-react-class");
const React = require("react");
const h = React.createElement;
const Button = createReactClass({
    render: function () {
        const attributes = {
            className: 'button',
        };
        if (this.props.isSecondary) attributes.className += ' is-secondary'
        return h("button", attributes, this.props.children);
    },
});
module.exports = Button
