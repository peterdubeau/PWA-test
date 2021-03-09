import mouse from './Assets/Mouse.png'
import owlbear from './Assets/Owlbear.png'
import termite from './Assets/Termite.png'
import cockroach from './Assets/cockroach.png'

const pests = [
  {
    "name": "Mouse",
    "size": "tiny",
    "hitDice": "1d6",
    "imageUrl": mouse,
    "notes": "A common mouse. Not really a big deal"
  },{
    "name": "Termite",
    "size": "Super Tiny",
    "hitDice": "1d1",
    "imageUrl": termite,
    "notes": "They're small, but where there's one there's usually a LOT more. Beware of warms"
  },{
    "name": "Cockroach",
    "size": "Super Tiny",
    "hitDice": "1d2",
    "imageUrl": cockroach,
    "notes": "Nukes Ineffective"
  },{
    "name": "Owlbear",
    "size": "Large",
    "hitDice": "3d8",
    "imageUrl": owlbear,
    "notes": "What the hell, get the fuck out"
  }
]

export default pests