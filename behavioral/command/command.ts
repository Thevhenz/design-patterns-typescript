namespace Command {
  interface IBlogPost {
    execute(params: any): any;
  }

  class BlogUtility {
    static titleToSlug() {}
    static dateToHumanize() {}
    static getMostViewedPosts() {}
    static getFeaturePosts() {}
    static getMonetizedPosts() {}
  }

  class SaveBlogPost implements IBlogPost {
    execute() {
      BlogUtility.titleToSlug();
      this.save();
    }

    protected save() {
      // Save to Database
    }
  }

  class UpdateBlogPost implements IBlogPost {
    execute() {
      BlogUtility.titleToSlug();
      this.update();
    }

    protected update() {
      // Uodate to Database
    }
  }

  class GetBlogPost implements IBlogPost {
    execute(singlePost: boolean) {
      BlogUtility.dateToHumanize();
      if (singlePost) {
        this.getPost();
      } else {
        this.getPosts();
      }
    }

    getPost() {}
    getPosts() {}
  }

  new SaveBlogPost().execute();
}
