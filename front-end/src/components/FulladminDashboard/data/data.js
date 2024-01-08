import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Main',link: '/Profile', image: iconsImgs.home },
    { id: 2, title: 'All Users',link: '/AllUsers',  image: iconsImgs.budget },
    { id: 3, title: 'All Parking Spots',link: '/ParkingSpots', image:iconsImgs.budget  },
    { id: 4, title: 'Revenu',link: '/Revenu', image: iconsImgs.wallet },
 
    
   
    { id: 6, title: 'Messages',link: '/Messages', image: iconsImgs.wealth },
    { id: 7, title: 'Public Review',link: '/Reviews', image: iconsImgs.plane },

    { id: 8, title: 'Settings',link: '/ProfileSettings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "This Month",
        type: "Currently",
        amount: 300
    },
    {
        id: 20, 
        title: "This Week",
        type: "Currently",
        amount: 190
    },
    {
        id: 21, 
        title:"This Year",
        type: "Currently",
        amount: 8000
    },
    {
        id: 22, 
        title: "2023",
        type: null,
        amount: 22000
    },
    {
        id: 23, 
        title: "2022",
        type: null,
        amount: 1000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]