import { useSelector, useDispatch } from 'react-redux';

// types
import { IState } from '../models/app';

// actions
import { showError } from '../redux/app.slice';

function ModalError() {
  const modalError = useSelector((state: IState) => state.app.modalError);
  const dispatch = useDispatch();

  function handleHideModal() {
    dispatch(showError({ isOpen: false, content: '' }));
  }

  return (
    <div className="modal" style={{ display: modalError.isOpen ? 'block' : 'none' }}>
      <div className="modal__overlay" onClick={handleHideModal} />
      <div className="modal__content">
        <div className="modal__content__header">
          <h2>Error</h2>
          <span className="modal__close" onClick={handleHideModal}>&times;</span>
        </div>
        <div className="modal__content__body">
          {modalError.content}
        </div>
      </div>

    </div>
  );
}

export default ModalError;
