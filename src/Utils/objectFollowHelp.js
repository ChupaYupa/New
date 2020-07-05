export let helpBooleenFollow = (items, itemId, objPropName,objBoolen ) => {
  return items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...objBoolen }
        }
        return u;
    })
}