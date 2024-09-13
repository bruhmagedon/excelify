import { Excel } from "@components/excel/Excel";
import "./style/style.scss";
import { createIcons, icons } from "lucide";

createIcons({ icons });

const excel = new Excel("#app", {
  components: [],
});
console.log(excel);
