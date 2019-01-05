let recipes = {
  prop: 1
}
function updateObjectWithKeyAndValue(object, key, value) {
  newObj = Object.assign({},object)
  newObj[key] = value
  return newObj
}
