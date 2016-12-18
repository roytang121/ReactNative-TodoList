
export function addTodo(title) {
  return {
    type: "ADD_TODO",
    payload: {
      title: title
    }
  }
}

export function incCounter() {
  return {
    type: "INC_COUNTER",
  }
}
