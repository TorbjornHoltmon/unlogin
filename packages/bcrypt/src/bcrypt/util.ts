/**
 * Continues with the callback on the next tick.
 * @function
 * @param {function(...[*])} callback Callback to execute
 * @inner
 */
export async function nextTick(callback: (any: any[]) => any) {
  return Promise.resolve().then(callback())
}
