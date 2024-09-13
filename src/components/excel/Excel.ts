import { ExcelComponent } from "@/core/ExcelComponent";

export class Excel {
  $el: Element | null;
  components: Array<typeof ExcelComponent>;

  constructor(selector: string, options: any) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement("div");
    this.components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML("beforeend", component.toHTML());
    });
    return $root;
  }

  render() {
    this.$el?.append(this.getRoot());
  }
}
