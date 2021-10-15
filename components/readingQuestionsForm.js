class QuestionRadio {
    $container;
    $questionTitleGroup;
    $number;
    $questionTitle;

    $listQuestion;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('sl-item', 'type_radio');
        this.$container.dataset.result = 'E';

        this.$questionTitleGroup = document.createElement("div");
        this.$questionTitleGroup.classList.add('question-title-group');

        this.$number = document.createElement("div");
        this.$number.classList.add('number');

        this.$questionTitle = document.createElement("div");
        this.$questionTitle.classList.add('question-title');
        this.$questionTitle.innerHTML = `<p></p>`;

        this.$listQuestion = document.createElement('div');
        this.$listQuestion.classList.add('list-question');

    }

    render() {
        this.$questionTitleGroup.appendChild(this.$number);
        this.$questionTitleGroup.appendChild(this.$questionTitle);

        this.$container.appendChild(this.$questionTitleGroup);
        this.$container.appendChild(this.$listQuestion);
        return this.$container;
    }
}
export {QuestionRadio};