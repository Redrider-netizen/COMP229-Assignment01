
function IngredientsList({items}) {

    console.log(items);

    return (
        <>
            <h1>Ingredients List</h1>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item.title}: {item.text}</li>
                ))}
            </ul>
        </>
    );
}

export default IngredientsList;