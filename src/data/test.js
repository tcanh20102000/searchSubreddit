import images from "../images/images.js";

const color = [
    'RED',
    'ORANGE', 
    'BLUE']

const list_of_card = [
    {
        src: images.VerticalPortrait,
        phone_num:"(028) 345 9870",
        content: "Add in",
        price: 36,
        stats: {
            rating: 5.1,
            viewerCount: 7,
        },
        country: "Somewhere",
        openSpot: 0,
        location: "Offline",
    },
    {
        src: images.VerticalPortrait,
        phone_num:"(028) 781 0506",
        content: "Guarantee void",
        price: 26,
        stats: {
            rating: 3.1,
            viewerCount: 70,
        },
        country: "Republic of Ohio",
        openSpot: 1,
        location: "Online",
    },
    {
        src: images.VerticalPortrait,
        phone_num:"(028) 781 0506",
        content: "To be added later",
        price: 16,
        stats: {
            rating: 2.5,
            viewerCount: 2,
        },
        country: "Unknown",
        openSpot: 2,
        location: "Offline",
    }
]
export {color as default, list_of_card}

