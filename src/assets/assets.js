import logo from './logo.jpg'

import bg from './bg.jpg'
import search_icon from './search_icon .png'
import rating_stars from './rating_stars.jpg'
import remove from './remove.jpg'
import add_icon from './add_icon.jpg'
import facebook from './facebook.jpg'
import insta from './insta.jpg'
import whatsapp from './whatsapp.jpg'
import youtube from './youtube.jpg'
import appstore from './appstore.jpg'
import googleplay from './googleplay.jpg'
import cross_icon from './cross_icon.jpg'
import basket_icon from './basket_icon.jpg'

import bag from './bag.jpg'
import logout_icon from './logout_icon.jpg'
import person from './person.jpg'
import menu_1 from './menu1.avif'
import menu_2 from './menu2.webp'
import menu_3 from './menu3.jpg'
import menu_4 from './menu4.jpg'

import movie_1 from './movie1.jpg'
import movie_2 from './movie2.avif'
import movie_3 from './movie3.jpg'
import movie_4 from './movie4.jpg'
import movie_5 from './movie5.jpg'
// import movie_2 from './movie2.jpg'
// import movie_3 from './movie3.jpg'


export let assets = {
    logo,
    search_icon,
    bg,
    bag,
    basket_icon,
    cross_icon,
    appstore,
    googleplay,
    facebook,
    insta,
    whatsapp,
    youtube,
    rating_stars,
    add_icon,
    remove,
    movie_1,
    movie_2,
    movie_3,
    movie_4,
    movie_5,
 logout_icon,
    person
}

export const menu_list = [
    {
        menu_name: "Telugu Category",
        menu_image: menu_1
    },


    {
        menu_name: "Hindi Category",
        menu_image: menu_2
    },
    {
        menu_name: "Kanada Category",
        menu_image: menu_3
    },
    {
        menu_name: "English Category",
        menu_image: menu_4
    }
]


export const movie_list = [
    {
        _id: "1",
        name: "Movie name1",
        image: movie_1,
        price: 12,
        description: "movie1 lorem description",
        category: "Telugu Category"
    },
    {
        _id: "2",
        name: "Movie name2",
        image: movie_2,
        price: 18,
        description: "Movie2 lorem description",
        category: "Telugu Category"
    }, {
        _id: "3",
        name: "Movie name3",
        image: movie_3,
        price: 20,
        description: "Movie3 lorem desctiption",
        category: "Telugu Category"
    },
    {
        _id: "4",
        name: "Movie name4",
        image: movie_4,
        price: 25,
        description: "Movie4 lorem desctiption",
        category: "Hindi Category"
    },
    {
        _id: "5",
        name: "Movie name5",
        image: movie_5,
        price: 30,
        description: "Movie5 lorem desctiption",
        category: "Hindi Category"
    },
    {
        _id: "6",
        name: "Movie name6",
        // image: movie_6,
        price: 30,
        description: "Movie6 lorem desctiption",
        category: "Hindi Category"
    }

]

