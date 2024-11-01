import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import UIActions from 'src/stores/alt/actions/UIActions';

function NavigationModal({
  show, title, component, customModal, ...props
}) {
  if (component == null) return null;
  const Component = component;

  return (
    <Modal
      centered
      dialogClassName={customModal}
      animation={false}
      show={show}
      onHide={() => UIActions.hideModal()}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Component onHide={() => UIActions.hideModal()} {...props} />
      </Modal.Body>
    </Modal>
  );
}

NavigationModal.propTypes = {
  show: PropTypes.bool,
  customModal: PropTypes.string,
  component: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
};

NavigationModal.defaultProps = {
  show: false,
  customModal: '',
  component: null,
  title: '',
};

export default NavigationModal;
