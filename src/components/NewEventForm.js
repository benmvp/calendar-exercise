import React, {PureComponent, PropTypes}from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {changeInput} from '../actions';


const styles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 20,
        width: 200,
    },
    textFieldLong: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 415,
    },
});

class NewEventForm extends PureComponent {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    }

    render() {
        const {classes, dispatch} = this.props;

        return (
            <form className={classes.container} noValidate={true} autoComplete={true}>
                <TextField
                    id="Title"
                    label="Add Title"
                    className={classes.textFieldLong}
                    onChange={(e) => {
                        dispatch(changeInput('title', e.target.value));
                    }}
                    margin="normal"
                />
                <TextField
                    id="Description"
                    label="Description..."
                    className={classes.textFieldLong}
                    onChange={(e) => {
                        dispatch(changeInput('description', e.target.value));
                    }}
                    margin="normal"
                    multiline={true}
                />
                <TextField
                    id="date"
                    label="Pick a date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        dispatch(changeInput('date', e.target.value));
                    }}
                />
                <TextField
                    id="time"
                    label="Start Time"
                    type="time"
                    defaultValue="01:00"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        // 60 min
                        step: 3600, 
                    }}
                    onChange={(e) => {
                        dispatch(changeInput('start', e.target.value));
                    }}
                />
            </form>
        );
    }
}

NewEventForm = connect()(NewEventForm);
export default withStyles(styles)(NewEventForm);