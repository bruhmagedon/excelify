import { ExcelComponent } from "@/core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = "excel__header";

  public toHTML(): string {
    return `    
          <input type="text" class="input" value="Новая таблица" />
          <div>
            <div class="button">
              <i data-lucide="trash"></i>
            </div>
            <div class="button">
                <i data-lucide="log-out"></i>
            </div>
          </div>
            `;
  }
}
