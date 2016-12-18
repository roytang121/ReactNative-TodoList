export function todoList(state = [], action) {
  if (action.type === "ADD_TODO") {
    let title = action.payload.title
    state = state.concat(title)
  }
  return state
}

export function counter(state = 0, action) {
  if (action.type === "ADD_COUNTER") {
    state = state + 1
  }

  return state
}
