function trimJSON(json, propsToRemove:string[]) {
    propsToRemove.forEach((propName) => {
      delete json[propName];
    });
}