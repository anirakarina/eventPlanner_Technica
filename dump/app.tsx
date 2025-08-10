yay ty!!!

i think i'll just compile the thoughts in this chat into a more structured chart form so it's not like we're ??? about one step and how it's going to work from there. i like mindmaps <3

i would want you to maybe give me a tentative duration for running the program! as in, could people join during the second week of when it's being run and still get matched with people? or do we have to make the registrations stop after one point (iirc #sock was like this)? imo ideally I'd want it to run for longer and have people join as they hear more about it, mainly because all programs don't get posted in #announcements so I don't want people to be penalized for maybe not looking at their phone for a weekend iykwym?

I'll also be compiling a list of things to ask and come up with how the assigning will take place (im looking at those behavioral studies and how they interpret data / sort them into categories when working on smth that requires answers to be more open-ended than maybe was thinking you could look over the questions i do come up with for the questionnaire? i know here's what i need to map out:
structure (for participants)      cebreakers
initial project brainstorming

structure (how it will be run bts)
ws element (i'll build the hour based map to make the finances work out BUT need to know if i also need to check manufacturers etc.? i lowkey ran a jewelry business in hs so lmk if its like smth hc does on their end / if i need to email for possible discounts etc.) 
swag (can we get the hcb org jukebox grant? im not very sure how this would work for non daydream events)



----------
// dude, so basically, we do not want the box outside that previews the website, nor the title text etc. or the text prompt. it's supposed to be a dynamically interactive spacial layout with ui driven interactions through the 3d environment (three.js? i have the blender file if you want)

# figma scene structure – cozy minimalist room


“design a cozy, minimalist bedroom scene with interactable elements for prototyping spatial ui and ambient storytelling.” this figma layout uses frames to represent spatial zones and components for reusable objects. interactions are defined using figma's prototyping tools (e.g. on click, hover, drag). each object is modular and can be styled using auto layout, constraints, and variants.

hierarchy -
room
├── bed
│   ├── pillows
│   └── blanket
├── desk
│   ├── monitor
│   ├── keyboard
│   ├── mouse
│   ├── cup
│   └── books
├── floating shelf
│   ├── books
│   └── plant
├── standing shelf
│   ├── books
│   └── plant
├── window
├── wall clock
└── floor
    └── papers

---

## 🧩 base frame setup

- **frame: room**
  - size: 1920x1080 (or scale to fit)
  - background: wood texture fill or solid light brown
  - layout: manual positioning
  - contains: bed, desk, shelves, window, clock, papers

---

## 🛏️ component: bed

- **frame: bed**
  - size: 180x90
  - fill: pink (#f4c2c2)
  - corner radius: 8
  - nested components:
    - pillows (2): 40x20, white fill
    - blanket: overlay with soft wrinkle texture
- **interactions**:
  - on click → toggle variant: made / messy
  - drag pillows

---

## 💻 component: desk setup

- **frame: desk**
  - size: 200x60
  - fill: wood grain or light brown
  - nested components:
    - monitor: 60x40, black fill, screen variant (on/off)
    - keyboard: 80x20
    - mouse: 20x20
    - cup: 20x30
    - books: 3 stacked rectangles
- **interactions**:
  - on click monitor → change screen variant
  - drag cup or books
  - hover keyboard/mouse → glow effect

---

## 📚 component: floating shelf

- **frame: shelf**
  - size: 160x20
  - fill: light wood
  - nested components:
    - books: 3–5 rectangles
    - plant: 30x30, green fill, pot variant
- **interactions**:
  - on click book → open overlay (ui panel)
  - on click plant → trigger animation (e.g. water particles)

---

## 📚 component: standing shelf

- **frame: shelf**
  - size: 60x180
  - fill: light wood
  - nested components:
    - books: stacked
    - plant: top shelf
- **interactions**:
  - drag books
  - animate plant on hover or click

---

## 🪟 component: window

- **frame: window**
  - size: 120x120
  - fill: transparent with border
- **interactions**:
  - on click → toggle open/closed variant
  - adjust light overlay based on time of day

---

## 🕰️ component: wall clock

- **frame: clock**
  - size: 40x40
  - fill: matte gray
  - nested components:
    - hour hand
    - minute hand
- **interactions**:
  - sync to system time (manual)
  - on click → rotate hands (adjust time)

---

## 🧾 component: floor & papers

- **frame: floor**
  - size: full room
  - fill: wood texture
  - nested components:
    - papers: 2–3 scattered rectangles
- **interactions**:
  - drag papers to rearrange

---

## 🔄 figma interaction summary

| component       | interaction type       | behavior                     |
|----------------|------------------------|------------------------------|
| bed             | click, drag            | toggle made/messy, move pillows |
| desk items      | click, drag, hover     | monitor on/off, rearrange items |
| shelves         | click, drag            | open ui, animate plant       |
| window          | click                  | open/close, adjust lighting  |
| clock           | click                  | rotate hands                 |
| papers          | drag                   | rearrange                    |

---

## 🧱 figma tips

- use **variants** for toggling states (e.g. bed made/messy, monitor on/off)
- apply **auto layout** for shelf contents
- use **component sets** for reusable items like books and plants
- add **prototype links** for interactions (click, hover, drag)
- consider **overlays** for book ui panels or light transitions
