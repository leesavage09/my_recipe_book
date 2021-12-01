import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        title: 'Blueberry baked oats',
        imgURL: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/blueberry-nut-oat-bake-4a1dd90.jpg',
        summary: 'Preparation Time: 5 mins\r\nCooking Time: 35 mins\r\nServes 6',
        ingredients: '500ml almond milk\r\n200g jumbo porridge oats\r\n2 tbsp almond butter\r\n1 tsp baking powder\r\n1 egg, beaten\r\n1 small ripe banana, mashed\r\n½ tsp almond extract or 1 tsp vanilla extract (optional)\r\n450g blueberries, plus extra to serve\r\n30g whole, skin-on almonds, roughly chopped\r\nmilk or fat-free yogurt and honey, to serve (optional)',
        method: 'Heat the oven to 200C/180C fan/gas 6. Mix all of the ingredients together in a large bowl.\r\n\r\nTip the mixture into a 2-litre ovenproof dish, then bake for 30-35 mins until piping hot in the middle. Serve warm with a little milk or yogurt, honey and extra blueberries, if you like.'
      }
]

const RecipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        add_recipe: (state, action) => {
            state.push(action.payload)
        },
        remove_recipe: (state) => {
            //TODO
        }
    },
})

export const { add_recipe, remove_recipe } = RecipesSlice.actions

export default RecipesSlice.reducer
