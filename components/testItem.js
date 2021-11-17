class TestItem {
    $container;

    $book;
    $bookPage;
    $bookPageImg;

    $testContent;

    $testTitle;
    $testTitleA;

    $listVolume;
    $listVolumeUl;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('test-item', 'clearfix');

        this.$book = document.createElement('a');
        this.$book.classList.add('book');

        this.$bookPage = document.createElement('ul');
        this.$bookPage.classList.add('book-page');

        this.$bookPageImg = document.createElement('img');

        this.$testContent = document.createElement('div');
        this.$testContent.classList.add('test-content');

        this.$testTitle = document.createElement('h2');
        this.$testTitle.classList.add('test-title');

        this.$testTitleA = document.createElement('a');

        this.$listVolume = document.createElement('div');
        this.$listVolume.classList.add('list-volume');

        this.$listVolumeUl = document.createElement('ul');
        let typeArray = ['Listening', 'Reading', 'Speaking', 'Writing'];
        for (let index = 0; index < typeArray.length; index++) {
            this.$listVolumeUl.innerHTML += `<li class="volume-item">
                                                    <a class='stop-event' href="">
                                                        <span class="volume-name">${typeArray[index]}</span>
                                                    </a>
                                                </li>`;
            
        }
    }

    render() {
        this.$bookPage.appendChild(this.$bookPageImg);
        this.$book.appendChild(this.$bookPage);

        this.$testTitle.appendChild(this.$testTitleA);

        this.$listVolume.appendChild(this.$listVolumeUl);

        this.$testContent.appendChild(this.$testTitle);
        this.$testContent.appendChild(this.$listVolume);

        this.$container.appendChild(this.$book);
        this.$container.appendChild(this.$testContent);
        return this.$container;
    }

}

export {TestItem};

















