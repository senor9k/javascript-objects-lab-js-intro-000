let recipes = {
  prop: 1
}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
updateObjectWithKeyAndValue(recipes, "prop2", 2)
