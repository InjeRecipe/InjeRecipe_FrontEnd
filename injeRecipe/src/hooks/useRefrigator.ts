const selectedIndex = [null]
export const useRefrigator = () => {
    const foods = [
        {
            ingredient: {
                title:'육류',
                items: [
                    '닭고기',
                    '소고기',
                    '양고기',
                    '돼지고기',
                    '오리고기',
                ],
                images:[
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/chickenIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/cowIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/lambIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/pigIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/duckIcon.png', 
                ]
                
            }
        },
        {
            ingredient: {
                title:'채소류',
                items: [
                    '양배추',
                    '당근',
                    '마늘',
                    '버섯',
                    '고추',
                    '토마토',
                    '감자',
                ],
                images:[
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/cabbageIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/carrotIcon.png',
                    
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/galicIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/mushroomIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/papperIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/tomatoIcon.png',
                    '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/potatoIcon.png',

                ]
            }
        },
        // {
        //     ingredient: {
        //         title:'가공류',
        //         items: [
        //             'chicken',
        //             'lamb',
        //             'beef',
        //             'pork',
        //             'duck',
        //         ],
        //         images:[
        //             '','','','','','',
        //         ]
        //     }
        // },
    ]
    const foods2= [
        {
            ingredient: {
                title:'육류',
                items: [
                    {value:'닭고기',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/chickenIcon.png',},
                    {value:'소고기',img: '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/cowIcon.png',},
                    {value:'양고기',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/lambIcon.png',},
                    {value:'돼지고기',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/pigIcon.png',},
                    {value:'오리고기',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/duckIcon.png', },
                ]
            }
        },
        {
            ingredient: {
                title:'채소류',
                items: [
                    {value:'양배추',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/cabbageIcon.png',},
                    {value:'당근',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/carrotIcon.png',},
                    {value:'마늘',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/galicIcon.png',},
                    {value:'버섯',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/mushroomIcon.png',},
                    {value:'고추',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/papperIcon.png',},
                    {value:'토마토',img:'/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/tomatoIcon.png',},
                    {value:'감자',img: '/Users/kjm/Projects/capston/FE/InjeRecipe_FrontEnd/injeRecipe/src/assets/icons/dishes/potatoIcon.png',},
                ],
            }
        },
    ]
    
    return {
        foods,
        foods2,
        selectedIndex

    }
}