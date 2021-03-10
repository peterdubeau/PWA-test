import mouse from './Assets/Mouse.png'
import owlbear from './Assets/Owlbear.png'
import termite from './Assets/Termite.png'
import cockroach from './Assets/cockroach.png'
import bedBug from './Assets/bedBug.png'

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
  },{
    "name": "Bed Bug",
    "size": "Tiny",
    "hitDice": "1d1",
    "imageUrl": bedBug,
    "notes": "Bugs that are in your bed"
  }
]

export default pests