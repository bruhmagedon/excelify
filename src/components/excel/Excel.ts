import { $ } from "@/core/DomJs";
import { ExcelComponent } from "@/core/ExcelComponent";

export class Excel {
  private $el: Element | null;
  private components: Array<typeof ExcelComponent>;

  constructor(selector: string, options: any) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  protected getRoot() {
    const $root = $.create("div", "excel");
    this.components.forEach((Component) => {
      const $el = $.create("div", Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });
    return $root;
  }

  public render() {
    this.$el?.append(this.getRoot());
  }
}
