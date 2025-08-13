class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[];
    public comments: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): Post {
        const post = new Post(Date.now(), this.id, content);
        this.posts.push(post);
        return post;
    }

    comment(post: Post, commentContent: string): void {
        const comment = new Comment(Date.now(), this.id, commentContent);
        post.addComment(comment);
    }

    follow(user: User): void {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(post: Post): void {
        post.addLike(this.id);
    }

    viewFeed(): void {
        console.log(`Feed cua User ${this.id}:`);
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                console.log(`Post ${post.id} tu User ${user.id}: ${post.content}`);
            });
        });
    }
}
const userA = new User(1);
const userB = new User(2);

const postA1 = userA.createPost("Hello, day la bai viet dau tien!");

userB.follow(userA);

userB.viewFeed();

userB.likePost(postA1);

userB.comment(postA1, "Rat hay!");

console.log(`Post ${postA1.id} co ${postA1.likes.length} luot thich`);
console.log(`Post ${postA1.id} co ${postA1.comments.length} binh luan`);
