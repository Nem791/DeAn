class TestCard {
    $container;
    $bookItem;
    $bookItemATag;
    $bookItemATagImg;
    $bookItemH3;
    $bookItemTitle;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('col-fix');

        this.$bookItem = document.createElement('book-item');
        this.$bookItem.classList.add('book-item');

        this.$bookItemATag = document.createElement('a');

        this.$bookItemATagImg = document.createElement('img');
        this.$bookItemATagImg.classList.add('keys-img');

        this.$bookItemH3 = document.createElement('h3');

        this.$bookItemTitle = document.createElement('a');
        this.$bookItemTitle.classList.add('keys-title');

    }

    render () {
        this.$bookItemATag.appendChild(this.$bookItemATagImg);

        this.$bookItemH3.appendChild(this.$bookItemTitle);

        this.$bookItem.appendChild(this.$bookItemATag);
        this.$bookItem.appendChild(this.$bookItemH3);

        this.$container.appendChild(this.$bookItem);
        return this.$container;
    }
}
export {TestCard};