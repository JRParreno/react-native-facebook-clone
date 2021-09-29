export class Post {
    id: string;
    userId: string;
    title: string;
    body: string;

    constructor(
        id: string,
        userId: string,
        title: string,
        body: string,
    ) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}