// Redux
import { resetMessage } from "../slices/photoSlice";

export const useReseComponentMessage = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000)
    };
};