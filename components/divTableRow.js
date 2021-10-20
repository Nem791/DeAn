import { DivTableCell } from "./divTableCell.js";

class DivTableRow {
    $container;
    $firstCol;
    $listening;
    $reading;
    $speaking;
    $writing;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add("divTableRow");

        this.$firstCol = document.createElement('div');
        this.$firstCol.classList.add("divTableCell", "first-col");
        this.$firstCol.innerText = `Pratice Test `;

        this.$listening = new DivTableCell().render();
        this.$listening
          .querySelector(".practice-item__chart-icon")
          .classList.add("listening-icon");

        this.$reading = new DivTableCell().render();
        this.$reading
          .querySelector(".practice-item__chart-icon")
          .classList.add("reading-icon");
        
        this.$speaking = new DivTableCell().render();
        this.$speaking
          .querySelector(".practice-item__chart-icon")
          .classList.add("speaking-icon");

        this.$writing = new DivTableCell().render();
        this.$writing
          .querySelector(".practice-item__chart-icon")
          .classList.add("writing-icon");
    }

    render() {
        this.$container.appendChild(this.$firstCol);
        this.$container.appendChild(this.$listening);
        this.$container.appendChild(this.$reading);
        this.$container.appendChild(this.$speaking);
        this.$container.appendChild(this.$writing);
        return this.$container;
    }
}
export {DivTableRow};