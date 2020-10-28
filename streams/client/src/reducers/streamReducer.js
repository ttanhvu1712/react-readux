import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/type";
import { mapKeys, omit } from "lodash";

export default (streams = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...streams, ...mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...streams, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return omit(streams, action.payload);
    default:
      return streams;
  }
};
