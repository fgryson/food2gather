function RecipeHeader(props) {
  return (
    <div className="recipe-header">
      <h2>{props.recipeName}</h2>
      {props.prepTime} {props.cookTime} {props.serves}
    </div>
  )
}

export default RecipeHeader