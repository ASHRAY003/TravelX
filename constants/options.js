export const selectTravelList = [
    {
        id: 1,
        title: 'me',
        desc: 'solo traveller',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Ham 2',
        icon: '🥂',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'Family Time',
        icon: '🏠',
        people: '4'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'Yaariya',
        icon: '🛥️',
        people: '5'
    },

]

export const selectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Concious of Cost',
        icon: '💸'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Concious of Cost',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Concious of Cost',
        icon: '💵'
    },


]

export const AI_PROMPT = 'Generate Travel Plan For Location:{location}, for {totalDays} Days and {totalNights} Nights for {traveller} with a {budget} budget with Flight Details, Flight Price with booking URL, Hotel Options list with Hotel Name,Hotel Address, Price, hotel image url,geocoordinates,rating,description,and suggested itenary with placename, Place Details,Place Url Image,Geo Cordinates,Ticket Pricing, Time t travel of each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON Format'