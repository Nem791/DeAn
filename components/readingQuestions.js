class ReadingQuestions {
    $container;
    $slCaption;

    $secContent;
    $question;
    
    $slCaptionBottom;
    $sectionNumber;
    $slCaptionRight;
    $btnSectionPrevious;
    $btnSectionNext;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add("tab-section-question-reading");

        this.$slCaption = document.createElement('div');
        this.$slCaption.classList.add('sl-caption');
        this.$slCaption.innerHTML = `<span></span>`;

        this.$secContent = document.createElement('div');
        this.$secContent.classList.add('sec-content');

        this.$question = document.createElement('div');
        this.$question.classList.add('question', 'question-1');

        this.$slCaptionBottom = document.createElement('div');
        this.$slCaptionBottom.classList.add('sl-caption', 'sl-caption-bottom');

        this.$sectionNumber = document.createElement('div');

        this.$slCaptionRight = document.createElement('div');
        this.$slCaptionRight.classList.add('sl-caption-right');

        this.$btnSectionPrevious = document.createElement('a');
        this.$btnSectionPrevious.classList.add(
          "btn-section",
          "actions-section",
          "previous"
        );
        this.$btnSectionPrevious.innerHTML = `<i class="fas fa-chevron-left"></i> <span>Previous</span>`;

        this.$btnSectionNext = document.createElement("a");
        this.$btnSectionNext.classList.add(
          "btn-section",
          "actions-section",
          "next"
        );
        this.$btnSectionNext.innerHTML = `<span> Next </span> <i class="fas fa-chevron-right"></i>`;
    }

    render() {
        this.$secContent.appendChild(this.$question);

        this.$slCaptionRight.appendChild(this.$btnSectionPrevious);
        this.$slCaptionRight.appendChild(this.$btnSectionNext);

        this.$slCaptionBottom.appendChild(this.$sectionNumber);
        this.$slCaptionBottom.appendChild(this.$slCaptionRight);

        this.$container.appendChild(this.$slCaption);
        this.$container.appendChild(this.$secContent);
        this.$container.appendChild(this.$slCaptionBottom);
        return this.$container;
    }

}
export {ReadingQuestions};



























































