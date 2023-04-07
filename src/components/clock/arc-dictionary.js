import {svgArcBuilder} from './svg-arc-builder.js';
import { faSun, faTshirt, faBowlFood, faTooth, faCarSide, faDumbbell, faBookBible } from '@fortawesome/free-solid-svg-icons';

export function arcDictionary() {
    const hb = 15;
    return [
        {//Bible study bar
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb, 45, 0, 0),
            arcConfig: {startMinute: 0, lengthInMinutes: 15, color: '#00D0E8', rounded: false},
            textLabel: {
                position: {
                    top: '50px',
                    right: '-40px'
                },
                text: 'Bible Study',
                icon: faBookBible,
                iconKey: 'bookBible'
            }
        },{//exercise bar
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb, 45, 0, 0),
            arcConfig: {startMinute: 15, lengthInMinutes: 35, color: 'yellow', rounded: false},
            textLabel: {
                position: {
                    bottom: '0px',
                    right: '-40px'
                },
                text: 'I work out!',
                icon: faDumbbell,
                iconKey: 'dumbbell'
            }
        },
        {//get dressed bar
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb+1, 0, 0, 0),
            arcConfig: {startMinute: 40, lengthInMinutes: 20, color: 'green', rounded: false},
            textLabel: {
                position: {
                    top: '50px',
                    left: '0px'
                },
                text: 'Get Dressed!',
                icon: faTshirt,
                iconKey: 'shirt'
            }
        },
        {//eat and shoes bar
            showTime: new Date().setHours(hb, 45, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 0, lengthInMinutes: 30, color: 'red', rounded: false},
            textLabel: {
                position: {
                    top: '50px',
                    right: '0px'
                },
                text: 'Eat / Shoes On',
                icon: faBowlFood,
                iconKey: 'bowlFoot'
            }
        },
        {//brush teeth bar
            showTime: new Date().setHours(hb+1, 0, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 30, lengthInMinutes: 10, color: '#E600FF', rounded: false},
            textLabel: {
                position: {
                    bottom: '0px',
                    left: '0px'
                },
                text: 'Brush Teeth!',
                icon: faTooth,
                iconKey: 'shirt'
            }
        },
        {//to the car bar
            showTime: new Date().setHours(hb+1, 0, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 40, lengthInMinutes: 10, color: '#C89700', rounded: false},
            textLabel: {
                position: {
                    top: '350px',
                    left: '-150px'
                },
                text: 'To the car!',
                icon: faCarSide,
                iconKey: 'car'
            }
        }
    ]
}