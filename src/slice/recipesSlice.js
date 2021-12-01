import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        title: 'Coconut & squash dhansak',
        imgURL: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coconut-squash-dhansak-a3a9133.jpg',
        summary: 'Preparation Time: 5 mins\r\nCooking Time: 15 mins\r\nServes 4',
        ingredients: [
          '1 tbsp vegetable oil',
          '500g butternut squash (about 1 small squash), peeled and chopped into bite-sized chunks (or buy a pack of ready-prepared to save time), see tip, below left',
          '100g frozen chopped onions',
          '4 heaped tbsp mild curry paste (we used korma)',
          '400g can chopped tomatoes',
          '400g can light coconut milk',
          'mini naan bread, to serve',
          '400g can  lentils, drained',
          '200g bag baby spinach',
          '150ml coconut yogurt (we used Rachel’s Organic), plus extra to serve'
        ],
        method: [
          'Heat the oil in a large pan. Put the squash in a bowl with a splash of water. Cover with cling film and microwave on High for 10 mins or until tender. Meanwhile, add the onions to the hot oil and cook for a few mins until soft. Add the curry paste, tomatoes and coconut milk, and simmer for 10 mins until thickened to a rich sauce.',
          'Warm the naan breads in a low oven or in the toaster. Drain any liquid from the squash, then add to the sauce with the lentils, spinach and some seasoning. Simmer for a further 2-3 mins to wilt the spinach, then stir in the coconut yogurt. Serve with the warm naan and a dollop of extra yogurt.'
        ]
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
