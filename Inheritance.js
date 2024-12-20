class PastRelationship {
    constructor(name, lesson) {
        this.name = name;
        this.lesson = lesson;
    }
    reflect() {
        console.log(`I had a relationship with ${this.name} and I learned ${this.lesson} from her`);
    }
}
class PresentRelationship extends PastRelationship {
    constructor(name, lesson, feelings) {
        super(name, lesson);
        this.feelings = feelings
    }
    focus() {
        console.log(`I am in a relationship with ${this.name} and I am feeling ${this.feelings} from my present relationship`);

    }
}
const d = new PastRelationship("D", "How to value communications and trust");
const m = new PresentRelationship("M", "How to value communication and trust", "Peace, love and purpose of life");

d.reflect();
m.focus();
