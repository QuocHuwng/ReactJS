var Comment = /** @class */ (function () {
    function Comment(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    Comment.prototype.addReply = function (reply) {
        this.replies.push(reply);
    };
    return Comment;
}());
var Post = /** @class */ (function () {
    function Post(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    Post.prototype.addLike = function (userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    };
    Post.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    return Post;
}());
var User = /** @class */ (function () {
    function User(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    User.prototype.createPost = function (content) {
        var post = new Post(Date.now(), this.id, content);
        this.posts.push(post);
        return post;
    };
    User.prototype.comment = function (post, commentContent) {
        var comment = new Comment(Date.now(), this.id, commentContent);
        post.addComment(comment);
    };
    User.prototype.follow = function (user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    };
    User.prototype.likePost = function (post) {
        post.addLike(this.id);
    };
    User.prototype.viewFeed = function () {
        console.log("Feed cua User ".concat(this.id, ":"));
        this.followers.forEach(function (user) {
            user.posts.forEach(function (post) {
                console.log("Post ".concat(post.id, " tu User ").concat(user.id, ": ").concat(post.content));
            });
        });
    };
    return User;
}());
var userA = new User(1);
var userB = new User(2);
var postA1 = userA.createPost("Hello, day la bai viet dau tien!");
userB.follow(userA);
userB.viewFeed();
userB.likePost(postA1);
userB.comment(postA1, "Rat hay!");
console.log("Post ".concat(postA1.id, " co ").concat(postA1.likes.length, " luot thich"));
console.log("Post ".concat(postA1.id, " co ").concat(postA1.comments.length, " binh luan"));
