import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <app-title title="Lista de tarefas com Stencil"></app-title>
        </header>
        <main>
          <app-todo></app-todo>
        </main>
      </div>
    );
  }
}
