export class Excel {
  $el: Element | null;
  components: any[];

  constructor(selector: string, options: any) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
