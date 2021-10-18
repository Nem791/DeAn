class ListAnswerItem {
    $container;
    $number;
    $sysAnswer;
    $userAnswer;
    $true;

    constructor() {
        this.$container = document.createElement('li');
        this.$container.classList.add('col-md-6', 'list-answer', 'green');

        this.$number = document.createElement("span");
        this.$number.classList.add('number');

        this.$sysAnswer = document.createElement("span");
        this.$sysAnswer.classList.add('sys-answer');

        this.$userAnswer = document.createElement("span");
        this.$userAnswer.classList.add('user-answer');

        this.$true = document.createElement("em");
        this.$true.classList.add('true');

    }

    render() {
        this.$container.appendChild(this.$number);
        this.$container.appendChild(this.$sysAnswer);
        this.$container.appendChild(this.$userAnswer);
        this.$container.appendChild(this.$true);
        return this.$container;
    }
}
export {ListAnswerItem};














