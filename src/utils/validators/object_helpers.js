export const updataObjectInArray = (items, itemId, objPropsName, newObjPorps) => {
    return items.map(function (u) {
        if (u[objPropsName] === itemId) {
          return { ...u, newObjPorps };
        }
        return u;
      })
} 
