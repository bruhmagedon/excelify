import { ExcelComponent } from "@/core/ExcelComponent";
export class Toolbar extends ExcelComponent {
  static className = "excel__toolbar";

  public toHTML(): string {
    return ` 
          <div class="button">
              <i data-lucide="align-left"></i>
          </div>
          <div class="button">
              <i data-lucide="align-center"></i>
          </div>
          <div class="button">
              <i data-lucide="align-right"></i>
          </div>
          <div class="button">
              <i data-lucide="bold"></i>
          </div>
          <div class="button">
              <i data-lucide="italic"></i>
          </div>
          <div class="button">
              <i data-lucide="underline"></i>
          </div>
            `;
  }
}
