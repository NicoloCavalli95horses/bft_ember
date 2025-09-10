import Component from '@glimmer/component';

export default class MainComponent extends Component {
  items = [
    { id: 1, is_premium: false, src: "https://picsum.photos/id/10/200/300" },
    { id: 2, is_premium: true, src: "https://picsum.photos/id/20/200/300" },
    { id: 3, is_premium: true, src: "https://picsum.photos/id/30/200/300" },
    { id: 4, is_premium: false, src: "https://picsum.photos/id/40/200/300" },
    { id: 5, is_premium: false, src: "https://picsum.photos/id/50/200/300" },
    { id: 6, is_premium: true, src: "https://picsum.photos/id/60/200/300" }
  ];
}

