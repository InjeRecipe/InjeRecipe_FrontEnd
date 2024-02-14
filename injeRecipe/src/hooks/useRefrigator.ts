export const useRefrigator = () => {
    const foods = [
        {
            ingredient: {
                title:'육류',
                items: [
                    '닭고기',
                    '양고기',
                    '소고기',
                    '돼지고기',
                    '오리고기',
                ],
                images:[
                    '','','','','','',
                ]
                
            }
        },
        {
            ingredient: {
                title:'채소류',
                items: [
                    '고구마',
                    '파',
                    '감자',
                    '양상추',
                    '시금치',
                    '오이',
                    '양파',
                    '피망',
                    '배추',
                    '김치',
                ],
                images:[
                    '','','','','','',
                ]
            }
        },
        {
            ingredient: {
                title:'가공류',
                items: [
                    'chicken',
                    'lamb',
                    'beef',
                    'pork',
                    'duck',
                ],
                images:[
                    '','','','','','',
                ]
            }
        },
    ]
    return {
        foods
    }
}