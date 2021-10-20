class DivTableCell {
    $container;

    $practiceItemChart;
    $practiceItemChartChild;
    $practiceItemChartCanvas;
    $practiceItemChartIcon;

    $practiceItemBtn;
    $practiceItemBtnAction;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add("divTableCell", "practice-item");

        this.$practiceItemChart = document.createElement('div');
        this.$practiceItemChart.classList.add("practice-item__chart");

        this.$practiceItemChartChild = document.createElement('div');
        this.$practiceItemChartChild.style.display = 'inline';
        this.$practiceItemChartChild.style.height = '80px';
        this.$practiceItemChartChild.style.width = "80px";

        this.$practiceItemChartCanvas = document.createElement('canvas');
        this.$practiceItemChartCanvas.width = '100';
        this.$practiceItemChartCanvas.height = "100";
        this.$practiceItemChartCanvas.style.height = "80px";
        this.$practiceItemChartCanvas.style.width = "80px";

        this.$practiceItemChartIcon = document.createElement('div');
        this.$practiceItemChartIcon.classList.add("practice-item__chart-icon");

        this.$practiceItemBtn = document.createElement('div');
        this.$practiceItemBtn.classList.add("practice-item__btn");

        this.$practiceItemBtnAction = document.createElement('a');
        this.$practiceItemBtnAction.classList.add("practice-item__btn-action");
        this.$practiceItemBtnAction.innerText = 'Làm bài';

    }

    render() {
        this.$practiceItemChartChild.appendChild(this.$practiceItemChartCanvas);

        this.$practiceItemChart.appendChild(this.$practiceItemChartChild);
        this.$practiceItemChart.appendChild(this.$practiceItemChartIcon);

        this.$practiceItemBtn.appendChild(this.$practiceItemBtnAction);

        this.$container.appendChild(this.$practiceItemChart);
        this.$container.appendChild(this.$practiceItemBtn);
        return this.$container;
    }
}
export {DivTableCell};






























