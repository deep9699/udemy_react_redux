import _ from "lodash";
import { 
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    EDIT_STREAMS,
    DELETE_STREAMS
 } from "../actions/types";


 export default (state={},action)=>{
     switch(action.type)
     {
         case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload};

        case FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')};

        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload};

        case EDIT_STREAMS:
            return {...state,[action.payload.id]:action.payload};

        case DELETE_STREAMS:
            return _.omit(state,action.payload);

        default :
            return state;
     }
 }