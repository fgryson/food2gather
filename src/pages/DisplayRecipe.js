import RecipeHeader from "../components/RecipeHeader"

function DisplayRecipe(props) {
  return (
    <div className="recipe-page">
      <RecipeHeader recipeName={"Blah"} prepTime={"5 mins"} cookTime={"10 mins"} serves={"3"} />
      <ul className="ingredients"><li>*props.ingredients*</li></ul>
      <ol className="method"><li>*props.steps*</li></ol>
    </div>
  )
}

export default DisplayRecipe