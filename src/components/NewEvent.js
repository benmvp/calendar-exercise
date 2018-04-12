import React, {PureComponent, PropTypes} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import NewEventForm from './NewEventForm';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
import {addEvent} from '../actions';

class NewEvent extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        _handleSubmitForm: PropTypes.func.isRequired,
    }

    state = {
        open: false,
    };

    _handleClickOpen = () => {
        this.setState({open: true});
    };
    
    _handleClose = () => {
        this.setState({open: false});
    };

    render() {
        let {title, description, date, start, _handleSubmitForm} = this.props;

        return (
            <div className="new-event">
                <Button 
                    mini={true} color="secondary" 
                    variant="fab" 
                    onClick={this._handleClickOpen}
                >
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this._handleClose}
                >
                    <DialogTitle id="form-dialog-title">Create an Event</DialogTitle>
                    <DialogContent>
                        <NewEventForm />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={() => {
                                _handleSubmitForm(title, description, date, start);
                                this._handleClose();
                            }} 
                            color="primary"
                        >
                            SAVE
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.input.title,
    description: state.input.description,
    date: state.input.inputDate,
    start: state.input.start,
});

const mapDispatchToProps = (dispatch) => ({
    _handleSubmitForm: (title, description, date, start) => {
        let startDate = `${date} ${start}`;

        startDate = Date.parse(startDate);
        dispatch(addEvent(title, description, startDate));
    },
});

NewEvent = connect(mapStateToProps, mapDispatchToProps)(NewEvent);

export default NewEvent;

