import { useSelector } from 'react-redux';

// types
import { IState } from '../models/app';

function Loading() {
  const isSpinner = useSelector((state: IState) => state.app.isSpinner);

  if (!isSpinner) return null;

  return (

    <div className="loader_container">
      <div className="loader_position">
        <div className="loader" />
      </div>
    </div>
  );
}

export default Loading;
