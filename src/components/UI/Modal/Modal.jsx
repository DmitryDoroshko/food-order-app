import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onHide}></div>;
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onHide={props.onHide} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}

export default Modal;
