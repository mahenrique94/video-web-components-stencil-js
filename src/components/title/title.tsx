import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-title',
  styleUrl: 'title.css',
  shadow: true
})
export class Title {

  @Prop() title: string

  render() {
    return <h1>{this.title}</h1>;
  }

}
