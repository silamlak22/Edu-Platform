//we need to create a slice
import { configureStore, createSlice } from "@reduxjs/toolkit";

const powerinitialstate = [
    {
        icon: 'fa-solid fa-globe',
        heading: 'Insight Broadening',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum dui neque.',
    },

    {
        icon: 'fa-solid fa-hand-holding-dollar',
        heading: 'Wealth',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum dui neque.',
    },
    
    {
        icon: 'fa-solid fa-globe',
        heading: 'Health Improvement',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum dui neque.',
    },
    
    {
        icon: 'fa-solid fa-user-clock',
        heading: 'Punctuality',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum dui neque.',
    },

];

const fieldsinitialstate = [
    {
        image: '/images/fields/1.jpg',
        heading: 'Programming',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus, metus nisi ultricies quam, id dapibus ex turpis in nulla.',
    },

    {
        image: '/images/fields/2.jpg',
        heading: 'Mathematics',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus, metus nisi ultricies quam, id dapibus ex turpis in nulla.',
    },

    {
        image: '/images/fields/3.jpg',
        heading: 'Physics',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus, metus nisi ultricies quam, id dapibus ex turpis in nulla.',
    },

    {
        image: '/images/fields/5.jpg',
        heading: 'Biology',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus, metus nisi ultricies quam, id dapibus ex turpis in nulla.',
    },

    {
        image: '/images/fields/4.jpg',
        heading: 'Chemistry',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus, metus nisi ultricies quam, id dapibus ex turpis in nulla.',
    },

    {
        image: '/images/fields/6.jpg',
        heading: 'Art',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tincidunt tellus. Pellentesque varius, quam accumsan luctus finibus, metus nisi ultricies quam, id dapibus ex turpis in nulla.',
    },
];

const facilitiesinitialstate = [
    {
        id: 1,
        name: "High Capacity Conference Halls",
        image: '/images/facilities/w-overlay/hall.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 2,
        name: "Libraries With Over 1M Books",
        image: '/images/facilities/w-overlay/books.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 3,
        name: "Equiped Labs",
        image: '/images/facilities/w-overlay/labs.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 4,
        name: "24/7 Opened Study Halls",
        image: '/images/facilities/w-overlay/study-hall.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 5,
        name: "24/7 Internet Access",
        image: '/images/facilities/w-overlay/internet.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 6,
        name: "Convenient Dormitories",
        image: '/images/facilities/w-overlay/dormitories.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 7,
        name: "High Capacity Conference Halls",
        image: '/images/facilities/w-overlay/hall.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 8,
        name: "High Capacity Conference Halls",
        image: '/images/facilities/w-overlay/hall.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 9,
        name: "High Capacity Conference Halls",
        image: '/images/facilities/w-overlay/hall.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },

    {
        id: 10,
        name: "High Capacity Conference Halls",
        image: '/images/facilities/w-overlay/hall.jpg',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
];

const powerslice = createSlice({
    name: "powersliceinfo",
    initialState: { powers: powerinitialstate },
    reducers: function getpowers(state, action) {
        return state;
    }
   
});

const fieldslice = createSlice({
    name: 'fieldsliceinfo',
    initialState: { fields: fieldsinitialstate },
    reducers: function getfields(state) {
        return state;
    }

});

const facilitiesslice = createSlice({
    name: 'facilitiessliceinfo',
    initialState: { facilities: facilitiesinitialstate },
    reducers: function getfacilities(state) {
        return state;
    }
})


export const ourstore = configureStore({
    reducer: {
        powerreducer: powerslice.reducer,
        fieldreducer: fieldslice.reducer,
        facilityreducer: facilitiesslice.reducer,
    },
});

//export const poweractions = powerslice.actions;
