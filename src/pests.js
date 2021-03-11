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
    "notes": "A common mouse. Not really a big deal",
    "additionalNotes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis quam. Fusce magna mi, aliquet a porttitor et, volutpat sed nibh. Integer convallis, nunc eget laoreet elementum, arcu felis faucibus turpis, at rutrum magna lorem ac risus. Pellentesque eu porttitor ligula, vitae pharetra erat. Vestibulum tempor, ligula id dictum aliquam, justo diam sodales lacus, non malesuada metus arcu non augue. Phasellus ut lorem eu justo lacinia varius. Nullam tincidunt, justo nec rutrum molestie, purus elit mattis ipsum, nec egestas justo ante at odio. Vestibulum facilisis tortor ipsum. Aenean tempus ultricies bibendum. Vestibulum sodales dolor lorem, in ultricies risus elementum quis. Nulla ut volutpat velit. Nulla aliquet malesuada est vitae laoreet."
  },{
    "name": "Termite",
    "size": "Super Tiny",
    "hitDice": "1d1",
    "imageUrl": termite,
    "notes": "They're small, but where there's one there's usually a LOT more. Beware of warms",
    "additionalNotes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis quam. Fusce magna mi, aliquet a porttitor et, volutpat sed nibh. Integer convallis, nunc eget laoreet elementum, arcu felis faucibus turpis, at rutrum magna lorem ac risus. Pellentesque eu porttitor ligula, vitae pharetra erat. Vestibulum tempor, ligula id dictum aliquam, justo diam sodales lacus, non malesuada metus arcu non augue. Phasellus ut lorem eu justo lacinia varius. Nullam tincidunt, justo nec rutrum molestie, purus elit mattis ipsum, nec egestas justo ante at odio. Vestibulum facilisis tortor ipsum. Aenean tempus ultricies bibendum. Vestibulum sodales dolor lorem, in ultricies risus elementum quis. Nulla ut volutpat velit. Nulla aliquet malesuada est vitae laoreet."

  },{
    "name": "Cockroach",
    "size": "Super Tiny",
    "hitDice": "1d2",
    "imageUrl": cockroach,
    "notes": "Nukes Ineffective",
    "additionalNotes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis quam. Fusce magna mi, aliquet a porttitor et, volutpat sed nibh. Integer convallis, nunc eget laoreet elementum, arcu felis faucibus turpis, at rutrum magna lorem ac risus. Pellentesque eu porttitor ligula, vitae pharetra erat. Vestibulum tempor, ligula id dictum aliquam, justo diam sodales lacus, non malesuada metus arcu non augue. Phasellus ut lorem eu justo lacinia varius. Nullam tincidunt, justo nec rutrum molestie, purus elit mattis ipsum, nec egestas justo ante at odio. Vestibulum facilisis tortor ipsum. Aenean tempus ultricies bibendum. Vestibulum sodales dolor lorem, in ultricies risus elementum quis. Nulla ut volutpat velit. Nulla aliquet malesuada est vitae laoreet."

  },{
    "name": "Owlbear",
    "size": "Large",
    "hitDice": "3d8",
    "imageUrl": owlbear,
    "notes": "What the hell, get the fuck out",
    "additionalNotes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis quam. Fusce magna mi, aliquet a porttitor et, volutpat sed nibh. Integer convallis, nunc eget laoreet elementum, arcu felis faucibus turpis, at rutrum magna lorem ac risus. Pellentesque eu porttitor ligula, vitae pharetra erat. Vestibulum tempor, ligula id dictum aliquam, justo diam sodales lacus, non malesuada metus arcu non augue. Phasellus ut lorem eu justo lacinia varius. Nullam tincidunt, justo nec rutrum molestie, purus elit mattis ipsum, nec egestas justo ante at odio. Vestibulum facilisis tortor ipsum. Aenean tempus ultricies bibendum. Vestibulum sodales dolor lorem, in ultricies risus elementum quis. Nulla ut volutpat velit. Nulla aliquet malesuada est vitae laoreet."

  },{
    "name": "Bed Bug",
    "size": "Tiny",
    "hitDice": "1d1",
    "imageUrl": bedBug,
    "notes": "Bugs that are in your bed",
    "additionalNotes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non convallis quam. Fusce magna mi, aliquet a porttitor et, volutpat sed nibh. Integer convallis, nunc eget laoreet elementum, arcu felis faucibus turpis, at rutrum magna lorem ac risus. Pellentesque eu porttitor ligula, vitae pharetra erat. Vestibulum tempor, ligula id dictum aliquam, justo diam sodales lacus, non malesuada metus arcu non augue. Phasellus ut lorem eu justo lacinia varius. Nullam tincidunt, justo nec rutrum molestie, purus elit mattis ipsum, nec egestas justo ante at odio. Vestibulum facilisis tortor ipsum. Aenean tempus ultricies bibendum. Vestibulum sodales dolor lorem, in ultricies risus elementum quis. Nulla ut volutpat velit. Nulla aliquet malesuada est vitae laoreet."
  }
]

export default pests