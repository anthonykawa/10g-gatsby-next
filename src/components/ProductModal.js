import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ProductModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;
        const features = item.features;
        const title = item.title;
        const description = item.description;
        const image = item.mainImage;
        const pbLink = item.pb_link;
        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle(0)}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{ title }</h5>
                            <button onClick={this.props.toggle(0)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="image-container">
                                <img className="img-fluid" src={ image } />
                            </div>
                            <h6>Features</h6>
                            <ul>
                                {features.map((feature, id) => {
                                    return (
                                        <li key={id}>{feature}</li>
                                    )
                                })}
                            </ul>
                            <h6>Description</h6>
                            <p>{ description }</p>
                            <h6>Product Brief</h6>
                            <a href={ pbLink } target="_blank">Click to download</a>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}