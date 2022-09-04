import { assign, createMachine, interpret } from 'xstate';

type TypeCountState = {
  count: number;
};

export const useStoreXState = createMachine({
  context: {
    count: 0,
  },
  on: {
    countPlusSet: {
      actions: assign({
        count: (ctx: TypeCountState) => ctx.count + 1,
      }),
    },
    countMinusSet: {
      actions: assign({
        count: (ctx: TypeCountState) => ctx.count - 1,
      }),
    },
  },
});

export const countService = interpret(useStoreXState).start();
