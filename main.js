/** @jsx React.DOM */
var _mountNode = document.getElementById('app');

var Pollster = React.createClass({
    render: function () {
        return (
            <table>
                <Header />
                <ListBox /> 
            </table>
        );
    }
});

/* ============================== */
/* =========== HEADER =========== */
/* ============================== */

var Header = React.createClass({
    render: function () {
        return (
            <thead>
                <HeaderLabel option="Strongly Disagree" />
                <HeaderLabel option="Disagree" />
                <HeaderTitle title="Survey title" subtitle="Survey subtitle" />
                <HeaderLabel option="Agree" />
                <HeaderLabel option="Strongly Agree" />
            </thead>
        );
    }
});

var HeaderLabel = React.createClass({
    render: function () {
        return <th>{this.props.option}</th>;
    }
});

var HeaderTitle = React.createClass({
    render: function () {
        return (
            <th>
                <span>{this.props.title}</span><br />
                <span>{this.props.subtitle}</span>
            </th>
        );
    }
});

/* ================================= */
/* =========== ITEM LIST =========== */
/* ================================= */

var ListBox = React.createClass({
    test: function() { console.log("test!"); },
    // getInitialState: function () {

    // },
    componentWillMount: function () {
        this.test();
    },
    render: function () {
        return (
            <ListItem 
                question = "Survey question"
                stronglyDisagree = "33" 
                disagree = "23"
                agree = "20"
                stronglyAgree = "30" />
        );
    }
});

var ListItem = React.createClass({
    componentWillMount: function () {
        this.setState({question: this.props.question}); // this.state.question = this.props.question
    },
    render: function () {
        return (
            <tbody>
                <tr>
                    <ItemResponse votes={this.props.stronglyDisagree} />
                    <ItemResponse votes={this.props.disagree} />
                    <ItemQuestion question={this.state.question} />
                    <ItemResponse votes={this.props.agree} />
                    <ItemResponse votes={this.props.stronglyAgree} />
                </tr>
            </tbody>
        );
    }
});

var ItemResponse = React.createClass({
    render: function () {
        return <td>{this.props.votes}</td>
    }
});

var ItemQuestion = React.createClass({
    render: function() {
        return <td><input value={this.props.question} /></td>;
    }
});

React.renderComponent(<Pollster />, _mountNode);