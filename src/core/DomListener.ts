export class DomListener {
  protected $root: Element | null;

  constructor($root: Element | null) {
    if (!$root) {
      throw new Error("No $root provided");
    }
    this.$root = $root;
  }
}
