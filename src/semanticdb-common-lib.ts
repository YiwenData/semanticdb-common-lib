/**
 *
 * @param arr Array or item
 * @param func function on each item
 */
const each = async (arr: any, func: Function) => {
  if (arr === null || arr === undefined) return null

  if (Array.isArray(arr)) {
    const result = await Promise.all(arr.map(i => func(i)))
    return result
  }

  return func(arr)
}

/**
 *
 * @param arr Array or item
 * @param direction number
 * @param keys multiple sorting keys
 */
const sort = (arr: any[], direction: number, keys: string[]) => {
  return arr.sort((itemA, itemB) => {
    for (const key of keys) {
      const a = itemA[key]
      const b = itemB[key]
      if (a === b) {
        continue
      }

      if (typeof a === 'number') {
        return direction === 1 ? a - b : b - a
      }

      return direction === 1 ? a.localeCompare(b) : b.localeCompare(a)
    }
  })
}

export default {
  each,
  sort
}
