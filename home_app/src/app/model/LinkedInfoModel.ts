class LinkedInfoModel {
    id: number;
    title: string;
    text: string;
    documentName: string;

    constructor(id: number, title: string, text: string, documentName: string) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.documentName = documentName;
    }
}
export default LinkedInfoModel;