import React from "react";
import { Modal } from "react-bootstrap-modal";
import "./Modal.css";


class ModalExample extends React.Component {
 
  render(){
  //   let closeModal = () => this.setState({ open: false })
 
  //   let saveAndClose = () => {
  //     api.saveData()
  //       .then(() => this.setState({ open: false }))
  //   }
 
    return (
  //     <div>
  //       <button type='button'>Launch modal</button>
 
  //       <Modal
  //         show={this.state.open}
  //         onHide={closeModal}
  //         aria-labelledby="ModalHeader"
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <p>Some Content here</p>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           // If you don't have anything fancy to do you can use
  //           // the convenient `Dismiss` component, it will
  //           // trigger `onHide` when clicked
  //           <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
 
  //           // Or you can create your own dismiss buttons
  //           <button className='btn btn-primary' onClick={saveAndClose}>
  //             Save
  //           </button>
  //         </Modal.Footer>
  //       </Modal>
  //     </div>
    )
  }
}










// class Modal extends React.Component {
//   render() {
//     if (this.props.isOpen === false)
//       return null

//     let modalStyle = {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       zIndex: '9999',
//       background: '#fff'
//     }

//     if (this.props.width && this.props.height) {
//       modalStyle.width = this.props.width + 'px'
//       modalStyle.height = this.props.height + 'px'
//       modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
//       modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
//       modalStyle.transform = null
//     }

//     if (this.props.style) {
//       for (let key in this.props.style) {
//         modalStyle[key] = this.props.style[key]
//       }
//     }

//     let backdropStyle = {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       top: '0px',
//       left: '0px',
//       zIndex: '9998',
//       background: 'rgba(0, 0, 0, 0.3)'
//     }

//     if (this.props.backdropStyle) {
//       for (let key in this.props.backdropStyle) {
//         backdropStyle[key] = this.props.backdropStyle[key]
//       }
//     }

//     return (
//       <div className={this.props.containerClassName}>
//         <div className={this.props.className} style={modalStyle}>
//           {this.props.children}
//         </div>
//         {!this.props.noBackdrop &&
//             <div className={this.props.backdropClassName} style={backdropStyle}
//                  onClick={e => this.close(e)}/>}
//       </div>
//     )
//   }

//   close(e) {
//     e.preventDefault()

//     if (this.props.onClose) {
//       this.props.onClose()
//     }
//   }
// }

export default Modal;