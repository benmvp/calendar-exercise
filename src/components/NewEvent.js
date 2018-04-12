import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import NewEventForm from './NewEventForm';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
import {addEvent} from '../actions';

class NewEvent extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let {title, description, date, start, submitForm} = this.props;
        return (
            <div className="new-event">
                <Button 
                    mini color="secondary" 
                    variant="fab" 
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="form-dialog-title">Create an Event</DialogTitle>
                    <DialogContent>
                        <NewEventForm />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={() => {
                              submitForm(title, description, date, start);
                              this.handleClose();
                            }} 
                            color="primary">
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
  submitForm: (title, description, date, start) => {
    let startDate = `${date} ${start}`;
    startDate = Date.parse(startDate);
    dispatch(addEvent(title, description, startDate));
  }
});

NewEvent = connect(mapStateToProps, mapDispatchToProps)(NewEvent)

export default NewEvent;



