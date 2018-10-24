const INITIAL_STATE = { 
	firstName: '',
	lastName: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ 
  type: LOAD, 
  data 
})

export default reducer;