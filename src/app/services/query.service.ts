import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  getResult(query: string) {
    for (let i = 0; i < 10000; i++) {
      console.log(i)
      if (i == 9000) {
        // return []
      }
    }
    return [
      {
        title:'Title 1',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
          " dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
          " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" +
          " culpa qui officia deserunt mollit anim id est laborum.",
        imageURL: 'assets/angular%20image.png',
        link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
      },
      {
        title:'Title 2',
        description: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)' +
          ' that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler' +
          ' text can be very useful when the focus is meant to be on design, not content.',
        imageURL: 'assets/angular%20image%202.png',
        link: 'https://www.w3schools.com-css-css_align.asp'
      },
      {
        title:'Title 3',
        description: 'this is a much shorter description',
        imageURL: 'assets/angular%20image%204.png',
        link: 'https://loremipsum.io/'
      },
      // {
      //   title:'Title 4',
      //   description: 'The passage experienced a surge in popularity during the 1960s when Letraset' +
      //     ' used it on their dry-transfer sheets, and again during the 90s as desktop publishers' +
      //     ' bundled the text with their software. Today it\'s seen all around the web; on templates,' +
      //     ' websites, and stock designs. Use our generator to get your own, or read on for the' +
      //     ' authoritative history of lorem ipsum.',
      //   imageURL: 'assets/angular%20image%203.png',
      //   link: 'https://www.google.com/search?q=lorem+ipsum+generator&rlz=1C1p='
      // },
      // {
      //   title:'Title 5',
      //   description: 'The passage experienced a surge in popularity during the 1960s when Letraset' +
      //     ' used it on their dry-transfer sheets, and again during the 90s as desktop publishers' +
      //     ' bundled the text with their software. Today it\'s seen all around the web; on templates,' +
      //     ' websites, and stock designs. Use our generator to get your own, or read on for the' +
      //     ' authoritative history of lorem ipsum.',
      //   imageURL: 'assets/angular%20image%203.png',
      //   link: 'https://www.google.com/search?q=lorem+ipsum+generator&rlz=1C1p='
      // },
    ]
  }
  constructor() { }
}
