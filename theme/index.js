import { useState } from "react"

const pallete = [
    { //orange 
        text: '#f97316',
        bgColor : opacity => `rgba(251, 146 , 68 , ${opacity})`
    },
    { //dark gray 
        text: '#334155',
        bgColor : opacity => `rgba(30, 41 , 50 , ${opacity})`
    },
    { //purple 
        text: '#7c3aed',
        bgColor : opacity => `rgba(167, 139 , 250 , ${opacity})`
    },
    { //green 
        text: '#009950',
        bgColor : opacity => `rgba(0, 179 , 89 , ${opacity})`
    },
    { //teal 
        text: '#14b8a6',
        bgColor : opacity => `rgba(45, 212 , 191 , ${opacity})`
    },
    { //red 
        text: '#dc2626',
        bgColor : opacity => `rgba(248, 113 , 113 , ${opacity})`
    }

]

export function code () {
    let changer = Math.ceil(Math.random()*5)
    return changer 
}



export const themeColors = {
    ...pallete[code()]
}

