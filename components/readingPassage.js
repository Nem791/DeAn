class ReadingPassage {
    $container;
    
    $passageDescription;
    $passageDescriptionHeading;
    $passageDescriptionTitle;

    $sectionImage;
    $sectionImg;

    $subtitle;

    $passageContent;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add("tab-section-reading");

        this.$passageDescription = document.createElement('div');
        this.$passageDescription.classList.add("passage-description");

        this.$passageDescriptionHeading = document.createElement('h1');
        this.$passageDescriptionHeading.innerHTML = `<strong>READING PASSAGE <span class='passage-number'></span></strong>`;

        this.$passageDescriptionTitle = document.createElement('p');
        this.$passageDescriptionTitle.innerHTML = `<p>You should spend about 20 minutes on Questions <span class='passage-questions'></span>, which are based on Reading Passage <span class='passage-number'></span> below.</p>`;

        this.$sectionImage = document.createElement('div');
        this.$sectionImage.classList.add('section-image');

        this.$sectionImg = document.createElement('img');
        this.$sectionImg.style.height = 'auto';
        this.$sectionImg.src =
          "https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2021-08/Cleaner%20fuels.png";

        this.$subtitle = document.createElement('h2');
        this.$subtitle.classList.add("subtitle");

        this.$passageContent = document.createElement("div");
        this.$passageContent.classList.add("passage-content");

    }

    render() {
        this.$passageDescription.appendChild(this.$passageDescriptionHeading);
        this.$passageDescription.appendChild(this.$passageDescriptionTitle);

        this.$sectionImage.appendChild(this.$sectionImg);

        this.$container.appendChild(this.$passageDescription);
        this.$container.appendChild(this.$sectionImage);
        this.$container.appendChild(this.$subtitle);
        this.$container.appendChild(this.$passageContent);
        return this.$container;
    }
}
export {ReadingPassage};




























