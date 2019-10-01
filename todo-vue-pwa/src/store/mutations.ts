export default {
  mutateIncrease: (state: { counter: number; }, payload: any) => {
    state.counter++;
  },
  mutateDecrease: (state: { counter: number; }, payload: any) => {
    state.counter--;
  },
};
