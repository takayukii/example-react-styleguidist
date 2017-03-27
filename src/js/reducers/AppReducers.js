export const initialState = {
  myName: 'Tom'
};

export default function App(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
