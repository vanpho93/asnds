import { isNil } from 'lodash'

interface IDrawable {
  draw(): void
}

export class Image implements IDrawable {
  constructor(private url: string) {
    console.log(`Loading image from ${this.url}`)
  }

  draw() {
    console.log(`Drawing image ${this.url}`)
  }
}

export class LazyImage implements IDrawable {
  private image: Image
  constructor(private url: string) {}

  draw() {
    if (isNil(this.image)) this.image = new Image(this.url)
    this.image.draw()
  }
}

export function drawImage(drawable: IDrawable) {
  console.log('About to draw the image')
  drawable.draw()
  console.log('Done drawing the image')
}
