class NewsModel {
    id: number;
    title: string;
    text: string;
    short_text: string;
    date_posted: string

    constructor(id: number, title: string, text: string, short_text: string, date_posted: string) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.short_text = short_text;
        this.date_posted = date_posted;
    }
}
export default NewsModel;