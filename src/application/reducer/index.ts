export const defaultState = {
  hoge: true,
};

export type State = typeof defaultState;

export type Action = { type: "FINISH_SETTING"; payload: boolean };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FINISH_SETTING":
      return {
        ...state,
        hoge: false,
      };
    default:
      return state;
  }
};
