import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default class AddModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState(prevState => ({
            modal: !prevState.Modal
        }));
    }

    render(){
        return(
            <div>
            {/* <Button color="primary" onClick={this.toggleModal}>{this.props.toggleButton}</Button> */}
            <Modal isOpen={this.state.modal} modalTransition={{ timeout: 600 }} backdropTransition={{ timeout: 1200 }}
            toggleModal={this.toggleModal} className={this.props.className}>
            <ModalHeader toggleModal={this.toggleModal}>Tenant Details</ModalHeader> 
            <ModalBody>
                Tenant Details:
            </ModalBody>
            <ModalFooter>
                <Button color="info" onClick={this.toggleModal}>Submit</Button>
                <Button color="secondary" onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
            </Modal>
            </div>
        );  
    }
}