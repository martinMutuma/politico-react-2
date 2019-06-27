import actionTypes from "../actionTypes";

const storeListCandidates = candidates => {
  return {
    type: actionTypes.LIST_CANDIDATES,
    payload: [...candidates]
  };
};
export default storeListCandidates;
