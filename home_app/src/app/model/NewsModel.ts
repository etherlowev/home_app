class NewsModel {
    id: number;
    title: string;
    text: string;

    constructor(data: { id: number; title: string; text: string }) {
        this.id = data.id;
        this.title = data.title;
        this.text = data.text;
    }
}
export default NewsModel;