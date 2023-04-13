namespace Command2 {
  class BlogService {
    save() {}
    update() {}
    delete() {}
    getPost() {}
    getPosts() {}
    titleToSlug() {}
    dateToHumanize() {}
    getMostViewedPosts() {}
    getFeaturePosts() {}
    getMonetizedPosts() {}
  }

  interface IBlogPost {
    execute(params: any): any;
  }

  class SaveBlogPost implements IBlogPost {
    execute() {
      const blog = new BlogService();
      blog.titleToSlug();
      blog.update;
    }
  }

  new SaveBlogPost().execute();
}
