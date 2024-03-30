let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
    // destructuring을 이용해 action.를 생략할 수 있음
    const { type, payload } = action
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_BY_USERNAME":
        return {
            ...state, keyword: payload.keyword
        }
    default:
      return { ...state };
  }
}

export default reducer;
