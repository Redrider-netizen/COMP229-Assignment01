import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoComponent from './DemoComponent'
import Demo2Component from './Demo2Component'
import IngredientsList from './IngredientsList'
import IngredientsListDynamic from './IngredientsListDynamic'

const itemsList = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 eggs",
    "2.5 cups all purpose flour",
    "1 teaspoon baking powder",
    "0.5 teaspoon salt"
];

const data = [
     { 
          title: 'Title 01',
          text: 'This is the first item'
     },
     {  title: 'Title 02', text: 'This is the second item' },
     { title: 'Title 03', text: 'This is the third item' },
];

function App() {

  return (
    <div>
      <IngredientsListDynamic items={itemsList}/>
      <IngredientsList items={data}/>
      <DemoComponent />
      <Demo2Component />
    </div>

  )
}

export default App;
