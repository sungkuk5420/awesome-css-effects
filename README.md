# CSS 연습

[데모 ](http://devkimcss.coo.kr)

## Feater

- ES6 with Bebel
- SCSS
- CSS Modules
- Typography.js
- Build for production

## Git Clone

`git clone https://github.com/sungkuk5420/parcel-start-kit.git`

## NPM Install

`npm install`

## Start

`npm start`

## Build

`npm run-script build`

---

# CSS Masterclass

CSS Masterclass course (Flexbox, Grid, PostCSS, CSSNext)

### CSS Flex

- [x] CSS Flex Basics
- [x] Main Axis and Cross Axis
- [x] Flex Direction
- [x] Flex Wrap
- [x] Align Self

### CSS Grid

- [x] CSS Grid Basics ( Row, columns and gaps)
- [x] Auto columns, auto rows
- [x] Template Areas
- [x] fr unit, repeat
- [x] minmax, max-content, min-content
- [x] auto-fill, auto-fit
- [x] Justify Content, Align Content and Place Content
- [x] Justify Items, Align Items and Place Items
- [ ] Grid Column, Column Start and End
- [ ] Line Naming
- [ ] Grid Row, Row Start and End
- [ ] Grid Area
- [ ] Justify, Align, Place Self

### CSS Grid를 쓸때 주의할점

## 기본 속성 배운것.

```
  grid-template-columns: 30px 50px;
  grid-template-rows: 30px 12px;
  grid-auto-rows: 200px;
  grid-auto-columns: 200px;
  grid-auto-flow: column;
```

## grid-template-areas를 쓸땐 template-columns, rows를 지운다.

```
  grid-template-areas:
    "header header header"
    "content content sidebar"
    "content content sidebar"
    "footer footer footer";
  .box {
    background: #1abc9c;
    &:nth-child(1) {
      background: #1abc9c;
      grid-area: header;
    }
    &:nth-child(2) {
      background: #e67e22;
      grid-area: sidebar;
    }
    &:nth-child(3) {
      background: #3498db;
      grid-area: footer;
    }
    &:nth-child(4) {
      grid-area: content;
      background: #9b59b6;
    }
    &:nth-child(5) {
      background: #34495e;
    }
  }
```

## 그리드의 측정단위 fr

```
  grid-template-columns: 2fr 1fr 2fr 1fr;
  grid-template-columns: repeat(4, 1fr) // 1fr 1fr 1fr 1fr
  grid-template-columns: repeat(3, 1fr) 2fr;  // 1fr 1fr 1fr 2fr
```

## auto-fit, auto-fill

```
  grid-template-columns: repeat(
    auto-fit,
    minmax(350px, 1fr)
  );

  grid-template-columns: repeat(
    auto-fill,
    minmax(50px, 1fr)
  );
```

### Using CSS4

- [ ] Installing Parcel
- [ ] Configuring PostCSS
- [ ] Testing

### CSS4 Awesomeness

- [ ] :matches , :not
- [ ] CSS Variables
- [ ] @custom-selector
- [ ] @custom-media
- [ ] Media Query Ranges
- [ ] color-mod, gray(), system-ui
- [ ] Nesting Rules

### Conclusions

- [ ] CSS Grid Kiss
- [ ] Practice Flexbox
- [ ] Practice Grid

### Exercices

<img src="https://i.pinimg.com/originals/7d/4c/66/7d4c66d0b646478a297ee21e7cd8aee5.jpg" width="300px" />
<img src="https://i.pinimg.com/originals/c3/64/72/c36472e703f1ca49324f53991f610392.jpg" width="300px" />
<img src="https://i.pinimg.com/originals/69/63/a5/6963a5c312b1994e1c7ea094bbd508de.jpg" width="300px" />
<img src="https://i.pinimg.com/564x/af/c5/fd/afc5fdee8a4036487d89ae08da9f1745.jpg" width="300px" />
<img src="https://i.pinimg.com/564x/ba/ea/9d/baea9d5be82afaaea4aa6a739a0cc6a8.jpg" width="300px" />
<img src="https://i.pinimg.com/564x/fd/90/23/fd9023163c117b63caac113a7bd47f5c.jpg" width="300px" />

<img src="https://i.pinimg.com/564x/a4/0d/ba/a40dba0269d7de0120496ec830d6b25a.jpg" width="300px" />
<img src="https://cdn.dribbble.com/users/102267/screenshots/4275407/afisha_by_radiusss.jpg" width="300px" />
